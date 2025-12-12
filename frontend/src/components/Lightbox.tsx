import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { id: number; url: string; caption: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!images.length) return null;

  const currentImage = images[currentImageIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div 
          className="modal"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            padding: 0,
            overflow: 'hidden',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ position: 'relative', width: '100%', height: '70vh', background: 'black' }}>
            <img 
              src={currentImage.url} 
              alt={currentImage.caption}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                display: 'block'
              }}
            />
            
            {/* Navigation buttons */}
            <button
              style={{
                position: 'absolute',
                top: '50%',
                left: 20,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 50,
                height: 50,
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              &lt;
            </button>
            
            <button
              style={{
                position: 'absolute',
                top: '50%',
                right: 20,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 50,
                height: 50,
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              &gt;
            </button>
            
            {/* Close button */}
            <button
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          
          {/* Caption */}
          <div style={{ 
            padding: '15px 20px', 
            background: 'rgba(0,0,0,0.7)', 
            color: 'white',
            textAlign: 'center'
          }}>
            {currentImage.caption}
          </div>
          
          {/* Image counter */}
          <div style={{ 
            padding: '5px 20px', 
            background: 'rgba(0,0,0,0.5)', 
            color: 'white',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {currentImageIndex + 1} of {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;