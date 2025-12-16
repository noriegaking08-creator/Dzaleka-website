import { memo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  active: string;
  setActive: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = memo(({ active, setActive }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const tabs = ["Home", "About", "Achievements", "Supporters", "Gallery", "Developer", "Contact"];

  return (
    <motion.div
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="brand"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="logo"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          DZ
        </motion.div>
        <div>
          <motion.div
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Dzaleka CDSS
          </motion.div>
          <motion.div
            style={{ fontSize: 12, color: "#6b7280" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Community Day Secondary School — Dowa, Malawi
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="navlinks mobile-hide"
        role="tablist"
        aria-label="Main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {tabs.map(t => (
          <motion.button
            key={t}
            className={active === t ? "active" : ""}
            onClick={() => setActive(t)}
            role="tab"
            aria-selected={active === t}
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t}
          </motion.button>
        ))}

        {/* Dark mode toggle button */}
        <motion.button
          className="btn secondary"
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginLeft: '10px',
            padding: '8px 12px',
            fontSize: '14px',
            background: darkMode ? '#4b5563' : '#f4b400',
            color: darkMode ? 'white' : '#222'
          }}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
});

export default Navbar;