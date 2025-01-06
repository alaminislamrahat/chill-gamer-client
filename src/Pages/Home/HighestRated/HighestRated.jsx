import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";


const HighestRated = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
       
        getData()
    },[]);


    const getData = async()=>{
        const {data} = await axios('https://chil-gamer-server.vercel.app/reviews')
        console.log(data)
        setReviews(data)
    }

    return (
        <div>
            <h1 className="text-4xl font-semibold text-white mt-20 mb-11 border-b-2 border-b-teal-500 pb-5 md:w-[275px]">Gaming Reviews</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:5  ">
            {
                reviews.slice(0,6).map(review => <Card key={review._id} item={review}/>)
            }
        </div>
        </div>
    );
};

export default HighestRated;