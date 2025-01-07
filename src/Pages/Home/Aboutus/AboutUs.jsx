import Lottie from "lottie-react";
import { motion } from "framer-motion"; // Import Framer Motion
import lottiefile from "../../../Lottie/lottie.json";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center mt-20 text-white">
      <div className="w-full ">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and shifted down
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          {/* Left Side: Heading Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
            <h1 className={`text-3xl font-bold mb-4`}>
              About <span className="text-teal-300">Gaming</span>
            </h1>
            <p className={`text-lg`}>
              A game is an interactive activity or form of entertainment where
              players engage in challenges, tasks, or simulations, often with
              set rules and objectives. Games can be digital, like video games,
              or physical, like board games and sports. They are designed to
              provide fun, stimulate creativity, and sometimes foster
              competition or collaboration among players.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <a
                href="#games"
                className="px-8 py-3 btn-outline btn border-teal-600 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
              >
                Explore Games
              </a>
            </div>
          </div>

          {/* Right Side: Lottie Animation */}
          <motion.div
            className="lg:w-1/2 flex justify-center  items-center"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and shifted down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% visible
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <Lottie animationData={lottiefile} loop={true} className="h-96" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
