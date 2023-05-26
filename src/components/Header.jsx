import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo-color.png';
import logo2 from '../assets/logo-white.png';

const Header = () => {
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((prevLogo) => (prevLogo === logo1 ? logo2 : logo1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="py-16 mb-[250px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="w-128 h-128 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src={logo}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
