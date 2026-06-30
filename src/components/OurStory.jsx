import { useEffect, useRef } from 'react';
import './OurStory.css';

const timeline = [
  {
    year: 'Principios de 2025',
    icon: 'lightbulb',
    title: 'Nace una idea brillante',
    desc: 'Un grupo de ingenieros de software en Armenia, Quindío, observó que muchas familias amaban profundamente a sus mascotas, pero una emergencia veterinaria podía convertirse en una carga económica devastadora.',
    color: '#0066FF',
  },
  {
    year: 'Mediados de 2025',
    icon: 'gavel',
    title: 'Se constituye legalmente Pet Protection',
    desc: 'Decidieron crear y constituir la empresa legalmente, con ayuda de abogados y asesorias, Pet Protection dejó de ser un sueño y se volvió una realidad.',
    color: '#00C6B8',
  },
  {
    year: 'Finales de 2025',
    icon: 'handshake',
    title: 'Primeras posibles alianzas con veterinarias',
    desc: 'Visitamos las principales clínicas veterinarias de Armenia, Quindío. Nuestra red comenzó a tomar forma, conectando familias con atención de calidad.',
    color: '#8B5CF6',
  },
  {
    year: '2026 - 2027',
    icon: 'rocket_launch',
    title: 'Plataforma de proteccion avanzada',
    desc: 'Desarrollo de la plataforma de protección médica para mascotas más innovadora de la región, con una app móvil premium y una misión que transforma vidas cada día. Proximo lanzamiento mediados de 2027.',
    color: '#F59E0B',
  },
];

const OurStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="story section" id="historia" ref={sectionRef}>
      <div className="story__bg">
        <div className="story__bg-glow story__bg-glow--1" />
        <div className="story__bg-glow story__bg-glow--2" />
        <div className="story__bg-grid" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="story__header reveal">
          <span className="text-overline">Nuestra Historia</span>
          <h2 className="text-headline story__title">
            Cómo nació{' '}
            <span className="gradient-text">Pet Protection</span>
          </h2>
          <p className="text-body-lg story__subtitle">
            Un grupo de ingenieros y diseñadores observó una realidad: muchas familias aman
            profundamente a sus mascotas, pero una emergencia veterinaria puede convertirse
            en una carga económica inesperada.
          </p>
        </div>

        {/* Timeline */}
        <div className="story__timeline">
          <div className="story__timeline-line" />

          {timeline.map((item, i) => (
            <div
              key={item.year + i}
              className={`story__timeline-item reveal ${i % 2 === 0 ? 'story__timeline-item--left' : 'story__timeline-item--right'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Content Card */}
              <div className="story__card glass-card" style={{ borderColor: `${item.color}20` }}>
                <div className="story__card-year" style={{ color: item.color }}>{item.year}</div>
                <h3 className="story__card-title">{item.title}</h3>
                <p className="story__card-desc">{item.desc}</p>
              </div>

              {/* Center Node */}
              <div className="story__node" style={{ background: item.color, boxShadow: `0 0 24px ${item.color}50` }}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '22px', color: '#fff' }}>{item.icon}</span>
              </div>

              {/* Spacer */}
              <div className="story__card-spacer" />
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="story__callout reveal">
          <div className="story__callout-inner">
            <div className="story__callout-content">
              <h4 className="story__callout-title">
                "Nuestra misión es que ninguna mascota se quede sin proteccion por falta de dinero en una emergencia."
              </h4>
              <p className="story__callout-sub">-Equipo Fundador, Pet Protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
