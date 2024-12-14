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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-28">
            {
                reviews.slice(0,6).map(review => <Card key={review._id} item={review}/>)
            }
        </div>
    );
};

export default HighestRated;