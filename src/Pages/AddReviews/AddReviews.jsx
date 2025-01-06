

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddReviews = () => {

    const imageurl = 'https://i.ibb.co/7JPmLz2/martin-martz-Wa-3-T6d0r-Bo-unsplash-1.jpg';

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
        const alldata = { gameCover, gameTitle, reviewDescription, rating, publishingYear, genre, userEmail, userName }
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
        <div
            style={{
                backgroundImage: `url(${imageurl})`,
                position: "relative",
            }}
            className="container mx-auto px-4 py-10 bg-no-repeat bg-center bg-cover z-40">
            {/* overlay 0 */}

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 0,
                }}
            ></div>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold border-b-teal-500 border-b-2 pb-5 w-[300px] mx-auto text-white  text-center pt-16 mb-9 ">Add a New Review</h2>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto bg-transparent p-8 shadow-md rounded-lg space-y-6 z-20"
                >


                    {/* Game Cover */}
                    <div className="form-control">
                        <label className="label font-semibold text-white ">Game Cover (URL)</label>
                        <input
                            type="text"
                            name="gameCover"

                            placeholder="Enter game cover image URL"
                            className="input input-bordered text-white border-gray-300 bg-transparent rounded-md w-full"
                            required
                        />
                    </div>

                    {/* Game Title */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"

                            placeholder="Enter game title"
                            className="input text-white input-bordered bg-transparent  border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    {/* Review Description */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Review Description</label>
                        <textarea
                            name="reviewDescription"

                            placeholder="Write a detailed review"
                            className="textarea text-white textarea-bordered bg-transparent  border-gray-300 rounded-md w-full"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"

                            placeholder="Enter rating (1-5)"
                            className="input text-white input-bordered bg-transparent  border-gray-300 rounded-md w-full"
                            min="1"
                            max="5"
                            required
                        />
                    </div>

                    {/* Publishing Year */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Publishing Year</label>
                        <input
                            type="number"
                            name="publishingYear"

                            placeholder="Enter publishing year (e.g., 2024)"
                            className="input text-white input-bordered bg-transparent  border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    {/* Genre */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Genre</label>
                        <select
                            name="genre"
                            value={reviewData.genre}
                            onChange={handleChange}
                            className="select text-white select-bordered bg-transparent text-white border-gray-300 rounded-md w-full"
                            required
                        >
                            <option value="" disabled>
                                Select a genre
                            </option>
                            {genres.map((genre) => (
                                <option className="bg-black text-white" key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* User Email */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">User Email</label>
                        <input
                            type="text"
                            name="userEmail"
                            value={user?.email || ""}

                            readOnly
                            className="input bg-transparent text-white input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* User Name */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">User Name</label>
                        <input
                            name="userName"
                            type="text"

                            value={user?.displayName || ""}
                            readOnly
                            className="input bg-transparent text-white input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn bg-teal-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 w-full"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;
