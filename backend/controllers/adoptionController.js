const Adoption = require('../models/Adoption');

// Get all available pets for adoption
exports.getAdoptionPets = async (req, res) => {
    try {
        const pets = await Adoption.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new pet adoption listing
exports.createAdoptionPet = async (req, res) => {
    const { petName, breed, age, description, imageUrl } = req.body;

    try {
        const pet = new Adoption({ petName, breed, age, description, imageUrl });
        await pet.save();
        res.status(201).json({ message: 'Adoption pet added successfully', pet });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
