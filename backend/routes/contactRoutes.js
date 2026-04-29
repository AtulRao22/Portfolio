const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
// Save contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ success: true, message: 'Contact message saved successfully.' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Could not save message.' });
  }
});

module.exports = router;
