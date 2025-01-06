import React from "react";
import { FaGamepad, FaTrophy, FaUserFriends, FaClock } from "react-icons/fa";

const GamingStats = () => {
  return (
    <section className="flex justify-center items-center bg-transparent mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Stat 1 */}
        <div className="stat  p-6 rounded-lg shadow-lg text-center">
          <FaGamepad className="text-5xl mx-auto mb-4 text-teal-300" />
          <h2 className="text-2xl font-bold">Games Played</h2>
          <p className="text-3xl font-extrabold mt-2">1,245 <span className="text-teal-300">+</span></p>
        </div>
        {/* Stat 2 */}
        <div className="stat  p-6 rounded-lg shadow-lg text-center">
          <FaTrophy className="text-5xl mx-auto mb-4 text-teal-300" />
          <h2 className="text-2xl font-bold">Trophies Won</h2>
          <p className="text-3xl font-extrabold mt-2">527 <span className="text-teal-300">+</span></p>
        </div>
        {/* Stat 3 */}
        <div className="stat  p-6 rounded-lg shadow-lg text-center">
          <FaUserFriends className="text-5xl mx-auto mb-4 text-teal-300" />
          <h2 className="text-2xl font-bold">Team Members</h2>
          <p className="text-3xl font-extrabold mt-2">32 <span className="text-teal-300">+</span></p>
        </div>
        {/* Stat 4 */}
        <div className="stat  p-6 rounded-lg shadow-lg text-center">
          <FaClock className="text-5xl mx-auto mb-4 text-teal-300" />
          <h2 className="text-2xl font-bold">Hours Played</h2>
          <p className="text-3xl font-extrabold mt-2">4,532 <span className="text-teal-300">+</span></p>
        </div>
      </div>
    </section>
  );
};

export default GamingStats;
