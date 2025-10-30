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

// // Allowed origins for CORS
// const allowedOrigins = [
//     'http://localhost:5173',          // Local development
//     'https://hms-zo76.vercel.app'    // Vercel frontend
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         // allow requests with no origin (like Postman)
//         if (!origin) return callback(null, true);

//         if (allowedOrigins.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('CORS policy: This origin is not allowed.'));
//         }
//     },
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
// app.use('/api/dashboard', require('./routes/dashboardRoutes'));

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
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Passport configuration
require('./config/passport');

// Initialize Express app
const app = express();

/**
 * Middleware Configuration
 */

// Allowed origins for CORS
const allowedOrigins = [
    'http://localhost:5173',
    'https://hms-zo76.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: This origin is not allowed.'));
        }
    },
    credentials: true,
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware (required for passport)
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
    })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/appoinments', require('./routes/appoinmentRoutes'))

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