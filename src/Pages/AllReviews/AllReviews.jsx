import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const AllReviews = () => {
  const [review, setReview] = useState([]);
  const [sort, setSort] = useState("");
  const [toggleSort, setToggleSort] = useState("");

  const {isDarkMode} = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `https://chil-gamer-server.vercel.app/reviews?genre=${sort}&toggleSort=${toggleSort}`
        );
        setReview(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getData();
  }, [sort, toggleSort]);

  return (
    <Container>
      <div>
        {/* Title */}
        <h1 className={`text-center font-bold border-b-2 md:w-[350px] mx-auto border-b-teal-500 mb-10 ${isDarkMode ? 'text-black' : 'text-white'} md:text-5xl text-3xl pt-32 pb-10`}>
          All Reviews
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
          {/* Genre Filter */}
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            name="sort"
            id="sort"
            className={`border-teal-500 border-2 bg-transparent ${isDarkMode ? 'text-black' : 'text-white'} p-3 rounded-md w-full md:w-auto`}
          >
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`} value="">
              All Genres
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              Action
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              RPG
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              Adventure
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              Strategy
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              Puzzle
            </option>
          </select>

          {/* Sort Filter */}
          <select
            onChange={(e) => setToggleSort(e.target.value)}
            value={toggleSort}
            name="toggleSort"
            id="toggleSort"
            className={`border-teal-500 border-2 bg-transparent ${isDarkMode ? 'text-black' : 'text-white'} p-3 rounded-md w-full md:w-auto`}
          >
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`} value="">
              Sort By
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`} value="rating">
              Rating
            </option>
            <option className={`${isDarkMode ? 'bg-white' : 'bg-black'}`} value="year">
              Year
            </option>
          </select>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 my-10">
          {review.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllReviews;
