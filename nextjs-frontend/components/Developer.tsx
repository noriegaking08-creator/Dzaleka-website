import { motion } from "framer-motion";

const Developer: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="card">
          <h2>About the Developer</h2>
          <p>
            This website was developed by Ndizeye Noriega as a contribution to support 
            Dzaleka Community Day Secondary School in providing quality education 
            to refugee and host community students.
          </p>
          
          <div style={{ marginTop: 20 }}>
            <h4>Contact Information</h4>
            <p><strong>Email:</strong> ndizeyenoriega@gmail.com</p>
            <p><strong>Phone:</strong> +265 995 208 178</p>
          </div>
        </div>

        <div className="card">
          <h3>Mission</h3>
          <p>
            The purpose of this website is to showcase the important work being done 
            at Dzaleka CDSS and to provide an online presence for this vital educational institution.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Developer;