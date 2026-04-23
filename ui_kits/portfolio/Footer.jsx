// Footer.jsx — Site footer
const Footer = ({ setPage }) => {
  const footerStyle = {
    borderTop: '1px solid rgba(240,237,230,0.07)',
    padding: '40px 64px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    maxWidth: '1200px', margin: '0 auto',
  };

  const logoStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '18px', color: '#3A3A3A',
    cursor: 'pointer',
  };

  const linksStyle = {
    display: 'flex', gap: '24px', listStyle: 'none', padding: 0, margin: 0,
  };

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
          {['home', 'about', 'expertise', 'projects', 'contact'].map(p => (
            <li key={p} style={linkStyle}
              onMouseEnter={e => e.target.style.color='#6B6B6B'}
              onMouseLeave={e => e.target.style.color='#3A3A3A'}
              onClick={() => setPage(p)}>{p}</li>
          ))}
        </ul>
        <div style={copyStyle}>© 2024 Hector Herrera</div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
