import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuote extends Document {
  name: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  ip?: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema = new Schema<IQuote>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: '' },
    product: { type: String, required: true, default: 'General Enquiry' },
    quantity: { type: String, trim: true, default: '' },
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

export const QuoteModel: Model<IQuote> =
  mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
