import { useState } from "react";
import HomeCarousel from "../Carousel/HomeCarousel";
import HighestRated from "../HighestRated/HighestRated";
import SliderHome from "../Slider/SliderHome";
import UniqueWidget from "../UniqueWidget/UniqueWidget";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./Home.css"; // Import styles for dark/light mode
import AboutUs from "../Aboutus/AboutUs";
import SwiperHome from "../Swiper/SwiperHome";

const Home = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };
    
    return (
        <div className={`home-container  ${isDarkMode ? "bg-[#1B0239] text-white" : " bg-[#0A122A] text-white"}`}>
            <div className="toggle-switch-container">
                <DarkModeSwitch
                    style={{ marginBottom: "1rem" ,color : 'white'}}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={40}
                />
            </div>
            <HomeCarousel />
            <HighestRated />
            <AboutUs/>
            <SwiperHome/>
            
            <div className=" md:mx-6 "><UniqueWidget /></div>
        </div>
    );
};

export default Home;
