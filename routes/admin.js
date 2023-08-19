// routes/admin.js
const express = require('express');
const path = require('path');
const Product = require('../models/product');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  const title = req.body.title;
  const product = new Product(title);
  product.save();
  res.redirect('/');
});

module.exports = router;
