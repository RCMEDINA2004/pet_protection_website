import logo from '../assets/logopet-sinFondoC.png';

const PetProtectionLogo = ({ className = 'navbar__logo-img' }) => (
  <img src={logo} alt="Pet Protection" className={className} />
);

export default PetProtectionLogo;
