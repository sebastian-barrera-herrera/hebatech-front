import  { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" fill="currentColor"/>
              <circle cx="25" cy="15" r="3" fill="white"/>
              <circle cx="35" cy="25" r="3" fill="white"/>
              <circle cx="25" cy="35" r="3" fill="white"/>
              <circle cx="15" cy="25" r="3" fill="white"/>
              <circle cx="25" cy="25" r="3" fill="white"/>
              <line x1="25" y1="15" x2="25" y2="25" stroke="white" strokeWidth="2"/>
              <line x1="25" y1="25" x2="35" y2="25" stroke="white" strokeWidth="2"/>
              <line x1="25" y1="25" x2="25" y2="35" stroke="white" strokeWidth="2"/>
              <line x1="25" y1="25" x2="15" y2="25" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <span className="navbar__logo-text" onClick={() => navigate('/')}>
            <strong>HEBA</strong>TECH
          </span>
        </div>

        <button 
          className={`navbar__hamburger ${mobileMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${mobileMenuOpen ? 'navbar__menu--open' : ''}`}>
  
          <li className='navbar__item' onClick={() => navigate('/servicios')}>
              Servicios   
          </li>
          <li className='navbar__item' onClick={() => navigate('/nosotros')}>
              Nosotros
          </li>
          <li className='navbar__item' onClick={() => navigate('/faq')}>
              Preguntas
          </li>
          <li className='nuevo' onClick={() => navigate('/contacto')}>
            <button 
              className="navbar__cta"
            >
              Contacto
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
