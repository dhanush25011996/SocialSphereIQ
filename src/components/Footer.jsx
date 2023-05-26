import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <p className="text-white mb-4 sm:mb-0">© {new Date().getFullYear()} SocialSphereIQ. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <a href="/services" className="text-white hover:text-gray-300">Services</a>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;