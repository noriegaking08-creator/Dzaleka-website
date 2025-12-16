import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fetchJSON } from "../utils/api";

const Gallery: React.FC = () => {
  const [images, setImages] = useState<any[]>([
    { id: 1, url: "/static/images/placeholder1.svg", caption: "Students and donation boxes at Dzaleka CDSS" },
    { id: 2, url: "/static/images/placeholder2.svg", caption: "Computer lab students learning digital skills" },
    { id: 3, url: "/static/images/placeholder3.svg", caption: "Large group photo of Dzaleka CDSS students" },
    { id: 4, url: "/static/images/placeholder4.svg", caption: "Students exploring 3D-printing / STEM tools" }
  ]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load images from API on component mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetchJSON('/api/gallery');
        if (response.status === 'ok' && response.data) {
          setImages(response.data);
        }
      } catch (error) {
        console.error('Error loading gallery images:', error);
        // Keep placeholder images if API fails
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, loading]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="card center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="section-title"
      >
        Gallery
      </motion.h2>
      <motion.div
        className="slider"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          animate={{ x: -currentIndex * 100 + '%' }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="slide"
              style={{
                backgroundImage: `url(${image.url})`,
                opacity: index === currentIndex ? 1 : 0,
                position: index !== currentIndex ? 'absolute' : 'relative'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.95
              }}
              transition={{ duration: 0.7 }}
              drag={index === currentIndex ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) { // swipe threshold
                  if (info.offset.x > 0) {
                    // Swipe right - go to previous
                    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                    setCurrentIndex(prevIndex);
                  } else {
                    // Swipe left - go to next
                    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                    setCurrentIndex(nextIndex);
                  }
                }
              }}
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {image.caption}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="carousel-indicators"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                backgroundColor: index === currentIndex ? 'var(--accent)' : 'rgba(255, 255, 255, 0.45)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;