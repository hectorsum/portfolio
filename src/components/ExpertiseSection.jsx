import React from 'react';
import { useTranslation } from 'react-i18next';

const EXPERIENCE_BASE = [
  {
    role: 'Frontend Web Developer',
    company: 'Reservhotel by Tambourine',
    location: 'Remote — Miami / Cancún',
    period: 'Apr 2021 – Apr 2026',
    type: 'Full-time',
    descriptionKey: 'expertise.experiences.0.description',
    highlights: ['Served 50+ international hotel clients', '99.2% platform uptime', '25% reduction in technical debt', 'Mentored junior developers'],
    stack: ['JavaScript', 'PL/SQL', 'PHP', 'Java', 'MVC', 'JWT', 'React', 'Next.js', 'NestJS'],
    logo: '/CompanyLogos/Tambourine.jpeg',
    hasModal: true,
  },
  {
    role: 'AI Training Specialist',
    company: 'Upwork — LBLX116 Program',
    location: 'Remote',
    period: 'Feb 2026 – Apr 2026',
    type: 'Contract',
    descriptionKey: 'expertise.experiences.1.description',
    highlights: ['Comparative A/B model evaluation', 'Human preference feedback for LLM reasoning', 'Code quality analysis & instruction authoring'],
    stack: ['Python', 'Model Evaluation', 'A/B Testing', 'ML Feedback Systems'],
    logo: '/CompanyLogos/Upwork.jpeg',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Gol Manager',
    location: 'Remote — Spain',
    period: 'Jan 2023 – Apr 2023',
    type: 'Contract',
    descriptionKey: 'expertise.experiences.2.description',
    highlights: ['5,000+ active users', 'Figma → React pixel-perfect delivery', 'Cross-platform feature parity with React Native'],
    stack: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'Figma', 'React Native'],
    logo: '/CompanyLogos/GolManager.png',
  },
  {
    role: 'Full Stack Developer',
    company: 'Fulltimeforce',
    location: 'Remote — Lima',
    period: 'Jan 2021 – Mar 2022',
    type: 'Full-time',
    descriptionKey: 'expertise.experiences.3.description',
    highlights: ['30% dev efficiency increase via reusable hooks', 'Mobile-first responsive applications', 'Scalable full-stack architecture'],
    stack: ['React', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    logo: '/CompanyLogos/Fulltimeforce.jpeg',
  },
  {
    role: 'Support Analyst',
    company: 'Synopsis S.A.',
    location: 'Lima Metropolitan Area',
    period: 'Feb 2020 – Apr 2020',
    type: 'Full-time',
    descriptionKey: 'expertise.experiences.4.description',
    highlights: ['RedHat distribution training and certification training', 'JBoss Servers management training', 'System administration support'],
    stack: ['Linux', 'RedHat', 'JBoss'],
    logo: '/CompanyLogos/Synopsis.jpeg',
  },
];

const COMPETENCIES = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Chakra UI', 'Redux', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Python', 'PHP', 'Java'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'PL/SQL', 'Redis'] },
  { label: 'DevOps & Tools', items: ['Docker', 'AWS', 'Git', 'REST APIs', 'Socket.io', 'JWT', 'Figma'] },
  { label: 'AI / ML', items: ['Model Evaluation', 'A/B Testing', 'Human Feedback Systems', 'Code Quality Analysis'] },
];

const RESERVHOTEL_PROJECTS_EN = [
  {
    title: 'Booking Engine Migration & Performance Modernization — ReservHotel / Tambourine',
    description: 'Led the modernization of the booking engine architecture from legacy systems to React/Next.js and NestJS. Improved performance, scalability, and maintainability while preserving critical reservation workflows. Refactored legacy modules into reusable components and reduced technical debt across the platform.',
  },
  {
    title: 'Travel Agency (TA) Platform Migration to MVC Architecture — ReservHotel / Tambourine',
    description: 'Migrated the Travel Agency platform to an MVC-based PHP architecture to improve code organization and maintainability. Refactored business logic into scalable controllers, models, and views while maintaining compatibility with existing integrations and booking workflows.',
  },
  {
    title: 'Booking Engine Platform — ReservHotel / Tambourine',
    description: 'Developed and maintained core booking engine functionality for hotel clients, focusing on reservation flows, room availability, pricing logic, occupancy validation, and responsive customer experiences. Worked on frontend and backend integrations using JavaScript, jQuery, PHP, Java, and Oracle PL/SQL to support high-traffic, revenue-critical hospitality platforms.',
  },
  {
    title: 'Multi-Property Hotel Customization Framework',
    description: 'Built reusable frontend libraries and configurable booking components used across multiple hotel properties and brands. Implemented scalable customization systems for widgets, booking behavior, multilingual support, and responsive UI adaptations while maintaining consistency across client implementations.',
  },
  {
    title: 'Oracle PL/SQL Reservation & Business Logic System',
    description: 'Developed procedures, triggers, functions, and optimized SQL queries supporting hotel reservation workflows, transactional operations, pricing management, and customer booking processes. Worked extensively with Oracle PL/SQL to maintain reliability and performance in production hospitality systems.',
  },
  {
    title: 'Internationalization & Multilingual Booking Experience',
    description: 'Implemented multilingual localization support across booking interfaces and transactional messaging systems for international hospitality clients. Managed dynamic translations, localized date formatting, and language-specific content handling for English, Spanish, French, German, Portuguese, Italian, Dutch, and Polish markets.',
  },
  {
    title: 'Booking Widget UX Modernization',
    description: 'Redesigned and optimized booking widgets and customer-facing hotel interfaces to improve responsiveness, usability, and conversion-focused user experiences. Collaborated on frontend prototyping and UI improvements using JavaScript, jQuery, responsive web design practices, and Figma-based concepts.',
  },
  {
    title: 'Booking Validation & Customer Flow Optimization',
    description: 'Implemented complex validation systems for reservation flows, including occupancy rules, child age handling, dynamic pricing validation, date-range processing, and unavailable inventory management. Improved booking reliability and reduced customer-facing reservation errors across hotel platforms.',
  },
];

const RESERVHOTEL_PROJECTS_ES = [
  {
    title: 'Modernización y Migración del Motor de Reservas — ReservHotel / Tambourine',
    description: 'Lideré la modernización de la arquitectura del motor de reservas desde sistemas heredados a React/Next.js y NestJS. Mejoré rendimiento, escalabilidad y mantenibilidad mientras preservaba flujos críticos de reserva. Refactoricé módulos heredados en componentes reutilizables y reduje deuda técnica en toda la plataforma.',
  },
  {
    title: 'Migración de la Plataforma de Agencias de Viajes (TA) a Arquitectura MVC — ReservHotel / Tambourine',
    description: 'Migré la plataforma de Agencias de Viajes a una arquitectura MVC basada en PHP para mejorar la organización y mantenibilidad del código. Refactoricé la lógica empresarial en controladores, modelos y vistas escalables manteniendo compatibilidad con integraciones y flujos de reserva existentes.',
  },
  {
    title: 'Plataforma de Motor de Reservas — ReservHotel / Tambourine',
    description: 'Desarrollé y mantuve la funcionalidad principal del motor de reservas para clientes hoteleros, enfocándome en flujos de reserva, disponibilidad de habitaciones, lógica de precios, validación de ocupación y experiencias de cliente responsivas. Trabajé en integraciones frontend y backend usando JavaScript, jQuery, PHP, Java y Oracle PL/SQL para soportar plataformas hoteleras críticas de alto tráfico.',
  },
  {
    title: 'Marco de Personalización Multi-Propiedad Hotelera',
    description: 'Construí librerías frontend reutilizables y componentes de reserva configurables usados en múltiples propiedades hoteleras y marcas. Implementé sistemas de personalización escalables para widgets, comportamiento de reserva, soporte multilingüe y adaptaciones UI responsivas manteniendo consistencia en implementaciones de clientes.',
  },
  {
    title: 'Sistema de Lógica de Negocio y Reservas Oracle PL/SQL',
    description: 'Desarrollé procedimientos, triggers, funciones y consultas SQL optimizadas que soportan flujos de trabajo de reservas hoteleras, operaciones transaccionales, gestión de precios y procesos de reserva de clientes. Trabajé extensivamente con Oracle PL/SQL para mantener confiabilidad y rendimiento en sistemas hoteleros de producción.',
  },
  {
    title: 'Internacionalización y Experiencia de Reserva Multilingüe',
    description: 'Implementé soporte de localización multilingüe en interfaces de reserva y sistemas de mensajería transaccional para clientes hoteleros internacionales. Administré traducciones dinámicas, formateo de fechas localizado y manejo de contenido específico del idioma para mercados en inglés, español, francés, alemán, portugués, italiano, holandés y polaco.',
  },
  {
    title: 'Modernización UX de Widgets de Reserva',
    description: 'Rediseñé y optimicé widgets de reserva e interfaces hoteleras orientadas al cliente para mejorar responsividad, usabilidad y experiencias enfocadas en conversión. Colaboré en prototipado frontend y mejoras UI usando JavaScript, jQuery, prácticas de diseño web responsivo y conceptos basados en Figma.',
  },
  {
    title: 'Validación de Reservas y Optimización de Flujo de Cliente',
    description: 'Implementé sistemas de validación complejos para flujos de reserva, incluyendo reglas de ocupación, manejo de edad de niños, validación de precios dinámicos, procesamiento de rangos de fechas y gestión de inventario no disponible. Mejoré la confiabilidad de reservas y reduje errores de reserva orientados al cliente en plataformas hoteleras.',
  },
];

export const ExpertiseSection = () => {
  const { t, i18n } = useTranslation();
  const [activeExp, setActiveExp] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const RESERVHOTEL_PROJECTS = i18n.language === 'es' ? RESERVHOTEL_PROJECTS_ES : RESERVHOTEL_PROJECTS_EN;

  const EXPERIENCE = EXPERIENCE_BASE.map(e => ({
    ...e,
    description: t(e.descriptionKey)
  }));

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: 'clamp(64px, 10vw, 140px) clamp(16px, 5vw, 64px) clamp(64px, 10vw, 96px)',
  };

  const overlineStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '20px',
    display: 'flex', alignItems: 'center', gap: '12px',
  };

  const h2Style = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '52px', color: '#F0EDE6',
    lineHeight: 1.05, letterSpacing: '-0.02em',
    margin: '0 0 64px',
  };

  const gridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '0', marginBottom: 'clamp(40px, 8vw, 80px)',
    border: '1px solid rgba(240,237,230,0.07)',
    borderRadius: '4px', overflow: 'hidden',
  };

  const tabStyle = (active) => ({
    padding: '20px 24px', cursor: 'pointer',
    borderBottom: '1px solid rgba(240,237,230,0.07)',
    background: active ? '#161616' : '#111111',
    borderRight: active ? 'none' : '1px solid rgba(240,237,230,0.07)',
    transition: 'background 150ms ease',
  });

  const tabCompany = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', fontWeight: 500,
    color: '#F0EDE6', marginBottom: '3px',
  };

  const tabRole = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', color: '#6B6B6B',
  };

  const tabPeriod = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px', color: '#3A3A3A',
    marginTop: '6px',
  };

  const detailStyle = {
    padding: '32px 40px', background: '#161616',
  };

  const exp = EXPERIENCE[activeExp];

  const tagStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px', color: '#C8965A',
    background: 'rgba(200,150,90,0.08)',
    border: '1px solid rgba(200,150,90,0.15)',
    borderRadius: '2px', padding: '3px 8px',
  };

  const badgeStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px', fontWeight: 500,
    color: '#6B6B6B', background: 'rgba(240,237,230,0.05)',
    border: '1px solid rgba(240,237,230,0.08)',
    borderRadius: '2px', padding: '3px 8px',
    letterSpacing: '0.04em',
  };

  const dividerStyle = {
    border: 'none', borderTop: '1px solid rgba(240,237,230,0.07)',
    margin: '24px 0',
  };

  const compGridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '12px',
  };

  const compCardStyle = {
    background: '#111111', border: '1px solid rgba(240,237,230,0.07)',
    borderRadius: '4px', padding: '16px',
  };

  const compLabel = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '10px',
  };

  const compItem = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px', color: '#A8A49D',
    marginBottom: '5px',
  };

  return (
    <div style={sectionStyle}>
      <div style={overlineStyle}>
        <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
        {t('expertise.overline')}
      </div>
      <h2 style={h2Style}>
        {t('expertise.title')}
      </h2>

      <div style={gridStyle}>
        <div style={{ borderRight: '1px solid rgba(240,237,230,0.07)' }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ ...tabStyle(activeExp === i), display: 'flex', gap: '12px', alignItems: 'flex-start' }} onClick={() => setActiveExp(i)}
              onMouseEnter={ev => { if (activeExp !== i) ev.currentTarget.style.background = '#141414'; }}
              onMouseLeave={ev => { if (activeExp !== i) ev.currentTarget.style.background = '#111111'; }}>
              {e.logo && (
                <img
                  src={e.logo}
                  alt={e.company}
                  style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }}
                />
              )}
              <div>
                <div style={{ ...tabCompany, color: activeExp === i ? '#F0EDE6' : '#A8A49D' }}>{e.company}</div>
                <div style={tabRole}>{e.role}</div>
                <div style={tabPeriod}>{e.period}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={detailStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: '#F0EDE6', lineHeight: 1.2, marginBottom: '4px' }}>{exp.role}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', color: '#6B6B6B' }}>{exp.company} · {exp.location}</div>
            </div>
            <span style={badgeStyle}>{exp.type}</span>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', color: '#A8A49D', lineHeight: 1.65, margin: '0 0 20px' }}>
            {exp.description}
            {exp.hasModal && (
              <>
                {' '}
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    background: 'none', border: 'none', color: '#C8965A',
                    cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                    fontSize: '15px', textDecoration: 'underline',
                    padding: '0', transition: 'opacity 150ms ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  More about this →
                </button>
              </>
            )}
          </p>
          <hr style={dividerStyle} />
          <div style={{ marginBottom: '20px' }}>
            {exp.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontFamily: "'Outfit', sans-serif", fontSize: '13px', color: '#A8A49D', marginBottom: '8px' }}>
                <span style={{ color: '#C8965A', flexShrink: 0 }}>→</span>
                {h}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {exp.stack.map(s => <span key={s} style={tagStyle}>{s}</span>)}
          </div>
          {exp.company === 'Reservhotel by Tambourine' && (
            <div style={{ marginTop: '20px' }}>
              <a
                href='/Hector_Herrera_Letter_of_Recommendation_Diego_Perez.pdf'
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '13px',
                  color: '#C8965A',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  border: '1px solid rgba(200,150,90,0.3)',
                  borderRadius: '4px',
                  transition: 'all 150ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(200,150,90,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(200,150,90,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(200,150,90,0.3)';
                }}
              >
                <i className="fas fa-file-pdf" style={{ fontSize: '14px' }}></i>
                Letter of Recommendation
              </a>
            </div>
          )}
        </div>
      </div>

      <div style={overlineStyle}>
        <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
        {t('expertise.competencies')}
      </div>
      <div style={compGridStyle}>
        {COMPETENCIES.map(c => (
          <div key={c.label} style={compCardStyle}>
            <div style={compLabel}>{c.label}</div>
            {c.items.map(item => <div key={item} style={compItem}>{item}</div>)}
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000, padding: '20px',
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: '#0D0D0D', borderRadius: '8px',
            maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto',
            border: '1px solid rgba(240,237,230,0.15)', padding: '40px',
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'none', border: 'none', color: '#A8A49D',
                cursor: 'pointer', fontSize: '24px', lineHeight: 1,
              }}
            >
              ✕
            </button>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif", fontSize: '28px',
              color: '#F0EDE6', marginBottom: '32px', paddingRight: '40px',
            }}>
              {i18n.language === 'es' ? 'Mi trabajo en ReservHotel' : 'My work at ReservHotel'}
            </h3>
            {RESERVHOTEL_PROJECTS.map((project, i) => (
              <div key={i} style={{ marginBottom: i < RESERVHOTEL_PROJECTS.length - 1 ? '32px' : '0' }}>
                <h4 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '14px',
                  fontWeight: 600, color: '#F0EDE6', marginBottom: '10px',
                }}>
                  {project.title}
                </h4>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '14px',
                  color: '#A8A49D', lineHeight: 1.6, margin: '0 0 16px',
                }}>
                  {project.description}
                </p>
                {i < RESERVHOTEL_PROJECTS.length - 1 && (
                  <hr style={{
                    border: 'none', borderTop: '1px solid rgba(240,237,230,0.07)',
                    margin: '0',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
