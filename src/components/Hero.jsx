import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__divider" />
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__bg-blob hero__bg-blob--1" />
        <div className="hero__bg-blob hero__bg-blob--2" />
        <div className="hero__bg-blob hero__bg-blob--3" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__content">
          {/* badge removed per request */}

          <h1 ref={titleRef} className="text-display hero__title">
            Protegemos a quienes te acompañan{' '}
            <span className="gradient-text">incondicionalmente</span>
          </h1>

          <p className="text-body-lg hero__subtitle">
            Planes de protección médica para mascotas con una excelente cobertura. 
            Conectamos tu familia con veterinarias aliadas a través de tecnología de calidad.
          </p>

          <div className="hero__cta-group">
            <a href="#planes" className="btn btn-secondary">
              Conocer Planes
              <span className="material-symbols-outlined" style={{fontSize:'18px'}}>arrow_forward</span>
            </a>
          </div>

          {/* Trust Bar */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-number">2027</span>
              <span className="hero__trust-label">Lanzamiento</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-number">24/7</span>
              <span className="hero__trust-label">Cobertura</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-number">100%</span>
              <span className="hero__trust-label">Gestion Digital</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-number">98%</span>
              <span className="hero__trust-label">Efectividad</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Descubre más</span>
      </div>
    </section>
  );
};

export default Hero;
