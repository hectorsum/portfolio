import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsGrid } from './components/ProjectsGrid';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Footer } from './components/Footer';

const PROJECTS_BASE = [
  {
    id: 0,
    title: 'Interser',
    type: 'Featured',
    year: '2026',
    descriptionKey: 'projectData.interser',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'JWT', 'Vercel'],
    thumbBg: '#0D1110',
    url: 'https://interser.vercel.app',
    images: [
      '/Interser/Interser7.webp',
      '/Interser/Interser6.webp',
      '/Interser/Interser.webp',
      '/Interser/Interser2.webp',
      '/Interser/Interser3.webp',
      '/Interser/Interser4.webp',
      '/Interser/Interser5.webp',
    ],
  },
  {
    id: 1,
    title: 'ReservHotel by Tambourine',
    type: 'Company',
    year: '2021-2026',
    descriptionKey: 'projectData.reservhotel',
    stack: ['JavaScript', 'PL/SQL', 'PHP', 'Java', 'MVC', 'JWT', 'React', 'Next.js', 'NestJS'],
    thumbBg: '#0D1410',
    images: [
      '/ReservHotelByTambourine/ReservHotelByTambourine.webp',
    ],
  },
  {
    id: 2,
    title: 'RAG Document System',
    type: 'Featured',
    year: '2026',
    descriptionKey: 'projectData.ragDocument',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'Pinecone', 'Claude', 'React'],
    thumbBg: '#0D1120',
    images: [
      '/RAG-document/RAG2.webp',
      '/RAG-document/RAG3.webp',
      '/RAG-document/RAG1.webp',
    ],
  },
  {
    id: 3,
    title: 'FormaTuSalud',
    type: 'Featured',
    year: '2026',
    descriptionKey: 'projectData.formaSalud',
    stack: ['React', 'TypeScript', 'Next.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    thumbBg: '#0F1410',
    images: [
      '/FormaTuSalud/FormaTuSalud.webp',
      '/FormaTuSalud/FormaTuSalud2.webp',
      '/FormaTuSalud/FormaTuSalud3.webp',
      '/FormaTuSalud/FormaTuSalud4.webp',
    ],
  },
  {
    id: 4,
    title: 'Dra Nash',
    type: 'Featured',
    year: '2026',
    descriptionKey: 'projectData.draNash',
    stack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'JWT'],
    thumbBg: '#0D1018',
    images: [
      '/DraNash/DraNash.webp',
      '/DraNash/DraNash2.webp',
      '/DraNash/DraNash3.webp',
      '/DraNash/DraNash4.webp',
      '/DraNash/DraNash5.webp',
    ],
  },
  {
    id: 5,
    title: 'Harike',
    type: 'Freelance',
    year: '2022',
    descriptionKey: 'projectData.harike',
    stack: ['React', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB', 'Socket.io'],
    thumbBg: '#131009',
  },
  {
    id: 6,
    title: 'DKelly',
    type: 'Freelance',
    year: '2021',
    descriptionKey: 'projectData.dkelly',
    stack: ['React', 'TypeScript', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB'],
    thumbBg: '#0D0F13',
  },
];

const PageTransition = ({ children, pageKey }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [pageKey]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)',
    }}>
      {children}
    </div>
  );
};

const FeaturedProjects = ({ setPage }) => {
  const { t } = useTranslation();
  const featured = PROJECTS_BASE.slice(0, 2).map(p => ({
    ...p,
    description: t(p.descriptionKey)
  }));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
            {t('projects.overline')}
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '40px', color: '#F0EDE6', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            {t('projects.title')}
          </h2>
        </div>
        <button onClick={() => setPage('projects')} style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#C8965A', border: '1px solid rgba(200,150,90,0.3)', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer' }}>
          {t('projects.seeAll')}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {featured.map(p => <ProjectCard key={p.id} project={p} onClick={() => setPage('projects')} />)}
      </div>
    </div>
  );
};

function App() {
  const [page, setPageRaw] = React.useState('home');

  const setPage = (p) => {
    setPageRaw(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return (
        <>
          <HeroSection setPage={setPage} />
          <FeaturedProjects setPage={setPage} />
        </>
      );
      case 'about': return <AboutSection setPage={setPage} />;
      case 'expertise': return <ExpertiseSection />;
      case 'projects': return <ProjectsGrid setPage={setPage} />;
      case 'contact': return <ContactSection />;
      default: return <HeroSection setPage={setPage} />;
    }
  };

  return (
    <>
      <Header currentPage={page} setPage={setPage} />
      <main>
        <PageTransition pageKey={page}>
          {renderPage()}
        </PageTransition>
      </main>
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
