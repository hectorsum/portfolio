// ExpertiseSection.jsx — Work experience & competencies
const EXPERIENCE = [
  {
    role: 'AI Training Specialist',
    company: 'Upwork — LBLX116 Program',
    location: 'Remote',
    period: 'Feb 2026 – Apr 2026',
    type: 'Contract',
    description: 'Trained and evaluated AI models through comparative analysis, generating human feedback rationales on code improvements. Authored detailed instruction sets enabling models to learn code quality standards.',
    highlights: ['Comparative A/B model evaluation', 'Human preference feedback for LLM reasoning', 'Code quality analysis & instruction authoring'],
    stack: ['Python', 'Model Evaluation', 'A/B Testing', 'ML Feedback Systems'],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Reservhotel by Tambourine',
    location: 'Remote — Miami / Cancún',
    period: 'Apr 2021 – Apr 2026',
    type: 'Full-time',
    description: 'Primary engineer on a SaaS booking platform generating revenue for 50+ hotel clients globally. Maintained enterprise web applications with 99.2% uptime and led technical debt reduction initiatives.',
    highlights: ['Served 50+ international hotel clients', '99.2% platform uptime', '25% reduction in technical debt', 'Mentored junior developers'],
    stack: ['PHP', 'PL/SQL', 'Java', 'jQuery', 'REST APIs', 'JavaScript'],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Gol Manager',
    location: 'Remote — Spain',
    period: 'Jan 2023 – Apr 2023',
    type: 'Contract',
    description: 'Architected and built responsive web version of the iOS/Android sports coaching app from Figma prototypes to pixel-perfect React components, reaching 5,000+ active users.',
    highlights: ['5,000+ active users', 'Figma → React pixel-perfect delivery', 'Cross-platform feature parity with React Native'],
    stack: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'Figma', 'React Native'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Fulltimeforce',
    location: 'Remote — Lima',
    period: 'Jan 2021 – Mar 2022',
    type: 'Full-time',
    description: 'Built full-stack web applications for enterprise clients with focus on scalability. Developed reusable React components and custom hooks increasing development efficiency by 30%.',
    highlights: ['30% dev efficiency increase via reusable hooks', 'Mobile-first responsive applications', 'Scalable full-stack architecture'],
    stack: ['React', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'PostgreSQL'],
  },
];

const COMPETENCIES = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Chakra UI', 'Redux', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Python', 'PHP', 'Java'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'PL/SQL', 'Redis'] },
  { label: 'DevOps & Tools', items: ['Docker', 'AWS', 'Git', 'REST APIs', 'Socket.io', 'JWT', 'Figma'] },
  { label: 'AI / ML', items: ['Model Evaluation', 'A/B Testing', 'Human Feedback Systems', 'Code Quality Analysis'] },
];

const ExpertiseSection = () => {
  const [activeExp, setActiveExp] = React.useState(0);

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: '140px 64px 96px',
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
    margin: '0 0 64px',
  };

  const gridStyle = {
    display: 'grid', gridTemplateColumns: '280px 1fr',
    gap: '0', marginBottom: '80px',
    border: '1px solid rgba(240,237,230,0.07)',
    borderRadius: '4px', overflow: 'hidden',
  };

  const tabStyle = (active) => ({
    padding: '20px 24px', cursor: 'pointer',
    borderBottom: '1px solid rgba(240,237,230,0.07)',
    background: active ? '#161616' : '#111111',
    borderRight: active ? 'none' : '1px solid rgba(240,237,230,0.07)',
    transition: 'background 150ms ease',
  });

  const tabCompany = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px', fontWeight: 500,
    color: '#F0EDE6', marginBottom: '3px',
  };

  const tabRole = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', color: '#6B6B6B',
  };

  const tabPeriod = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px', color: '#3A3A3A',
    marginTop: '6px',
  };

  const detailStyle = {
    padding: '32px 40px', background: '#161616',
  };

  const exp = EXPERIENCE[activeExp];

  const tagStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px', color: '#C8965A',
    background: 'rgba(200,150,90,0.08)',
    border: '1px solid rgba(200,150,90,0.15)',
    borderRadius: '2px', padding: '3px 8px',
  };

  const badgeStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px', fontWeight: 500,
    color: '#6B6B6B', background: 'rgba(240,237,230,0.05)',
    border: '1px solid rgba(240,237,230,0.08)',
    borderRadius: '2px', padding: '3px 8px',
    letterSpacing: '0.04em',
  };

  const dividerStyle = {
    border: 'none', borderTop: '1px solid rgba(240,237,230,0.07)',
    margin: '24px 0',
  };

  const compGridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '12px',
  };

  const compCardStyle = {
    background: '#111111', border: '1px solid rgba(240,237,230,0.07)',
    borderRadius: '4px', padding: '16px',
  };

  const compLabel = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '10px',
  };

  const compItem = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px', color: '#A8A49D',
    marginBottom: '5px',
  };

  return (
    <div style={sectionStyle}>
      <div style={overlineStyle}>
        <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
        Work experience
      </div>
      <h2 style={h2Style}>
        Career <em style={{ color: '#C8965A', fontStyle: 'italic' }}>timeline</em>
      </h2>

      {/* Experience tabs */}
      <div style={gridStyle}>
        <div style={{ borderRight: '1px solid rgba(240,237,230,0.07)' }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={tabStyle(activeExp === i)} onClick={() => setActiveExp(i)}
              onMouseEnter={ev => { if (activeExp !== i) ev.currentTarget.style.background = '#141414'; }}
              onMouseLeave={ev => { if (activeExp !== i) ev.currentTarget.style.background = '#111111'; }}>
              <div style={{ ...tabCompany, color: activeExp === i ? '#F0EDE6' : '#A8A49D' }}>{e.company}</div>
              <div style={tabRole}>{e.role}</div>
              <div style={tabPeriod}>{e.period}</div>
            </div>
          ))}
        </div>
        <div style={detailStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: '#F0EDE6', lineHeight: 1.2, marginBottom: '4px' }}>{exp.role}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', color: '#6B6B6B' }}>{exp.company} · {exp.location}</div>
            </div>
            <span style={badgeStyle}>{exp.type}</span>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', color: '#A8A49D', lineHeight: 1.65, margin: '0 0 20px' }}>
            {exp.description}
          </p>
          <hr style={dividerStyle} />
          <div style={{ marginBottom: '20px' }}>
            {exp.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontFamily: "'Outfit', sans-serif", fontSize: '13px', color: '#A8A49D', marginBottom: '8px' }}>
                <span style={{ color: '#C8965A', flexShrink: 0 }}>→</span>
                {h}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {exp.stack.map(s => <span key={s} style={tagStyle}>{s}</span>)}
          </div>
        </div>
      </div>

      {/* Competencies grid */}
      <div style={overlineStyle}>
        <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
        Core competencies
      </div>
      <div style={compGridStyle}>
        {COMPETENCIES.map(c => (
          <div key={c.label} style={compCardStyle}>
            <div style={compLabel}>{c.label}</div>
            {c.items.map(item => <div key={item} style={compItem}>{item}</div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { ExpertiseSection });
