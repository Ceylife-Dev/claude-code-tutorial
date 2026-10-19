import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 30 },
    city: { type: String, trim: true, maxlength: 100 },
    service: { type: String, trim: true, maxlength: 100 },
    budget: { type: String, trim: true, maxlength: 50 },
    message: { type: String, trim: true, maxlength: 2000 },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.model('Quote', quoteSchema);
