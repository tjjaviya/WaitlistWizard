// Simplified version of the API without top-level await
'use strict';

const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

// Create Express app
const app = express();

// Configure middleware
app.use(cors({
  origin: '*', // Allow all origins for demo purposes
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// In-memory storage
const subscribers = [];
const contactRequests = [];

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: 'netlify' });
});

// Newsletter subscription
app.post('/subscribe', (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    
    // Check if email already exists
    const existingSubscriber = subscribers.find(s => s.email === email);
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }
    
    // Create new subscriber
    const newSubscriber = {
      id: subscribers.length + 1,
      email,
      subscribed_at: new Date().toISOString()
    };
    
    subscribers.push(newSubscriber);
    return res.status(201).json(newSubscriber);
  } catch (error) {
    console.error('Error in /subscribe:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Contact form submission
app.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Create new contact request
    const newContact = {
      id: contactRequests.length + 1,
      name,
      email,
      message,
      created_at: new Date().toISOString()
    };
    
    contactRequests.push(newContact);
    return res.status(201).json(newContact);
  } catch (error) {
    console.error('Error in /contact:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get all subscribers
app.get('/subscribers', (req, res) => {
  try {
    return res.status(200).json(subscribers);
  } catch (error) {
    console.error('Error in /subscribers:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Export the serverless function handler
module.exports.handler = serverless(app);