import { useEffect, useRef } from 'react';
import './Team.css';

const team = [
  {
    name: 'Kevin Alexander Otero Arbelaez',
    role: 'Director General & Asuntos Legales',
    desc: 'Visionario y estratega. Lidera la dirección corporativa y asegura que Pet Protection opere con los más altos estándares legales y éticos.',
    emoji: '⚖️',
    color: '#0066FF',
    initials: 'KO',
    gradient: 'linear-gradient(135deg, #0066FF, #0040AA)',
  },
  {
    name: 'Roberto Carlos Medina Parra',
    role: 'Director Desarrollo Mobile & UX',
    desc: 'Arquitecto de la experiencia digital. Diseña y desarrolla la app móvil premium que conecta familias con veterinarias aliadas.',
    emoji: '📱',
    color: '#00C6B8',
    initials: 'RM',
    gradient: 'linear-gradient(135deg, #00C6B8, #008C84)',
  },
  {
    name: 'Simon David Cruz Suazo',
    role: 'Director Plataforma Clientes & Veterinarias',
    desc: 'Gestor de relaciones estratégicas. Construye y mantiene la red de veterinarias aliadas y garantiza la mejor experiencia al usuario.',
    emoji: '🤝',
    color: '#8B5CF6',
    initials: 'SC',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
  },
  {
    name: 'Javier Leonardo Argoty Roa',
    role: 'Director Backend & Sistemas',
    desc: 'El ingeniero detrás de la arquitectura tecnológica. Garantiza que la plataforma sea robusta, segura y siempre disponible.',
    emoji: '⚙️',
    color: '#F59E0B',
    initials: 'JA',
    gradient: 'linear-gradient(135deg, #F59E0B, #B45309)',
  },
  {
    name: 'Daniela Bolaños',
    role: 'Directora Diseño & Marketing',
    desc: 'Creativa y estratega de marca. Da vida a la identidad visual de Pet Protection y crea campañas que conectan emocionalmente.',
    emoji: '🎨',
    color: '#EF4444',
    initials: 'DB',
    gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)',
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .team-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="team section" id="equipo" ref={sectionRef}>
      <div className="team__bg">
        <div className="team__bg-glow--1" />
        <div className="team__bg-glow--2" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="team__header reveal">
          <span className="text-overline">Equipo Fundador</span>
          <h2 className="text-headline team__title">
            Las personas detrás de{' '}
            <span className="gradient-text">Pet Protection</span>
          </h2>
          <p className="text-body-lg team__subtitle">
            Cinco mentes apasionadas de Armenia, Quindío, unidas por una misión: 
            transformar el cuidado de las mascotas a través de la tecnología.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="team__grid">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="team-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="team-card__avatar" style={{ background: member.gradient }}>
                <span className="team-card__initials">{member.initials}</span>
                <div className="team-card__emoji">{member.emoji}</div>
              </div>

              {/* Info */}
              <div className="team-card__info">
                <div
                  className="team-card__role-badge"
                  style={{ background: `${member.color}15`, color: member.color, border: `1px solid ${member.color}25` }}
                >
                  {member.role}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__desc">{member.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="team-card__accent" style={{ background: member.gradient }} />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="team__trust reveal">
          <div className="team__trust-icon">
            <span className="material-symbols-outlined icon-filled" style={{ fontSize: '28px', color: '#016bff' }}>verified</span>
          </div>
          <div>
            <h4 className="team__trust-title">Equipo verificado y comprometido</h4>
            <p className="team__trust-sub">Todos nuestros fundadores son profesionales registrados con trayectoria verificada en Armenia, Quindío.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
