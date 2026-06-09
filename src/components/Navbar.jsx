import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Planes', href: '#planes' },
    { label: 'Equipo', href: '#equipo' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-icon">
            <span className="material-symbols-outlined icon-filled">shield_heart</span>
          </div>
          <span className="navbar__logo-text">Pet Protection</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#afiliacion" className="btn btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
          <span className="material-symbols-outlined" style={{fontSize:'18px'}}>pets</span>
          Quiero Afiliarme
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#afiliacion" className="btn btn-primary" style={{marginTop: '8px', width: '100%', justifyContent:'center'}} onClick={() => setMenuOpen(false)}>
            Quiero Afiliarme
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
