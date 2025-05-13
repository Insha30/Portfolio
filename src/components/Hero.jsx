import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/avatar.jpg'
import { delay, motion } from 'framer-motion';

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
          className="w-64 h-64 rounded-full object-cover mb-8 border-4 border-purple-500 shadow-lg"
        />

        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-6 text-5xl font-thin tracking-tight lg:text-7xl"
        >
          Syed Insha Iqbal
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent font-semibold"
        >
          Full-Stack Developer
        </motion.span>

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
