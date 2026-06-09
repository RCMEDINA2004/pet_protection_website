import { useEffect, useRef, useState } from 'react';
import './AffiliationForm.css';

const trustItems = [
  { icon: 'lock', text: 'Datos protegidos con cifrado SSL' },
  { icon: 'verified_user', text: 'Empresa registrada en Armenia, Quindío' },
  { icon: 'support_agent', text: 'Respuesta garantizada en menos de 24h' },
];

const AffiliationForm = () => {
  const sectionRef = useRef(null);
  const [petAge, setPetAge] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', city: '',
    petName: '', petType: '', message: '',
  });

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <section className="affiliation section" id="afiliacion" ref={sectionRef}>
      <div className="affiliation__bg">
        <div className="affiliation__bg-glow--1" />
        <div className="affiliation__bg-glow--2" />
        <div className="affiliation__bg-grid" />
      </div>

      <div className="container">
        <div className="affiliation__grid">
          {/* Left: Copy */}
          <div className="affiliation__copy reveal-left">
            <span className="text-overline">Afiliación</span>
            <h2 className="text-headline affiliation__title">
              Comienza a proteger<br />
              a tu mascota{' '}
              <span className="gradient-text">hoy</span>
            </h2>
            <p className="affiliation__subtitle">
              Únete a la red de protección para mascotas más confiable de Armenia.
              Proceso 100% digital, rápido y seguro.
            </p>

            {/* Benefits List */}
            <ul className="affiliation__benefits">
              {[
                { icon: 'bolt', text: 'Activación inmediata de tu cobertura' },
                { icon: 'local_hospital', text: 'Acceso instantáneo a la red veterinaria' },
                { icon: 'smartphone', text: 'App móvil lista para usar' },
                { icon: 'support_agent', text: 'Asesor personal asignado' },
              ].map(b => (
                <li key={b.text} className="affiliation__benefit">
                  <div className="affiliation__benefit-icon">
                    <span className="material-symbols-outlined icon-filled" style={{ fontSize: '18px', color: '#00C6B8' }}>{b.icon}</span>
                  </div>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            {/* Social Proof */}
            <div className="affiliation__proof">
              <div className="affiliation__proof-avatars">
                {['🐕', '🐈', '🐾', '🦮'].map((e, i) => (
                  <div key={i} className="affiliation__proof-avatar" style={{ zIndex: 4 - i }}>
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <p className="affiliation__proof-text">
                  <strong>+2,400 mascotas</strong> ya están protegidas
                </p>
                <div className="affiliation__proof-stars">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="material-symbols-outlined icon-filled" style={{ fontSize: '14px', color: '#F59E0B' }}>star</span>
                  ))}
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginLeft: '4px' }}>4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="affiliation__form-wrapper reveal-right">
            {submitted ? (
              <div className="affiliation__success">
                <div className="affiliation__success-icon">
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '48px', color: '#00C6B8' }}>check_circle</span>
                </div>
                <h3 className="affiliation__success-title">¡Solicitud Enviada! 🎉</h3>
                <p className="affiliation__success-text">
                  Nuestro equipo se pondrá en contacto contigo en menos de 24 horas para
                  activar la protección de tu mascota.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '8px' }}
                  onClick={() => { setSubmitted(false); setForm({ fullName:'', email:'', phone:'', city:'', petName:'', petType:'', message:'' }); setPetAge(1); }}
                >
                  Nueva Solicitud
                </button>
              </div>
            ) : (
              <form className="affiliation__form" onSubmit={handleSubmit} id="affiliationForm" noValidate>
                <div className="affiliation__form-header">
                  <h3 className="affiliation__form-title">Solicitar Afiliación</h3>
                  <p className="affiliation__form-subtitle">Completa el formulario y te contactamos</p>
                </div>

                {/* Personal Info */}
                <div className="affiliation__section-label">
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#0066FF' }}>person</span>
                  Tus datos
                </div>

                <div className="affiliation__row">
                  <div className="affiliation__field affiliation__field--full">
                    <label htmlFor="fullName">Nombre Completo</label>
                    <input
                      id="fullName" name="fullName" type="text" required
                      placeholder="Ej: María Fernanda López"
                      value={form.fullName} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="affiliation__row affiliation__row--2">
                  <div className="affiliation__field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="tu@correo.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                  <div className="affiliation__field">
                    <label htmlFor="phone">Teléfono / WhatsApp</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="+57 300 000 0000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="affiliation__row">
                  <div className="affiliation__field affiliation__field--full affiliation__field--icon">
                    <label htmlFor="city">Ciudad</label>
                    <span className="affiliation__field-icon material-symbols-outlined icon-filled">location_on</span>
                    <input
                      id="city" name="city" type="text" required
                      placeholder="Armenia, Quindío"
                      value={form.city} onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Pet Info */}
                <div className="affiliation__section-label">
                  <span className="material-symbols-outlined icon-filled" style={{ fontSize: '16px', color: '#00C6B8' }}>pets</span>
                  Datos de tu mascota
                </div>

                <div className="affiliation__row affiliation__row--2">
                  <div className="affiliation__field">
                    <label htmlFor="petName">Nombre de la Mascota</label>
                    <input
                      id="petName" name="petName" type="text" required
                      placeholder="Ej: Max"
                      value={form.petName} onChange={handleChange}
                    />
                  </div>
                  <div className="affiliation__field">
                    <label htmlFor="petType">Tipo de Mascota</label>
                    <select
                      id="petType" name="petType" required
                      value={form.petType} onChange={handleChange}
                    >
                      <option value="" disabled>Seleccionar...</option>
                      <option value="Perro">🐕 Perro</option>
                      <option value="Gato">🐈 Gato</option>
                      <option value="Conejo">🐇 Conejo</option>
                      <option value="Otro">🐾 Otro</option>
                    </select>
                  </div>
                </div>

                {/* Age Slider */}
                <div className="affiliation__field affiliation__field--full">
                  <div className="affiliation__age-header">
                    <label htmlFor="petAge">Edad de la Mascota</label>
                    <span className="affiliation__age-value">{petAge} {petAge === 1 ? 'año' : 'años'}</span>
                  </div>
                  <input
                    id="petAge" name="petAge" type="range"
                    min="0" max="20" step="1"
                    value={petAge}
                    onChange={e => setPetAge(Number(e.target.value))}
                    className="affiliation__slider"
                  />
                  <div className="affiliation__slider-labels">
                    <span>0</span><span>5</span><span>10</span><span>15</span><span>20 años</span>
                  </div>
                </div>

                {/* Message */}
                <div className="affiliation__field affiliation__field--full">
                  <label htmlFor="message">Mensaje Adicional (Opcional)</label>
                  <textarea
                    id="message" name="message" rows={3}
                    placeholder="Cuéntanos sobre tu mascota o cualquier pregunta..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                {/* Trust items */}
                <div className="affiliation__trust-row">
                  {trustItems.map(t => (
                    <div key={t.text} className="affiliation__trust-item">
                      <span className="material-symbols-outlined icon-filled" style={{ fontSize: '14px', color: '#00C6B8' }}>{t.icon}</span>
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`affiliation__submit ${loading ? 'affiliation__submit--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="affiliation__spinner" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined icon-filled" style={{ fontSize: '20px' }}>favorite</span>
                      Solicitar Afiliación
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationForm;
