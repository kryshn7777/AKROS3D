import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 80px)',
        maxWidth: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          background: '#fff',
          borderRadius: '4px'
        }} />
        <span style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.05em' }}>
          AKROS
        </span>
      </div>

      <nav className="glass" style={{ 
        display: 'flex', 
        gap: '40px', 
        padding: '12px 40px',
        borderRadius: '100px'
      }}>
        {['System', 'Data', 'Path', 'Connect'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            textDecoration: 'none',
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.color = '#fff'}
          onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            {item}
          </a>
        ))}
      </nav>

      <div style={{ width: '100px', textAlign: 'right' }}>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          color: '#fff', 
          fontWeight: 700, 
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }}>
          Menu
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
