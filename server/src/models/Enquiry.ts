import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  phone: string;
  email: string;
  course: string;
  preferredBatch: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema: Schema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    phone: { 
      type: String, 
      required: [true, 'Phone number is required'], 
      trim: true,
      validate: {
        validator: function(v: string) {
          // Allow international formatting, spaces, dashes, min 8 digits
          return /^\+?[0-9\s\-()]{8,20}$/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid phone number!`
      }
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      trim: true, 
      lowercase: true,
      validate: {
        validator: function(v: string) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid email address!`
      }
    },
    course: { type: String, required: [true, 'Course is required'], trim: true },
    preferredBatch: { type: String, required: [true, 'Preferred batch/time is required'], trim: true },
    message: { type: String, trim: true, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
