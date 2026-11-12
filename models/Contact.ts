import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  ip?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: '' },
    subject: { type: String, trim: true, default: 'Website Contact' },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
    ip: { type: String, default: '' },
  },
  { timestamps: true }
);

export const ContactModel: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
