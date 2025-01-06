import { useState } from "react";

const HomeCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://i.ibb.co/MD5dwb9/65e84cee01fb9.jpg",
            caption: "Game Adventure Begins",
        },
        {
            image: "https://i.ibb.co/TYBSCSz/Stock-Cake-Heroic-Leap-Above-1736146304.webp",
            caption: "Leap into the Action",
        },
        {
            image: "https://i.ibb.co/mHd1c7G/slide3.jpg",
            caption: "Explore the Unknown",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative mb-10 z-0 h-[500px] overflow-hidden">
            {/* Slides */}
            <div className="w-full h-full flex transition-transform duration-1000 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">{slide.caption}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
                onClick={nextSlide}
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;
