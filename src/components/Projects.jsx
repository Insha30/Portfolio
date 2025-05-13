import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='mb-16 flex flex-wrap lg:justify-center items-center gap-6 px-4 sm:px-8 lg:px-20'
          >

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-56 h-56 object-cover rounded-lg border border-neutral-700 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(147,51,234,0.3)] transition-all duration-300 ease-in-out"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className='mb-2 font-semibold text-white text-xl'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>

              <div className='mb-4'>
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className='mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-600 transition-colors"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
