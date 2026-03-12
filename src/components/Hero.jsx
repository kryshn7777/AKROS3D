import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="full-viewport" style={{ 
      position: 'relative', 
      overflow: 'hidden',
      background: '#000',
      textAlign: 'center'
    }}>
      {/* Cinematic Background Asset */}
      <motion.div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          y,
          scale,
          zIndex: 1
        }}
        className="floating-asset"
      >
        <img 
          src="/akros_hero_awe.png" 
          alt="Neural Core" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: 0.6
          }} 
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(to top, var(--bg-dark), transparent)'
        }} />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ zIndex: 10, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <span style={{ 
          letterSpacing: '0.4em', 
          fontSize: '14px', 
          color: 'var(--accent-primary)',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: '32px',
          display: 'block'
        }}>
          Unlocking the Neural Horizon
        </span>
        <h1 className="ultra-title">
          Akros <span className="gradient-text">Era</span>
        </h1>
        <p style={{ 
          maxWidth: '600px', 
          margin: '0 auto 48px', 
          fontSize: '20px', 
          color: 'var(--text-muted)',
          lineHeight: 1.6
        }}>
          The definitive cognitive architecture for high-performance minds. 
          Step into a state of absolute mental clarity.
        </p>
        <button className="btn-hero">Enter the Flow</button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 20
        }}
      >
        <div style={{ 
          width: '1px', 
          height: '80px', 
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' 
        }} />
      </motion.div>
    </section>
  );
};

export default Hero;
