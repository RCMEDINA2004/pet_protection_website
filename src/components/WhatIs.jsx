import { useEffect, useRef } from 'react';
import './WhatIs.css';

const stats = [
  { icon: 'shield_heart', value: '+2,400', label: 'Mascotas Protegidas', color: '#0066FF' },
  { icon: 'local_hospital', value: '15+', label: 'Veterinarias Aliadas', color: '#00C6B8' },
  { icon: 'star', value: '98%', label: 'Familias Satisfechas', color: '#F59E0B' },
  { icon: 'bolt', value: '<2min', label: 'Respuesta Promedio', color: '#8B5CF6' },
];

const highlights = [
  { icon: 'smartphone', title: 'App Móvil', desc: 'Gestiona todo desde tu teléfono en segundos.' },
  { icon: 'location_on', title: 'Red Local', desc: 'Veterinarias aliadas en Armenia y Quindío.' },
  { icon: 'health_and_safety', title: 'Cobertura Total', desc: 'Desde consultas hasta emergencias críticas.' },
  { icon: 'support_agent', title: 'Soporte 24/7', desc: 'Siempre disponibles cuando más nos necesitas.' },
];

const WhatIs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whatis section" id="que-es" ref={sectionRef}>
      <div className="whatis__bg">
        <div className="whatis__bg-accent" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="whatis__header reveal">
          <span className="text-overline">¿Qué es Pet Protection?</span>
          <h2 className="text-headline whatis__title">
            Más que un seguro,{' '}
            <span className="gradient-text">tranquilidad</span>{' '}
            para toda la familia
          </h2>
          <p className="text-body-lg whatis__subtitle">
            Pet Protection nace para brindar protección médica inteligente a las mascotas. 
            Permitimos que las familias puedan responder rápidamente ante emergencias veterinarias 
            sin preocuparse por gastos inesperados. Nuestra plataforma conecta usuarios con 
            veterinarias aliadas distribuidas en Armenia, Quindío.
          </p>
        </div>

        {/* Stats Row */}
        <div className="whatis__stats reveal">
          {stats.map((s, i) => (
            <div key={s.label} className="whatis__stat" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="whatis__stat-icon" style={{ background: `${s.color}15`, color: s.color }}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '28px' }}>{s.icon}</span>
              </div>
              <div className="whatis__stat-value">{s.value}</div>
              <div className="whatis__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="whatis__grid">
          {/* Left: Visual Collage */}
          <div className="whatis__visual reveal-left">
            <div className="whatis__img-main">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Veterinaria examinando a un perro golden retriever en clínica moderna"
              />
              <div className="whatis__img-overlay" />
            </div>
            <div className="whatis__img-secondary">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&q=80"
                alt="Familia feliz con su mascota usando la app Pet Protection"
              />
            </div>
            {/* Floating badge */}
            <div className="whatis__float-badge">
              <span style={{ fontSize: '24px' }}>🏥</span>
              <div>
                <p className="whatis__badge-title">Red Veterinaria</p>
                <p className="whatis__badge-sub">Armenia · Quindío</p>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="whatis__highlights reveal-right">
            <p className="whatis__highlights-intro">
              Somos una startup tecnológica con una misión clara: que ninguna mascota se quede 
              sin atención por falta de dinero en una emergencia.
            </p>
            <div className="whatis__highlights-grid">
              {highlights.map((h, i) => (
                <div key={h.title} className="whatis__highlight-card glass-card" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="whatis__highlight-icon">
                    <span className="material-symbols-outlined icon-filled" style={{ fontSize: '24px' }}>{h.icon}</span>
                  </div>
                  <h4 className="whatis__highlight-title">{h.title}</h4>
                  <p className="whatis__highlight-desc">{h.desc}</p>
                </div>
              ))}
            </div>
            <a href="#afiliacion" className="btn btn-primary whatis__cta">
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '18px' }}>favorite</span>
              Protege a tu mascota hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
