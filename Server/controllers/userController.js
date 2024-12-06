import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const otpStore = {};

export const sendOtpController = async (req, res) => {
    const { email } = req.body;
    // console.log(email)
    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        otpStore[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP for Verification',
            text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
        });

        return res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error(`Error in sendOtpController: ${error.message}`);
        return res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
    }
};

export const verifyOtpController = async (req, res) => {
    const { email, otp } = req.body
    try {
        if (!email || !otp) {
            return res.status(400).json({ success: false, message: 'Email and OTP are required' });
        }
        const record = otpStore[email];

        if (!record || record.otp !== otp || record.expiresAt < Date.now()) {
            return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
        }

        delete otpStore[email];

        return res.json({ success: true, message: 'OTP verified successfully!' });


    } catch (error) {
        console.error(`Error in sendOtpController: ${error.message}`);
        return res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
    }
}
