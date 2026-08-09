import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());

// CORS configuration (allow requests from frontend)
const allowedOrigins = [
  process.env.CORS_ORIGIN || 'http://localhost:5173',
  'https://mobilerepairingwebsite.vercel.app' // Example production URL
];

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Request parsers
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent DOS
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate Limiting (Prevent abuse on public enquiry submissions)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes.'
});
app.use('/api/', apiLimiter);

// Database Connection with graceful fallback
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  console.log('Connecting to MongoDB...');
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch((err) => {
      console.error('MongoDB connection error. Falling back to in-memory mode for demo.', err.message);
    });
} else {
  console.warn('WARNING: MONGODB_URI environment variable is missing. Running in demo in-memory database mode.');
}

// REST API routes
app.use('/api/enquiries', enquiryRoutes);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  const isMongoConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    success: true,
    status: 'UP',
    database: isMongoConnected ? 'Connected' : 'Demo/In-Memory fallback',
    timestamp: new Date()
  });
});

// Centralized error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('[Error Handler]:', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong on the server!'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
