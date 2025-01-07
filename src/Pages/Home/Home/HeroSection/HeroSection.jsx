import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/THjb52G/pxfuel-2.jpg')`, // Replace with your desired image URL
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Epic Gaming Worlds
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-10"
          >
            Dive into the most immersive, action-packed, and visually stunning
            games that will challenge your skills and creativity.
          </motion.p>

          {/* Buttons with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-5 justify-center items-center"
          >
            <a
              href="#games"
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
            >
              Game Watchlist
            </a>
            <a
              href="#games"
              className="px-8 py-3 border-2 border-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all"
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
