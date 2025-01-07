import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReviewSection = () => {
  const backgroundImage =
    "https://i.ibb.co/RYXB8Fj/vecteezy-united-states-navy-special-forces-soldier-in-action-on-war-30492397-2.jpg";

  // Sample reviewers with valid image URLs
  const reviewers = [
    {
      name: "Emily",
      title: "Professional Gamer",
      review:
        "This game is an absolute masterpiece. From the stunning graphics to the highly engaging gameplay mechanics, it kept me on the edge of my seat throughout. The storyline was captivating, and the level of detail in the environments is unmatched. I’ve played many games in my career, but this one stands out as a true work of art!",
      image: "https://i.ibb.co.com/wccG1tk/Mapple-Vergara.jpg", // Replace with valid image URL
    },
    {
      name: "Sarah Smith",
      title: "Gaming Enthusiast",
      review:
        "I couldn't put it down! Every level brought something new and exciting. The puzzles were challenging but rewarding, and the character development was deep and meaningful. This is a must-play for any gaming fan.",
      image: "https://i.ibb.co.com/LYvCFSG/b5d3ebeb-c639-4b50-bab4-c08cc7a91a7c.jpg", // Replace with valid image URL
    },
    {
      name: "Michael Brown",
      title: "Game Developer",
      review:
        "As a developer, I'm amazed at the creativity and depth of this game. The seamless integration of gameplay and narrative is something every developer strives for but rarely achieves. Truly inspirational and a benchmark for future titles.",
      image: "https://i.ibb.co.com/Jn7MX6F/League-Of-Legends-Eternals-Explained-Bit-Rebels.jpg", // Replace with valid image URL
    },
    {
      name: "Dan Brown",
      title: "Game Designer",
      review:
        "The attention to detail in this game is remarkable. Every environment feels alive, and the dynamic lighting adds a level of immersion that is hard to describe. This is a game that will set new standards for the industry.",
      image: "https://i.ibb.co.com/d5byYwz/PRO-GAMER-T-Shirt-gamers-t-shirts-gamers-shirts-shirts-for-gamers.jpg", // Replace with valid image URL
    },
  ];

  const [currentReviewerIndex, setCurrentReviewerIndex] = useState(0);

  // Update reviewer every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewerIndex((prevIndex) => (prevIndex + 1) % reviewers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [reviewers.length]);

  const currentReviewer = reviewers[currentReviewerIndex];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
      className="relative flex"
    >
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-between p-8 bg-black/50 text-white">
        {/* Animated Reviewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReviewerIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-lg font-semibold leading-relaxed">
              {currentReviewer.review}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Profile */}
        <motion.div
          key={currentReviewerIndex + "-profile"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Profile Picture */}
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500">
            <img
              src={currentReviewer.image}
              alt={currentReviewer.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-1">
            <h3 className="text-sm font-bold">{currentReviewer.name}</h3>
            <p className="text-xs text-gray-300">{currentReviewer.title}</p>
          </div>
        </motion.div>
      </div>

      {/* Right Empty Section */}
      <div className="flex-1"></div>
    </div>
  );
};

export default ReviewSection;
