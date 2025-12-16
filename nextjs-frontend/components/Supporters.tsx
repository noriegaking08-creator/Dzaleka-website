import { motion } from "framer-motion";

interface SupportersProps {
  supporters: any[];
}

const Supporters: React.FC<SupportersProps> = ({ supporters }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="section-title"
        >
          Our Supporters
        </motion.h2>
        <div className="grid">
          {supporters.map((supporter, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                {supporter.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                {supporter.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Supporters;