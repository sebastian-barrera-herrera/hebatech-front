import './Benefits.css';

const benefitsData = [
  {
    id: 1,
    metric: '120+',
    unit: 'horas',
    title: 'Horas operativas ahorradas',
    description: 'Reducción mensual de tiempo en tareas manuales mediante automatización de procesos empresariales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  // {
  //   id: 2,
  //   metric: '60%',
  //   unit: '',
  //   title: 'Reducción de errores operativos',
  //   description: 'Disminución significativa de errores humanos gracias a la digitalización y validación automática de datos.',
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none">
  //       <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //     </svg>
  //   )
  // },
  {
    id: 3,
    metric: '35%',
    unit: '',
    title: 'Mejora en eficiencia de ventas',
    description: 'Aumento en productividad del equipo comercial mediante automatización del proceso de ventas y seguimiento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    metric: '50%',
    unit: '',
    title: 'Mejora en control operativo',
    description: 'Mayor visibilidad y trazabilidad de procesos internos para una gestión más efectiva y toma de decisiones informada.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const Benefits = () => {
  return (
    <section className="benefits section" id="beneficios">
      <div className="benefits__container container">
        <div className="benefits__content">
          <div className="benefits__text">
            <div className="benefits__tag">BENEFICIOS</div>
            <h2 className="benefits__title">
              Resultados medibles que impulsan tu crecimiento
            </h2>
            <p className="benefits__description">
              Nuestras soluciones tecnológicas generan impacto real y cuantificable 
              en la operación de tu empresa. Transformamos procesos manuales en sistemas 
              eficientes que te permiten crecer de forma ordenada y escalable.
            </p>
            <div className="benefits__features">
              <div className="benefits__feature">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Información centralizada y accesible</span>
              </div>
              <div className="benefits__feature">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Procesos optimizados y automatizados</span>
              </div>
              <div className="benefits__feature">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Decisiones basadas en datos reales</span>
              </div>
              <div className="benefits__feature">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Escalabilidad sin límites técnicos</span>
              </div>
            </div>
          </div>

          <div className="benefits__stats">
            {benefitsData.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className="benefit-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="benefit-card__icon">
                  {benefit.icon}
                </div>
                <div className="benefit-card__metric">
                  {benefit.metric}
                  {benefit.unit && <span className="benefit-card__unit">{benefit.unit}</span>}
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
