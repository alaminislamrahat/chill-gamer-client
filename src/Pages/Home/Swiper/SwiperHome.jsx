import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Additional Swiper modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperHome = () => {
    const games = [
        {
            title: "Elden Ring",
            image: "https://i.ibb.co/L54Vb7B/elden-Ring.jpg",
        },
        {
            title: "God of War: Ragnarok",
            image: "https://i.ibb.co/6NDjfKF/god-of-war.webp",
        },
        {
            title: "Cyberpunk 2077",
            image: "https://i.ibb.co/G3f2vV5/cyberpunk.jpg",
        },
        {
            title: "The Legend of Zelda: Breath of the Wild",
            image: "https://i.ibb.co.com/HXxGxD5/wallpaperflare-com-wallpaper-2.jpg",
        },
        {
            title: "The Witcher 3: Wild Hunt",
            image: "https://i.ibb.co.com/pjvMC3T/wallpaperflare-com-wallpaper-1.jpg",
        },
    ];

    return (
        <div className="p-6 bg-black/60 rounded-lg shadow-lg backdrop-blur-md">
            <h2 className="text-4xl font-extrabold text-center text-green-400 mb-6">
                Epic Gaming Worlds
            </h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {games.map((game, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative rounded-lg overflow-hidden transform transition-all duration-300"
                    >
                        <div className="relative">
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-64 object-cover rounded-lg brightness-90"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center text-green-300 p-4">
                                <h3 className="text-xl font-semibold">{game.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
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
