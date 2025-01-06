import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";

const AllReviews = () => {
  const [review, setReview] = useState([]);
  const [sort, setSort] = useState("");
  const [toggleSort, setToggleSort] = useState("");

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
        <h1 className="text-center font-bold border-b-2 w-[350px] mx-auto border-b-teal-500 mb-10 text-white md:text-5xl text-3xl pt-32 pb-10">
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
            className="border bg-transparent text-white p-3 rounded-md w-full md:w-auto"
          >
            <option className="bg-black" value="">
              All Genres
            </option>
            <option className="bg-black" value="Action">
              Action
            </option>
            <option className="bg-black" value="RPG">
              RPG
            </option>
            <option className="bg-black" value="Adventure">
              Adventure
            </option>
            <option className="bg-black" value="Strategy">
              Strategy
            </option>
            <option className="bg-black" value="Puzzle">
              Puzzle
            </option>
          </select>

          {/* Sort Filter */}
          <select
            onChange={(e) => setToggleSort(e.target.value)}
            value={toggleSort}
            name="toggleSort"
            id="toggleSort"
            className="border bg-transparent text-white p-3 rounded-md w-full md:w-auto"
          >
            <option className="bg-black" value="">
              Sort By
            </option>
            <option className="bg-black" value="rating">
              Rating
            </option>
            <option className="bg-black" value="year">
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
