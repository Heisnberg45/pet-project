const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for creating a service
router.post('/', authMiddleware, serviceController.createService);

// Route for getting services for the authenticated user
router.get('/', authMiddleware, serviceController.getServices);

module.exports = router;
