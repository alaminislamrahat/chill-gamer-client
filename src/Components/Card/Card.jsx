import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const {
        _id,
        gameCover,
        gameTitle,
        genre,
        publishingYear,
        rating,
        reviewDescription,
    } = item || {};

    return (
        <div className="card flex flex-col bg-opacity-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl mx-auto text-white transform hover:-translate-y-2 transition-transform duration-300 max-w-sm w-full">
            {/* Game Cover */}
            <figure className="h-56 overflow-hidden rounded-t-lg">
                <img
                    src={gameCover}
                    alt={gameTitle || "Game Cover"}
                    className="object-cover w-full h-full"
                />
            </figure>

            {/* Card Content */}
            <div className="card-body bg-opacity-90 bg-gray-900 rounded-b-lg p-4">
                {/* Game Title */}
                <h2 className="text-xl font-extrabold mb-2">
                    {gameTitle || "Game Title"}
                </h2>

                {/* Publishing Year and Genre */}
                <p className="text-sm">
                    <span className="font-bold">Publishing Year:</span> {publishingYear || "N/A"}
                </p>
                <p className="text-sm">
                    <span className="font-bold">Genre:</span> {genre || "N/A"}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-3">
                    <span className="text-sm font-bold mr-2">Rating:</span>
                    <Rating style={{ maxWidth: 100 }} value={rating || 0} readOnly />
                    <span className="ml-2 text-sm">{rating || 0}/5</span>
                </div>

                {/* Review Description */}
                <p className="mt-3 text-sm leading-relaxed">
                    <span className="font-bold">Review:</span> {reviewDescription || "No review provided."}
                </p>

                {/* Actions */}
                <div className="mt-4">
                    <Link
                        to={`/detail/${_id}`}
                        className="btn btn-glass w-full text-center hover:bg-purple-700 hover:text-white"
                    >
                        <span className="text-black font-bold">Explore Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
