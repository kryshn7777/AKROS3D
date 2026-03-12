import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = ({ children, backgroundImage, bgOpacity = 0.3, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="full-viewport" style={{ 
      position: 'relative', 
      overflow: 'hidden',
      background: 'var(--bg-dark)'
    }}>
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ 
          position: 'absolute',
          top: '-20%',
          left: 0,
          width: '100%',
          height: '140%',
          y,
          zIndex: 1
        }}
      >
        <img 
          src={backgroundImage} 
          alt="Section Background" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: bgOpacity
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 20%, var(--bg-dark) 100%)'
        }} />
      </motion.div>

      {/* Foreground Content */}
      <div className="container" style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: reverse ? 'flex-end' : 'flex-start',
        zIndex: 10,
        position: 'relative'
      }}>
        <motion.div 
          style={{ opacity, maxWidth: '600px' }}
          initial={{ x: reverse ? 50 : -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
