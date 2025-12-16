import { motion } from "framer-motion";

interface HomeProps {
  about: any;
}

const Home: React.FC<HomeProps> = ({ about }) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Dzaleka Community Day Secondary School
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Providing quality secondary education to refugees and host communities
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: 24 }}
          >
            <button 
              className="btn"
              onClick={() => alert(about?.overview || "Dzaleka CDSS provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa, Malawi.")}
            >
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0b6e4f, #085a3d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            DZ CDSS
          </motion.div>
        </div>
      </div>

      <div className="card">
        <h3>Our Mission</h3>
        <p>
          Dzaleka Community Day Secondary School provides quality secondary education 
          to children from Burundi, DRC, Ethiopia, Rwanda and Malawian host communities. 
          We're committed to creating a safe and inclusive learning environment.
        </p>
      </div>
    </div>
  );
};

export default Home;