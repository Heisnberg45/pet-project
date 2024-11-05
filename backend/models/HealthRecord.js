const mongoose = require('mongoose');

const HealthRecordSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    vetVisitDate: { type: Date, required: true },
    vaccinationDate: { type: Date, required: true },
    notes: { type: String },
});

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
