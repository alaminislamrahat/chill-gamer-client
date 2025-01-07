import "./Home.css";
import HeroSection from "./HeroSection/HeroSection";
import MarqueeSection from "../MarqueeSection/MarqueeSection";
import Container from "../../../Components/Container/Container";
import HighestRated from "../HighestRated/HighestRated";
import Cover from "../Parallax/Cover";
import GamingStats from "../Swiper/GamingStats/GamingStats";
import SwiperHome from "../Swiper/SwiperHome";
import SquadSection from "../SquadSection/SquadSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import DownloadSection from "../DownloadSection/DownloadSection";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <MarqueeSection />
            <Container>
                <HighestRated />
            </Container>
            <Cover img="https://i.ibb.co/yB4Hbcc/medium-shot-ninja-wearing-equipment-1-1.jpg" />
            <GamingStats />
            <SwiperHome />
            <SquadSection img="https://i.ibb.co/THjb52G/pxfuel-2.jpg" />
            <ReviewSection />
            <DownloadSection />
        </div>
    );
};

export default Home;
