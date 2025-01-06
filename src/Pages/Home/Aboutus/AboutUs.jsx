
import Lottie from 'lottie-react';
import lottiefile from '../../../Lottie/lottie.json'

const AboutUs = () => {
    return (
        <div className="flex items-center justify-center mt-20 text-white">
            <div className=" w-full  ">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Side: Heading Text */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
                        <h1 className={`text-3xl font-bold mb-4 `}>About <span className='text-teal-300'>Gaming</span></h1>
                        <p className={`text-lg `}>
                            A game is an interactive activity or form of entertainment where players engage in challenges, tasks, or simulations, often with set rules and objectives. Games can be digital, like video games, or physical, like board games and sports. They are designed to provide fun, stimulate creativity, and sometimes foster competition or collaboration among players.
                        </p>
                        <div className=' flex gap-5 items-center mt-5'>
                            {/* <a
                                href="#games"
                                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
                            >
                                Game Watchlist
                            </a> */}
                            <a
                                href="#games"
                                className="px-8 py-3 btn-outline btn border-teal-600 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
                            >
                                Explore Games
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Demo Image (Lottie Animation) */}
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <Lottie animationData={lottiefile} loop={true} className="h-96" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;