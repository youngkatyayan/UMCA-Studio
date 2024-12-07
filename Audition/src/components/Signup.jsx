import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../assets/loginlogo.png'
import { motion } from "motion/react"
const Signup = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState(null);
    const [mobileNumber, setMobileNumber] = useState("");
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [data, setData] = useState({
        name: '',
        email: '',
        otp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // mobile otp verifacation
    const handleSendOTP = async () => {
        if (!mobileNumber || mobileNumber.length !== 10) {
            toast.error("Please enter a valid 10-digit mobile number.");
            return;
        }
        try {
            const response = await axios.post("/api/v1/send-mobile-otp", { mobileNumber });
            if (response.data.success) {
                toast.success("OTP sent successfully!");
                setIsOTPSent(true);
            } else {
                toast.error("Failed to send OTP. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred while sending OTP.");
            console.error(error);
        }
    };

    const handleVerifyOTP = async () => {
        if (!otp || otp.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP.");
            return;
        }
        try {
            const response = await axios.post("/api/verify-otp", { mobileNumber, otp });
            if (response.data.success) {
                toast.success("OTP verified successfully!");
            } else {
                toast.error("Invalid OTP. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred while verifying OTP.");
            console.error(error);
        }
    };

    // email otp verification 
    const sendOtp = async () => {
        try {
            const response = await axios.post('/api/v1/send-otp', { email: data.email });
            if (response.data.success) {
                setOtpSent(true);
                toast.success('OTP sent to your email!');
            } else {
                toast.error('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Error sending OTP. Please try again.');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('/api/v1/verify-otp', { email: data.email, otp: data.otp });
            if (response.data.success) {
                setVerificationStatus('Verified');
                toast.success('Email verified successfully!');
                setOtpSent(false)
            } else {
                setVerificationStatus('Failed');
                toast('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            toast.error('Error verifying OTP. Please try again.');
        }
    };
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <div className="sm:mx-20 my-5 rounded-lg sm:h-[65vh] shadow-cyan-950 shadow-md bg-slate-900">
                <div className="flex h-full">
                    <div className=" hidden sm:block flex-1">
                        <motion.div
                            whileHover={{ x: 20 }}
                            transition={{ duration: 0.5 }}
                            style={{ overflow: "hidden", display: "inline-block" }}
                            className=' mx-auto mt-16 rounded-md overflow-hidden px-8'>
                            <img src={logo} alt="" className='mix-blend-color-dodge' />
                        </motion.div>

                    </div>

                    <div className="bg-black w-3 mx-5 hidden sm:block my-5 rounded-full border-2 border-slate-800 shadow-lg"></div>

                    <div className="flex-1 sm:px-10 sm:py-16 px-2 py-5">

                        <h2 className='capitalize text-3xl text-white font-semibold text-center pb-2'>registration</h2>
                        <form>
                            <div className="relative z-0 w-full  group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                    placeholder=" "
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Enter your name
                                </label>
                            </div>


                            <div className="relative z-0 w-full sm:mt-8 mt-5 group flex items-center gap-4">
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                        placeholder=" "
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Enter your email
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="border text-white  px-2 sm:px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
                                    onClick={sendOtp}
                                    disabled={otpSent}
                                >
                                    Send OTP
                                </button>
                            </div>

                            {otpSent && (
                                <div className="relative z-0 w-full mb-6 mt-5 group">
                                    <div className="flex items-center">
                                        <div className="flex-grow">
                                            <input
                                                type="text"
                                                name="otp"
                                                id="otp"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                                placeholder=" "
                                                value={data.otp}
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="otp"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Enter OTP
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-4 border text-white px-2 sm:px-3 py-2 bg-green-500 hover:bg-green-700 rounded"
                                            onClick={verifyOtp}
                                        >
                                            Verify OTP
                                        </button>
                                    </div>

                                </div>
                            )}

                            {verificationStatus === 'Verified' && (
                                <p className="text-green-500 mt-1">Email verified successfully!</p>
                            )}
                            {verificationStatus === 'Failed' && (
                                <p className="text-red-500">OTP verification failed. Please try again.</p>
                            )}

                            {/* mobile  */}
                            <div className="relative z-0 w-full sm:mt-8 mt-5 group flex items-center gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        maxLength={10}
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                        placeholder=" "
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Enter your mobile no
                                    </label>
                                </div>
                                <button
                                    onClick={handleSendOTP}
                                    type="button"
                                    className="border text-white px-2 sm:px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
                                >
                                    Send OTP
                                </button>
                            </div>

                            {isOTPSent && (
                                <div className="relative z-0 w-full mb-6 mt-5 group">
                                    <div className="flex items-center">
                                        <div className="flex-grow">
                                            <input
                                                type="text"
                                                name="otp"
                                                id="otp"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                                placeholder=" "
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                            <label
                                                htmlFor="otp"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Enter OTP
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-4 border text-white px-2 sm:px-3 py-2 bg-green-500 hover:bg-green-700 rounded"
                                            onClick={handleVerifyOTP}
                                        >
                                            Verify OTP
                                        </button>
                                    </div>

                                </div>
                            )}

                            <div className='flex mt-2 justify-between items-center mb-5'>
                                <div className='flex  gap-1 sm:gap-2'>
                                    <p className='text-white text-[.8rem] sm:text-base whitespace-nowrap sm:font-semibold'>You have an account.</p>
                                    <Link className='text-green-700 text-[.8rem] sm:text-base whitespace-nowrap hover:underline' >Sign In</Link>
                                </div>
                            </div>

                            <button className='border mx-auto text-center hover:border-2 hover:shadow-md px-3 py-2 leading-tight rounded-md text-white'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
