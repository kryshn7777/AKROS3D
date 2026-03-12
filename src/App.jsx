import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';

const Footer = () => (
  <footer style={{ padding: 'var(--spacing-2) 0', borderTop: '1px solid var(--glass-border)', background: '#000' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '8px' }} />
        <span style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '-0.05em' }}>AKROS</span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '0.05em' }}>© 2026 AKROS PERFORMANCE LAB. PRIVACY / TERMS</p>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main style={{ background: 'var(--bg-dark)' }}>
      <Header />
      <Hero />
      
      <ParallaxSection backgroundImage="/akros_data.png">
        <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}>
          Phase 01 / Core Logic
        </span>
        <h2 style={{ fontSize: '120px', marginTop: '24px', marginBottom: '32px' }}>
          Neural <br /><span className="gradient-text">Precision</span>
        </h2>
        <p style={{ fontSize: '24px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          Clinical-grade stimulus scheduling that maps your synaptic baseline with absolute accuracy. 
          Experience a system that evolves with your consciousness.
        </p>
      </ParallaxSection>

      <ParallaxSection backgroundImage="/akros_narrative.png" reverse bgOpacity={0.4}>
        <span style={{ color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}>
          Phase 02 / The Ascent
        </span>
        <h2 style={{ fontSize: '120px', marginTop: '24px', marginBottom: '32px' }}>
          Infinite <br /><span className="gradient-text">Journey</span>
        </h2>
        <p style={{ fontSize: '24px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          A structured 7-day narrative path designed to break through cognitive plateaus. 
          Reach the peak of your performance through curated mental modules.
        </p>
      </ParallaxSection>

      <section style={{ padding: 'var(--spacing-2) 0', textAlign: 'center', background: 'linear-gradient(to bottom, #000, #050508)' }}>
        <div className="container">
          <h2 style={{ fontSize: '80px', marginBottom: '64px' }}>Ready to <span className="gradient-text">Transcend?</span></h2>
          <button className="btn-hero">Get Started Today</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
