import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import umcaVideo from '../assets/umca.mp4';
import Footer from './Footer.jsx';
import HomeSection from './pages/HomeSection.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    const words = ['Singing', 'Dancing', 'Modeling', 'Acting'];
    const colors = ['#ff7f50', '#00bfff', '#32cd32', '#ff4500'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // const disableRightClick = (e) => {
    //     e.preventDefault();
    // };
  
    return (
        <div className="" 
        // onContextMenu={disableRightClick}
        >
            <Navbar />

            <div className="relative sm:h-[75vh] my-5 h-[30vh] shadow-md shadow-white">
                <video
                    src={umcaVideo}
                    className="absolute  mt-2  inset-0 h-full w-full opacity-35 object-cover -z-10"
                    autoPlay
                    loop
                    muted
                />

                <div className="relative flex items-center justify-center h-full flex-col text-center">
                    <div className="text-white flex sm:text-4xl md:text-6xl font-bold uppercase tracking-wider">
                        <span>Annual </span>
                        <h2
                            style={{ color: colors[currentWordIndex], transition: 'color 0.5s ease-in-out' }}
                            className="mx-2"
                        >
                            {words[currentWordIndex]}
                        </h2>
                        <span>Showcase</span>
                    </div>
                    <h2 className='sm:text-4xl font-semibold pt-1 ' style={{ color: 'aliceblue' }}>Discover the Next Big Talent</h2>

                    <Link to={'/signup'} className="relative mt-6 px-3 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-all duration-300 overflow-hidden group">
                        Join Now
                        <span className="absolute inset-0 bg-white opacity-30 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></span>
                    </Link>

                </div>
            </div>

            <div className=''>
                <HomeSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
