import './Methodology.css';

const methodologySteps = [
  {
    id: 1,
    number: '01',
    title: 'Investigación',
    description: 'Analizamos el negocio, sus procesos y necesidades para identificar oportunidades de mejora, automatización y control.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    number: '02',
    title: 'Desarrollo',
    description: 'Diseñamos y construimos el sistema con buenas prácticas, estructura organizada y enfoque en escalabilidad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    number: '03',
    title: 'Implementación',
    description: 'Ponemos el sistema en funcionamiento y acompañamos al equipo para asegurar una adopción correcta de la plataforma.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    number: '04',
    title: 'Resultado',
    description: 'La empresa obtiene una solución digital organizada, con mayor control y bases tecnológicas que facilitan su crecimiento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const Methodology = () => {
  return (
    <section className="methodology section section-dark" id="metodologia">
      <div className="methodology__container container">
        <div className="methodology__header">
          <div className="methodology__tag">METODOLOGÍA</div>
          <h2 className="methodology__title">
            Proceso estructurado para resultados sólidos
          </h2>
          <p className="methodology__subtitle">
            Trabajamos con una metodología clara que nos permite entender tu negocio, 
            crear soluciones alineadas a su operación y asegurar una implementación exitosa.
          </p>
        </div>

        <div className="methodology__timeline">
          {methodologySteps.map((step, index) => (
            <div 
              key={step.id} 
              className="methodology-step"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="methodology-step__number">{step.number}</div>
              <div className="methodology-step__icon">
                {step.icon}
              </div>
              <div className="methodology-step__content">
                <h3 className="methodology-step__title">{step.title}</h3>
                <p className="methodology-step__description">{step.description}</p>
              </div>
              {index < methodologySteps.length - 1 && (
                <div className="methodology-step__connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="methodology__footer">
          <div className="methodology__values">
            <div className="methodology__value">
              <div className="methodology__value-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="methodology__value-title">Enfoque en calidad</div>
                <div className="methodology__value-text">Cada etapa está diseñada para garantizar excelencia técnica</div>
              </div>
            </div>
            <div className="methodology__value">
              <div className="methodology__value-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="methodology__value-title">Acompañamiento constante</div>
                <div className="methodology__value-text">Trabajamos junto a ti desde el inicio hasta después del lanzamiento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
