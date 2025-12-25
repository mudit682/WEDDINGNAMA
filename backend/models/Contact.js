const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  sessionType: {
    type: String,
    required: true,
    enum: ['Wedding', 'Engagement'],
    default: 'Wedding',
  },
  where: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  story: {
    type: String,
    required: [true, 'Story is required'],
    trim: true,
  },
  hearAbout: {
    type: String,
    trim: true,
    default: '',
  },
  recommendedBy: {
    type: String,
    trim: true,
    default: '',
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Index for faster queries
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

