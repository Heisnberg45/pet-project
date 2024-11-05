const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new product (Admin functionality, for example)
exports.createProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    try {
        const product = new Product({ name, description, price, imageUrl });
        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
