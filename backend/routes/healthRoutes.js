const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for creating a health record
router.post('/', authMiddleware, healthController.createHealthRecord);

// Route for getting health records for the authenticated user
router.get('/', authMiddleware, healthController.getHealthRecords);

module.exports = router;
