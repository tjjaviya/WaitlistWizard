const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for subscribers and contact requests
let subscribers = [];
let contactRequests = [];

// API Routes
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
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
    console.error('Error in /api/subscribe:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
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
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/subscribers', async (req, res) => {
  try {
    return res.status(200).json(subscribers);
  } catch (error) {
    console.error('Error in /api/subscribers:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Add a health check endpoint
app.get('/api/health', (req, res) => {
  return res.status(200).json({ status: 'ok' });
});

// For serverless function
module.exports.handler = serverless(app);