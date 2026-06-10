import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/pet_protection_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Quienes Somos', href: '#quienes-somos' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Planes', href: '#planes' },
    { label: 'Equipo De Trabajo', href: '#equipo' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={logo} alt="Pet Protection" className="navbar__logo-img" />
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
