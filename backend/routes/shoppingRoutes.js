const express = require('express');
const router = express.Router();
const shoppingController = require('../controllers/shoppingController');

router.get('/', shoppingController.getProducts);
router.post('/', shoppingController.createProduct); // Admin route

module.exports = router;
