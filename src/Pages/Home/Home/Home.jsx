import { useState } from "react";
import HomeCarousel from "../Carousel/HomeCarousel";
import HighestRated from "../HighestRated/HighestRated";
import SliderHome from "../Slider/SliderHome";


import "./Home.css"; // Import styles for dark/light mode
import AboutUs from "../Aboutus/AboutUs";
import SwiperHome from "../Swiper/SwiperHome";
import HeroSection from "./HeroSection/HeroSection";
import MarqueeSection from "../MarqueeSection/MarqueeSection";
import Container from "../../../Components/Container/Container";
import Cover from "../Parallax/Cover";
import GamingStats from "../Swiper/GamingStats/GamingStats";
import SquadSection from "../SquadSection/SquadSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import DownloadSection from "../DownloadSection/DownloadSection";

const Home = () => {


    return (
        <div className="">
            <HeroSection />
            <MarqueeSection />


            <Container>
                <HighestRated />

            </Container>
            <Cover img={"https://i.ibb.co.com/yB4Hbcc/medium-shot-ninja-wearing-equipment-1-1.jpg"} />
            {/* <MarqueeSection /> */}
            {/* <HomeCarousel /> */}
            <GamingStats />
            <SwiperHome />

            <SquadSection img={"https://i.ibb.co.com/THjb52G/pxfuel-2.jpg"} />
            <ReviewSection/>
            <DownloadSection/>

           
        </div>
    );
};

export default Home;
