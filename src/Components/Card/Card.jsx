import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating"; // Import the Rating component

import "@smastrom/react-rating/style.css"; // Import the rating styles

const Card = ({ item }) => {
  const {
    _id,
    gameCover,
    gameTitle,
    genre,
    publishingYear,
    rating,
  } = item || {};

  return (
    <Link
      to={`/detail/${_id}`}
      className="col-span-1 cursor-pointer group bg-[#17191E] hover:shadow-teal-500 text-white shadow-xl p-3 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={gameCover || "https://via.placeholder.com/300"}
            alt="Game Cover"
          />
        </div>
        <div className="font-semibold text-lg">{gameTitle || "Game Title"}</div>
        <div className="font-semibold text-lg flex items-center gap-3">
          <IoGameControllerOutline size={25} className="text-teal-500" /> {genre || "N/A"}
        </div>
        <div className="font-semibold text-lg flex gap-3 items-center">
          <HiMiniCalendarDateRange size={25} className="text-teal-500" /> {publishingYear || "N/A"}
        </div>
        <div className="flex flex-row items-center gap-1">
          {/* Updated the rating to use React Rating */}
          <div className="font-semibold">
            <Rating style={{ maxWidth: 100 }} value={rating || 0} readOnly />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
