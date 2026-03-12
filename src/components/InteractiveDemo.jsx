import { motion } from 'framer-motion';

const InteractiveDemo = () => {
  return (
    <section id="demo" style={{ background: 'hsla(240, 10%, 6%, 1)', padding: '160px 0' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        alignItems: 'center', 
        gap: '80px' 
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ 
            height: '500px', 
            position: 'relative', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Stimulus Simulation */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                border: `1px solid hsla(230, 100%, 65%, ${0.1 - i * 0.015})`,
                borderRadius: '50%'
              }}
            />
          ))}

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
              filter: 'blur(20px)',
              opacity: 0.4
            }}
          />

          <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.5, textTransform: 'uppercase' }}>
              Neural Baseline Tuning...
            </span>
          </div>
        </motion.div>

        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Experience the <span className="gradient-text">Flow</span></h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px' }}>
            Our adaptive engine creates a personalized stimulus environment that keeps you in the optimal "Goldilocks" zone of cognitive challenge.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Latency-free interactions', 'Dynamically adjusted difficulty', 'Biometric feedback simulation'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-main)', fontWeight: 500 }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--accent-secondary)', borderRadius: '50%' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
