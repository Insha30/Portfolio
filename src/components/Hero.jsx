import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/avatar.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col items-center text-center px-6 lg:px-0">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={profilePic}
          alt="profile"
          className="w-64 h-64 rounded-full object-cover mb-8 border-4 border-purple-500 shadow-lg transition-all duration-500 ease-in-out 
          hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(192,132,252,0.6)] hover:rotate-1"
        />

        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-2 text-5xl font-thin tracking-tight lg:text-7xl"
        >
          Syed Insha Iqbal
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent font-semibold"
        >
          Full-Stack Developer
        </motion.span>

        <motion.div
          className="my-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="/Portfolio Resume.pdf"
            download="Insha_Iqbal_CV.pdf"
            className="relative inline-block px-6 py-2 font-semibold text-fuchsia-200 bg-inherit rounded-full transition-all duration-300 hover:bg-cyan-600 hover:scale-105 shadow-lg 
              before:absolute before:inset-0 before:rounded-full before:border before:border-cyan-400 before:animate-pulse before:blur-[2px] before:transition-all"
          >
            🔽 Download CV
          </a>
        </motion.div>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-4 max-w-2xl py-6 font-light tracking-wide text-fuchsia-200 text-2xl font-bold"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
