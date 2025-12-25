const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      sessionType,
      where,
      message,
      story,
      hearAbout,
      recommendedBy,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !where || !message || !story) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      phone,
      sessionType: sessionType || 'Wedding',
      where,
      message,
      story,
      hearAbout: hearAbout || '',
      recommendedBy: recommendedBy || '',
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your submission! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        sessionType: contact.sessionType,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: Object.values(error.errors).map(err => err.message),
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    });
  }
});

// GET /api/contact - Get all contact submissions (for admin use)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = '-createdAt' } = req.query;
    
    const contacts = await Contact.find()
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');

    const total = await Contact.countDocuments();

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submissions',
    });
  }
});

// GET /api/contact/:id - Get a specific contact submission
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found',
      });
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submission',
    });
  }
});

// DELETE /api/contact/:id - Delete a contact submission (for admin use)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found',
      });
    }

    res.json({
      success: true,
      message: 'Contact submission deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to delete contact submission',
    });
  }
});

module.exports = router;

