import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FantasyLogo from '../assets/projects/csharp/fantasy_calculator/fantasy.jpg'
import TorneoMakerIcon from '../assets/projects/kotlin/torneo_maker/torneomakerIcon.png'
import PortfolioIcon from '../assets/projects/react/portfolio.png'
import DescargaYoutubeIcon from '../assets/projects/python/descarga_youtube/descargayoutube.ico';

const projectsData = {
  csharp: [
    { name: "Fantasy Calculator", image: FantasyLogo, route: "/projects/csharp/fantasy_calculator" },
  ],
  kotlin: [
    { name: "Torneo Maker", image: TorneoMakerIcon, route: "/projects/kotlin/torneo_maker" },
  ],
  react: [
    { name: "Portfolio", image: PortfolioIcon, route: "/projects/react/portfolio"}
  ],
  python:[
    { name: "Descarga Youtube", image: DescargaYoutubeIcon, route: "/projects/python/descarga_youtube"},
  ]
};

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
};

function ProjectList() {
  const { language } = useParams();
  const navigate = useNavigate();
  const projects = projectsData[language.toLowerCase()] || [];

  const handleProjectClick = (route) => {
    navigate(route);
  };

  return (
    <section className="section">
      <h2>Proyectos de {language}</h2>
      {projects.length > 0 ? (
        <div style={containerStyle}>
          {projects.map((project) => (
            <div key={project.name} style={{ textAlign: 'center' }}>
              <img
                src={project.image}
                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                onClick={() => handleProjectClick(project.route)}
              />
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay proyectos disponibles para este lenguaje.</p>
      )}
    </section>
  );
}

export default ProjectList;