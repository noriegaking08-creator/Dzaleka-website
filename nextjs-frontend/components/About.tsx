import { motion } from "framer-motion";

interface AboutProps {
  about: any;
  supporters: any[];
}

const About: React.FC<AboutProps> = ({ about, supporters }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            About Dzaleka CDSS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {about?.overview || "Dzaleka CDSS provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa, Malawi."}
          </motion.p>

          <motion.div
            className="info-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div>
              <strong>Hours:</strong> {about?.hours || "Monday–Friday, 07:00–14:00 (reported)"}
            </div>
          </motion.div>

          <motion.div
            className="info-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div>
              <strong>Population Served:</strong> {about?.population_served || "Children from Burundi, DRC, Ethiopia, Rwanda and Malawian host communities"}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            Our Supporters
          </motion.h2>
          <div className="grid">
            {supporters.map((supporter, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 + (index * 0.1) }}
                >
                  {supporter.name}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 + (index * 0.1) }}
                >
                  {supporter.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;