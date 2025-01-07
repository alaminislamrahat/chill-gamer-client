import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaTrophy, FaUserFriends, FaClock } from "react-icons/fa";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";

const GamingStats = () => {

  const {isDarkMode} = useContext(AuthContext);

  const stats = [
    {
      icon: <FaGamepad className="text-5xl mx-auto mb-4 text-teal-500" />,
      title: "Games Played",
      value: "1,245",
    },
    {
      icon: <FaTrophy className="text-5xl mx-auto mb-4 text-teal-500" />,
      title: "Trophies Won",
      value: "527",
    },
    {
      icon: <FaUserFriends className="text-5xl mx-auto mb-4 text-teal-500" />,
      title: "Team Members",
      value: "32",
    },
    {
      icon: <FaClock className="text-5xl mx-auto mb-4 text-teal-500" />,
      title: "Hours Played",
      value: "4,532",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-transparent mt-20">
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% visible
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // Add delay for a staggered effect
          >
            {stat.icon}
            <h2 className="text-2xl font-bold">{stat.title}</h2>
            <p className="text-3xl font-extrabold mt-2">
              {stat.value} <span className="text-teal-500">+</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GamingStats;
