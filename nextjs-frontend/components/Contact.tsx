import { useState } from 'react';
import { motion } from "framer-motion";
import { postContact } from '../utils/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await postContact(formData);
      if (result.status === 'ok') {
        setSubmitMessage('Thank you — your message has been received.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage(result.message || 'There was an issue submitting your form.');
      }
    } catch (error: any) {
      setSubmitMessage(error.message || 'There was an error submitting your form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Contact Us
          </motion.h2>
          {submitMessage && (
            <motion.div
              className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {submitMessage}
            </motion.div>
          )}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <label htmlFor="name" style={{ display: 'block', marginBottom: 8 }}>Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <label htmlFor="email" style={{ display: 'block', marginBottom: 8 }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <label htmlFor="phone" style={{ display: 'block', marginBottom: 8 }}>Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            >
              <label htmlFor="message" style={{ display: 'block', marginBottom: 8 }}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              className="btn"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;