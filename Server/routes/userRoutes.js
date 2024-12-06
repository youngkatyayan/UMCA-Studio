import express from 'express'
import { sendOtpController, verifyOtpController } from '../controllers/userController.js'
const router = express.Router()

router.post('/send-otp', sendOtpController)
router.post('/verify-otp', verifyOtpController)


export default router;