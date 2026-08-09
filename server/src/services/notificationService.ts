import dotenv from 'dotenv';

dotenv.config();

export interface NotificationPayload {
  name: string;
  phone: string;
  email: string;
  course: string;
  preferredBatch: string;
  message?: string;
}

export class NotificationService {
  /**
   * Send Email Notification (Future integration ready, logs to console for demo)
   */
  static async sendEmail(payload: NotificationPayload): Promise<boolean> {
    const provider = process.env.EMAIL_SERVICE_PROVIDER || 'resend';
    const emailTo = process.env.EMAIL_TO || 'admin@example.com';
    const emailFrom = process.env.EMAIL_FROM || 'no-reply@example.com';
    
    // Log demo behavior
    console.log(`[DEMO - Notification Service] Email trigger logged:`);
    console.log(`- From: ${emailFrom}`);
    console.log(`- To: ${emailTo}`);
    console.log(`- Provider: ${provider}`);
    console.log(`- Subject: New Course Enquiry from ${payload.name}`);
    console.log(`- Content: Student ${payload.name} wants to enroll in "${payload.course}". Contact: ${payload.phone} / ${payload.email}. Batch: ${payload.preferredBatch}.`);
    
    // Architecturally set up for integration:
    /*
    if (provider === 'resend') {
      // const resend = new Resend(process.env.EMAIL_API_KEY);
      // await resend.emails.send({...});
    } else if (provider === 'sendgrid') {
      // sgMail.setApiKey(process.env.EMAIL_API_KEY);
      // await sgMail.send({...});
    }
    */
    
    return true;
  }

  /**
   * Send WhatsApp Notification (Future integration ready, logs to console for demo)
   */
  static async sendWhatsApp(payload: NotificationPayload): Promise<boolean> {
    const provider = process.env.WHATSAPP_PROVIDER || 'twilio';
    const whatsappTo = process.env.WHATSAPP_TO_NUMBER || '+919876543210';
    const whatsappFrom = process.env.WHATSAPP_FROM_NUMBER || '+14155238886';
    
    console.log(`[DEMO - Notification Service] WhatsApp trigger logged:`);
    console.log(`- From: ${whatsappFrom}`);
    console.log(`- To: ${whatsappTo}`);
    console.log(`- Provider: ${provider}`);
    console.log(`- Content: "Hi Admin, new lead: ${payload.name} (${payload.phone}) has enquired for ${payload.course} for batch ${payload.preferredBatch}."`);
    
    // Architecturally set up for integration:
    /*
    if (provider === 'twilio') {
      // const client = require('twilio')(sid, token);
      // await client.messages.create({ from: `whatsapp:${whatsappFrom}`, to: `whatsapp:${whatsappTo}`, body: ... });
    }
    */
    
    return true;
  }
}
