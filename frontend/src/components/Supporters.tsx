import React from "react";
import { motion } from "framer-motion";

interface Supporter {
  name: string;
  role: string;
}

const Supporters: React.FC<{ supporters: Supporter[] }> = ({ supporters }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Our Supporters
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        These organizations make our work possible through funding, resources, and expertise.
      </motion.p>

      <motion.div
        className="grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {supporters.length > 0 ? (
          supporters.map((s, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>{s.name}</h4>
              <p>{s.role}</p>
              <motion.button
                className="btn secondary"
                style={{ marginTop: 12 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert(`To support Dzaleka CDSS through ${s.name}, please contact them directly or use our Contact form to learn more.`)}
              >
                Learn Support Options
              </motion.button>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            No supporters information available
          </motion.p>
        )}
      </motion.div>

      <motion.div
        style={{ marginTop: 20 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Interested in supporting Dzaleka CDSS? Contact us through the Contact tab to learn how you can help.")}
        >
          Become a supporter
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Supporters;