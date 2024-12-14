import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";


const AllReviews = () => {
    const [review, setReview] = useState([]);
    const [sort, setSort] = useState('')
    const [toggleSort, setToggleSort] = useState('')
    
    console.log(sort)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://chil-gamer-server.vercel.app/reviews?genre=${sort}&toggleSort=${toggleSort}`);
            setReview(data)
        }

        getData()

    }, [sort,toggleSort]);


    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-8">All Reviews</h1>

            <div className="flex justify-between">
                <div>
                    <select
                        onChange={e => {
                            setSort(e.target.value);

                        }}

                        value={sort}
                        name='sort'
                        id='sort'
                        className='border p-4 rounded-md'
                    >
                        {/* "Action", "RPG", "Adventure", "Strategy", "Puzzle" */}
                        <option value=''>all</option>
                        <option value='Action'>Action</option>
                        <option value='RPG'>RPG</option>
                        <option value='asc'>Adventure</option>
                        <option value='Strategy'>Strategy</option>
                        <option value='Puzzle'>Puzzle</option>
                    </select>
                </div>
                <div className="flex gap-3">
                    <button onClick={()=>setToggleSort('rating')} className="btn">Rating</button>
                    <button onClick={()=>setToggleSort('year')} className="btn"> Year</button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                {
                    review.map(item => <Card key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllReviews;