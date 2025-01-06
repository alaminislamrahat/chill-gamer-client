import React from 'react';
import { Parallax } from 'react-parallax';
import SquadCard from './SquadCard';

const SquadSection = ({ img }) => {

    const teamData = [
        {
            image: "https://i.ibb.co.com/d5byYwz/PRO-GAMER-T-Shirt-gamers-t-shirts-gamers-shirts-shirts-for-gamers.jpg",
            memberName: "Arthur Morgan",
            gamePlan: "Stealth Strategy",
            margin: "mr-20", // No margin for the first card
        },
        {
            image: "https://i.ibb.co.com/wccG1tk/Mapple-Vergara.jpg",
            memberName: "Kratos",
            gamePlan: "Aggressive Attack",
            margin: "mt-40", // Right card will be pushed down
        },
        {
            image: "https://i.ibb.co.com/Jn7MX6F/League-Of-Legends-Eternals-Explained-Bit-Rebels.jpg",
            memberName: "V (Cyberpunk)",
            gamePlan: "Tech Manipulation",
            margin: "mr-20", // No margin for the third card
        },
        {
            image: "https://i.ibb.co.com/LYvCFSG/b5d3ebeb-c639-4b50-bab4-c08cc7a91a7c.jpg",
            memberName: "Geralt of Rivia",
            gamePlan: "Balanced Combat",
            margin: "mt-40", // Right card will be pushed down
        },
    ];

    return (
        <div 
        style={{backgroundImage : `url(${img})`}}
        className='bg-fixed bg-cover bg-no-repeat bg-center'>
            <div className="hero py-10">
                <h1 className='text-5xl text-white font-bold bg-black p-10 bg-opacity-80'>Our top Gamer squad</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-72 md:gap-40  md:py-20 "> {/* Maintain the gap */}
                    {teamData.map(item => (
                        <SquadCard key={item.memberName} squadData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SquadSection;
