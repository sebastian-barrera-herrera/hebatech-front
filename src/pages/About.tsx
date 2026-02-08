import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background">
          <div className="about-hero__gradient"></div>
        </div>
        <div className="about-hero__container container">
          <div className="about-hero__content">
            <div className="about-hero__tag">ACERCA DE NOSOTROS</div>
            <h1 className="about-hero__title">
              Transformamos empresas con
              <span className="about-hero__highlight"> tecnología que genera resultados</span>
            </h1>
            <p className="about-hero__description">
              Somos un equipo especializado en crear soluciones digitales que fortalecen 
              la estructura operativa de las empresas, permitiéndoles crecer de forma 
              ordenada, segura y escalable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="mission-vision__container container">
          <div className="mission-vision__grid">
            <div className="mission-vision__card">
              <div className="mission-vision__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="mission-vision__title">Misión</h2>
              <p className="mission-vision__text">
                Brindar soluciones tecnológicas reales que ayuden a las empresas a 
                fortalecer su presencia digital, optimizar procesos y mejorar su eficiencia 
                operativa mediante herramientas modernas, seguras y escalables.
              </p>
            </div>

            <div className="mission-vision__card">
              <div className="mission-vision__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="mission-vision__title">Visión</h2>
              <p className="mission-vision__text">
                Ser una empresa referente en transformación digital, reconocida por su 
                calidad técnica, compromiso con los resultados y capacidad de convertir 
                ideas de negocio en soluciones tecnológicas funcionales y sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="our-story__container container">
          <div className="our-story__content">
            <div className="our-story__text">
              <div className="our-story__tag">NUESTRA HISTORIA</div>
              <h2 className="our-story__title">
                Nacimos para resolver problemas reales de empresas reales
              </h2>
              <p className="our-story__description">
                HebaTech nació de la necesidad de ayudar a empresas que han crecido pero 
                siguen operando con procesos manuales y desorganizados. Vimos cómo negocios 
                con gran potencial perdían oportunidades por falta de herramientas digitales 
                que les permitieran escalar.
              </p>
              <p className="our-story__description">
                Nos especializamos en entender la operación real de cada empresa para diseñar 
                sistemas que no solo funcionan técnicamente, sino que resuelven problemas 
                específicos y se adaptan a cómo trabajan las personas.
              </p>
              <p className="our-story__description">
                Hoy trabajamos con empresas de diferentes sectores, ayudándolas a digitalizar 
                sus procesos, centralizar su información y tomar decisiones basadas en datos 
                confiables.
              </p>
            </div>
            <div className="our-story__visual">
              <div className="our-story__stat-card">
                <div className="our-story__stat-number">5+</div>
                <div className="our-story__stat-label">Años de experiencia de nuestros desarrolladores</div>
              </div>
              <div className="our-story__stat-card">
                <div className="our-story__stat-number">50+</div>
                <div className="our-story__stat-label">Proyectos completados</div>
              </div>
              <div className="our-story__stat-card">
                <div className="our-story__stat-number">98%</div>
                <div className="our-story__stat-label">Satisfacción de clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values section">
        <div className="values__container container">
          <div className="values__header">
            <div className="values__tag">VALORES</div>
            <h2 className="values__title">Lo que nos define</h2>
            <p className="values__subtitle">
              Estos principios guían cada decisión y proyecto que emprendemos.
            </p>
          </div>

          <div className="values__grid">
            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Calidad técnica</h3>
              <p className="value-card__description">
                Construimos sistemas sólidos con buenas prácticas, código limpio y 
                arquitectura escalable que perduran en el tiempo.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Compromiso</h3>
              <p className="value-card__description">
                Acompañamos a nuestros clientes desde el diagnóstico hasta después del 
                lanzamiento, asegurando resultados reales.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Innovación práctica</h3>
              <p className="value-card__description">
                Usamos tecnología moderna pero siempre enfocada en resolver problemas 
                reales, no en hacer tecnología por hacerla.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Transparencia</h3>
              <p className="value-card__description">
                Comunicación clara en cada etapa del proyecto. Sin sorpresas, sin letra 
                pequeña, solo honestidad.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Orientación a resultados</h3>
              <p className="value-card__description">
                Medimos nuestro éxito por el impacto real que generamos en la operación 
                y crecimiento de nuestros clientes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card__title">Agilidad</h3>
              <p className="value-card__description">
                Respondemos rápido, iteramos constantemente y nos adaptamos a las 
                necesidades cambiantes del negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="why-choose__container container">
          <div className="why-choose__content">
            <div className="why-choose__image">
              <div className="why-choose__image-card">
                <div className="why-choose__badge">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Soluciones personalizadas</span>
                </div>
              </div>
            </div>
            <div className="why-choose__text">
              <div className="why-choose__tag">¿POR QUÉ HEBATECH?</div>
              <h2 className="why-choose__title">No vendemos software genérico</h2>
              <p className="why-choose__description">
                Analizamos procesos reales para construir sistemas adaptados a tu operación. 
                Desde el diagnóstico hasta el soporte posterior, trabajamos junto a ti durante 
                todo el proyecto.
              </p>
              <ul className="why-choose__list">
                <li className="why-choose__item">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <strong>Entendemos tu negocio:</strong> No asumimos, preguntamos y 
                    analizamos hasta comprender exactamente qué necesitas.
                  </div>
                </li>
                <li className="why-choose__item">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <strong>Soluciones escalables:</strong> Construimos pensando en el 
                    crecimiento futuro, no solo en resolver lo inmediato.
                  </div>
                </li>
                <li className="why-choose__item">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <strong>Soporte continuo:</strong> No te dejamos solo después del 
                    lanzamiento. Estamos contigo en cada paso.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
