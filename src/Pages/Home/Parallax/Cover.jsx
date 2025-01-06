import React from 'react';
import { Parallax } from 'react-parallax';
import AboutUs from '../Aboutus/AboutUs';


const Cover = ({img}) => {
    return (
        
        <Parallax className='mt-20'
        
        blur={{ min: -30, max: 30 }}
        
        bgImage={img}
        bgImageAlt="the dog"
        strength={500}
    >
       <div
       
            className="hero h-[600px] "
            >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content text-center">
            <AboutUs />
            </div>
        </div>
    </Parallax> 
        
    );
};

export default Cover;