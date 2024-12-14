import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import animation from '../../Lottie/notFound.json'

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        getData()
    }, [mydata])

    const getData = async () => {
        const { data } = await axios(`https://chil-gamer-server.vercel.app/myReviews?email=${user?.email}`);
        setMydata(data);
    };



    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`https://chil-gamer-server.vercel.app/myReview/${id}`);
            console.log(data);
            toast.success('deleted successfully')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                My Reviews
            </h2>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-4 px-6 text-left">Game Title</th>
                            <th className="py-4 px-6 text-left">Details</th>
                            <th className="py-4 px-6 text-center">Rating</th>
                            <th className="py-4 px-6 text-center">Update</th>
                            <th className="py-4 px-6 text-center">Delete</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                    {mydata.length>0? mydata.map((item) => (
                            <tr
                                key={item._id}
                                className="hover:bg-gray-100 transition duration-300"
                            >
                                {/* Game Title */}
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img
                                                    src={item.gameCover}
                                                    alt={item.gameTitle}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">
                                                {item.gameTitle}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Published: {item.publishingYear}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                {/* Review Details */}
                                <td className="py-4 px-6">
                                    <p className="text-gray-700">
                                        {item.reviewDescription}
                                    </p>
                                    <span className="inline-block mt-2 text-sm bg-gray-200 text-gray-600 py-1 px-2 rounded">
                                        Genre: {item.genre}
                                    </span>
                                </td>
                                {/* Rating */}
                                <td className="py-4 px-6 text-center">
                                    <span className="text-xl font-bold text-yellow-500">
                                        {item.rating}⭐
                                    </span>
                                </td>
                                {/* Update Button */}
                                <td className="py-4 px-6 text-center">
                                    <Link to={`/update/${item._id}`} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md">
                                        Update
                                    </Link>
                                </td>
                                {/* Delete Button */}
                                <td className="py-4 px-6 text-center">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) :
                        (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center px-6 py-4 text-gray-500 dark:text-gray-400"
                                >
                                    <div className="lg:w-1/2 flex justify-center items-center">
                                        <Lottie animationData={animation} loop={true} className="h-96" />
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
