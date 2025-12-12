import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";
import Lightbox from "./Lightbox";

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[] | null>(null);
  const [idx, setIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch((process.env.REACT_APP_API_BASE || "http://localhost:5000") + "/api/gallery")
      .then(r => r.json()).then(j => {
        if (mounted && j.status === "ok") setImages(j.data);
      }).catch(() => { if (mounted) setImages([]); });
    return () => { mounted = false; };
  }, []);

  // autoplay
  useEffect(() => {
    if (!images || images.length === 0) return;
    timer.current = setInterval(() => setIdx(i => (i + 1) % images.length), 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [images]);

  if (images === null) return <div className="card center"><Spinner /></div>;
  if (images && images.length === 0) return <div className="card">No images available</div>;

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const changeSlide = (direction: number) => {
    if (!images) return;

    // Reset the timer when user interacts
    if (timer.current) {
      clearInterval(timer.current);
    }

    setIdx((prev) => (prev + direction + images.length) % images.length);

    // Restart the timer after interaction
    timer.current = setInterval(() => setIdx(i => (i + 1) % (images?.length || 1)), 4500);
  };

  const openLightbox = (index: number) => {
    setIdx(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (images) {
      setIdx((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images) {
      setIdx((prev) => (prev - 1 + images.length) % images.length);
    }
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
        Gallery
      </motion.h3>

      <div className="slider" role="region" aria-label="Image gallery">
        <div className="slides">
          {images && (
            <AnimatePresence initial={false} custom={idx}>
              <motion.div
                key={idx}
                className="slide"
                style={{ backgroundImage: `url(${images[idx].url})`, cursor: 'pointer' }}
                custom={idx}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    changeSlide(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    changeSlide(-1);
                  }
                }}
                onClick={() => openLightbox(idx)}
              >
                <div style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.35))', width: '100%', padding: 12, borderRadius: 8 }}>
                  <div style={{ fontSize: 16 }}>{images[idx].caption}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="carousel-indicators" aria-hidden>
          {images && images.map((_, i) => (
            <div
              key={i}
              className={`indicator ${i === idx ? 'active' : ''}`}
              onClick={() => {
                if (timer.current) {
                  clearInterval(timer.current);
                }
                setIdx(i);
                timer.current = setInterval(() => setIdx(j => (j + 1) % (images?.length || 1)), 4500);
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        style={{ marginTop: 12, display: 'flex', gap: 12 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("To request high-resolution photos, contact the school or partners listed in the Supporters tab.")}
        >
          Request high-res photos
        </motion.button>

        <motion.button
          className="btn secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLightboxOpen(true)}
        >
          View All Photos
        </motion.button>
      </motion.div>

      {/* Navigation buttons for larger screens */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 15 }}>
        <motion.button
          className="btn"
          style={{ minWidth: 40, padding: '8px 12px', background: 'rgba(0,0,0,0.5)' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeSlide(-1)}
        >
          &lt;
        </motion.button>
        <motion.button
          className="btn"
          style={{ minWidth: 40, padding: '8px 12px', background: 'rgba(0,0,0,0.5)' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeSlide(1)}
        >
          &gt;
        </motion.button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && images && (
        <Lightbox
          images={images}
          currentIndex={idx}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </motion.div>
  );
};

export default Gallery;