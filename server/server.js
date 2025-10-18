// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const path = require('path');

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Initialize Express app
// const app = express();

// /**
//  * Middleware Configuration
//  */

// // Enable CORS for frontend communication
// app.use(cors({
//     origin: 'http://localhost:5173',
//     origin: 'https://hms-zo76.vercel.app/',
//     credentials: true,
// }));

// // Body parser middleware - parse JSON requests
// app.use(express.json());

// // Body parser middleware - parse URL-encoded requests
// app.use(express.urlencoded({ extended: true }));


// /**
//  * Routes
//  */

// // Auth routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/dashboard', require('./routes/dashboardRoutes'))

// // Health check route
// app.get('/api/health', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Server is running',
//         timestamp: new Date().toISOString(),
//     });
// });

// // Handle undefined routes
// app.use('/', (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: 'Route not found',
//     });
// });

// /**
//  * Error Handling Middleware
//  */
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack);
//     res.status(err.status || 500).json({
//         success: false,
//         message: err.message || 'Internal server error',
//     });
// });

// /**
//  * Start Server
//  */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

/**
 * Middleware Configuration
 */

// Allowed origins for CORS
const allowedOrigins = [
    'http://localhost:5173',          // Local development
    'https://hms-zo76.vercel.app'    // Vercel frontend
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: This origin is not allowed.'));
        }
    },
    credentials: true,
}));

// Body parser middleware - parse JSON requests
app.use(express.json());

// Body parser middleware - parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */

// Auth routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
    });
});

// Handle undefined routes
app.use('/', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

/**
 * Error Handling Middleware
 */
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
    });
});

/**
 * Start Server
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
