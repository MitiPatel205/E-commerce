const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // or your route file

const app = express(); // <-- Make sure this comes BEFORE app.use()

app.use(cors());
app.use(express.json());

// Use your routes AFTER app is defined
app.use('/api/auth', authRoutes);

// ... other routes and server code

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const testimonialRoutes = require('./routes/testimonials');
app.use('/api/testimonials', testimonialRoutes);
