import React from 'react';
import LanguageIcon from '../components/LanguageIcon';

const languages = [
  { name: "C Sharp", iconClass: "devicon-csharp-plain colored" },
  { name: "React", iconClass: "devicon-react-plain colored" },
  { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "Java", iconClass: "devicon-java-plain colored" },
];

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
};

function Projects () {
  return (
    <section className="section">
      <h2>Proyectos por lenguaje</h2>
      <div style={containerStyle}>
        {languages.map((lang) => (  
            <LanguageIcon key={lang.name} language={lang.name} iconClass={lang.iconClass} />
          ))}
      </div>     
    </section>
  );
};

export default Projects;