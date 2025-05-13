import { motion } from 'framer-motion';
import {
  IoLogoHtml5, IoLogoCss3, IoLogoJavascript
} from "react-icons/io5";
import {
  FaReact, FaJava, FaBootstrap, FaNodeJs, FaGithub
} from "react-icons/fa";
import {
  RiTailwindCssFill
} from "react-icons/ri";
import {
  SiMongodb, SiCloudinary, SiSocketdotio, SiFramer, SiVite, SiNetlify
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { Icon: IoLogoHtml5, color: 'text-yellow-500' },
  { Icon: IoLogoCss3, color: 'text-blue-500' },
  { Icon: IoLogoJavascript, color: 'text-yellow-400' },
  { Icon: FaJava, color: 'text-white' },
  { Icon: FaReact, color: 'text-cyan-400' },
  { Icon: FaBootstrap, color: 'text-indigo-500' },
  { Icon: RiTailwindCssFill, color: 'text-sky-400' },
  { Icon: SiMongodb, color: 'text-green-500' },
  { Icon: GrMysql, color: 'text-blue-400' },
  { Icon: FaNodeJs, color: 'text-green-400' },
  { Icon: SiCloudinary, color: 'text-cyan-300' },
  { Icon: SiSocketdotio, color: 'text-purple-400' },
  { Icon: VscVscode, color: 'text-blue-600' },
  { Icon: FaGithub, color: 'text-gray-400' },
  { Icon: SiFramer, color: 'text-pink-400' },
  { Icon: SiVite, color: 'text-purple-400' },
  { Icon: SiNetlify, color: 'text-blue-300' },
];

const fadeVariant = (index) => {
  const isEven = index % 2 === 0;
  return {
    hidden: { opacity: 0, x: isEven ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.05 },
    },
  };
};

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Tech Stack</motion.h2>

      <div className="mx-auto max-w-6xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
        {techStack.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            variants={fadeVariant(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-transform duration-200"
          >
            <Icon className={`text-6xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
