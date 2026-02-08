import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" fill="currentColor" />
                  <circle cx="25" cy="15" r="3" fill="white" />
                  <circle cx="35" cy="25" r="3" fill="white" />
                  <circle cx="25" cy="35" r="3" fill="white" />
                  <circle cx="15" cy="25" r="3" fill="white" />
                  <circle cx="25" cy="25" r="3" fill="white" />
                  <line x1="25" y1="15" x2="25" y2="25" stroke="white" strokeWidth="2" />
                  <line x1="25" y1="25" x2="35" y2="25" stroke="white" strokeWidth="2" />
                  <line x1="25" y1="25" x2="25" y2="35" stroke="white" strokeWidth="2" />
                  <line x1="25" y1="25" x2="15" y2="25" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span className="footer__logo-text">
                <strong>HEBA</strong>TECH
              </span>
            </div>
            <p className="footer__tagline">
              Soluciones tecnológicas empresariales que transforman procesos,
              organizan información y fortalecen el crecimiento de tu negocio.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Empresa</h4>
              <ul className="footer__list">
                <li>Eficiencia operativa</li>
                <li>Control y trazabilidad</li>
                <li>Reducción de costos</li>
                <li>Transformación digital</li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Servicios</h4>
              <ul className="footer__list">
                <li><button>Sistemas de Gestión</button></li>
                <li><button>Automatización</button></li>
                <li><button>Desarrollo Web</button></li>
                <li><button>Integraciones</button></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Contacto</h4>
              <ul className="footer__list footer__list--contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.5114 13.6728 12.4886 13.6728 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>hebatechsoft@outlook.com</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>+57 314 812 6301</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9C13.039 21.275 12.529 21.487 12 21.487C11.471 21.487 10.961 21.275 10.586 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3 12 3C13.5822 3 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Medellín, Colombia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} HebaTech. Todos los derechos reservados.
            </p>
            <div className="footer__social">


              <a href="https://www.facebook.com/profile.php?id=61587193170655" aria-label="Facebook" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5C10.5 7.1 12 5.8 14.2 5.8c1 0 2 .18 2 .18v2.2h-1.13c-1.12 0-1.47.7-1.47 1.42V11H18l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/hebatechsoft" aria-label="Instagram" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM17.5 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
                </svg>
              </a>


              <a href="https://wa.me/573148126301" aria-label="WhatsApp" className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.64 15.03L2 22l5.12-1.34A10 10 0 1 0 12 2zm5.03 13.53c-.22.62-1.27 1.17-1.78 1.25-.48.08-1.1.12-1.77-.1-.41-.13-.94-.3-1.62-.6-2.86-1.24-4.72-4.17-4.86-4.36-.14-.19-1.16-1.55-1.16-2.95s.74-2.1 1-2.39c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.66.5.25.62.85 2.14.92 2.29.07.15.12.33.02.52-.1.19-.15.33-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.64 2.02 1.13.99 2.08 1.3 2.38 1.45.3.15.48.13.66-.08.18-.21.76-.88.96-1.18.2-.3.41-.25.69-.15.28.1 1.77.83 2.08.98.31.15.51.22.59.35.08.13.08.75-.14 1.37z" />
                </svg>
              </a>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
