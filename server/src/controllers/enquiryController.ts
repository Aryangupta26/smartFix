import { Request, Response } from 'express';
import Enquiry from '../models/Enquiry.js';
import { NotificationService } from '../services/notificationService.js';
import mongoose from 'mongoose';

// In-memory fallback array for demo when MongoDB is not connected
let memoryEnquiries: any[] = [];

export const createEnquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, email, course, preferredBatch, message } = req.body;

    // Manual quick validation
    if (!name || !phone || !email || !course || !preferredBatch) {
      res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, phone, email, course, preferredBatch',
      });
      return;
    }

    const payload = { name, phone, email, course, preferredBatch, message };
    let savedEnquiry: any = null;

    // Check if Mongoose is connected
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      const enquiry = new Enquiry(payload);
      savedEnquiry = await enquiry.save();
    } else {
      // Local fallback for demo out-of-the-box run
      savedEnquiry = {
        _id: `mock_id_${Date.now()}`,
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      memoryEnquiries.push(savedEnquiry);
      console.log(`[DEMO - Database Fallback] Saved enquiry in memory since MongoDB is not connected.`);
    }

    // Trigger Notification Flow (Asynchronously, so it doesn't block the API response)
    NotificationService.sendEmail(payload).catch((err) =>
      console.error('Error sending email notification:', err)
    );
    NotificationService.sendWhatsApp(payload).catch((err) =>
      console.error('Error sending WhatsApp notification:', err)
    );

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      data: savedEnquiry,
    });
  } catch (error: any) {
    console.error('Error creating enquiry:', error);
    
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};

export const getEnquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const isMongoConnected = mongoose.connection.readyState === 1;
    if (isMongoConnected) {
      const enquiries = await Enquiry.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: enquiries });
    } else {
      res.status(200).json({ success: true, data: memoryEnquiries });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
