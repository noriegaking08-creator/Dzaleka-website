import React, { useState } from "react";
import { motion } from "framer-motion";
import { postContact, ContactPayload } from "../Api";

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactPayload>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    if (form.phone && !/^\+?[\d\s\-\(\)]+$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus(null);
    try {
      const res = await postContact(form);
      setStatus({ ok: true, msg: res.message || "Your message has been sent successfully!" });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || 'An error occurred' });
    } finally {
      setLoading(false);
    }
  };

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
    show: { y: 0, opacity: 1 }
  };

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
        Contact & Support
      </motion.h3>

      <motion.p
        className="kicker"
        variants={item}
      >
        Send a message to the school administration or to the developer to offer support.
      </motion.p>

      <motion.form
        onSubmit={submit}
        style={{ display: 'grid', gap: 16, marginTop: 16 }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={{
              borderColor: errors.name ? '#ef4444' : '',
              boxShadow: errors.name ? '0 0 0 3px rgba(239, 68, 68, 0.2)' : ''
            }}
          />
          {errors.name && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}
            >
              {errors.name}
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={item}>
          <input
            placeholder="Email (optional)"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={{
              borderColor: errors.email ? '#ef4444' : '',
              boxShadow: errors.email ? '0 0 0 3px rgba(239, 68, 68, 0.2)' : ''
            }}
          />
          {errors.email && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}
            >
              {errors.email}
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={item}>
          <input
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            style={{
              borderColor: errors.phone ? '#ef4444' : '',
              boxShadow: errors.phone ? '0 0 0 3px rgba(239, 68, 68, 0.2)' : ''
            }}
          />
          {errors.phone && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}
            >
              {errors.phone}
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={item}>
          <textarea
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{
              borderColor: errors.message ? '#ef4444' : '',
              boxShadow: errors.message ? '0 0 0 3px rgba(239, 68, 68, 0.2)' : ''
            }}
          />
          {errors.message && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}
            >
              {errors.message}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}
          variants={item}
        >
          <motion.button
            className="btn"
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                🔄
              </motion.span>
            ) : 'Send message'}
          </motion.button>

          {status && (
            <motion.div
              style={{
                color: status.ok ? '#10b981' : '#ef4444',
                padding: '8px 12px',
                borderRadius: '8px',
                background: status.ok ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: status.ok ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {status.msg}
            </motion.div>
          )}
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;