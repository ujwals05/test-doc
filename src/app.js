require('dotenv').config();
const express = require('express');
const path = require('path');
const itemRoutes = require('./routes/item.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', itemRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
