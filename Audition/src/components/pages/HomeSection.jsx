import React, { useEffect, useState } from 'react';
import sing from '../../assets/karaoke.gif'
import a from '../../assets/a1.avif'
import b from '../../assets/s1.jpg'
import c from '../../assets/d1.jpg'
import model from '../../assets/model.jpg'
import kanisk from '../../assets/kanisk.jpeg'
import d from '../../assets/dipak.jpeg'
import hh from '../../assets/harshit.jpeg'
const auditionsData = [
    {
        id: 1,
        category: 'Singing Audition - Pop Category',
        name: 'By Sarah Johnson',
        image: b,
        likes: 256,
        dislikes: 12,
        comments: 2,
    },
    {
        id: 2,
        category: 'Dance Performance - Hip Hop',
        name: 'By Michael Rodriguez',
        image: c,
        likes: 414,
        dislikes: 10,
        comments: 2,
    },
    {
        id: 3,
        category: 'Acting Monologue',
        name: 'By Emily Chen',
        image: a,
        likes: 189,
        dislikes: 5,
        comments: 2,
    },
    {
        id: 4,
        category: 'Modeling Audition',
        name: 'By laove',
        image: model,
        likes: 320,
        dislikes: 8,
        comments: 3,
    }
];

const AuditionCard = ({ audition, onLike, onDislike }) => {
    return (
        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105  flex flex-col">
            <img src={audition.image} alt={audition.category} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
            <div className="relative p-6 flex flex-col justify-end h-full ">
                <h3 className="text-xl font-bold text-white">{audition.category}</h3>
                <p className="text-base text-gray-300">{audition.name}</p>
                <div className="flex items-center space-x-3 mt-4">
                    <button onClick={() => onLike(audition.id)} className="text-green-500">
                        👍 {audition.likes}
                    </button>
                    <button onClick={() => onDislike(audition.id)} className="text-red-500">
                        👎 {audition.dislikes}
                    </button>
                    <span className="text-gray-300">💬 {audition.comments}</span>
                </div>
            </div>
        </div>
    );
};

const HomeSection = () => {
    const [auditions, setAuditions] = useState(auditionsData);

    const handleLike = (id) => {
        const updatedAuditions = auditions.map((audition) =>
            audition.id === id
                ? { ...audition, likes: audition.likes + 1 }
                : audition
        );
        setAuditions(updatedAuditions);
    };

    const handleDislike = (id) => {
        const updatedAuditions = auditions.map((audition) =>
            audition.id === id
                ? { ...audition, dislikes: audition.dislikes + 1 }
                : audition
        );
        setAuditions(updatedAuditions);
    };

    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const section = document.getElementById("showcase-section");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);
    return (
        <div className=''>
            <div className="bg-black py-5 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-center text-white">Featured Categories</h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Singing Category */}
                        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                            <div className="relative p-6 flex items-end h-full">
                                <div>
                                    <svg className="h-16 w-16 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="currentColor" />
                                    </svg>
                                    <h3 className="mt-3 text-xl font-bold text-white">Singing</h3>
                                    <p className="mt-2 text-base text-gray-300">Unleash your vocal talents and captivate the world with every note. From classical to contemporary, find your voice!</p>
                                </div>
                            </div>
                        </div>

                        {/* Acting Category */}
                        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                            <div className="relative p-6 flex items-end h-full">
                                <div>
                                    <svg className="h-16 w-16 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="currentColor" />
                                    </svg>
                                    <h3 className="mt-3 text-xl font-bold text-white">Acting</h3>
                                    <p className="mt-2 text-base text-gray-300">Express emotions and bring characters to life on screen. Master the art of dramatic performances.</p>
                                </div>
                            </div>
                        </div>

                        {/* Dancing Category */}
                        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                            <div className="relative p-6 flex items-end h-full">
                                <div>
                                    <svg className="h-16 w-16 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="currentColor" />
                                    </svg>
                                    <h3 className="mt-3 text-xl font-bold text-white">Dancing</h3>
                                    <p className="mt-2 text-base text-gray-300">From classical ballet to modern dance, express yourself through movement and rhythm. Master every step and style.</p>
                                </div>
                            </div>
                        </div>

                        {/* Modeling Category */}
                        <div className="relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                            <div className="relative p-6 flex items-end h-full">
                                <div>
                                    <svg className="h-16 w-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="currentColor" />
                                    </svg>
                                    <h3 className="mt-3 text-xl font-bold text-white">Modeling</h3>
                                    <p className="mt-2 text-base text-gray-300">Show off your poise and grace in front of the camera. Develop your unique style and build a career in fashion modeling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-5 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-semibold text-white text-center mb-6" >Latest Auditions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {auditions.map((audition) => (
                            <AuditionCard
                                key={audition.id}
                                audition={audition}
                                onLike={handleLike}
                                onDislike={handleDislike}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-black via-black to-black py-5 mb-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-8">Success Stories</h2>
                    <p className="text-lg text-gray-200 mb-12">Here's what our users have to say about their experience with AudiTalent</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-gradient-to-b from-transparent to-gray-900 shadow-lg rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2">
                            <div className="mb-6">
                                <img
                                    src={hh}
                                    alt="harshit"
                                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-md hover:shadow-xl transition-all duration-300"
                                />
                            </div>
                            <p className="text-xl text-white italic  mb-4">"AudiTalent gave me the platform I needed to shine!"</p>
                            <p className="text-xl text-white font-semibold ">- Harshit Pal</p>
                        </div>

                        <div className="bg-gradient-to-b from-transparent to-gray-900 shadow-lg rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2">
                            <div className="mb-6">
                                <img
                                    src={kanisk}
                                    alt="Kanisk"
                                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-md hover:shadow-xl transition-all duration-300"
                                />
                            </div>
                            <p className="text-xl text-white italic  mb-4">"I discovered amazing talent here. Truly inspiring!"</p>
                            <p className="text-xl text-white font-semibold ">- Kanisk Katyayan</p>
                        </div>

                        <div className="bg-gradient-to-b from-transparent to-gray-900 shadow-lg rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2">
                            <div className="mb-6">
                                <img
                                    src={d}
                                    alt="deepak"
                                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-purple-600 shadow-md hover:shadow-xl transition-all duration-300"
                                />
                            </div>
                            <p className="text-xl text-white italic  mb-4">"An incredible community of performers and fans."</p>
                            <p className="text-xl text-white font-semibold ">- Deepak Singh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="showcase-section"
                className={`bg-black text-white py-8 ${inView ? "animate-fadeInUp" : ""}`}
            >
                <div className="max-w-screen-lg mx-auto text-center px-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Showcase Your Talent?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8">
                        Join thousands of performers and share your passion with the world!
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>
            </div>

        </div>
    )
}

export default HomeSection