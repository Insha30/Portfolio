import { CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';

const fadeVariant = (index) => {
  const isEven = index % 2 === 0;
  return {
    hidden: { opacity: 0, x: isEven ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };
};

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 sm:px-8 lg:px-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>

      <div className="space-y-16">
        {CERTIFICATES.map((certificate, index) => (
          <motion.div
            key={index}
            variants={fadeVariant(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`flex flex-col items-center lg:items-start lg:flex-row ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } gap-8`}
          >
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg shadow-lg max-h-64 object-contain"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <p className="mb-2 text-sm text-neutral-400">{certificate.year}</p>
              <h6 className="mb-2 text-xl font-semibold text-white">
                {certificate.title}
              </h6>
              <p className="mb-2 text-neutral-300">{certificate.description}</p>
              <p className="text-sm text-purple-200">Issued by: {certificate.issuedBy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
