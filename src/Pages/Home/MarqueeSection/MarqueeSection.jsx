import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaXbox, FaPlaystation, FaSteam, FaTwitch, FaDiscord } from 'react-icons/fa';

const MarqueeSection = () => {
  const sponsors = [
    { logo: <FaXbox size={32} />, name: "Xbox Gaming" },
    { logo: <FaPlaystation size={32} />, name: "PlayStation Universe" },
    { logo: <FaSteam size={32} />, name: "Steam Community" },
    { logo: <FaTwitch size={32} />, name: "Twitch Streamers" },
    { logo: <FaDiscord size={32} />, name: "Discord Gamers" },
  ];

  return (
    <div className="py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 px-4">
        {/* "Our Sponsors" Title */}
        <h1 className="text-2xl font-bold whitespace-nowrap border-r-2 pr-4 border-teal-600">
          Our Sponsors
        </h1>

        {/* Marquee with Overflow and Scrollbar */}
        <div className="w-full lg:flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-teal-600">
          <Marquee gradient={false} speed={50}>
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-2 mx-2 bg-black/50 rounded-md shadow-md"
              >
                {sponsor.logo}
                <span className="font-medium text-sm sm:text-base">{sponsor.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
