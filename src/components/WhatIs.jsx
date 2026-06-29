import { useEffect, useRef } from 'react';
import './WhatIs.css';
import photo_1 from '../assets/photo_1.jpg';
import photo_2 from '../assets/photo_2.jpg';

const stats = [
  { icon: 'health_and_safety', value: 'Disponible', label: 'Se brinda proteccion a mascotas del hogar, perros y gatos.', color: '#0066FF' },
  { icon: 'local_hospital', value: 'Alcance', label: 'Veterinarias de confianza, red de aliados comprometidos con la salud animal en toda la ciudad.', color: '#00C6B8' },
  { icon: 'star', value: 'Manejo', label: 'Llevarás el control completo de tu mascota y cuidarás de su salud en cada momento.', color: '#F59E0B' },
  { icon: 'bolt', value: 'Rapidez', label: 'Atención ágil, respuesta rápida y acompañamiento oportuno.', color: '#8B5CF6' },
];

const highlights = [
  { icon: 'smartphone', title: 'App Móvil', desc: 'Gestiona todo desde tu teléfono en segundos.' },
  { icon: 'location_on', title: 'Red Local', desc: 'Veterinarias aliadas en Armenia y Quindío.' },
  { icon: 'health_and_safety', title: 'Servicios', desc: 'Desde consultas hasta emergencias críticas.' },
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
           Pet Protection nace de una verdad dolorosa: el amor por una mascota, aunque incondicional, muchas veces depende de la capacidad económica. 
           Una emergencia veterinaria puede amenazar tanto la salud del animal como la estabilidad financiera del hogar. Por ello, buscamos transformar gastos imprevistos y elevados en cuotas accesibles y predecibles, 
           garantizando atención médica de calidad sin generar estrés financiero.

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
                src={photo_1}
                alt="Veterinaria examinando a un perro golden retriever en clínica moderna"
              />
              <div className="whatis__img-overlay" />
            </div>
            <div className="whatis__img-secondary">
              <img
                src={photo_2}
                alt="Familia feliz con su mascota usando la app Pet Protection"
              />
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="whatis__highlights reveal-right">
            <p className="whatis__highlights-intro">
              Somos una startup tecnológica con una misión clara: Acompañar el cuidado preventivo de tu mascota y asegurar
              que ninguna se quede sin atención por falta de dinero en una emergencia.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
