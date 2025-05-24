// backend/routes/products.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "Wireless Earbuds", price: 1999 },
    { id: 2, name: "Classic Denim Jacket", price: 2499 }
    // ...more products
  ]);
});

module.exports = router;
