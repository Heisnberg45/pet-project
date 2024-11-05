const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Adoption', AdoptionSchema);
