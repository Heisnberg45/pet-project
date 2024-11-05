const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    providerName: { type: String, required: true },
    contactInfo: { type: String, required: true },
});

module.exports = mongoose.model('Service', ServiceSchema);
