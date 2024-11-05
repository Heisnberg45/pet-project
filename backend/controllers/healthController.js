const HealthRecord = require('../models/HealthRecord');

// Create a new health record
exports.createHealthRecord = async (req, res) => {
    const { petName, vetVisitDate, vaccinationDate, notes } = req.body;

    try {
        const healthRecord = new HealthRecord({ petName, vetVisitDate, vaccinationDate, notes });
        await healthRecord.save();
        res.status(201).json({ message: 'Health record created successfully', healthRecord });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all health records
exports.getHealthRecords = async (req, res) => {
    try {
        const records = await HealthRecord.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
