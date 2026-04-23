import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = ({ currentPage, setPage }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'about', label: t('nav.about') },
    { key: 'expertise', label: t('nav.expertise') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const headerStyles = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: 'clamp(16px, 5vw, 20px) clamp(16px, 5vw, 64px)',
    background: scrolled ? 'rgba(13,13,13,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(240,237,230,0.07)' : '1px solid transparent',
    transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
    flexWrap: 'wrap',
    gap: '12px',
  };

  const logoStyles = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(18px, 5vw, 22px)', color: '#F0EDE6',
    cursor: 'pointer', letterSpacing: '-0.01em',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  };

  const navStyles = {
    display: 'flex', gap: 'clamp(16px, 3vw, 32px)', listStyle: 'none', margin: 0, padding: 0,
    flexWrap: 'wrap',
  };

  const linkStyle = (page) => ({
    fontSize: '13px', fontWeight: 500,
    color: currentPage === page ? '#F0EDE6' : '#6B6B6B',
    cursor: 'pointer', letterSpacing: '0.01em',
    transition: 'color 150ms ease',
    fontFamily: "'Outfit', sans-serif",
    userSelect: 'none',
  });

  const ctaStyle = {
    fontSize: '12px', fontWeight: 500,
    color: '#0D0D0D', background: '#F0EDE6',
    padding: '8px 18px', borderRadius: '4px',
    cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
    border: 'none', transition: 'opacity 150ms ease',
    userSelect: 'none', whiteSpace: 'nowrap',
  };

  const headerRightStyle = {
    display: 'flex', gap: '16px', alignItems: 'center',
  };

  return (
    <header style={headerStyles}>
      <div style={logoStyles} onClick={() => setPage('home')}>
        H.<span style={{ color: '#C8965A', fontStyle: 'italic' }}>H</span>
      </div>
      <ul style={navStyles}>
        {navLinks.map(link => (
          <li key={link.key} style={linkStyle(link.key)} onClick={() => setPage(link.key)}>
            {link.label}
          </li>
        ))}
      </ul>
      <div style={headerRightStyle}>
        <LanguageSwitcher />
        <button style={ctaStyle} onClick={() => setPage('contact')}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}>
          {t('nav.getInTouch')}
        </button>
      </div>
    </header>
  );
};
