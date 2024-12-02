import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/umca.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="max-h-20 shadow-md shadow-current">
            <div className="bg-[rgba(13,12,13,.8)] sm:px-16 py-1 flex items-center justify-between px-5">
                {/* Left Section */}
                <div className="flex items-center gap-8">
                    <div className="h-full w-32 hidden sm:flex">
                        <img src={logo} alt="UMCA Logo" />
                    </div>
                    <div className="text-2xl font-bold py-2 sm:py-0">
                        <p
                            className="uppercase text-effect"
                            style={{
                                color: 'aliceblue',
                                letterSpacing: '2px',
                                textShadow: '3px 3px 5px orange',
                            }}
                        >
                            {Array.from("UMCA Studio").map((letter, index) => (
                                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </p>
                    </div>

                </div>

                <div className="flex sm:hidden relative">
                    <div onClick={() => setShow((prev) => !prev)}>
                        {!show ? (
                            <FaBarsStaggered className="text-xl text-white" />
                        ) : (
                            <RxCross2 className="text-2xl text-white" />
                        )}
                    </div>
                    <div
                        className={`absolute top-8 -right-5 space-y-2 rounded-md bg-black p-5 z-50 transition-all transform ${show ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                            }`}
                    >
                        <Link to="/" className="nav-link text-lg font-semibold">
                            Home
                        </Link>
                        <Link to="/" className="nav-link text-lg font-semibold">
                            Upload
                        </Link>
                        <Link to="/" className="nav-link text-lg font-semibold">
                            Categories
                        </Link>
                        <Link to="/contact" className="nav-link text-lg font-semibold">
                            Contact
                        </Link>
                    </div>
                </div>


                <div className="sm:flex items-center hidden  gap-4">
                    <Link
                        to="/"
                        className="nav-link hover:text-orange-500 text-lg font-semibold"
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="nav-link hover:text-orange-500 text-lg font-semibold"
                    >
                        Upload
                    </Link>
                    <Link
                        to="/"
                        className="nav-link hover:text-orange-500 text-lg font-semibold"
                    >
                        Categories
                    </Link>
                    {/* <Link
                        to="/"
                        className="nav-link text-lg font-semibold"
                    >

                    </Link> */}
                    <Link
                        to="/contact"
                        className="nav-link hover:text-orange-500 text-lg font-semibold"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="text-white bg-blue-950 px-3 py-1 rounded-lg hover:animate-pulse hover:translate-x-2 hover:shadow-md text-lg font-semibold"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
