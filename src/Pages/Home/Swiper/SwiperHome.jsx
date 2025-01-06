import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Additional Swiper modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SwiperHome = () => {
  const games = [
    {
      title: "Elden Ring",
      category: "Action RPG",
      image: "https://i.ibb.co/L54Vb7B/elden-Ring.jpg",
    },
    {
      title: "God of War: Ragnarok",
      category: "Action Adventure",
      image: "https://i.ibb.co/6NDjfKF/god-of-war.webp",
    },
    {
      title: "Cyberpunk 2077",
      category: "Open World RPG",
      image: "https://i.ibb.co/G3f2vV5/cyberpunk.jpg",
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      category: "Adventure",
      image: "https://i.ibb.co/343r4Q0/cyberpunk-dj-illustration-1.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      category: "Fantasy RPG",
      image: "https://i.ibb.co/r6PFbWf/2151672016.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(null);

  return (
    <div className="p-6 mt-20 mb-10 z-0 text-center">
      {/* Swiper Component */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={Math.floor(games.length / 2)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded-lg overflow-hidden transform transition-all duration-300"
          >
            <div className="relative border border-gray-300 rounded-lg">
              {/* Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              {/* Title and Category Overlay */}
              {currentSlide === index && (
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-left rounded-b-lg">
                  <h3 className="text-white text-lg font-bold">{game.title}</h3>
                  <p className="text-teal-400 text-sm font-medium">{game.category}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          className="p-4 bg-black text-teal-400 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center"
          onClick={() => {
            const swiper = document.querySelector(".mySwiper").swiper;
            swiper.slidePrev();
          }}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="p-4 bg-black text-teal-400 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center"
          onClick={() => {
            const swiper = document.querySelector(".mySwiper").swiper;
            swiper.slideNext();
          }}
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <style jsx>{`
        .swiper-slide {
          transition: transform 0.3s ease-in-out;
          background: transparent;
        }
        .swiper-slide-active {
          transform: scale(1.2) translateY(-20px); /* Middle image raised */
          z-index: 10;
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          transform: scale(1) translateY(0);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default SwiperHome;
