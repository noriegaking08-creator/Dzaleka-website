import { motion } from "framer-motion";

interface AchievementsProps {
  achievements: any[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="section-title"
        >
          Our Achievements
        </motion.h2>

        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id || index}
            className="achievement-item"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              {achievement.year}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
            >
              {achievement.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + (index * 0.1) }}
            >
              {achievement.summary}
            </motion.p>
            {achievement.details && (
              <motion.p
                style={{ marginTop: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <em>{achievement.details}</em>
              </motion.p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;