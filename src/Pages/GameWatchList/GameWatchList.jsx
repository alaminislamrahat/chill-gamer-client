import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";

import animation from '../../Lottie/notFound.json'
import Lottie from "lottie-react";
import toast from "react-hot-toast";


const GameWatchList = () => {
    const { user, isDarkMode } = useContext(AuthContext);
    const [myData, setMyData] = useState([]);


    useEffect(() => {
        if (user?.email) {
            fetchData();
        }
    }, [user]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://chil-gamer-server.vercel.app/watchlist?email=${user.email}`);
            setMyData(data);
        } catch (error) {
            console.error("Error fetching watchlist data:", error.message);
        }
    };


    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`https://chil-gamer-server.vercel.app/watchlist/delete/${id}`);
            console.log(data);
            toast.success('deleted successfully')
            fetchData()
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between flex-wrap space-y-4 pb-4 ">
                <h1 className={`text-4xl mx-auto w-[300px] border-b-2 border-b-teal-500 pb-10 pt-24 mb-20 font-bold ${isDarkMode ? 'text-black' : 'text-white'} `}>
                    Game WatchList
                </h1>

            </div>
            <table className={`w-full text-sm text-left ${isDarkMode ? 'text-black' : 'text-white'}`}>
                <thead className="text-xs  uppercase  0 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Cover
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Genre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reviewer
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {myData.length > 0 ? (
                        myData.map((item, index) => (
                            <tr
                                key={index}
                                className=" border-b"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={item.gameCover}
                                        alt={item.gameTitle}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                </td>
                                <td className={`px-6 py-4 font-medium  ${isDarkMode ? 'text-black' : 'text-white'}`}>
                                    {item.gameTitle}
                                </td>
                                <td className="px-6 py-4">{item.genre}</td>
                                <td className="px-6 py-4">{item.rating} / 5</td>
                                <td className="px-6 py-4">{item.userName}</td>
                                <td className="px-6 py-4"><button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md">
                                        Delete
                                    </button></td>
                            </tr>
                        ))
                    ) : (
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
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default GameWatchList;
