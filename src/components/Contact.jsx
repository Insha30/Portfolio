import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  return (
    <div className="border-t border-neutral-900 bg-neutral-950 text-white py-20 px-6 sm:px-10 lg:px-32">
      <motion.h2
         whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="m-20 text-center text-4xl"
      >
        Get in touch with me
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          className="w-full lg:w-1/2 space-y-4 text-neutral-400 text-lg"
        >
          <p>{CONTACT.address}</p>
          <p>{CONTACT.phoneNo}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block text-purple-400 border-b border-purple-400 hover:text-purple-300 transition duration-300"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={2}
          className="w-full lg:w-1/2 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-neutral-900 p-3 rounded text-white border border-neutral-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 
            placeholder-glow transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-neutral-900 p-3 rounded text-white border border-neutral-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 
            placeholder-glow transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-neutral-900 p-3 rounded text-white border border-neutral-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 
            placeholder-glow transition"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center gap-6 text-2xl text-neutral-400"
      >
        <a href="https://github.com/Insha30" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/insha-iqbal-718176247" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.instagram.com/syed_insha5/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-white hover:scale-110 transition-transform duration-300" />
        </a>
        <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="hover:text-white hover:scale-110 no-underline transition-transform duration-300" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 text-center text-sm text-neutral-600"
      >
        &copy; {new Date().getFullYear()} Insha Iqbal
      </motion.div>
    </div>
  );
};

export default Contact;
