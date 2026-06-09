import { useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: 'pets',
    title: 'Tu mascota necesita atención',
    desc: 'Ya sea una consulta de rutina o una emergencia inesperada. No importa la hora.',
    color: '#0066FF',
  },
  {
    number: '02',
    icon: 'smartphone',
    title: 'Abres la App Pet Protection',
    desc: 'Ingresa a tu perfil en segundos. Tu cobertura activa está lista para usarse.',
    color: '#00C6B8',
  },
  {
    number: '03',
    icon: 'location_on',
    title: 'Encuentras la veterinaria aliada más cercana',
    desc: 'El mapa en tiempo real te muestra todas las clínicas aliadas disponibles cerca de ti.',
    color: '#8B5CF6',
  },
  {
    number: '04',
    icon: 'medical_services',
    title: 'Tu mascota recibe atención',
    desc: 'Presentas tu cobertura digital y listo. Sin papeleo, sin demoras, sin preocupaciones.',
    color: '#F59E0B',
  },
];

const HowItWorks = () => {
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
    <section className="how section" id="como-funciona" ref={sectionRef}>
      <div className="how__bg">
        <div className="how__bg-gradient" />
        <div className="how__bg-grid" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="how__header reveal">
          <span className="text-overline">Cómo Funciona</span>
          <h2 className="text-headline how__title">
            Tranquilidad en solo{' '}
            <span className="gradient-text">4 pasos</span>
          </h2>
          <p className="text-body-lg how__subtitle">
            Hemos simplificado la asistencia veterinaria para que tú solo te preocupes por
            darle amor a tu mejor amigo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="how__steps">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="how__step reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Connector Line (between cards) */}
              {i < steps.length - 1 && (
                <div className="how__connector">
                  <div className="how__connector-line" />
                  <span className="material-symbols-outlined how__connector-arrow">arrow_forward</span>
                </div>
              )}

              <div className="how__step-card glass-card">
                {/* Number badge */}
                <div className="how__step-number" style={{ color: step.color }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="how__step-icon" style={{ background: `${step.color}15`, color: step.color }}>
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '32px' }}>
                    {step.icon}
                  </span>
                </div>

                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.desc}</p>

                {/* Step indicator dot */}
                <div className="how__step-dot" style={{ background: step.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="how__cta-banner reveal">
          <div className="how__cta-left">
            <span style={{ fontSize: '36px' }}>🚀</span>
            <div>
              <h3 className="how__cta-title">¿Listo para darle la mejor protección?</h3>
              <p className="how__cta-sub">Proceso de afiliación 100% digital. Empieza en menos de 5 minutos.</p>
            </div>
          </div>
          <div className="how__cta-actions">
            <a href="#afiliacion" className="btn btn-primary">
              Afiliarme Ahora
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
            <a href="#planes" className="btn how__btn-outline">
              Ver Planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
