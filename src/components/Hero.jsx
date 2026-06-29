import { useEffect, useRef } from 'react';
import './Hero.css';

const AppMockup = () => (
  <div className="hero__mockup-wrapper animate-float">
    <div className="hero__phone">
      <div className="hero__phone-notch" />
      <div className="hero__phone-screen">
        {/* Header */}
        <div className="app__header">
          <div>
            <p className="app__greeting">Buenos días 👋</p>
            <h4 className="app__user">Familia García</h4>
          </div>
          <div className="app__avatar">
            <span className="material-symbols-outlined icon-filled" style={{color:'#0066FF', fontSize:'26px'}}>account_circle</span>
          </div>
        </div>

        {/* Coverage Card */}
        <div className="app__coverage">
          <div className="app__coverage-top">
            <div>
              <p className="app__coverage-label">Cobertura Activa</p>
              <h3 className="app__pet-name">🐾 Luna</h3>
            </div>
            <span className="app__status-badge">ACTIVA</span>
          </div>
          <div className="app__progress-bar">
            <div className="app__progress-fill" style={{width:'75%'}} />
          </div>
          <p className="app__progress-text">75% cobertura disponible este mes</p>
        </div>

        {/* Quick Actions */}
        <div className="app__actions">
          {[
            {icon:'local_hospital', label:'Urgencias', color:'#0066FF'},
            {icon:'calendar_today', label:'Citas', color:'#00C6B8'},
            {icon:'medication', label:'Recetas', color:'#8B5CF6'},
            {icon:'location_on', label:'Mapa', color:'#F59E0B'},
          ].map(a => (
            <div key={a.label} className="app__action">
              <div className="app__action-icon" style={{background: `${a.color}18`, color: a.color}}>
                <span className="material-symbols-outlined icon-filled" style={{fontSize:'20px'}}>{a.icon}</span>
              </div>
              <span className="app__action-label">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Nearby Vet */}
        <div className="app__nearby">
          <p className="app__nearby-title">🗺 Veterinaria más cercana</p>
          <div className="app__vet-card">
            <div className="app__vet-icon">🏥</div>
            <div>
              <p className="app__vet-name">Clínica VetPremium</p>
              <p className="app__vet-dist">0.8 km • Abierto ahora</p>
            </div>
            <div className="app__vet-arrow">
              <span className="material-symbols-outlined" style={{fontSize:'16px'}}>arrow_forward_ios</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Cards */}
    <div className="hero__float-card hero__float-card--left">
      <div className="float-card__icon" style={{background:'rgba(0,198,184,0.15)', color:'#00C6B8'}}>
        <span className="material-symbols-outlined icon-filled">check_circle</span>
      </div>
      <div>
        <p className="float-card__title">Consulta Agendada</p>
        <p className="float-card__sub">Hoy, 3:30 PM</p>
      </div>
    </div>

    <div className="hero__float-card hero__float-card--right">
      <span className="float-card__emoji">🐕</span>
      <div>
        <p className="float-card__title">+2,400 mascotas</p>
        <p className="float-card__sub">protegidas hoy</p>
      </div>
    </div>
  </div>
);

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

        {/* Right: App Mockup */}
        <div className="hero__mockup">
          <AppMockup />
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
