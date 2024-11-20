import React from 'react';
import { useParams } from 'react-router-dom';

const projectsData = {
  react: ["Project 1", "Project 2", "Project 3"],
  python: ["Data Analysis", "Machine Learning"],
  csharp: ["Game Development", "Desktop App"],
};

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
};

function ProjectList (){
  const { language } = useParams();
  const projects = projectsData[language.toLowerCase()] || [];

  return (
    <section className="section">
      <h2>Proyectos de {language}</h2>
      {projects.length > 0 ? (
        <div style={containerStyle}>
          {projects.map((project, index) => (
            <p>{project}</p>
          ))}
      </div>
      ) : (
        <p>No projects found for this language.</p>
      )}
    </section>
  );
};


export default ProjectList;
