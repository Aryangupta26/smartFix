import { Router } from 'express';
import { createEnquiry, getEnquiries } from '../controllers/enquiryController.js';

const router = Router();

// Public route to submit an enquiry
router.post('/', createEnquiry);

// Secured/Admin route to view enquiries (can be locked down in future production)
router.get('/', getEnquiries);

export default router;
