// ProjectCard.jsx — Single project card
const ProjectCard = ({ project, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle = {
    background: '#161616',
    border: `1px solid ${hovered ? 'rgba(240,237,230,0.14)' : 'rgba(240,237,230,0.07)'}`,
    borderRadius: '4px', overflow: 'hidden', cursor: 'pointer',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.45)' : '0 2px 8px rgba(0,0,0,0.2)',
    transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
  };

  const thumbStyle = {
    width: '100%', aspectRatio: '16/10',
    background: project.thumbBg || '#1C1C1C',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
  };

  const thumbOverlay = {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(22,22,22,0.6) 100%)',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 300ms ease',
  };

  const thumbLabel = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px', color: '#3A3A3A', letterSpacing: '0.04em',
  };

  const bodyStyle = { padding: '18px 20px 20px' };

  const metaStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '8px',
  };

  const titleStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '20px', color: '#F0EDE6',
    lineHeight: 1.2, marginBottom: '8px',
  };

  const descStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', color: '#6B6B6B',
    lineHeight: 1.55, marginBottom: '14px',
  };

  const stackStyle = { display: 'flex', gap: '5px', flexWrap: 'wrap' };

  const tagStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px', color: '#C8965A',
    background: 'rgba(200,150,90,0.08)',
    border: '1px solid rgba(200,150,90,0.15)',
    borderRadius: '2px', padding: '2px 7px',
  };

  const linkStyle = {
    display: 'flex', alignItems: 'center', gap: '5px',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', color: hovered ? '#C8965A' : '#6B6B6B',
    marginTop: '14px', transition: 'color 150ms ease',
    fontWeight: 500,
  };

  return (
    <div style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}>
      <div style={thumbStyle}>
        <div style={thumbLabel}>project preview</div>
        <div style={thumbOverlay}></div>
      </div>
      <div style={bodyStyle}>
        <div style={metaStyle}>{project.type} · {project.year}</div>
        <div style={titleStyle}>{project.title}</div>
        <div style={descStyle}>{project.description}</div>
        <div style={stackStyle}>
          {project.stack.map(t => <span key={t} style={tagStyle}>{t}</span>)}
        </div>
        <div style={linkStyle}>View Project →</div>
      </div>
    </div>
  );
};

Object.assign(window, { ProjectCard });
