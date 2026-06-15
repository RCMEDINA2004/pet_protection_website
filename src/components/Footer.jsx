import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Producto: ['Beneficios', 'Planes', 'App Móvil', 'Red Veterinaria', 'Cómo Funciona'],
    Compañía: ['Nuestra Historia', 'Equipo Fundador', 'Blog', 'Trabaja con Nosotros'],
    Legal: ['Términos y Condiciones', 'Política de Privacidad', 'Preguntas Frecuentes', 'Contacto'],
  };

  const socials = [
    { icon: 'public',            label: 'Web',       href: '#' },
    { icon: 'alternate_email',   label: 'Email',     href: 'mailto:info@petprotection.co' },
    { icon: 'chat',              label: 'WhatsApp',  href: '#' },
    { icon: 'play_circle',       label: 'YouTube',   href: '#' },
  ];

  return (
    <footer className="footer" id="footer">
      
      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '22px' }}>shield_heart</span>
              </div>
              <span className="footer__logo-text">Pet Protection</span>
            </div>
            <p className="footer__tagline">
              Tecnología con corazón para proteger a quienes te acompañan incondicionalmente.
            </p>
            <div className="footer__location">
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#00C6B8' }}>location_on</span>
              Armenia, Quindío, Colombia
            </div>
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.label} title={s.label}>
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '18px' }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col} className="footer__col">
              <h4 className="footer__col-title">{col}</h4>
              <ul className="footer__col-links">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="footer__link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <div className="footer__contact-items">
              {[
                { icon: 'email', text: 'info@petprotection.co' },
                { icon: 'phone', text: '+57 (606) 000-0000' },
                { icon: 'schedule', text: 'Lun–Vie: 8am–6pm' },
                { icon: 'support_agent', text: 'Emergencias: 24/7' },
              ].map(c => (
                <div key={c.text} className="footer__contact-item">
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#00C6B8' }}>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Mini Trust Badges */}
            <div className="footer__badges">
              <div className="footer__badge">
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '14px', color: '#00C6B8' }}>verified</span>
                Empresa verificada
              </div>
              <div className="footer__badge">
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '14px', color: '#0066FF' }}>lock</span>
                SSL Seguro
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} Pet Protection. Todos los derechos reservados. | Armenia, Quindío, Colombia 🇨🇴
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Términos</a>
            <a href="#" className="footer__bottom-link">Privacidad</a>
            <a href="#" className="footer__bottom-link">Cookies</a>
          </div>
          <div className="footer__made-with">
            Hecho con <span style={{ color: '#EF4444' }}>❤️</span> para las mascotas de Colombia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
