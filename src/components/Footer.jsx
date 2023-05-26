import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Footer = () => {
  return (
    <BrowserRouter>
      <footer className="bg-black mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            <p className="text-white mb-4 sm:mb-0">© {new Date().getFullYear()} SocialSphereIQ. All rights reserved.</p>
            <div className="flex space-x-4">
              <Routes>
                <Route path="/" element={<a href="/" className="text-white hover:text-gray-300"></a>} />
                <Route path="/about" element={<a href="/about" className="text-white hover:text-gray-300">About</a>} />
                <Route path="/services" element={<a href="/services" className="text-white hover:text-gray-300">Services</a>} />
                <Route path="/contact" element={<a href="/contact" className="text-white hover:text-gray-300">Contact</a>} />
              </Routes>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default Footer;
