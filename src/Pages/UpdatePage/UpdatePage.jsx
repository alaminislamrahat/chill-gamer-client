import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const UpdatePage = () => {
    const imageurl = 'https://i.ibb.co/7JPmLz2/martin-martz-Wa-3-T6d0r-Bo-unsplash-1.jpg';

    const data = useLoaderData();
    const { gameCover, gameTitle, genre, publishingYear, rating, reviewDescription } = data || {};
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [reviewData, setReviewData] = useState({
        gameCover: gameCover || "",
        gameTitle: gameTitle || "",
        reviewDescription: reviewDescription || "",
        rating: rating || "",
        publishingYear: publishingYear || "",
        genre: genre || "",
    });

    useEffect(() => {
        setReviewData({
            gameCover: gameCover || "",
            gameTitle: gameTitle || "",
            reviewDescription: reviewDescription || "",
            rating: rating || "",
            publishingYear: publishingYear || "",
            genre: genre || "",
        });
    }, [data]);

    const genres = ["Action", "RPG", "Adventure", "Strategy", "Puzzle"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const alldata = { ...reviewData, userEmail, userName };

        try {
            const { data } = await axios.put(`https://chil-gamer-server.vercel.app/review/${id}`, alldata);
            toast.success("Updated successfully");
            navigate("/");
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${imageurl})`,
                position: "relative",
            }}
            className="container mx-auto px-4 py-10 bg-no-repeat bg-cover bg-center"
        >
            {/* Black Overlay */}
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

            {/* Page Content */}
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white border-b-2 border-b-teal-500 mx-auto w-[300px] mb-6 text-center pb-5 pt-20">
                    Update Review
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto bg-transparent border-white border p-8 shadow-md rounded-lg space-y-6"
                >
                    {/* Game Cover */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Game Cover (URL)</label>
                        <input
                            type="text"
                            name="gameCover"
                            value={reviewData.gameCover}
                            onChange={handleChange}
                            placeholder="Enter game cover image URL"
                            className="input text-white bg-transparent input-bordered border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    {/* Game Title */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"
                            value={reviewData.gameTitle}
                            onChange={handleChange}
                            placeholder="Enter game title"
                            className="input text-white input-bordered bg-transparent border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    {/* Review Description */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Review Description</label>
                        <textarea
                            name="reviewDescription"
                            value={reviewData.reviewDescription}
                            onChange={handleChange}
                            placeholder="Write a detailed review"
                            className="textarea text-white bg-transparent textarea-bordered border-gray-300 rounded-md w-full"
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
                            value={reviewData.rating}
                            onChange={handleChange}
                            placeholder="Enter rating (1-5)"
                            className="input text-white bg-transparent input-bordered border-gray-300 rounded-md w-full"
                            min="1"
                            max="10"
                            required
                        />
                    </div>

                    {/* Publishing Year */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Publishing Year</label>
                        <input
                            type="number"
                            name="publishingYear"
                            value={reviewData.publishingYear}
                            onChange={handleChange}
                            placeholder="Enter publishing year (e.g., 2024)"
                            className="input text-white bg-transparent input-bordered border-gray-300 rounded-md w-full"
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
                            className="select text-white select-bordered bg-transparent border-gray-300 rounded-md w-full"
                            required
                        >
                            <option value="" disabled>
                                Select a genre
                            </option>
                            {genres.map((g) => (
                                <option className="bg-black text-white" key={g} value={g}>
                                    {g}
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
                            className="input text-white bg-transparent input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
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
                            className="input text-white bg-transparent input-bordered border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
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

export default UpdatePage;
