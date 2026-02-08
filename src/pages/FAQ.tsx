import { useState } from 'react';
import './FAQ.css';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: '¿Qué tipo de empresas pueden usar sus servicios?',
        a: 'Trabajamos con empresas de todos los tamaños y sectores que necesiten digitalizar sus procesos, desde pequeños negocios que están comenzando su transformación digital hasta empresas consolidadas que requieren sistemas más complejos. Nuestras soluciones se adaptan a las necesidades específicas de cada organización.'
      },
      {
        q: '¿Cuánto tiempo toma implementar una solución?',
        a: 'El tiempo de implementación varía según la complejidad del proyecto. Un sistema básico puede estar listo en 4-6 semanas, mientras que proyectos más complejos pueden tomar 3-6 meses. Durante la fase inicial, realizamos un análisis detallado para proporcionarte un cronograma preciso.'
      },
      {
        q: '¿Ofrecen soporte después del lanzamiento?',
        a: 'Sí, ofrecemos soporte continuo después del lanzamiento. Esto incluye mantenimiento correctivo, actualizaciones, capacitación adicional y asistencia técnica. Trabajamos con diferentes planes de soporte que se adaptan a las necesidades de cada cliente.'
      }
    ]
  },
  {
    category: 'Tecnología',
    questions: [
      {
        q: '¿Qué tecnologías utilizan para desarrollar los sistemas?',
        a: 'Utilizamos tecnologías modernas y probadas como React, Node.js, Python, y bases de datos SQL/NoSQL. Siempre elegimos la tecnología más adecuada para cada proyecto, priorizando escalabilidad, seguridad y mantenibilidad a largo plazo.'
      },
      {
        q: '¿Los sistemas son accesibles desde dispositivos móviles?',
        a: 'Sí, todos nuestros sistemas son responsive y funcionan correctamente en computadores, tablets y smartphones. Además, para casos específicos, podemos desarrollar aplicaciones móviles nativas si el proyecto lo requiere.'
      },
      {
        q: '¿Pueden integrarse con nuestros sistemas actuales?',
        a: 'Absolutamente. Desarrollamos integraciones personalizadas con sistemas ERP, CRM, contables y cualquier otra herramienta que uses actualmente. Esto permite centralizar información sin necesidad de reemplazar todo tu ecosistema tecnológico.'
      }
    ]
  },
  {
    category: 'Costos y Proceso',
    questions: [
      {
        q: '¿Cómo funciona el proceso de cotización?',
        a: 'El proceso comienza con una reunión donde analizamos tus necesidades. Luego, realizamos un diagnóstico más profundo de tus procesos actuales. Con esta información, elaboramos una propuesta detallada que incluye alcance, cronograma y costos. Todo es transparente y sin sorpresas.'
      },
      {
        q: '¿Cuál es el costo aproximado de un sistema?',
        a: 'Los costos varían significativamente según la complejidad y funcionalidades requeridas. Un sistema básico puede iniciar desde $5.000.000 COP, mientras que soluciones más complejas pueden superar los $20.000.000 COP. Cada proyecto se cotiza individualmente después del análisis de requerimientos.'
      },
      {
        q: '¿Ofrecen opciones de financiamiento?',
        a: 'Sí, trabajamos con diferentes modalidades de pago que incluyen pagos diferidos y pagos por hitos del proyecto. Analizamos cada caso para encontrar una estructura de pago que funcione para ambas partes.'
      }
    ]
  },
  {
    category: 'Capacitación y Mantenimiento',
    questions: [
      {
        q: '¿Incluyen capacitación para nuestro equipo?',
        a: 'Sí, la capacitación está incluida en todos nuestros proyectos. Realizamos sesiones de entrenamiento para administradores y usuarios, y proporcionamos documentación completa. También ofrecemos capacitaciones adicionales cuando se requieran.'
      },
      {
        q: '¿Qué pasa si necesitamos cambios después del lanzamiento?',
        a: 'Entendemos que los negocios evolucionan. Ofrecemos servicios de mantenimiento evolutivo para agregar nuevas funcionalidades, modificar procesos existentes o escalar el sistema. Trabajamos de forma ágil para implementar mejoras continuamente.'
      },
      {
        q: '¿Cómo manejan la seguridad de los datos?',
        a: 'La seguridad es nuestra prioridad. Implementamos cifrado de datos, autenticación robusta, backups automáticos y seguimos las mejores prácticas de seguridad. Todos nuestros sistemas cumplen con estándares de protección de datos y privacidad.'
      }
    ]
  },
  {
    category: 'Servicios Específicos',
    questions: [
      {
        q: '¿Pueden ayudarnos a migrar datos de nuestro sistema actual?',
        a: 'Sí, ofrecemos servicios de migración de datos. Analizamos la estructura de tus datos actuales, los limpiamos si es necesario, y los migramos de forma segura al nuevo sistema. Incluimos validaciones y pruebas para asegurar integridad completa.'
      },
      {
        q: '¿Desarrollan páginas web además de sistemas empresariales?',
        a: 'Sí, desarrollamos desde páginas web corporativas hasta tiendas en línea y aplicaciones web complejas. Nos especializamos en crear presencia digital efectiva que genera resultados medibles para tu negocio.'
      },
      {
        q: '¿Ofrecen hosting y dominio?',
        a: 'Sí, podemos encargarnos del hosting, dominio y toda la infraestructura técnica necesaria. También trabajamos con la infraestructura del cliente si ya tiene proveedores establecidos. Somos flexibles según tus necesidades.'
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleQuestion = (categoryIndex:any, questionIndex:any) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const navigate = useNavigate();

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero__background">
          <div className="faq-hero__gradient"></div>
        </div>
        <div className="faq-hero__container container">
          <div className="faq-hero__content">
            <div className="faq-hero__tag">PREGUNTAS FRECUENTES</div>
            <h1 className="faq-hero__title">
              ¿Tienes dudas?
              <span className="faq-hero__highlight"> Estamos aquí para ayudarte</span>
            </h1>
            <p className="faq-hero__description">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, 
              procesos y tecnología. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>

            {/* Search */}
            <div className="faq-search">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="faq-search__input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content section">
        <div className="faq-content__container container">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h2 className="faq-category__title">{category.category}</h2>
                <div className="faq-category__questions">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;

                    return (
                      <div 
                        key={questionIndex} 
                        className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                      >
                        <button
                          className="faq-item__question"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <span className="faq-item__question-text">{item.q}</span>
                          <svg 
                            className="faq-item__icon"
                            viewBox="0 0 24 24" 
                            fill="none"
                          >
                            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <div className="faq-item__answer">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="faq-no-results">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>No se encontraron resultados</h3>
              <p>Intenta con otros términos de búsqueda o contacta directamente con nosotros.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta section">
        <div className="faq-cta__container container">
          <div className="faq-cta__content">
            <h2 className="faq-cta__title">¿No encontraste tu respuesta?</h2>
            <p className="faq-cta__text">
              Nuestro equipo está listo para resolver todas tus dudas y ayudarte a 
              encontrar la mejor solución tecnológica para tu empresa.
            </p>
            <button className="faq-cta__button" onClick={() => { navigate('/contacto'); }}>
              Contáctanos
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

export default FAQ;
