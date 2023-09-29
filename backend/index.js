// Load packages and modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import custom modules
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const authorize = require('./middleware/middleware');

// Constants and Variables
const app = express();
const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

// Middleware Setup
app.use(cors(corsOptions));
app.use(express.json()); // Middleware for parsing JSON

// MongoDB Setup
const MONGO_DB_URL = process.env.MONGO_DB_URL;

// MongoDB Connection
mongoose
  .connect(
    'mongodb+srv://dbuser:Ilovecake123@gomoku.cjr0axx.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to MongoDB');

    // Route Setup
    app.use('/auth', authRoutes); // Authentication routes
    app.use('/game', gameRoutes); // Game routes

    // Example protected route
    app.get('/protected', authorize, (req, res) => {
      res.send('This is a protected route');
    });

    // Global error-handling middleware (optional)
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    // Start Express Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });
