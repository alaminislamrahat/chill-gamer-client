import React from "react";

const DownloadSection = () => {
  return (
    <section className="flex justify-center items-center py-20 bg-gradient-to-r from-black to-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Glass Style Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-10 shadow-lg lg:w-1/2 text-white">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-6">Download the Game</h2>
          <p className="text-lg mb-8">
            Experience immersive gaming with stunning graphics and captivating storylines. Available for download on your favorite platforms.
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
        </div>

        {/* Game Image */}
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/6NDjfKF/god-of-war.webp" // Replace with your game image
              alt="Game Preview"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
