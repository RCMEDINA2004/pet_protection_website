import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Laura Gómez',
    pet: 'Max · Labrador',
    emoji: '🐕',
    stars: 5,
    text: 'Max tuvo una emergencia un domingo a la noche. En menos de 3 minutos encontré una veterinaria aliada en el mapa, presenté mi cobertura y lo atendieron de inmediato. Sin Pet Protection, no sé qué hubiera hecho.',
    location: 'Armenia, Quindío',
    color: '#0066FF',
  },
  {
    name: 'Camilo Ríos',
    pet: 'Michi · Gato Persa',
    emoji: '🐈',
    stars: 5,
    text: 'Llevaba meses preocupado por los gastos veterinarios. Con el plan Premium de Pet Protection, mi gato tiene todos sus chequeos y vacunas al día. La app es increíblemente fácil de usar.',
    location: 'Montenegro, Quindío',
    color: '#00C6B8',
  },
  {
    name: 'Valentina Torres',
    pet: 'Lola & Buba · Beagles',
    emoji: '🐶',
    stars: 5,
    text: 'Tengo dos perros y siempre me preocupaba el doble gasto. El plan personalizado de Pet Protection me permitió cubrir a las dos con un solo plan. El equipo es súper atento y profesional.',
    location: 'Calarcá, Quindío',
    color: '#8B5CF6',
  },
  {
    name: 'Andrés Mejía',
    pet: 'Rocky · Bulldog',
    emoji: '🐾',
    stars: 5,
    text: 'Rocky necesitó una cirugía programada que costaba más de $2 millones. Con mi plan Premium, quedó cubierta. Pet Protection literalmente salvó a mi perro y me salvó a mí del estrés financiero.',
    location: 'Armenia, Quindío',
    color: '#F59E0B',
  },
  {
    name: 'Sofía Herrera',
    pet: 'Canela · Golden Retriever',
    emoji: '🦮',
    stars: 5,
    text: 'Lo que más me gusta es la app. Ver el estado de cobertura de Canela en tiempo real, agendar citas y encontrar la veterinaria más cercana, todo en un solo lugar. ¡Tecnología al servicio del amor!',
    location: 'Circasia, Quindío',
    color: '#EF4444',
  },
];

const StarRating = ({ stars }) => (
  <div className="testimonial__stars">
    {Array.from({ length: stars }).map((_, i) => (
      <span key={i} className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#F59E0B' }}>
        star
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goTo = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive(idx);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials section" id="testimonios" ref={sectionRef}>
      <div className="testimonials__bg">
        <div className="testimonials__bg-glow" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="testimonials__header reveal">
          <span className="text-overline">Testimonios</span>
          <h2 className="text-headline testimonials__title">
            Familias que ya{' '}
            <span className="gradient-text">confían en nosotros</span>
          </h2>
          <p className="text-body-lg testimonials__subtitle">
            Historias reales de familias de Armenia y el Quindío que transformaron
            la forma de cuidar a sus mascotas.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="testimonials__featured reveal">
          <div className={`testimonials__card ${isAnimating ? 'testimonials__card--animating' : ''}`}>
            {/* Quote Icon */}
            <div className="testimonials__quote-icon">
              <span style={{ fontSize: '40px', opacity: 0.15 }}>"</span>
            </div>

            <StarRating stars={t.stars} />

            <p className="testimonials__text">"{t.text}"</p>

            <div className="testimonials__author">
              <div className="testimonials__avatar" style={{ background: `${t.color}20`, color: t.color }}>
                <span style={{ fontSize: '28px' }}>{t.emoji}</span>
              </div>
              <div>
                <p className="testimonials__name">{t.name}</p>
                <p className="testimonials__pet">{t.pet} · {t.location}</p>
              </div>
              <div className="testimonials__verified">
                <span className="material-symbols-outlined icon-filled" style={{ color: '#00C6B8', fontSize: '20px' }}>verified</span>
                Verificado
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={prev} aria-label="Anterior">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${active === i ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button className="testimonials__nav-btn" onClick={next} aria-label="Siguiente">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Mini Cards Row */}
        <div className="testimonials__mini-row reveal">
          {testimonials.map((test, i) => (
            <button
              key={test.name}
              className={`testimonials__mini ${active === i ? 'testimonials__mini--active' : ''}`}
              onClick={() => goTo(i)}
              style={active === i ? { borderColor: test.color } : {}}
            >
              <span style={{ fontSize: '24px' }}>{test.emoji}</span>
              <div className="testimonials__mini-info">
                <p className="testimonials__mini-name">{test.name}</p>
                <p className="testimonials__mini-pet">{test.pet}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="testimonials__trust reveal">
          <div className="testimonials__trust-item">
            <span className="material-symbols-outlined icon-filled" style={{ color: '#F59E0B', fontSize: '28px' }}>star</span>
            <div>
              <p className="testimonials__trust-score">4.9 / 5.0</p>
              <p className="testimonials__trust-label">Calificación promedio</p>
            </div>
          </div>
          <div className="testimonials__trust-divider" />
          <div className="testimonials__trust-item">
            <span className="material-symbols-outlined icon-filled" style={{ color: '#0066FF', fontSize: '28px' }}>thumb_up</span>
            <div>
              <p className="testimonials__trust-score">98%</p>
              <p className="testimonials__trust-label">Familias satisfechas</p>
            </div>
          </div>
          <div className="testimonials__trust-divider" />
          <div className="testimonials__trust-item">
            <span className="material-symbols-outlined icon-filled" style={{ color: '#00C6B8', fontSize: '28px' }}>chat_bubble</span>
            <div>
              <p className="testimonials__trust-score">+240</p>
              <p className="testimonials__trust-label">Reseñas verificadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
