import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
  };

  const switcherStyle = {
    position: 'relative',
  };

  const buttonStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', fontWeight: 500,
    background: 'transparent', color: '#6B6B6B',
    border: '1px solid rgba(240,237,230,0.08)',
    padding: '8px 14px', borderRadius: '4px',
    cursor: 'pointer', letterSpacing: '0.02em',
    transition: 'all 150ms ease',
  };

  const dropdownStyle = {
    position: 'absolute', top: '100%', right: 0, marginTop: '8px',
    background: '#161616', border: '1px solid rgba(240,237,230,0.12)',
    borderRadius: '4px', overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    zIndex: 1000,
    minWidth: '120px',
  };

  const optionStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px',
    padding: '10px 16px',
    cursor: 'pointer',
    transition: 'background 150ms ease',
    color: '#F0EDE6',
    display: 'block',
    width: '100%',
    border: 'none',
    textAlign: 'left',
  };

  return (
    <div style={switcherStyle}>
      <button
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={e => e.target.style.borderColor = 'rgba(240,237,230,0.16)'}
        onMouseLeave={e => e.target.style.borderColor = 'rgba(240,237,230,0.08)'}
      >
        {i18n.language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
      </button>
      {isOpen && (
        <div style={dropdownStyle}>
          <button
            style={{
              ...optionStyle,
              background: i18n.language === 'en' ? '#C8965A' : 'transparent',
              color: i18n.language === 'en' ? '#0D0D0D' : '#F0EDE6',
              fontWeight: i18n.language === 'en' ? 600 : 400,
            }}
            onClick={() => handleLanguageChange('en')}
            onMouseEnter={e => {
              if (i18n.language !== 'en') e.target.style.background = '#1C1C1C';
            }}
            onMouseLeave={e => {
              if (i18n.language !== 'en') e.target.style.background = 'transparent';
            }}
          >
            🇺🇸 English
          </button>
          <button
            style={{
              ...optionStyle,
              background: i18n.language === 'es' ? '#C8965A' : 'transparent',
              color: i18n.language === 'es' ? '#0D0D0D' : '#F0EDE6',
              fontWeight: i18n.language === 'es' ? 600 : 400,
              borderTop: '1px solid rgba(240,237,230,0.08)',
            }}
            onClick={() => handleLanguageChange('es')}
            onMouseEnter={e => {
              if (i18n.language !== 'es') e.target.style.background = '#1C1C1C';
            }}
            onMouseLeave={e => {
              if (i18n.language !== 'es') e.target.style.background = 'transparent';
            }}
          >
            🇪🇸 Español
          </button>
        </div>
      )}
    </div>
  );
};
