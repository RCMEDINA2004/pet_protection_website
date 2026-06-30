import { useState, useEffect } from 'react';
import './Navbar.css';
import PetProtectionLogo from './PetProtectionLogo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Quienes Somos', href: '#que-es' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Planes', href: '#planes' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-icon">
            <PetProtectionLogo />
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
