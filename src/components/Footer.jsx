import './Footer.css';
import logo from '../assets/logopet-sinFondoC.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Producto: ['Inicio ', 'Planes', 'Quienes Somos', 'Cómo Funciona'],
    Compañía: ['Nuestra Historia', 'Equipo Fundador', 'Testimonios', 'Linea del tiempo'],
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
                <img src={logo} alt="Pet Protection" className="navbar__logo-img" />
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
