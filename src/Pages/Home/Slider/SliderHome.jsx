import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
// import Typewriter from 'typewriter-effect';
import { Typewriter } from "react-simple-typewriter";

const SliderHome = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slidesPerView: 1,
        spacing: 10,
        slideChanged(slider) {
            console.log(`Slide changed to ${slider.track.details.rel}`);
        },
    });

    const games = [
        {
            title: "Elden Ring",
            description: "Explore the vast lands between in this action-packed RPG by FromSoftware.",
            image: "https://i.ibb.co.com/L54Vb7B/elden-Ring.jpg",
        },
        {
            title: "God of War: Ragnarok",
            description: "Join Kratos and Atreus in their mythological journey through Norse realms.",
            image: "https://i.ibb.co.com/6NDjfKF/god-of-war.webp",
        },
        {
            title: "Cyberpunk 2077",
            description: "Step into the vibrant Night City and shape your destiny as a cyber-enhanced mercenary.",
            image: "https://i.ibb.co.com/G3f2vV5/cyberpunk.jpg",
        },
    ];

    return (
        <div className="p-6 ">
            {/* Title with React Typewriter */}
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
                <Typewriter
                    words={['Featured games', 'Slide for more']}
                    loop={5} // Number of loops (use `0` for infinite loop)
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <div ref={sliderRef} className="keen-slider rounded-lg shadow-lg">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide bg-white rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold text-indigo-700">{game.title}</h3>
                            <p className="text-gray-600 mt-2">{game.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderHome;
