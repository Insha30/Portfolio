import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const socialLinks = [
  { Icon: FaGithub, link: 'https://github.com/Insha30' },
  { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/insha-iqbal-718176247' },
  { Icon: FaInstagram, link: 'https://instagram.com/syed_insha5' },
  { Icon: FaEnvelope, link: 'mailto:inshaiqbal1998@gmail.com' },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
 
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={logo}
          alt="logo"
          className="mx-2 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.5)]"
        />
      </motion.div>

      <motion.div
        className="m-8 flex items-center justify-center gap-5 text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map(({ Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
