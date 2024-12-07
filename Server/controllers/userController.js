import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
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

// email verification
export const verifyOtpController = async (req, res) => {
    const { email, otp } = req.body
    // console.log(req.body)
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


// mobile otp controller
const otps = {};
const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

export const mobileOtpController = async (req, res) => {
    const { mobileNumber } = req.body;
    const otp = generateOTP();
    otps[mobileNumber] = otp;

    const message = `Your OTP is: ${otp}`;
    const encodedMessage = encodeURIComponent(message); 

    try {
        const response = await axios.get(`https://bulksmsplans.com/api/send_sms?api_id=APIeNyi2UPv127968&api_password=mLS7vYlz&sms_type=Transactional&sms_encoding=text&sender=UMCAFD&number=${mobileNumber}&message=${encodedMessage}&template_id={TEMPLATEID}`);

        console.log(response.data);
        console.log(otp)
        console.log(message)

        if (response.data.code == "200") {
            res.status(200).json({ success: true, message: "OTP sent successfully", otp: otp });
        } else {
            res.status(500).json({
                success: false,
                message: "Failed to send OTP",
                error: response.data.error,
            });
        }
    } catch (error) {
        console.error(`Error in mobileOtpController: ${error.message}`);
        return res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
    }
};
