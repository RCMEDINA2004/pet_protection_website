import { useEffect, useRef, useState } from 'react';
import './Plans.css';

const plans = [
  {
    id: 'standard',
    name: 'Estándar',
    tagline: 'Esencial para el cuidado preventivo',
    icon: 'shield',
    color: '#4A6080',
    featured: false,
    features: [
      'Consultas veterinarias limitadas',
      'Plan de vacunación anual',
      'Desparasitación interna externa 2 veces al año',
      'Tratamiento total por urgencias menores',
      'Tratamiento parcial por urgencias mayores',
      'Exámenes de laboratorio preventivos',
    ],
    missing: ['Cirugías de alta complejidad', 'Estetica y Spa', 'Hospitalizacoones en UCI'],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Cobertura integral y tranquilidad absoluta',
    icon: 'verified',
    color: '#0066FF',
    featured: true,
    features: [
      'Todo lo del plan Estándar',
      'Consultas veterinarias ilimitadas',
      'Consultas especializadas',
      'Estética y Spa',
      '⁠Profilaxis Dental',
      '⁠Vacunación completa',
      '⁠Cirugías de alta complejidad',
      '⁠Hospitalización en UCI',
    ],
    missing: [],
  },
  {
    id: 'custom',
    name: 'Personalizado',
    tagline: 'Configurado a tu medida',
    icon: 'tune',
    color: '#00C6B8',
    featured: false,
    features: [
      'Todo lo del plan Premium',
      'Servicios extra ajustables',
      'Especialidad en mascotas adultas y senior',
      'Cuidado integral para mascotas con condiciones crónicas',
      'Cobertura para múltiples mascotas',
      'Reportes de salud mensuales',
    ],
    missing: [],
  },
];

const Plans = () => {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .plan-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="plans section" id="planes" ref={sectionRef}>
      <div className="plans__bg">
        <div className="plans__bg-glow" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="plans__header reveal">
          <span className="text-overline">Nuestros Planes</span>
          <h2 className="text-headline plans__title">
            Protección diseñada para cada{' '}
            <span className="gradient-text">familia</span>
          </h2>
          <p className="text-body-lg plans__subtitle">
            Sin precios ocultos, sin letras pequeñas. Elige el nivel de protección
            que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Cards */}
        <div className="plans__grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`plan-card reveal ${plan.featured ? 'plan-card--featured' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              onMouseEnter={() => setHovered(plan.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="plan-card__badge">
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '14px' }}>star</span>
                  Más Recomendado
                </div>
              )}

              {/* Icon + Name */}
              <div className="plan-card__header">
                <div className="plan-card__icon" style={{ background: `${plan.color}18`, color: plan.color }}>
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '28px' }}>{plan.icon}</span>
                </div>
                <div>
                  <h3 className="plan-card__name">{plan.name}</h3>
                  <p className="plan-card__tagline">{plan.tagline}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="plan-card__divider" style={{ background: `${plan.color}30` }} />

              {/* Features */}
              <ul className="plan-card__features">
                {plan.features.map(f => (
                  <li key={f} className="plan-card__feature">
                    <span className="material-symbols-outlined icon-filled plan-card__check" style={{ color: plan.color }}>
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="plan-card__feature plan-card__feature--missing">
                    <span className="material-symbols-outlined icon-filled plan-card__check" style={{ color: '#9CA3AF' }}>
                      cancel
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#afiliacion"
                className={`plan-card__cta ${plan.featured ? 'plan-card__cta--featured' : ''}`}
                style={
                  plan.featured
                    ? {}
                    : { borderColor: `${plan.color}50`, color: plan.color }
                }
              >
                Solicitar Información
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="plans__note reveal">
          <span className="material-symbols-outlined icon-filled" style={{ color: '#00C6B8', fontSize: '20px' }}>info</span>
          <p>Todos los planes incluyen acceso a la App Pet Protection. Precios disponibles al contactar a nuestro equipo.</p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
