import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";

import animation from '../../Lottie/notFound.json'
import Lottie from "lottie-react";


const GameWatchList = () => {
    const { user } = useContext(AuthContext);
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

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between flex-wrap space-y-4 pb-4 bg-white dark:bg-gray-900">
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">
                    Game WatchList
                </h1>

            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    </tr>
                </thead>
                <tbody>
                    {myData.length > 0 ? (
                        myData.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={item.gameCover}
                                        alt={item.gameTitle}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {item.gameTitle}
                                </td>
                                <td className="px-6 py-4">{item.genre}</td>
                                <td className="px-6 py-4">{item.rating} / 5</td>
                                <td className="px-6 py-4">{item.userName}</td>
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
