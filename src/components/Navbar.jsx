import React from "react";
import About from '../pages/About.jsx';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

      <div className="max-w-7xl px-4 sm:px-4 lg:px-5">

        <div className="flex items-center justify-between h-12">

          <div className="flex-shrink-0">
            <a href="/" className="text-black text-3xl font-bold hover:text-white">SocialSphereIQ</a>
          </div>

          <div className="hidden md:flex items-center space-x-8 mr-[-260px] p-5">
            <a href="/" className="text-black hover:text-white text-xl font-medium">Home</a>
            <a href="/about" className="text-black hover:text-white text-xl font-medium">About</a>
            <a href="/services" className="text-black hover:text-white text-xl font-medium">Services</a>
            <a href="/contact" className="text-black hover:text-white text-xl font-medium">Contact</a>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
