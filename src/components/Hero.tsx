import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
    <section className="hero" id="inicio">
      <div className="hero__background">
        <div className="hero__background-gradient"></div>
        <div className="hero__background-grid"></div>
        <div className="hero__background-shapes">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
        </div>
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Soluciones Tecnológicas Empresariales
          </div>

          <h1 className="hero__title">
            Transformamos tu empresa con
            <span className="hero__title-highlight"> tecnología que impulsa resultados</span>
          </h1>

          <p className="hero__description">
            Desarrollamos sistemas web personalizados que automatizan procesos, 
            centralizan información y fortalecen el control operativo de tu negocio. 
            De procesos manuales a soluciones digitales escalables.
          </p>

          <div className="hero__actions">
            <button className="hero__cta hero__cta--primary" onClick={() => { navigate('/contacto'); }}>
              <span>Digitaliza tu empresa</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="hero__cta hero__cta--secondary"
              onClick={() => { navigate('/servicios'); }}
            >
              Ver servicios
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-number">120+</div>
              <div className="hero__stat-label">Horas ahorradas mensualmente</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">60%</div>
              <div className="hero__stat-label">Reducción de errores</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">35%</div>
              <div className="hero__stat-label">Mejora en eficiencia</div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-card hero__visual-card--1">
            <div className="hero__visual-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="hero__visual-text">
              <div className="hero__visual-title">Gestión Centralizada</div>
              <div className="hero__visual-subtitle">Toda tu información en un solo lugar</div>
            </div>
          </div>

          <div className="hero__visual-card hero__visual-card--2">
            <div className="hero__visual-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero__visual-text">
              <div className="hero__visual-title">Automatización</div>
              <div className="hero__visual-subtitle">Procesos optimizados y rápidos</div>
            </div>
          </div>

          <div className="hero__visual-card hero__visual-card--3">
            <div className="hero__visual-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 19V6L20 3V16M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM20 16C20 17.1046 18.6569 18 17 18C15.3431 18 14 17.1046 14 16C14 14.8954 15.3431 14 17 14C18.6569 14 20 14.8954 20 16ZM9 10V6L20 3V7L9 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero__visual-text">
              <div className="hero__visual-title">Escalabilidad</div>
              <div className="hero__visual-subtitle">Crece sin límites técnicos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
