import { useEffect, useRef } from 'react';
import './TheProblem.css';

const TheProblem = () => {
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
    <section className="problem section" id="el-problema" ref={sectionRef}>
      {/* Background */}
      <div className="problem__bg">
        <div className="problem__bg-glow" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="problem__header reveal">
          <span className="text-overline" style={{ color: '#FF6B6B' }}>El Problema Real</span>
          <h2 className="text-headline problem__title">
            Las emergencias{' '}
            <span style={{ background: 'linear-gradient(135deg,#FF6B6B,#FF9F43)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              no avisan
            </span>
          </h2>
          <p className="text-body-lg problem__subtitle">
            Cada año, miles de familias en Colombia enfrentan la difícil decisión de no poder
            costear una emergencia veterinaria. Pet Protection existe para cambiar esa realidad.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="problem__split">
          {/* Left: The Problem */}
          <div className="problem__side problem__side--bad reveal-left">
            <div className="problem__side-header">
              <div className="problem__side-icon problem__side-icon--bad">
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '32px' }}>sentiment_very_dissatisfied</span>
              </div>
              <h3 className="problem__side-title">Sin Pet Protection</h3>
            </div>

            <div className="problem__pain-points">
              {[
                { icon: 'money_off', text: 'Facturas veterinarias inesperadas de $500.000 – $3.000.000+' },
                { icon: 'schedule', text: 'Horas buscando veterinaria disponible en emergencias' },
                { icon: 'heart_broken', text: 'Angustia de ver sufrir a tu mascota sin poder ayudar' },
                { icon: 'credit_card_off', text: 'Deudas y préstamos para costear cirugías' },
                { icon: 'location_searching', text: 'Sin información de qué clínicas aceptan urgencias' },
              ].map((p, i) => (
                <div key={i} className="problem__pain-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="problem__pain-icon">
                    <span className="material-symbols-outlined icon-filled" style={{ fontSize: '20px', color: '#FF6B6B' }}>{p.icon}</span>
                  </div>
                  <p className="problem__pain-text">{p.text}</p>
                </div>
              ))}
            </div>

            {/* Emotional image */}
            <div className="problem__image">
              <img
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80"
                alt="Familia preocupada por facturas veterinarias sin tener cómo pagar"
              />
              <div className="problem__image-overlay">
                <p className="problem__image-caption">😔 Una situación que ninguna familia debería vivir</p>
              </div>
            </div>
          </div>

          {/* Center Arrow */}
          <div className="problem__arrow reveal">
            <div className="problem__arrow-circle">
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '36px', color: '#00C6B8' }}>arrow_forward</span>
            </div>
            <p className="problem__arrow-label">Con Pet Protection</p>
          </div>

          {/* Right: The Solution */}
          <div className="problem__side problem__side--good reveal-right">
            <div className="problem__side-header">
              <div className="problem__side-icon problem__side-icon--good">
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '32px' }}>sentiment_very_satisfied</span>
              </div>
              <h3 className="problem__side-title">Con Pet Protection</h3>
            </div>

            <div className="problem__pain-points">
              {[
                { icon: 'shield_check', text: 'Cobertura activada en segundos desde tu teléfono' },
                { icon: 'location_on', text: 'Veterinaria aliada más cercana en el mapa al instante' },
                { icon: 'favorite', text: 'Atención inmediata con paz mental total' },
                { icon: 'savings', text: 'Protección financiera sin gastos sorpresa' },
                { icon: 'check_circle', text: 'Red verificada de clínicas de confianza' },
              ].map((p, i) => (
                <div key={i} className="problem__solution-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="problem__solution-icon">
                    <span className="material-symbols-outlined icon-filled" style={{ fontSize: '20px', color: '#00C6B8' }}>{p.icon}</span>
                  </div>
                  <p className="problem__solution-text">{p.text}</p>
                </div>
              ))}
            </div>

            {/* Solution image */}
            <div className="problem__image">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
                alt="Familia feliz con su mascota sana después de usar Pet Protection"
              />
              <div className="problem__image-overlay problem__image-overlay--good">
                <p className="problem__image-caption">😊 Tranquilidad garantizada para toda la familia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stat */}
        <div className="problem__stat-bar reveal">
          {[
            { value: '73%', label: 'de dueños de mascotas no tienen cómo cubrir emergencias veterinarias' },
            { value: '$1.8M', label: 'costo promedio de una cirugía de urgencia en Colombia' },
            { value: '1 de 3', label: 'mascotas no reciben atención oportuna por razones económicas' },
          ].map((s, i) => (
            <div key={i} className="problem__stat">
              <span className="problem__stat-value">{s.value}</span>
              <span className="problem__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
