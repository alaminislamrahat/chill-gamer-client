import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { motion } from "framer-motion";

const DownloadSection = () => {
  const { isDarkMode } = useContext(AuthContext);

  // Animation variants for left-to-right and right-to-left effects
  const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex justify-center items-center py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Glass Style Card with Animation */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-lg p-10 shadow-lg lg:w-1/2 text-white"
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animates once when 20% of the component is visible
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
            Download the Game
          </h2>
          <p
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-lg mb-8`}
          >
            Experience immersive gaming with stunning graphics and captivating
            storylines. Available for download on your favorite platforms.
          </p>
          {/* Buttons */}
          <div className="flex gap-4">
            {/* Play Store Button */}
            <a
              href="https://play.google.com/store/apps" // Replace with your Play Store link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="w-6"
              />
              Download on Play Store
            </a>
            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/" // Replace with your App Store link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="App Store"
                className="w-6"
              />
              Download on App Store
            </a>
          </div>
        </motion.div>

        {/* Game Image with Animation */}
        <motion.div
          className="lg:w-1/2"
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animates once when 20% of the component is visible
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/6NDjfKF/god-of-war.webp" // Replace with your game image
              alt="Game Preview"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
