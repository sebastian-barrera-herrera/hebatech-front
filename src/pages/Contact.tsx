import { useState } from 'react';
import './Contact.css';
import { http } from '../api/http';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    // Simular envío de formulario (aquí conectarías con tu backend)
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Enviar mensaje a la base de datos
      http.post('/leads', formData);
      console.log(formData)

    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__background">
          <div className="contact-hero__gradient"></div>
        </div>
        <div className="contact-hero__container container">
          <div className="contact-hero__content">
            <div className="contact-hero__tag">CONTACTO</div>
            <h1 className="contact-hero__title">
              ¿Listo para transformar
              <span className="contact-hero__highlight"> tu empresa?</span>
            </h1>
            <p className="contact-hero__description">
              Cuéntanos sobre tu proyecto y diseñemos juntos la solución tecnológica 
              que necesita tu negocio para crecer de forma ordenada y escalable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="contact-content__container container">
          <div className="contact-content__grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info__title">Hablemos de tu proyecto</h2>
              <p className="contact-info__text">
                Estamos listos para ayudarte a digitalizar tu empresa. Completa el 
                formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 8L10.89 13.26C11.5114 13.6728 12.4886 13.6728 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-method__content">
                    <div className="contact-method__label">Email</div>
                    <a href="mailto:info@hebatech.com" className="contact-method__value">
                      hebatechsoft@outlook.com
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-method__content">
                    <div className="contact-method__label">Teléfono</div>
                    <a href="tel:+573001234567" className="contact-method__value">
                      +57 314 812 6301
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M17.657 16.657L13.414 20.9C13.039 21.275 12.529 21.487 12 21.487C11.471 21.487 10.961 21.275 10.586 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3 12 3C13.5822 3 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-method__content">
                    <div className="contact-method__label">Ubicación</div>
                    <div className="contact-method__value">
                      Medellín, Colombia
                    </div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-method__content">
                    <div className="contact-method__label">Horario</div>
                    <div className="contact-method__value">
                      Lunes a Viernes: 8:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info__guarantee">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <strong>Respuesta garantizada en menos de 24 horas</strong>
                  <p>Todos los datos son tratados de forma confidencial</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {formStatus.submitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="contact-form-success__title">¡Mensaje enviado con éxito!</h3>
                  <p className="contact-form-success__text">
                    Gracias por contactarnos. Nuestro equipo revisará tu solicitud y 
                    te responderá en menos de 24 horas.
                  </p>
                  <button 
                    className="contact-form-success__button"
                    onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name" className="contact-form__label">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-form__input"
                        required
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="email" className="contact-form__label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form__input"
                        required
                        placeholder="juan@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="phone" className="contact-form__label">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-form__input"
                        placeholder="+57 300 123 4567"
                      />
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="company" className="contact-form__label">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="contact-form__input"
                        placeholder="Mi Empresa S.A.S"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="service" className="contact-form__label">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="contact-form__input contact-form__select"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="inventarios">Sistema de Gestión de Inventarios</option>
                      <option value="comercial">Gestión Comercial</option>
                      <option value="web">Posicionamiento en la Web</option>
                      <option value="trazabilidad">Trazabilidad de Procesos</option>
                      <option value="automatizacion">Automatización de Procesos</option>
                      <option value="integraciones">Integraciones Personalizadas</option>
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message" className="contact-form__label">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-form__input contact-form__textarea"
                      required
                      rows={6}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="contact-form__submit"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? (
                      <>
                        <span className="contact-form__spinner"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="contact-form__privacy">
                    Al enviar este formulario, aceptas nuestra política de privacidad 
                    y el tratamiento de tus datos personales.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
