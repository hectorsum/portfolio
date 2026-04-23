import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection = ({ setPage }) => {
  const { t } = useTranslation();
  const sectionStyle = {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '0 clamp(16px, 5vw, 64px)',
    maxWidth: '1200px', margin: '0 auto',
  };

  const overlineStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: 'clamp(20px, 3vw, 28px)',
    display: 'flex', alignItems: 'center', gap: '12px',
  };

  const h1Style = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(36px, 8vw, 88px)',
    color: '#F0EDE6', lineHeight: 1.05,
    letterSpacing: '-0.02em', margin: 0,
    marginBottom: 'clamp(20px, 3vw, 28px)',
  };

  const bodyStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 300,
    color: '#A8A49D', lineHeight: 1.65,
    maxWidth: '480px', marginBottom: 'clamp(32px, 5vw, 48px)',
  };

  const ctaRowStyle = {
    display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap',
  }

  const btnPrimary = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '14px', fontWeight: 500,
    background: '#F0EDE6', color: '#0D0D0D',
    padding: '12px 28px', borderRadius: '4px',
    border: 'none', cursor: 'pointer',
    transition: 'opacity 150ms ease', letterSpacing: '0.01em',
  };

  const btnSecondary = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '14px', fontWeight: 500,
    background: 'transparent', color: '#A8A49D',
    padding: '12px 20px', borderRadius: '4px',
    border: '1px solid rgba(240,237,230,0.12)', cursor: 'pointer',
    transition: 'border-color 150ms ease, color 150ms ease', letterSpacing: '0.01em',
  };

  const scrollHintStyle = {
    position: 'absolute', bottom: 'clamp(20px, 5vw, 40px)', left: 'clamp(16px, 5vw, 64px)',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', color: '#3A3A3A',
    letterSpacing: '0.08em', textTransform: 'uppercase',
    display: 'flex', alignItems: 'center', gap: '8px',
  };

  const statsStyle = {
    display: 'flex', gap: 'clamp(24px, 5vw, 48px)', marginTop: 'clamp(48px, 8vw, 80px)',
    borderTop: '1px solid rgba(240,237,230,0.07)',
    paddingTop: 'clamp(24px, 5vw, 40px)',
    flexWrap: 'wrap',
  };

  const statStyle = {
    display: 'flex', flexDirection: 'column', gap: '4px',
  };

  const statNumStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(28px, 6vw, 36px)', color: '#F0EDE6', lineHeight: 1,
  };

  const statLabelStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', color: '#6B6B6B',
    letterSpacing: '0.06em', textTransform: 'uppercase',
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={sectionStyle}>
        <div style={overlineStyle}>
          <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
          {t('hero.overline')}
        </div>
        <h1 style={h1Style}>
          {t('hero.title')}
        </h1>
        <p style={bodyStyle}>
          {t('hero.subtitle')}
        </p>
        <div style={ctaRowStyle}>
          <button style={btnPrimary} onClick={() => setPage('projects')}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}>
            {t('hero.cta1')}
          </button>
          <button style={btnSecondary} onClick={() => setPage('about')}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(240,237,230,0.24)'; e.target.style.color = '#F0EDE6'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,237,230,0.12)'; e.target.style.color = '#A8A49D'; }}>
            {t('hero.cta2')}
          </button>
        </div>
        <div style={statsStyle}>
          {[
            ['5+', t('hero.stats.experience')],
            ['4', t('hero.stats.shipped')],
            ['50+', t('hero.stats.clients')]
          ].map(([n, l]) => (
            <div key={l} style={statStyle}>
              <span style={statNumStyle}>{n}</span>
              <span style={statLabelStyle}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={scrollHintStyle}>
        <span style={{ width: '20px', height: '1px', background: '#3A3A3A', display: 'inline-block' }}></span>
        {t('hero.scrollHint')}
      </div>
    </div>
  );
};
