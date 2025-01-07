import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen md:h-[80vh] bg-cover bg-center pb-20"
      style={{
        backgroundImage: `url('https://i.ibb.co/THjb52G/pxfuel-2.jpg')`, // Replace with your image URL
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          <h1 className="text-xl  md:text-5xl font-extrabold lg:mt-0 mt-[300px] md:pt-1">
            Welcome to Epic Gaming Worlds
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-10"
          >
            Dive into the most immersive, action-packed, and visually stunning
            games that will challenge your skills and creativity.
          </motion.p>

          {/* Buttons with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center lg:pb-0 pb-56"
          >
            <a
              href="#games"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all w-full sm:w-auto text-center"
            >
              Game Watchlist
            </a>
            <a
              href="#games"
              className="px-6 py-3 border-2 border-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all w-full sm:w-auto text-center"
            >
              Explore Games
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
