

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddReviews = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate() // Assuming user context provides name and email
    const [reviewData, setReviewData] = useState({
        gameCover: "",
        gameTitle: "",
        reviewDescription: "",
        rating: "",
        publishingYear: "",
        genre: "",
    });

    const genres = ["Action", "RPG", "Adventure", "Strategy", "Puzzle"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const gameCover = form.gameCover.value;
        const gameTitle = form.gameTitle.value;
        const reviewDescription = form.reviewDescription.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const genre = reviewData.genre
        const alldata = {gameCover,gameTitle,reviewDescription,rating,publishingYear,genre,userEmail,userName}
        console.log(alldata)

        try {
            const { data } = await axios.post('https://chil-gamer-server.vercel.app/addReviws', alldata);
            console.log(data);
            toast.success('job data added successfully');
            navigate('/');


        } catch (err) {
            console.log(err.message)
        }



    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a New Review</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6"
            >
                {/* Game Cover */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Game Cover (URL)</label>
                    <input
                        type="text"
                        name="gameCover"
                      
                        placeholder="Enter game cover image URL"
                        className="input input-bordered border-gray-300 rounded-md w-full"
                        required
                    />
                </div>

                {/* Game Title */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Game Title</label>
                    <input
                        type="text"
                        name="gameTitle"
                        
                        placeholder="Enter game title"
                        className="input input-bordered border-gray-300 rounded-md w-full"
                        required
                    />
                </div>

                {/* Review Description */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Review Description</label>
                    <textarea
                        name="reviewDescription"
                        
                        placeholder="Write a detailed review"
                        className="textarea textarea-bordered border-gray-300 rounded-md w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Rating */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Rating (1-5)</label>
                    <input
                        type="number"
                        name="rating"
                       
                        placeholder="Enter rating (1-5)"
                        className="input input-bordered border-gray-300 rounded-md w-full"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                {/* Publishing Year */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Publishing Year</label>
                    <input
                        type="number"
                        name="publishingYear"
                       
                        placeholder="Enter publishing year (e.g., 2024)"
                        className="input input-bordered border-gray-300 rounded-md w-full"
                        required
                    />
                </div>

                {/* Genre */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">Genre</label>
                    <select
                        name="genre"
                        value={reviewData.genre}
                        onChange={handleChange}
                        className="select select-bordered border-gray-300 rounded-md w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a genre
                        </option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                {/* User Email */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">User Email</label>
                    <input
                        type="text"
                        name="userEmail"
                        value={user?.email || ""}
                       
                        readOnly
                        className="input input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="form-control">
                    <label className="label font-semibold text-gray-600">User Name</label>
                    <input
                        name="userName"
                        type="text"
                       
                        value={user?.displayName || ""}
                        readOnly
                        className="input input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 w-full"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReviews;
