import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion"; // Import Framer Motion
import "@smastrom/react-rating/style.css";

const Card = ({ item }) => {
  const { _id, gameCover, gameTitle, genre, publishingYear, rating } = item || {};

  return (
    <Link
      to={`/detail/${_id}`}
      className="col-span-1 cursor-pointer group bg-[#17191E] hover:shadow-teal-500 text-white shadow-xl p-3 rounded-xl"
    >
      <motion.div
        className="flex flex-col gap-2 w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Game Cover */}
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <motion.img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={gameCover || "https://via.placeholder.com/300"}
            alt="Game Cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Game Title */}
        <div className="font-semibold text-lg">{gameTitle || "Game Title"}</div>

        {/* Genre */}
        <div className="font-semibold text-lg flex items-center gap-3">
          <IoGameControllerOutline size={25} className="text-teal-500" /> {genre || "N/A"}
        </div>

        {/* Publishing Year */}
        <div className="font-semibold text-lg flex gap-3 items-center">
          <HiMiniCalendarDateRange size={25} className="text-teal-500" /> {publishingYear || "N/A"}
        </div>

        {/* Rating */}
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            <Rating style={{ maxWidth: 100 }} value={rating || 0} readOnly />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
