import express from 'express'
import { sendOtpController, verifyOtpController,mobileOtpController } from '../controllers/userController.js'
const router = express.Router()

// email otp verifiaction
router.post('/send-otp', sendOtpController)
router.post('/verify-otp', verifyOtpController)

//mobile otp verification
router.post('/send-mobile-otp',mobileOtpController)



export default router;