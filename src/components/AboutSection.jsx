import React from 'react';
import { useTranslation } from 'react-i18next';

const SKILLS = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'NestJS', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS', 'Socket.io', 'REST APIs', 'JWT Auth'];

export const AboutSection = ({ setPage }) => {
  const { t } = useTranslation();
  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: 'clamp(64px, 10vw, 140px) clamp(16px, 5vw, 64px) clamp(64px, 10vw, 96px)',
  };

  const gridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(40px, 8vw, 80px)', alignItems: 'start',
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
    margin: '0 0 28px',
  };

  const paraStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '16px', color: '#A8A49D',
    lineHeight: 1.7, marginBottom: '20px',
  };

  const dividerStyle = {
    border: 'none', borderTop: '1px solid rgba(240,237,230,0.08)',
    margin: '32px 0',
  };

  const skillsLabel = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '14px',
  };

  const skillsGrid = {
    display: 'flex', flexWrap: 'wrap', gap: '6px',
  };

  const skillTag = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px', color: '#C8965A',
    background: 'rgba(200,150,90,0.08)',
    border: '1px solid rgba(200,150,90,0.15)',
    borderRadius: '2px', padding: '4px 9px',
  };

  const sideCardStyle = {
    background: '#111111', border: '1px solid rgba(240,237,230,0.08)',
    borderRadius: '4px', padding: '28px',
    position: 'sticky', top: '120px',
  };

  const avatarStyle = {
    width: '72px', height: '72px', borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid rgba(240,237,230,0.08)',
    marginBottom: '20px',
    background: '#161616',
  };

  const nameStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '24px', color: '#F0EDE6', marginBottom: '4px',
  };

  const roleStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', color: '#6B6B6B', marginBottom: '20px',
  };

  const infoRowStyle = {
    display: 'flex', alignItems: 'center', gap: '10px',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', color: '#A8A49D',
    marginBottom: '10px',
  };

  const dotStyle = { width: '6px', height: '6px', borderRadius: '50%', background: '#4BAB72', flexShrink: 0 };

  const ctaBtnStyle = {
    width: '100%', marginTop: '24px',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', fontWeight: 500,
    background: '#F0EDE6', color: '#0D0D0D',
    padding: '11px 20px', borderRadius: '4px',
    border: 'none', cursor: 'pointer',
    transition: 'opacity 150ms ease',
  };

  return (
    <div style={sectionStyle}>
      <div style={gridStyle}>
        <div>
          <div style={overlineStyle}>
            <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
            {t('about.overline')}
          </div>
          <h2 style={h2Style}>{t('about.title')}</h2>
          <p style={paraStyle}>
            {t('about.bio1')}
          </p>
          <p style={paraStyle}>
            {t('about.bio2')}
          </p>
          <p style={paraStyle}>
            {t('about.bio3')}
          </p>
          <hr style={dividerStyle} />
          <div style={skillsLabel}>{t('about.skillsLabel')}</div>
          <div style={skillsGrid}>
            {SKILLS.map(s => <span key={s} style={skillTag}>{s}</span>)}
          </div>
        </div>
        <div>
          <div style={sideCardStyle}>
            <div style={avatarStyle}>
              {/* <img src="/hector-avatar.png" alt="Hector Herrera" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} /> */}
              <img src="/Hector-Picture-Profile.png" alt="Hector Herrera" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div style={nameStyle}>Hector Herrera</div>
            <div style={roleStyle}>{t('about.role')}</div>
            <hr style={{ ...dividerStyle, margin: '16px 0' }} />
            <div style={infoRowStyle}><div style={dotStyle}></div>{t('about.available')}</div>
            <div style={infoRowStyle}><span style={{ color: '#6B6B6B', fontSize: '13px' }}>📍</span> {t('about.location')}</div>
            <div style={infoRowStyle}><span style={{ color: '#6B6B6B', fontSize: '13px' }}>⚡</span> {t('about.experience')}</div>
            <button style={ctaBtnStyle} onClick={() => setPage('contact')}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}>
              {t('about.cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
