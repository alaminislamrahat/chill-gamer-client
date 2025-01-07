import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const HighestRated = () => {

    const {isDarkMode} = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios('https://chil-gamer-server.vercel.app/reviews');
    console.log(data);
    setReviews(data);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-black' : 'text-white'} mt-20 mb-11 border-b-2 border-b-teal-500 pb-5 md:w-[275px]`}>
        Gaming Reviews
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {reviews.slice(0, 6).map((review) => (
          <Card key={review._id} item={review} />
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
