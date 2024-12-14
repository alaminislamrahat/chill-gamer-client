import { useState } from "react";

import { Tooltip } from 'react-tooltip'




const UniqueWidget = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    const trendingGames = [
        { name: "Elden Ring", rating: "9.8/10", image: "https://via.placeholder.com/150" },
        { name: "God of War: Ragnarok", rating: "9.5/10", image: "https://via.placeholder.com/150" },
        { name: "Cyberpunk 2077", rating: "8.7/10", image: "https://via.placeholder.com/150" },
    ];

    const topReviews = [
        {
            title: "The Witcher 3: Wild Hunt",
            review:
                "A masterpiece of storytelling and open-world gameplay, The Witcher 3 remains one of the greatest RPGs of all time.",
            author: "John Doe",
        },
        {
            title: "Red Dead Redemption 2",
            review:
                "An epic tale of the dying West, beautifully crafted with stunning visuals and a gripping narrative.",
            author: "Jane Smith",
        },
        {
            title: "Hollow Knight",
            review:
                "A stunning metroidvania with challenging gameplay, an enchanting world, and a hauntingly beautiful soundtrack.",
            author: "Alex Johnson",
        },
    ];

    return (
        <div className=" pb-6">
            {/* Hero Section */}


            {/* Trending Games Section */}


            {/* Top Reviews Section */}
            <div className="p-6 mt-10 ">
                <h2 className="text-3xl font-bold text-center text-indigo-500">Top Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {topReviews.map((review, index) => (
                        <div key={index} className="card bg-[#101d42] shadow-lg rounded-lg hover:shadow-2xl">
                            <div className="card-body">
                                <h3 className="card-title text-white">{review.title}</h3>
                                <p className="text-white">{review.review}</p>
                                <p className="mt-4 text-sm text-white">- {review.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* new section */}
            {/* <div className="flex justify-center items-center min-h-[50vh] bg-gradient-to-br from-blue-50 to-green-50">
                <div className="card w-screen bg-white shadow-xl border border-gray-200">
                    <div className="card-body">
                      
                        <h2 className="card-title text-center text-indigo-500 font-bold">
                            Unique Widget
                        </h2>
                        <p className="text-gray-600 text-center">
                            A random and reusable component for various applications.
                        </p>

                      
                        <div className="mt-4">
                            <label className="text-sm font-semibold">Progress</label>
                            <progress
                                className="progress progress-primary w-full"
                                value={isOn ? "70" : "30"}
                                max="100"
                            ></progress>
                            <p className="text-center text-sm mt-1">
                                {isOn ? "70% Completed" : "30% Completed"}
                            </p>
                        </div>

                      
                        <div className="flex justify-center mt-6">
                        <a 
                        className={`btn ${isOn ? "btn-success" : "btn-secondary"} w-32`}
                        onClick={toggleSwitch}
                        id="my-anchor-element">◕‿‿◕</a>
                            <Tooltip
                                anchorSelect="#my-anchor-element"
                                content="Here You Have to click!"
                            />
                            
                        </div>


                        
                        <div className="stats shadow mt-6">
                            <div className="stat">
                                <div className="stat-title">Users</div>
                                <div className="stat-value text-primary">{isOn ? "1.2K" : "900"}</div>
                                <div className="stat-desc">+{isOn ? "10%" : "5%"} this week</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Tasks</div>
                                <div className="stat-value text-secondary">{isOn ? "78" : "45"}</div>
                                <div className="stat-desc">+{isOn ? "20" : "10"} completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default UniqueWidget;
