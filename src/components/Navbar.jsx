import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="max-w-7xl px-4 sm:px-4 lg:px-5">
          <div className="flex items-center justify-between h-12">
            <Routes>
              <Route path="/" element={<h1 className="text-black text-3xl font-bold hover:text-white">SocialSphereIQ</h1>} />
              <Route path="/about" element={<a href="/about" className="text-black hover:text-white text-xl font-medium">About</a>} />
              <Route path="/services" element={<a href="/services" className="text-black hover:text-white text-xl font-medium">Services</a>} />
              <Route path="/contact" element={<a href="/contact" className="text-black hover:text-white text-xl font-medium">Contact</a>} />
            </Routes>
            <div className="hidden md:flex items-center space-x-8 mr-[-260px] p-5">
              <a href="/" className="text-black hover:text-white text-xl font-medium">Home</a>
              <a href="/about" className="text-black hover:text-white text-xl font-medium">About</a>
              <a href="/services" className="text-black hover:text-white text-xl font-medium">Services</a>
              <a href="/contact" className="text-black hover:text-white text-xl font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
