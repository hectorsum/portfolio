// HeroSection.jsx — Home page hero
const HeroSection = ({ setPage }) => {
  const sectionStyle = {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '0 64px',
    maxWidth: '1200px', margin: '0 auto',
  };

  const overlineStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '28px',
    display: 'flex', alignItems: 'center', gap: '12px',
  };

  const h1Style = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(52px, 7vw, 88px)',
    color: '#F0EDE6', lineHeight: 1.05,
    letterSpacing: '-0.02em', margin: 0,
    marginBottom: '28px',
  };

  const bodyStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '18px', fontWeight: 300,
    color: '#A8A49D', lineHeight: 1.65,
    maxWidth: '480px', marginBottom: '48px',
  };

  const ctaRowStyle = {
    display: 'flex', gap: '14px', alignItems: 'center',
  };

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
    position: 'absolute', bottom: '40px', left: '64px',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', color: '#3A3A3A',
    letterSpacing: '0.08em', textTransform: 'uppercase',
    display: 'flex', alignItems: 'center', gap: '8px',
  };

  const statsStyle = {
    display: 'flex', gap: '48px', marginTop: '80px',
    borderTop: '1px solid rgba(240,237,230,0.07)',
    paddingTop: '40px',
  };

  const statStyle = {
    display: 'flex', flexDirection: 'column', gap: '4px',
  };

  const statNumStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '36px', color: '#F0EDE6', lineHeight: 1,
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
          Full Stack Developer
        </div>
        <h1 style={h1Style}>
          Building products<br />
          that <em style={{ color: '#C8965A', fontStyle: 'italic' }}>matter.</em>
        </h1>
        <p style={bodyStyle}>
          I design and build web applications from concept to deployment —
          clean code, thoughtful UX, and reliable infrastructure.
        </p>
        <div style={ctaRowStyle}>
          <button style={btnPrimary} onClick={() => setPage('projects')}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}>
            View My Work →
          </button>
          <button style={btnSecondary} onClick={() => setPage('about')}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(240,237,230,0.24)'; e.target.style.color = '#F0EDE6'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,237,230,0.12)'; e.target.style.color = '#A8A49D'; }}>
            About Me
          </button>
        </div>
        <div style={statsStyle}>
          {[['5+', 'years experience'], ['4', 'products shipped'], ['50+', 'hotel clients served']].map(([n, l]) => (
            <div key={l} style={statStyle}>
              <span style={statNumStyle}>{n}</span>
              <span style={statLabelStyle}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={scrollHintStyle}>
        <span style={{ width: '20px', height: '1px', background: '#3A3A3A', display: 'inline-block' }}></span>
        scroll to explore
      </div>
    </div>
  );
};

Object.assign(window, { HeroSection });
