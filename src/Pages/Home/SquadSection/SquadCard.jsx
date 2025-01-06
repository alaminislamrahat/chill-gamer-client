import React from "react";

const SquadCard = ({ squadData }) => {
  const { image, memberName, gamePlan, margin } = squadData || {};

  return (
    <div
      className={`card w-80 h-[420px] bg-base-100 bg-opacity-10 shadow-lg backdrop-blur-md border border-gray-200 rounded-lg ${margin || "m-4"}`} 
    >
      {/* Card Image */}
      <figure className="relative">
        <img
          src={image}
          alt="Squad Member"
          className="rounded-t-lg object-cover h-[420px]  w-full"
        />
      </figure>

      {/* Card Content */}
      <div className="flex-col justify-center items-center  text-center p-4">
       <div className="bg-black py-12">
         {/* Member Name */}
         <h2 className="text-lg font-bold text-white">{memberName}</h2>
        {/* Game Plan */}
        <p className="text-sm text-teal-400 font-medium">{gamePlan}</p>
       </div>
      </div>
    </div>
  );
};

export default SquadCard;
