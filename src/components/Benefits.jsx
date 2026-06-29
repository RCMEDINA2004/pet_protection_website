import { useEffect, useRef } from 'react';
import './Benefits.css';

const benefits = [
  {
    icon: 'history',
    title: 'Servicio De Historial Médico Digital',
    desc: 'Toda la información médica de tu mascota en un solo lugar. Consulta diagnósticos, tratamientos, vacunas y recomendaciones cuando lo necesites.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    icon: 'pets',
    title: 'Cobertura para todas las Etapas de Vida',
    desc: 'Desde cachorros y gatitos hasta mascotas adultas y senior, nuestros planes acompañan a tu mejor amigo en cada etapa de su vida.',
    color: '#0066FF',
    bg: 'rgba(0,102,255,0.1)',
  },
  {
    icon: 'family_restroom',
    title: 'Tranquilidad para toda la Familia',
    desc: 'Disfruta cada momento con tu mascota sabiendo que cuentas con respaldo profesional ante cualquier eventualidad, reduciendo preocupaciones y gastos inesperados.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: 'smartphone',
    title: 'App Móvil Premium',
    desc: 'Gestiona tu cobertura, agenda citas y localiza veterinarias desde una app elegante e intuitiva.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.1)',
  },
  {
    icon: 'savings',
    title: 'Protección Financiera',
    desc: 'Olvídate de gastos sorpresa. Tu plan cubre emergencias y te protege del estrés económico.',
    color: '#00C6B8',
    bg: 'rgba(0,198,184,0.1)',
  },
  {
    icon: 'medical_services',
    title: 'Planes Flexibles',
    desc: 'Elige la cobertura que mejor se adapte a las necesidades de tu mascota y a tu presupuesto, con opciones diseñadas para diferentes estilos de vida.',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.1)',
  },
];

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .benefit-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="benefits section" id="beneficios" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="benefits__header reveal">
          <span className="text-overline">Beneficios</span>
          <h2 className="text-headline benefits__title">
            Todo lo que tu mascota{' '}
            <span className="gradient-text">merece</span>
          </h2>
          <p className="text-body-lg benefits__subtitle">
            Cada beneficio fue diseñado pensando en las familias colombianas y en lo que
            realmente necesitan cuando más importa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="benefit-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Hover glow */}
              <div className="benefit-card__glow" style={{ background: b.bg }} />

              <div className="benefit-card__icon" style={{ background: b.bg, color: b.color }}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '30px' }}>{b.icon}</span>
              </div>

              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="benefits__quote reveal">
          <div className="benefits__quote-line" />
          <p className="benefits__quote-text">
            "Porque tu mascota no es solo un animal — es parte de tu familia."
          </p>
          <div className="benefits__quote-line" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
