// backend/routes/testimonials.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      quote: "Fast delivery and amazing products! Highly recommended.",
      name: "Priya S.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "Customer support is top-notch. I love shopping here!",
      name: "Rahul K.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "Great deals and quality. My go-to shop for everything.",
      name: "Anjali T.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]);
});

module.exports = router;
