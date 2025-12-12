import React, { useState } from "react";
import { motion } from "framer-motion";

const Developer: React.FC = () => {
  const [showTechDetails, setShowTechDetails] = useState(false);

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
        Developer Information
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        This website was developed with care to showcase the important work of Dzaleka Community Day Secondary School.
      </motion.p>

      <motion.div
        style={{ marginTop: 20 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="info-row">
          <div>👨‍💻</div>
          <div>
            <div style={{ fontWeight: 600 }}>Developer</div>
            <div>Ndizeye Noriega</div>
          </div>
        </div>

        <div className="info-row" style={{ marginTop: 12 }}>
          <div>🛠️</div>
          <div>
            <div style={{ fontWeight: 600 }}>Technologies Used</div>
            <div>
              {showTechDetails ? (
                <>
                  React, TypeScript, HTML, CSS, Bootstrap, Framer Motion, Flask (Python), Node.js
                </>
              ) : (
                <>
                  React, TypeScript, HTML, CSS, Flask (Python)
                </>
              )}
            </div>
          </div>
        </div>

        <div className="info-row" style={{ marginTop: 12 }}>
          <div>🎯</div>
          <div>
            <div style={{ fontWeight: 600 }}>Purpose</div>
            <div>Built with intent to honour teachers and students of Dzaleka CDSS</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Thank you for your interest! For technical inquiries about this website, please use the Contact section to get in touch.")}
        >
          Contact Developer
        </motion.button>

        <motion.button
          className="btn secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowTechDetails(!showTechDetails)}
        >
          {showTechDetails ? 'Show Less' : 'Show More'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Developer;