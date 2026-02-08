import { useState } from 'react';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 'inventarios',
    title: 'Sistemas de Gestión de Inventarios',
    shortDescription: 'Control total de tu inventario en tiempo real',
    icon: '📦',
    features: [
      'Seguimiento en tiempo real de stock',
      'Trazabilidad completa de movimientos',
      'Alertas automáticas de stock mínimo',
      'Control de múltiples bodegas',
      'Historial completo de transacciones',
      'Reportes personalizados',
      'Integración con sistemas contables',
      'Códigos de barras y QR'
    ],
    benefits: [
      'Reducción de pérdidas por falta de control',
      'Optimización de espacio de almacenamiento',
      'Decisiones informadas de reabastecimiento',
      'Auditorías más rápidas y precisas'
    ],
    useCases: [
      'Empresas de distribución',
      'Retail y comercio',
      'Industrias manufactureras',
      'Empresas de servicios con activos'
    ]
  },
  {
    id: 'comercial',
    title: 'Gestión Comercial',
    shortDescription: 'Automatiza tu ciclo de ventas completo',
    icon: '📊',
    features: [
      'CRM integrado para gestión de clientes',
      'Cotizaciones y pedidos digitales',
      'Facturación electrónica',
      'Seguimiento de oportunidades',
      'Panel de ventas en tiempo real',
      'Comisiones automatizadas',
      'Acceso remoto desde cualquier dispositivo',
      'Integración con medios de pago'
    ],
    benefits: [
      'Aumento en conversión de oportunidades',
      'Reducción de tiempos de respuesta',
      'Visibilidad completa del embudo de ventas',
      'Mejor experiencia para clientes'
    ],
    useCases: [
      'Equipos comerciales',
      'Empresas B2B',
      'Comercio electrónico',
      'Empresas de servicios'
    ]
  },
  {
    id: 'web',
    title: 'Posicionamiento en la Web',
    shortDescription: 'Presencia digital profesional y efectiva',
    icon: '🌐',
    features: [
      'Diseño responsive y moderno',
      'Optimización SEO',
      'Velocidad de carga optimizada',
      'Integración con redes sociales',
      'Formularios de contacto',
      'Google Analytics integrado',
      'Certificado SSL incluido',
      'Panel de administración fácil'
    ],
    benefits: [
      'Mayor alcance y visibilidad',
      'Generación de leads calificados',
      'Credibilidad profesional',
      'Disponibilidad 24/7'
    ],
    useCases: [
      'Empresas sin presencia digital',
      'Negocios locales expandiéndose',
      'Profesionales independientes',
      'Startups y nuevos emprendimientos'
    ]
  },
  {
    id: 'trazabilidad',
    title: 'Trazabilidad de Procesos',
    shortDescription: 'Control y seguimiento de cada etapa operativa',
    icon: '📋',
    features: [
      'Registro de cada paso del proceso',
      'Asignación de responsables',
      'Timestamps automáticos',
      'Estados y workflow personalizables',
      'Notificaciones automáticas',
      'Historial completo auditable',
      'Documentación adjunta',
      'Reportes de cumplimiento'
    ],
    benefits: [
      'Claridad total de responsabilidades',
      'Identificación rápida de cuellos de botella',
      'Auditorías simplificadas',
      'Mejora continua basada en datos'
    ],
    useCases: [
      'Procesos de producción',
      'Gestión de proyectos',
      'Control de calidad',
      'Procesos administrativos'
    ]
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos',
    shortDescription: 'Elimina tareas manuales y repetitivas',
    icon: '⚡',
    features: [
      'Flujos de trabajo automatizados',
      'Validación automática de datos',
      'Notificaciones programadas',
      'Generación automática de documentos',
      'Sincronización entre sistemas',
      'Reglas de negocio personalizables',
      'Triggers y acciones automáticas',
      'Integración con herramientas existentes'
    ],
    benefits: [
      'Ahorro significativo de tiempo',
      'Reducción drástica de errores humanos',
      'Capacidad de escalar sin aumentar personal',
      'Consistencia en la ejecución'
    ],
    useCases: [
      'Procesos administrativos repetitivos',
      'Flujos de aprobación',
      'Sincronización de datos',
      'Generación de reportes'
    ]
  },
  {
    id: 'integraciones',
    title: 'Integraciones Personalizadas',
    shortDescription: 'Conecta todas tus herramientas en un ecosistema unificado',
    icon: '🔗',
    features: [
      'APIs personalizadas',
      'Conectores con sistemas populares',
      'Sincronización bidireccional de datos',
      'Middleware de integración',
      'Webhooks y eventos en tiempo real',
      'Transformación de datos',
      'Manejo de errores robusto',
      'Documentación técnica completa'
    ],
    benefits: [
      'Eliminación de duplicación de datos',
      'Flujo de información centralizado',
      'Mejor aprovechamiento de herramientas existentes',
      'Reducción de trabajo manual de migración'
    ],
    useCases: [
      'Empresas con múltiples sistemas',
      'Migración desde sistemas legacy',
      'Unificación de fuentes de datos',
      'Ecosistemas tecnológicos complejos'
    ]
  }
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-page-hero">
        <div className="services-page-hero__background">
          <div className="services-page-hero__gradient"></div>
        </div>
        <div className="services-page-hero__container container">
          <div className="services-page-hero__tag">NUESTROS SERVICIOS</div>
          <h1 className="services-page-hero__title">
            Soluciones tecnológicas que
            <span className="services-page-hero__highlight"> transforman tu operación</span>
          </h1>
          <p className="services-page-hero__description">
            Desarrollamos sistemas personalizados que automatizan, organizan y optimizan 
            cada área de tu empresa. De procesos manuales a soluciones digitales escalables.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-nav section">
        <div className="services-nav__container container">
          <div className="services-nav__grid">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`services-nav__card ${activeService.id === service.id ? 'services-nav__card--active' : ''}`}
                onClick={() => setActiveService(service)}
              >
                <div className="services-nav__icon">{service.icon}</div>
                <h3 className="services-nav__title">{service.title}</h3>
                <p className="services-nav__description">{service.shortDescription}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="service-detail section">
        <div className="service-detail__container container">
          <div className="service-detail__header">
            <div className="service-detail__icon">{activeService.icon}</div>
            <h2 className="service-detail__title">{activeService.title}</h2>
          </div>

          <div className="service-detail__content">
            {/* Features */}
            <div className="service-detail__section">
              <h3 className="service-detail__section-title">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Funcionalidades Principales
              </h3>
              <ul className="service-detail__list">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="service-detail__list-item">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="service-detail__section">
              <h3 className="service-detail__section-title">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Beneficios Clave
              </h3>
              <div className="service-detail__benefits">
                {activeService.benefits.map((benefit, index) => (
                  <div key={index} className="service-detail__benefit-card">
                    <div className="service-detail__benefit-number">0{index + 1}</div>
                    <p className="service-detail__benefit-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="service-detail__section">
              <h3 className="service-detail__section-title">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21H21M19 21H14M5 21H3M5 21H10M10 21V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21M10 21H14M9 7H10M9 11H10M14 7H15M14 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ideal Para
              </h3>
              <div className="service-detail__use-cases">
                {activeService.useCases.map((useCase, index) => (
                  <div key={index} className="service-detail__use-case">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="service-detail__cta">
            <h3 className="service-detail__cta-title">
              ¿Listo para implementar {activeService.title}?
            </h3>
            <p className="service-detail__cta-text">
              Hablemos sobre cómo esta solución puede transformar tu operación
            </p>
            <button className="service-detail__cta-button" onClick={() => { navigate('/contacto'); }}>
              Solicitar información
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
