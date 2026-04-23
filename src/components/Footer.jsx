import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = ({ setPage }) => {
  const { t } = useTranslation();
  const footerStyle = {
    borderTop: '1px solid rgba(240,237,230,0.07)',
    padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 64px)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    maxWidth: '1200px', margin: '0 auto',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const logoStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '18px', color: '#3A3A3A',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };

  const linksStyle = {
    display: 'flex', gap: 'clamp(12px, 3vw, 24px)', listStyle: 'none', padding: 0, margin: 0,
    flexWrap: 'wrap',
  }

  const linkStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', color: '#3A3A3A',
    cursor: 'pointer', letterSpacing: '0.02em',
    transition: 'color 150ms ease',
  };

  const copyStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', color: '#3A3A3A',
    letterSpacing: '0.04em',
  };

  return (
    <footer style={{ borderTop: '1px solid rgba(240,237,230,0.07)' }}>
      <div style={footerStyle}>
        <div style={logoStyle} onClick={() => setPage('home')}>H.H</div>
        <ul style={linksStyle}>
          {[
            { key: 'home', label: t('nav.home') },
            { key: 'about', label: t('nav.about') },
            { key: 'expertise', label: t('nav.expertise') },
            { key: 'projects', label: t('nav.projects') },
            { key: 'contact', label: t('nav.contact') },
          ].map(p => (
            <li key={p.key} style={linkStyle}
              onMouseEnter={e => e.target.style.color='#6B6B6B'}
              onMouseLeave={e => e.target.style.color='#3A3A3A'}
              onClick={() => setPage(p.key)}>{p.label}</li>
          ))}
        </ul>
        <div style={copyStyle}>{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};
