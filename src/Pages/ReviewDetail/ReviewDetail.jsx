import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const ReviewDetail = () => {
    const data = useLoaderData();
    const { gameCover, gameTitle, reviewDescription, rating, genre, userEmail, userName } = data || {};
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToWatchList = async () => {
        if (!user) {
            toast.error("You need to log in to add to the watchlist!");
            return;
        }

        const watchlistData = {
            gameTitle,
            gameCover,
            reviewDescription,
            rating,
            genre,
            userEmail: user.email,
            userName: user.displayName,
        };

        try {
            const response = await axios.post("https://chil-gamer-server.vercel.app/watchlist", watchlistData);
            console.log(response.data);
            toast.success("Added to WatchList!");
        navigate('/game-watchlist')
        } catch (error) {
            console.error("Error adding to WatchList:", error.message);
            toast.error("Failed to add to WatchList.");
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                {/* Game Cover */}
                <img
                    src={gameCover}
                    alt={gameTitle}
                    className="w-full h-64 object-cover object-center"
                />

                <div className="p-6">
                    {/* Game Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{gameTitle}</h2>

                    {/* Review Description */}
                    <p className="text-gray-700 mb-4">
                        <strong>Review:</strong> {reviewDescription}
                    </p>

                    {/* Rating */}
                    <p className="text-gray-700 mb-4">
                        <strong>Rating:</strong> {rating} / 5
                    </p>

                    {/* Genre */}
                    <p className="text-gray-700 mb-4">
                        <strong>Genre:</strong> {genre}
                    </p>

                    {/* Reviewer Info */}
                    <p className="text-gray-700 mb-4">
                        <strong>Reviewer:</strong> {userName} ({userEmail})
                    </p>

                    {/* Add to WatchList Button */}
                    {user ? (
                        <button
                            onClick={handleAddToWatchList}
                            className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Add to WatchList
                        </button>
                    ) : (
                        <p className="text-red-500 text-center">
                            Log in to add this review to your watchlist.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;
