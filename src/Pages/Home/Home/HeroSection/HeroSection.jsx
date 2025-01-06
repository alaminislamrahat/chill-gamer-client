import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/6NDjfKF/god-of-war.webp')`, // Example image URL, you can replace this with any other URL from the provided list
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to Epic Gaming Worlds
          </h1>
          <p className="text-lg md:text-2xl mb-10">
            Dive into the most immersive, action-packed, and visually stunning games that will challenge your skills and creativity.
          </p>
         <div className=' flex gap-5 justify-center items-center'>
         <a
            href="#games"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
          >
            Game Watchlist
          </a>
          <a
            href="#games"
            className="px-8 py-3 btn-outline btn border-teal-600 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
          >
            Explore Games
          </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
