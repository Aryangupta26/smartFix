# Mobile Repairing Training Center - White-Label Website

A premium, high-converting, and mobile-first white-label website template built specifically for mobile repairing institutes and training centers.

This template uses a modern stack with a React/Vite frontend and a Node.js/Express backend. It's designed to be instantly rebranded and deployed for different clients by simply modifying a single configuration file.

## 🚀 Features

- **White-Label Ready:** Rebrand everything from logo, colors, and institute name to courses and contact details using a single `site.config.ts` file.
- **Premium Design:** Modern UI with glassmorphism, smooth animations, and high-quality aesthetic designed to increase conversions.
- **Mobile-First:** Fully responsive design prioritizing mobile users.
- **Course Management:** Dynamic routing for courses and detailed curriculum displays.
- **Dynamic Gallery & Testimonials:** Showcase institute infrastructure and student success stories.
- **Lead Generation:** Optimized sticky CTA buttons and backend-connected Enquiry Forms.
- **Backend API:** Includes a robust Node/Express backend for handling form submissions, validation, and simulated notifications (Email/WhatsApp).

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS (v3), React Router, Framer Motion, Lucide React
- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose), Helmet, CORS, Zod
- **Architecture:** Monorepo structure (`client` / `server`)

## 📦 Project Structure

```text
mobileRepairingWebsite/
├── client/              # React Frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (Home, Courses, etc.)
│   │   ├── config/      # White-label configuration (site.config.ts)
│   │   └── index.css    # Global Tailwind styles
│   └── package.json
└── server/              # Node.js Backend
    ├── src/
    │   ├── controllers/ # Request handlers
    │   ├── models/      # MongoDB Mongoose schemas
    │   ├── routes/      # API Endpoints
    │   └── services/    # Business logic & external APIs
    ├── .env.example     # Environment variables template
    └── package.json
```

## 🎨 How to White-Label (Customize)

To rebrand this website for a new client, you only need to modify **one** file:

`client/src/config/site.config.ts`

This file contains all the content and branding settings:
1. **Institute Details:** Name, tagline, description.
2. **Branding:** Primary and secondary colors (Note: tailwind colors are primarily controlled by classes, but config handles logical grouping).
3. **Contact Info:** Phone, WhatsApp, Email, Address, Google Maps link.
4. **Courses:** Add or remove courses, fees, duration, and curriculum.
5. **Gallery & Reviews:** Update images and student testimonials.
6. **Social Media:** Links to Facebook, Instagram, YouTube.

## 🚦 Getting Started

### 1. Backend Setup

```bash
cd server
npm install
```

Copy the `.env.example` file to `.env` and configure your MongoDB connection string:

```bash
cp .env.example .env
```

Start the backend server (Development):

```bash
npm run dev
```

### 2. Frontend Setup

```bash
cd client
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## 🚢 Deployment

**Backend (Render/Vercel/Heroku):**
1. Set the environment variables in your hosting provider (`PORT`, `MONGODB_URI`, `CORS_ORIGIN`).
2. Build step: `npm run build`
3. Start command: `npm run start`

**Frontend (Vercel/Netlify):**
1. Build step: `npm run build`
2. Output directory: `dist`

## 🔒 Security

- The backend uses `helmet` for secure HTTP headers.
- Built-in rate limiting to prevent spam on the enquiry form.
- Data validation via `zod` for incoming requests.
- MongoDB injection prevention via Mongoose schemas.
