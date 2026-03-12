import { motion } from 'framer-motion';

const features = [
  {
    title: 'Precision Scheduling',
    description: 'AI-driven stimulus scheduling that adapts to your unique cognitive baseline in real-time.',
    icon: '⚡'
  },
  {
    title: 'Institutional Analytics',
    description: 'Clinical-grade data visualization tracking your progress across 12 distinct neural dimensions.',
    icon: '📊'
  },
  {
    title: 'Narrative Growth',
    description: 'A structured 7-day path that transforms your mental capacity through curated session modules.',
    icon: '📈'
  }
];

const FeatureGrid = () => {
  return (
    <section id="training" className="container">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Built for <span className="gradient-text">Excellence</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Every interaction in AKROS is engineered to minimize cognitive load while maximizing neural stimulation.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '32px' 
      }}>
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass"
            style={{ padding: '48px', transition: 'border-color 0.3s' }}
            whileHover={{ y: -10, borderColor: 'var(--accent-primary)' }}
          >
            <div style={{ 
              fontSize: '40px', 
              marginBottom: '24px',
              background: 'hsla(0,0%,100%,0.05)',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px'
            }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
