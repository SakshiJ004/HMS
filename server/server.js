// @ts-nocheck
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Passport configuration
require('./config/passport');
require('./models/Doctor')
require('./models/Patient')
require('./models/OnlineConsultation')

// Initialize Express app
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: ['http://localhost:5173', 'https://hms-zo76.vercel.app'], credentials: true }
});

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
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Body parser middleware - INCREASE SIZE LIMIT FOR IMAGES
app.use(express.json({ limit: '50mb' }));  // ✅ ADD THIS
app.use(express.urlencoded({ extended: true, limit: '50mb' }));  // ✅ ADD THIS

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
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/doctor/dashboard', require('./routes/doctorDashboardRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/designations', require('./routes/designationRoutes'))
app.use('/api/holidays', require('./routes/holidaysRoutes'))
app.use('/api/search', require('./routes/searchRoutes'));
app.use('/api/staffs', require('./routes/staffRoutes'))
app.use('/api/leaves', require('./routes/leaveRoutes'));
app.use('/api/leave-types', require('./routes/leaveTypeRoutes'));
app.use('/api/online-consultations', require('./routes/onlineConsultationRoutes'))
app.use('/api/diagnoses', require('./routes/diagnosisRoutes'))
app.use('/api/prescriptions', require('./routes/prescriptionRoutes'));
app.use('/api/specializations', require('./routes/specializationRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/locations', require('./routes/locationRoutes'));
app.use('/api/payrolls', require('./routes/payrollRoutes'));
app.use('/api/assets', require('./routes/assetRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/blog-categories', require('./routes/blogCategoryRoutes'));
app.use('/api/blog-comments', require('./routes/blogCommentRoutes'));
app.use('/api/content-locations', require('./routes/contentLocationRoutes'));
app.use('/api/faqs', require('./routes/faqRoutes'));

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

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join_conversation', (conversationId) => {
        socket.join(conversationId);
    });

    socket.on('leave_conversation', (conversationId) => {
        socket.leave(conversationId);
    });

    socket.on('send_message', (messageData) => {
        socket.to(messageData.conversationId).emit('receive_message', messageData);
        io.emit('conversation_updated', { conversationId: messageData.conversationId });
    });

    socket.on('typing', ({ conversationId, sender }) => {
        socket.to(conversationId).emit('user_typing', { sender });
    });

    socket.on('stop_typing', ({ conversationId }) => {
        socket.to(conversationId).emit('user_stop_typing');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});