import { motion } from 'framer-motion';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
  const frontEndSkill = 85;
  const backEndSkill = 75;

  const skillCircleStyle =
    'w-64 h-64 bg-neutral-900 rounded-full shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] transition duration-500 transform hover:scale-105 flex items-center justify-center';

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        My &nbsp;<span className='text-neutral-500'>Skillset</span>
      </motion.h1>

      <div className='flex flex-wrap justify-center gap-16'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className={skillCircleStyle}
        >
          <CircularProgressbarWithChildren
            value={frontEndSkill}
            styles={buildStyles({
              pathColor: '#38bdf8',
              trailColor: '#1f2937',
            })}
          >
            <div className='text-center'>
              <h2 className='text-xl font-semibold text-cyan-300'>Front-End</h2>
              <p className='text-3xl font-bold text-white mt-2'>{frontEndSkill}%</p>
            </div>
          </CircularProgressbarWithChildren>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className={skillCircleStyle.replace('text-cyan-300', 'text-purple-400')}
        >
          <CircularProgressbarWithChildren
            value={backEndSkill}
            styles={buildStyles({
              pathColor: '#a78bfa',
              trailColor: '#1f2937',
            })}
          >
            <div className='text-center'>
              <h2 className='text-xl font-semibold text-purple-400'>Back-End</h2>
              <p className='text-3xl font-bold text-white mt-2'>{backEndSkill}%</p>
            </div>
          </CircularProgressbarWithChildren>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
