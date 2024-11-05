const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const shoppingRoutes = require('./routes/shoppingRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const adoptionRoutes = require('./routes/adoptionRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB().then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.error('Database connection failed:', err);
});

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Root Route - to check if server is running
app.get('/', (req, res) => {
    res.send('Welcome to the Pet Care Organizer API');
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/shopping', shoppingRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/adoption', adoptionRoutes);
app.use('/api/auth', authRoutes);


// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error to console
    res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
