const express = require('express');
const router = express.Router();
const adoptionController = require('../controllers/adoptionController');

router.get('/', adoptionController.getAdoptionPets);
router.post('/', adoptionController.createAdoptionPet); // Admin route

module.exports = router;
