const Notification = require('../models/Notification');
const User = require('../models/User');
const { sendEmail, emailTemplates } = require('../config/emailService');

/**
 * Get admin user IDs
 */
const getAdminUsers = async () => {
    const admins = await User.find({ role: 'admin' }).select('_id email fullName');
    return admins;
};

/**
 * Create in-app notification
 */
const createInAppNotification = async (notificationData) => {
    try {
        const notification = await Notification.create(notificationData);
        console.log('✅ In-app notification created:', notification._id);
        return notification;
    } catch (error) {
        console.error('❌ Failed to create in-app notification:', error);
        throw error;
    }
};

/**
 * Send email notification
 */
const sendEmailNotification = async (to, subject, htmlContent) => {
    try {
        await sendEmail({
            to,
            subject,
            html: htmlContent
        });
        console.log('✅ Email notification sent to:', to);
    } catch (error) {
        console.error('❌ Failed to send email notification:', error);
        throw error;
    }
};

/**
 * Send notification to admin (Email + In-App)
 */
const notifyAdmin = async ({
    type,
    title,
    message,
    relatedEntity = null,
    actionUrl = null,
    metadata = {},
    emailSubject = null,
    emailTemplate = null
}) => {
    try {
        // Get all admin users
        const admins = await getAdminUsers();

        if (admins.length === 0) {
            console.warn('⚠️ No admin users found');
            return;
        }

        // Send to each admin
        for (const admin of admins) {
            // ✅ Create in-app notification
            await createInAppNotification({
                user: admin._id,
                type,
                title,
                message,
                relatedEntity,
                actionUrl,
                metadata
            });

            // ✅ Send email notification
            if (emailSubject && emailTemplate) {
                await sendEmailNotification(
                    admin.email,
                    emailSubject,
                    emailTemplate
                );
            }
        }

        console.log(`✅ Notifications sent to ${admins.length} admin(s)`);
    } catch (error) {
        console.error('❌ Failed to notify admin:', error);
        throw error;
    }
};

/**
 * Notification type handlers
 */
const notificationHandlers = {
    // New Appointment Booked
    newAppointment: async (appointmentData) => {
        const { appointmentId, patientName, doctorName, appointmentDate, appointmentTime } = appointmentData;

        await notifyAdmin({
            type: 'newAppointment',
            title: 'New Appointment Booked',
            message: `${patientName} booked an appointment with ${doctorName}`,
            relatedEntity: {
                entityType: 'Appointment',
                entityId: appointmentId
            },
            actionUrl: `/appointments/${appointmentId}`,
            metadata: { appointmentDate, appointmentTime },
            emailSubject: '🗓️ New Appointment Booked - Preclinic',
            emailTemplate: generateAppointmentEmail(appointmentData)
        });
    },

    // Appointment Cancelled
    appointmentCancellation: async (appointmentData) => {
        const { appointmentId, patientName, doctorName, reason } = appointmentData;

        await notifyAdmin({
            type: 'appointmentCancellation',
            title: 'Appointment Cancelled',
            message: `${patientName}'s appointment with ${doctorName} was cancelled`,
            relatedEntity: {
                entityType: 'Appointment',
                entityId: appointmentId
            },
            actionUrl: `/appointments/${appointmentId}`,
            metadata: { reason },
            emailSubject: '❌ Appointment Cancelled - Preclinic',
            emailTemplate: generateCancellationEmail(appointmentData)
        });
    },

    // Lab Report Ready
    labReportReady: async (reportData) => {
        const { reportId, patientName, testName } = reportData;

        await notifyAdmin({
            type: 'labReportReady',
            title: 'Lab Report Ready',
            message: `${testName} report ready for ${patientName}`,
            relatedEntity: {
                entityType: 'LabReport',
                entityId: reportId
            },
            actionUrl: `/lab-reports/${reportId}`,
            emailSubject: '🔬 Lab Report Ready - Preclinic',
            emailTemplate: generateLabReportEmail(reportData)
        });
    },

    // Follow-up Reminder
    followUpReminders: async (reminderData) => {
        const { patientName, doctorName, followUpDate } = reminderData;

        await notifyAdmin({
            type: 'followUpReminders',
            title: 'Follow-up Reminder',
            message: `Follow-up scheduled for ${patientName} with ${doctorName}`,
            metadata: { followUpDate },
            emailSubject: '📋 Follow-up Reminder - Preclinic',
            emailTemplate: generateFollowUpEmail(reminderData)
        });
    },

    // Billing Notification
    billingNotification: async (billingData) => {
        const { invoiceId, patientName, amount, status } = billingData;

        await notifyAdmin({
            type: 'billingNotification',
            title: 'New Invoice Generated',
            message: `Invoice #${invoiceId} for ${patientName} - ₹${amount}`,
            relatedEntity: {
                entityType: 'Invoice',
                entityId: invoiceId
            },
            actionUrl: `/invoices/${invoiceId}`,
            metadata: { amount, status },
            emailSubject: '💰 New Invoice - Preclinic',
            emailTemplate: generateBillingEmail(billingData)
        });
    },

    // System Alert
    systemAlerts: async (alertData) => {
        const { alertType, message: alertMessage } = alertData;

        await notifyAdmin({
            type: 'systemAlerts',
            title: `System Alert: ${alertType}`,
            message: alertMessage,
            emailSubject: '⚠️ System Alert - Preclinic',
            emailTemplate: generateSystemAlertEmail(alertData)
        });
    }
};

/**
 * Email Templates
 */
const generateAppointmentEmail = ({ patientName, doctorName, appointmentDate, appointmentTime }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #667eea;">🗓️ New Appointment Booked</h2>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Doctor:</strong> ${doctorName}</p>
            <p><strong>Date:</strong> ${appointmentDate}</p>
            <p><strong>Time:</strong> ${appointmentTime}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

const generateCancellationEmail = ({ patientName, doctorName, reason }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #dc3545;">❌ Appointment Cancelled</h2>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Doctor:</strong> ${doctorName}</p>
            <p><strong>Reason:</strong> ${reason || 'Not specified'}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

const generateLabReportEmail = ({ patientName, testName }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #28a745;">🔬 Lab Report Ready</h2>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Test:</strong> ${testName}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

const generateFollowUpEmail = ({ patientName, doctorName, followUpDate }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #ffc107;">📋 Follow-up Reminder</h2>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Doctor:</strong> ${doctorName}</p>
            <p><strong>Follow-up Date:</strong> ${followUpDate}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

const generateBillingEmail = ({ invoiceId, patientName, amount, status }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #17a2b8;">💰 New Invoice Generated</h2>
            <p><strong>Invoice ID:</strong> #${invoiceId}</p>
            <p><strong>Patient:</strong> ${patientName}</p>
            <p><strong>Amount:</strong> ₹${amount}</p>
            <p><strong>Status:</strong> ${status}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

const generateSystemAlertEmail = ({ alertType, message }) => `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
            <h2 style="color: #dc3545;">⚠️ System Alert</h2>
            <p><strong>Alert Type:</strong> ${alertType}</p>
            <p><strong>Message:</strong> ${message}</p>
            <hr style="margin: 20px 0;">
            <p style="color: #666;">This is an automated notification from Preclinic HMS.</p>
        </div>
    </body>
    </html>
`;

module.exports = {
    notifyAdmin,
    notificationHandlers,
    createInAppNotification,
    sendEmailNotification,
    getAdminUsers
};