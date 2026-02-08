import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {

  const navigate = useNavigate();

  return (
    <section className="cta section">
      <div className="cta__container container">
        <div className="cta__background">
          <div className="cta__shape cta__shape--1"></div>
          <div className="cta__shape cta__shape--2"></div>
          <div className="cta__shape cta__shape--3"></div>
        </div>

        <div className="cta__content">
          <div className="cta__badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Tu mejor decisión</span>
          </div>

          <h2 className="cta__title">
            ¿Listo para transformar tu empresa con tecnología?
          </h2>

          <p className="cta__description">
            Trabajamos contigo para crear soluciones que organizan, automatizan y 
            fortalecen tu operación. Deja atrás los procesos manuales y da el paso 
            hacia la transformación digital.
          </p>

          <div className="cta__actions">
            <button className="cta__button cta__button--primary" onClick={() => {navigate('/contacto'); }}>
              <span>Solicita tu sistema</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="cta__button cta__button--secondary"
              onClick={() => { navigate('/contacto'); }}
            >
              Contáctanos
            </button>
          </div>

          <div className="cta__trust">
            <div className="cta__trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Soluciones personalizadas</span>
            </div>
            <div className="cta__trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Acompañamiento en cada etapa</span>
            </div>
            <div className="cta__trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Resultados medibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
