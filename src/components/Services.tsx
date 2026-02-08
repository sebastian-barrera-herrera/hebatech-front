import './Services.css';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Sistemas de Gestión de Inventarios',
    description: 'Control total mediante inventarios en tiempo real, trazabilidad de activos y seguimiento histórico completo de cada proceso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#2E5C8A',
    path: '/servicios'
  },
  {
    id: 2,
    title: 'Gestión Comercial',
    description: 'Automatización del ciclo de ventas con pedidos y facturación ágil, plataformas web con acceso remoto y paneles de decisiones basados en datos reales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#4A7BA7',
    path: '/servicios'
  },
  {
    id: 3,
    title: 'Posicionamiento en la Web',
    description: 'Creación de páginas web optimizadas para aumentar la presencia del negocio en internet, llegar a más personas y generar oportunidades de venta.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#5B9BD5',
    path: '/servicios'
  },
  {
    id: 4,
    title: 'Trazabilidad de Procesos',
    description: 'Sistema que permite registrar, controlar y dar seguimiento a cada etapa de un proceso, sabiendo qué se hizo, cuándo y por quién.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#0066CC',
    path: '/servicios'
  },
  {
    id: 5,
    title: 'Automatización de Procesos',
    description: 'Transformamos tareas manuales repetitivas en flujos automatizados que reducen errores, ahorran tiempo y mejoran la eficiencia operativa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#2E5C8A',
    path: '/servicios'
  },
  {
    id: 6,
    title: 'Integraciones Personalizadas',
    description: 'Conectamos tus herramientas existentes con sistemas personalizados para centralizar información y optimizar flujos de trabajo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 8L21 12M21 12L17 16M21 12H13M7 8L3 12M3 12L7 16M3 12H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#4A7BA7', 
    path: '/servicios'
  }
];

const Services = () => {

  const navigate = useNavigate();

  return (
    <section className="services section" id="servicios">
      <div className="services__container container">
        <div className="services__header">
          <div className="services__tag">SERVICIOS</div>
          <h2 className="services__title">
            Soluciones tecnológicas que transforman tu operación
          </h2>
          <p className="services__subtitle">
            Desarrollamos sistemas web, automatizamos procesos y creamos soluciones digitales 
            que optimizan operaciones y organizan la información de tu negocio.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/servicios#${service.id}`)}
            >
              <div className="service-card__icon" style={{ backgroundColor: `${service.color}15` }}>
                <div className="service-card__icon-inner" style={{ color: service.color }}>
                  {service.icon}
                </div>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__arrow" style={{ color: service.color }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
