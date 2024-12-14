
import Lottie from 'lottie-react';
import lottiefile from '../../../Lottie/lottie.json'

const AboutUs = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="max-w-screen-lg w-full p-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side: Heading Text */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
                        <h1 className={`text-3xl font-bold mb-4 `}>About Gaming</h1>
                        <p className={`text-lg `}>
                        A game is an interactive activity or form of entertainment where players engage in challenges, tasks, or simulations, often with set rules and objectives. Games can be digital, like video games, or physical, like board games and sports. They are designed to provide fun, stimulate creativity, and sometimes foster competition or collaboration among players.
                        </p>
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