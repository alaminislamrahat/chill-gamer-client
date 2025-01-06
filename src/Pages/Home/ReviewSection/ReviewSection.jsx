import React, { useEffect, useState } from "react";

const ReviewSection = () => {
  const backgroundImage = "https://i.ibb.co.com/RYXB8Fj/vecteezy-united-states-navy-special-forces-soldier-in-action-on-war-30492397-2.jpg";

  // Sample reviewers
  const reviewers = [
    {
      name: "Emily",
      title: "Professional Gamer",
      review:
        "This game is an absolute masterpiece. From the stunning graphics to the highly engaging gameplay mechanics, it kept me on the edge of my seat throughout. The storyline was captivating, and the level of detail in the environments is unmatched. I’ve played many games in my career, but this one stands out as a true work of art!",
      image: "https://ibb.co.com/4KJjqWQ",
    },
    {
      name: "Sarah Smith",
      title: "Gaming Enthusiast",
      review:
        "I couldn't put it down! Every level brought something new and exciting. The puzzles were challenging but rewarding, and the character development was deep and meaningful. This is a must-play for any gaming fan.",
      image: "https://ibb.co.com/2ZZVBJ9",
    },
    {
      name: "Michael Brown",
      title: "Game Developer",
      review:
        "As a developer, I'm amazed at the creativity and depth of this game. The seamless integration of gameplay and narrative is something every developer strives for but rarely achieves. Truly inspirational and a benchmark for future titles.",
      image: "https://ibb.co.com/kK8WYb6",
    },
    {
      name: "Dan Brown",
      title: "Game Designer",
      review:
        "The attention to detail in this game is remarkable. Every environment feels alive, and the dynamic lighting adds a level of immersion that is hard to describe. This is a game that will set new standards for the industry.",
      image: "https://ibb.co.com/P6T8Hvf",
    },
  ];

  const [currentReviewerIndex, setCurrentReviewerIndex] = useState(0);

  // Update reviewer every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewerIndex((prevIndex) => (prevIndex + 1) % reviewers.length);
    }, 2000); // Change every 2 seconds

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
        {/* Top Description */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold leading-relaxed">{currentReviewer.review}</h2>
        </div>

        {/* Bottom Profile */}
        <div className="flex items-center gap-3">
          {/* Profile Picture */}
          <div className="w-14 h-14 rounded-full border-2 border-teal-500">
            <img src={currentReviewer.image} alt="" />
          </div>

          {/* Name and Title */}
          <div className="space-y-1">
            <h3 className="text-sm font-bold">{currentReviewer.name}</h3>
            <p className="text-xs text-gray-300">{currentReviewer.title}</p>
          </div>
        </div>
      </div>

      {/* Right Empty Section */}
      <div className="flex-1"></div>
    </div>
  );
};

export default ReviewSection;
