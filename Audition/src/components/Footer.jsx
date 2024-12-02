import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-950 via-blue-950 to-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-5 sm:px-10">

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 inline-block">
            About Us
          </h3>
          <p className="text-sm text-justify leading-relaxed">
            UMCA Studio is a creative space offering Dancing, Singing, Modeling, Acting ,photography, videography, and editing services to make your moments unforgettable.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 inline-block">
            Services
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/services/photography" className="hover:text-orange-500 transition-colors">
                Photography
              </Link>
            </li>
            <li>
              <Link to="/services/videography" className="hover:text-orange-500 transition-colors">
                Videography
              </Link>
            </li>
            <li>
              <Link to="/services/editing" className="hover:text-orange-500 transition-colors">
                Editing
              </Link>
            </li>
            <li>
              <Link to="/services/workshops" className="hover:text-orange-500 transition-colors">
                Workshops
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 inline-block">
            Navigation
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-orange-500 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 inline-block">
            Follow Us
          </h3>
          <div className="flex space-x-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-300 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} UMCA Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
