// ProjectsGrid.jsx — Projects page
const PROJECTS = [
  {
    id: 1,
    title: 'FormaTuSalud',
    type: 'Featured',
    year: '2024',
    description: 'HIPAA-compliant 222 clinic management platform for independent healthcare providers — patient consultations, payments, medical history, and role-based access.',
    stack: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    thumbBg: '#0F1410',
    url: 'https://formatusalud.vercel.app/',
  },
  {
    id: 2,
    title: 'Harike',
    type: 'Freelance',
    year: '2023',
    description: 'Real-time food ordering platform for restaurant chains managing multi-location operations. 35% reduction in order processing time via Socket.io sync.',
    stack: ['React', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB', 'Socket.io'],
    thumbBg: '#131009',
  },
  {
    id: 3,
    title: 'DKelly',
    type: 'Freelance',
    year: '2023',
    description: 'Inventory and staff management system for an ice cream franchise — real-time stock tracking and role-based access across 15+ locations.',
    stack: ['React', 'TypeScript', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB'],
    thumbBg: '#0D0F13',
  },
  {
    id: 4,
    title: 'Revuelo Arts',
    type: 'Freelance',
    year: '2022',
    description: 'Responsive website and CMS for a Latin American theater company — customizable content management and contact system. 1,000+ monthly visitors.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    thumbBg: '#110D0F',
    url: 'https://revueloarts.com',
  },
];

const FILTERS = ['all', 'featured', 'freelance'];

const ProjectsGrid = ({ setPage }) => {
  const [filter, setFilter] = React.useState('all');

  const filtered = PROJECTS.filter(p =>
    filter === 'all' || p.type.toLowerCase() === filter
  );

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: '140px 64px 96px',
  };

  const headStyle = {
    marginBottom: '56px',
  };

  const overlineStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '16px',
    display: 'flex', alignItems: 'center', gap: '12px',
  };

  const h2Style = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '52px', color: '#F0EDE6',
    lineHeight: 1.05, letterSpacing: '-0.02em',
    margin: '0 0 20px',
  };

  const bodyStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '16px', color: '#6B6B6B',
    maxWidth: '480px', lineHeight: 1.6,
  };

  const filterRowStyle = {
    display: 'flex', gap: '8px', marginBottom: '48px',
  };

  const filterBtnStyle = (active) => ({
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', fontWeight: 500,
    padding: '6px 14px', borderRadius: '4px',
    border: `1px solid ${active ? 'rgba(200,150,90,0.3)' : 'rgba(240,237,230,0.08)'}`,
    background: active ? 'rgba(200,150,90,0.08)' : 'transparent',
    color: active ? '#C8965A' : '#6B6B6B',
    cursor: 'pointer', transition: 'all 150ms ease',
    letterSpacing: '0.02em',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  };

  return (
    <div style={sectionStyle}>
      <div style={headStyle}>
        <div style={overlineStyle}>
          <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
          Selected work
        </div>
        <h2 style={h2Style}>Projects</h2>
        <p style={bodyStyle}>Full stack applications built for healthcare, hospitality, food delivery, and the arts.</p>
      </div>
      <div style={filterRowStyle}>
        {FILTERS.map(f => (
          <button key={f} style={filterBtnStyle(filter === f)} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div style={gridStyle}>
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} onClick={() => { }} />
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { ProjectsGrid, PROJECTS });
