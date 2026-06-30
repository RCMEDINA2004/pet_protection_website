import './Footer.css';
import PetProtectionLogo from './PetProtectionLogo';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleAnchorClick = (event, href) => {
    if (!href?.startsWith('#')) return;

    event.preventDefault();
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }
  };

  const links = {
    Compañia: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Planes', href: '#planes' },
      { label: 'Quienes Somos', href: '#que-es' },
      { label: 'Cómo Funciona', href: '#como-funciona' },
    ],
    Medios: [
      { label: 'WhatsApp', href: 'https://wa.me/573146241875?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20c%C3%B3mo%20puedo%20afiliar%20a%20mi%20mascota%20a%20Pet%20Protection.' },
      { label: 'Instagram', href: 'https://www.instagram.com/pet_protection_co/?fbclid=IwY2xjawSv73lleHRuA2FlbQIxMABicmlkETFvZFBxQkU2NGx1VVBiMHpuc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkD8V53eiecrFkbN8Wi8P36hbQSEmitKd6vCA9iKJCk5M94tSFBybcmgEBNW_aem_QCNJgYgah_HLLsrhaBvpAQ' },
      { label: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61581253663595' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@pet_protection_co?_r=1&_t=ZS-97d3j9KghBY' },
    ],
    Legal: ['Términos y Condiciones', 'Política de Privacidad', 'Preguntas Frecuentes'],
  };

  return (
    <footer className="footer" id="footer">

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <PetProtectionLogo />
              </div>
              <span className="footer__logo-text">Pet Protection</span>
            </div>
            <p className="footer__tagline">
              Tecnología creada con el corazón para proteger a quienes te acompañan y te aman incondicionalmente cada dia.
            </p>
            <div className="footer__location">
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#00C6B8' }}>location_on</span>
              Armenia, Quindío, Colombia
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col} className="footer__col">
              <h4 className="footer__col-title">{col}</h4>
              <ul className="footer__col-links">
                {items.map(item => {
                  const label = typeof item === 'string' ? item : item.label;
                  const href = typeof item === 'string'
                    ? col === 'Legal'
                      ? undefined
                      : '#'
                    : item.href;
                  const isExternal = typeof href === 'string' && href.startsWith('http');
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className="footer__link"
                        aria-disabled={col === 'Legal' ? 'true' : undefined}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(event) => handleAnchorClick(event, href)}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <div className="footer__contact-items">
              {[
                { icon: 'email', text: 'admin@petprotection.co' },
                { icon: 'phone', text: '+57 314 6241875' },
                { icon: 'schedule', text: 'Emergencias: 24/7' },
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
                Empresa Certificada
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
            © {year} Pet Protection SAS. Todos los derechos reservados. | Armenia, Quindío, Colombia CO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
