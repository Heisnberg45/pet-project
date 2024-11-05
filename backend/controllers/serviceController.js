const Service = require('../models/Service');

// Create a new service
exports.createService = async (req, res) => {
    const { serviceType, providerName, contactInfo } = req.body;

    try {
        const service = new Service({ serviceType, providerName, contactInfo });
        await service.save();
        res.status(201).json({ message: 'Service created successfully', service });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
