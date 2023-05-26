import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <p className="text-white mb-4 sm:mb-0">© {new Date().getFullYear()} SocialSphereIQ. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
