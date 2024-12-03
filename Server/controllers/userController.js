import nodemailer from 'nodemailer'
import { db } from '../database/db.js'
import { v4 as uuidv4 } from 'uuid';


export const sendOtpController = async (req, res) => {
    const otpStore = {};
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {
        const { email } = req.body
        if (!email) {
            res.status(404).send({ success: false, error: 'Email is required' })
        }



    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            success: false,
            message: 'Something went wrong in sendOtpController'
        })
    }
}