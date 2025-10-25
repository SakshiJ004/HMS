// ============================================
// FILE: backend/config/emailService.js
// ============================================
const nodemailer = require('nodemailer');

/**
 * Create email transporter based on provider
 */
const createTransporter = () => {
    const provider = process.env.EMAIL_PROVIDER || 'gmail';

    switch (provider.toLowerCase()) {
        case 'gmail':
            return nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

        case 'aws-ses':
        case 'ses':
            return nodemailer.createTransport({
                host: process.env.AWS_SES_HOST || 'email-smtp.us-east-1.amazonaws.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.AWS_SES_SMTP_USERNAME,
                    pass: process.env.AWS_SES_SMTP_PASSWORD,
                },
            });

        case 'sendgrid':
            return nodemailer.createTransport({
                host: 'smtp.sendgrid.net',
                port: 587,
                secure: false,
                auth: {
                    user: 'apikey',
                    pass: process.env.SENDGRID_API_KEY,
                },
            });

        case 'custom':
            return nodemailer.createTransporter({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

        default:
            throw new Error(`Unsupported email provider: ${provider}`);
    }
};

/**
 * Send email with automatic retry
 */
const sendEmail = async (mailOptions) => {
    const transporter = createTransporter();

    const emailOptions = {
        from: `${process.env.EMAIL_FROM_NAME || 'Preclinic HMS'} <${process.env.EMAIL_USER}>`,
        ...mailOptions,
    };

    try {
        const info = await transporter.sendMail(emailOptions);
        console.log('✅ Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Email sending failed:', error);
        throw error;
    }
};

/**
 * Email Templates
 */
const emailTemplates = {
    // OTP Email Template
    passwordResetOTP: (fullName, otp) => `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset OTP - Preclinic</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <tr>
                                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🔒 Password Reset OTP</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 40px 40px 20px 40px;">
                                    <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hi ${fullName},</h2>
                                    <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                        We received a request to reset your password. Use the OTP code below to verify your identity:
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 30px 40px; text-align: center;">
                                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 30px; display: inline-block;">
                                        <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 2px;">Your OTP Code</p>
                                        <p style="color: #ffffff; font-size: 48px; font-weight: bold; margin: 0; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                                            ${otp}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 30px 40px;">
                                    <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0; text-align: center;">
                                        Enter this code on the verification page to continue with your password reset.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 40px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
                                    <p style="color: #856404; font-size: 14px; margin: 0; line-height: 1.6;">
                                        ⚠️ <strong>Security Notice:</strong>
                                    </p>
                                    <ul style="color: #856404; font-size: 14px; margin: 10px 0 0 0; padding-left: 20px; line-height: 1.8;">
                                        <li>This OTP will expire in <strong>10 minutes</strong></li>
                                        <li>Never share this code with anyone</li>
                                        <li>If you didn't request this, ignore this email</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                                    <p style="color: #6c757d; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">
                                        Best regards,<br>
                                        <strong>Preclinic Team</strong>
                                    </p>
                                    <p style="color: #adb5bd; font-size: 12px; margin: 0;">
                                        © 2025 Preclinic. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `,

    // Password Reset Link Template (if you want to use direct link instead of OTP)
    passwordResetLink: (fullName, resetUrl) => `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset - Preclinic</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <tr>
                                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🔒 Password Reset</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 40px 40px 20px 40px;">
                                    <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hi ${fullName},</h2>
                                    <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                        We received a request to reset your password for your Preclinic account. 
                                        Click the button below to create a new password.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 30px 40px; text-align: center;">
                                    <a href="${resetUrl}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold;">
                                        Reset Password
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 40px 20px 40px;">
                                    <p style="color: #999999; font-size: 14px; line-height: 1.6; margin: 0;">
                                        Or copy and paste this link into your browser:
                                    </p>
                                    <p style="color: #667eea; font-size: 14px; word-break: break-all; margin: 10px 0 0 0;">
                                        ${resetUrl}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 40px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
                                    <p style="color: #856404; font-size: 14px; margin: 0; line-height: 1.6;">
                                        ⚠️ <strong>Security Notice:</strong> This link will expire in <strong>1 hour</strong>. 
                                        If you didn't request this password reset, please ignore this email or contact support if you have concerns.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                                    <p style="color: #6c757d; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">
                                        Best regards,<br>
                                        <strong>Preclinic Team</strong>
                                    </p>
                                    <p style="color: #adb5bd; font-size: 12px; margin: 0;">
                                        © 2025 Preclinic. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `,

    // Password Reset Success Template
    passwordResetSuccess: (fullName) => `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Changed - Preclinic</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <tr>
                                <td style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 40px; text-align: center;">
                                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">✅ Password Changed</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 40px;">
                                    <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hi ${fullName},</h2>
                                    <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                        Your password has been successfully changed. You can now log in to your Preclinic account with your new password.
                                    </p>
                                    <div style="background-color: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin: 20px 0;">
                                        <p style="color: #155724; font-size: 14px; margin: 0;">
                                            <strong>✓ Password Updated Successfully</strong><br>
                                            Date: ${new Date().toLocaleString()}
                                        </p>
                                    </div>
                                    <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                                        If you didn't make this change, please contact our support team immediately.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                                    <p style="color: #6c757d; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">
                                        Best regards,<br>
                                        <strong>Preclinic Team</strong>
                                    </p>
                                    <p style="color: #adb5bd; font-size: 12px; margin: 0;">
                                        © 2025 Preclinic. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `,

    // Welcome Email Template
    welcome: (fullName) => `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Welcome to Preclinic</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                            <tr>
                                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                                    <h1 style="color: #ffffff; margin: 0;">🎉 Welcome to Preclinic!</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 40px;">
                                    <h2 style="color: #333333;">Hi ${fullName},</h2>
                                    <p style="color: #666666; font-size: 16px; line-height: 1.6;">
                                        Thank you for registering with Preclinic HMS. We're excited to have you on board!
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `,
};

module.exports = {
    sendEmail,
    emailTemplates,
};