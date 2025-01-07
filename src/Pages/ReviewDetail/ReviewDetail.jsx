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
      navigate("/game-watchlist");
    } catch (error) {
      console.error("Error adding to WatchList:", error.message);
      toast.error("Failed to add to WatchList.");
    }
  };

  return (
    <div className=" pt-20">
    

      {/* Review Section */}
      <div className="container mx-auto px-4 py-10 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
          {/* Left: Game Cover */}
          <div className="lg:w-1/2">
            <img
              src={gameCover}
              alt={gameTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between text-white">
            {/* Game Title */}
            <h2 className="text-3xl font-bold mb-4">{gameTitle}</h2>

            {/* Review Description */}
            <p className="text-lg mb-4">
              <strong>Review:</strong> {reviewDescription}
            </p>

            {/* Rating */}
            <p className="text-lg mb-4">
              <strong>Rating:</strong> {rating} / 5
            </p>

            {/* Genre */}
            <p className="text-lg mb-4">
              <strong>Genre:</strong> {genre}
            </p>

            {/* Reviewer Info */}
            <p className="text-lg mb-4">
              <strong>Reviewer:</strong> {userName} ({userEmail})
            </p>

            {/* Add to WatchList Button */}
            {user ? (
              <button
                onClick={handleAddToWatchList}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md py-2 px-4 transition-all"
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
    </div>
  );
};

export default ReviewDetail;
