import React from "react";
import { motion } from "framer-motion";

interface AboutData {
  overview: string;
  hours?: string;
  population_served?: string;
}

const Home: React.FC<{ about: AboutData | null }> = ({ about }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-left" variants={item}>
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Dzaleka Community Day Secondary School
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Dowa, Malawi
          </motion.p>
          <motion.p
            style={{ marginTop: 16 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {about?.overview || "Providing secondary education to refugees and host community students in Dzaleka Refugee Camp."}
          </motion.p>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 20 }}
            variants={container}
          >
            <motion.div className="info-row" variants={item}>
              <div>📚</div>
              <div>
                <div style={{ fontWeight: 600 }}>Education</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>Secondary education for refugees & local community</div>
              </div>
            </motion.div>

            <motion.div className="info-row" variants={item}>
              <div>🌍</div>
              <div>
                <div style={{ fontWeight: 600 }}>Community</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>Serving diverse populations from multiple countries</div>
              </div>
            </motion.div>

            <motion.div className="info-row" variants={item}>
              <div>🎓</div>
              <div>
                <div style={{ fontWeight: 600 }}>Achievements</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>Award-winning academic & technology programs</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div style={{
            width: '100%',
            height: 240,
            background: 'linear-gradient(135deg, var(--primary), #0f8b66)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 18
          }}>
            School Image
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ display: 'flex', gap: 12, marginTop: 20 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Welcome! You can explore more about our school through the navigation menu.")}
        >
          Say hello to Dzaleka CDSS
        </motion.button>
        <motion.button
          className="btn secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Thank you for your interest in supporting our school. Please visit the Contact section to get in touch with us!")}>
          I want to support
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;