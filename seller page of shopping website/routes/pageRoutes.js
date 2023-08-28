const express = require('express');
const pageControllers = require('../controllers/pageControllers');
const router = express.Router();


router.post('/add-products', pageControllers.addProducts);

router.get('/get-products', pageControllers.getProducts);

router.delete('/delete-product/:productId', pageControllers.deleteProduct);

module.exports  = router;