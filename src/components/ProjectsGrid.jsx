import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ProjectCard';

const PROJECTS_BASE = [
  {
    id: 1,
    title: 'FormaTuSalud',
    type: 'Featured',
    year: '2024',
    descriptionKey: 'projectData.formaSalud',
    stack: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    thumbBg: '#0F1410',
    url: 'https://formatusalud.vercel.app/',
    images: [
      '/FormaTuSalud/FormaTuSalud.webp',
      '/FormaTuSalud/FormaTuSalud2.webp',
      '/FormaTuSalud/FormaTuSalud3.webp',
      '/FormaTuSalud/FormaTuSalud4.webp',
    ],
  },
  {
    id: 2,
    title: 'Harike',
    type: 'Freelance',
    year: '2023',
    descriptionKey: 'projectData.harike',
    stack: ['React', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB', 'Socket.io'],
    thumbBg: '#131009',
  },
  {
    id: 3,
    title: 'DKelly',
    type: 'Freelance',
    year: '2023',
    descriptionKey: 'projectData.dkelly',
    stack: ['React', 'TypeScript', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB'],
    thumbBg: '#0D0F13',
  },
  {
    id: 4,
    title: 'Revuelo Arts',
    type: 'Freelance',
    year: '2022',
    descriptionKey: 'projectData.revuelo',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    thumbBg: '#110D0F',
    url: 'https://revueloarts.com',
    images: [
      '/RevueloArts/RevueloArts.webp',
      '/RevueloArts/RevueloArts2.webp',
      '/RevueloArts/RevueloArts3.webp',
      '/RevueloArts/RevueloArts4.webp',
      '/RevueloArts/RevueloArts5.webp',
      '/RevueloArts/RevueloArts6.webp',
    ],
  },
  {
    id: 5,
    title: 'GoLManager',
    type: 'Freelance',
    year: '2023',
    descriptionKey: 'projectData.golmanager',
    stack: ['React', 'TypeScript', 'Figma', 'React Native', 'Symfony', 'PHP'],
    thumbBg: '#0F1208',
    url: 'https://web.golmanager.app/',
    images: [
      '/GolManager/GolManager.webp',
      '/GolManager/GolManager2.webp',
      '/GolManager/GolManager3.webp',
      '/GolManager/GolManager4.webp',
    ],
  },
];

const FILTERS = ['all', 'featured', 'freelance'];

export const ProjectsGrid = ({ setPage }) => {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState('all');

  const PROJECTS = PROJECTS_BASE.map(p => ({
    ...p,
    description: t(p.descriptionKey)
  }));

  const filtered = PROJECTS.filter(p =>
    filter === 'all' || p.type.toLowerCase() === filter
  );

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: 'clamp(64px, 10vw, 140px) clamp(16px, 5vw, 64px) clamp(64px, 10vw, 96px)',
  };

  const headStyle = {
    marginBottom: 'clamp(32px, 5vw, 56px)',
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
    fontSize: 'clamp(32px, 6vw, 52px)', color: '#F0EDE6',
    lineHeight: 1.05, letterSpacing: '-0.02em',
    margin: '0 0 20px',
  };

  const bodyStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(14px, 2vw, 16px)', color: '#6B6B6B',
    maxWidth: '480px', lineHeight: 1.6,
  };

  const filterRowStyle = {
    display: 'flex', gap: '8px', marginBottom: 'clamp(32px, 5vw, 48px)',
    flexWrap: 'wrap',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(12px, 3vw, 20px)',
  };

  return (
    <div style={sectionStyle}>
      <div style={headStyle}>
        <div style={overlineStyle}>
          <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
          {t('projects.overline')}
        </div>
        <h2 style={h2Style}>{t('projects.projectsTitle')}</h2>
        <p style={bodyStyle}>{t('projects.description')}</p>
      </div>
      <div style={filterRowStyle}>
        {['all', 'featured', 'freelance'].map(f => (
          <button key={f} style={filterBtnStyle(filter === f)} onClick={() => setFilter(f)}>
            {t(`projects.filter${f.charAt(0).toUpperCase() + f.slice(1)}`)}
          </button>
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
