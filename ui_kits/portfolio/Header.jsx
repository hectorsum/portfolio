// Header.jsx — Site navigation component
const Header = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Expertise', 'Projects', 'Contact'];

  const headerStyles = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 64px',
    background: scrolled ? 'rgba(13,13,13,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(240,237,230,0.07)' : '1px solid transparent',
    transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
  };

  const logoStyles = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '22px', color: '#F0EDE6',
    cursor: 'pointer', letterSpacing: '-0.01em',
    userSelect: 'none',
  };

  const navStyles = {
    display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0,
  };

  const linkStyle = (page) => ({
    fontSize: '13px', fontWeight: 500,
    color: currentPage === page.toLowerCase() ? '#F0EDE6' : '#6B6B6B',
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

  return (
    <header style={headerStyles}>
      <div style={logoStyles} onClick={() => setPage('home')}>
        H.<span style={{ color: '#C8965A', fontStyle: 'italic' }}>H</span>
      </div>
      <ul style={navStyles}>
        {navLinks.map(link => (
          <li key={link} style={linkStyle(link)} onClick={() => setPage(link.toLowerCase())}>
            {link}
          </li>
        ))}
      </ul>
      <button style={ctaStyle} onClick={() => setPage('contact')}
        onMouseEnter={e => e.target.style.opacity = '0.85'}
        onMouseLeave={e => e.target.style.opacity = '1'}>
        Get In Touch
      </button>
    </header>
  );
};

Object.assign(window, { Header });
