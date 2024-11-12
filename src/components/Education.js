import React from 'react';

function Education() {
  const education = [
    {
      degree: "Grado Medio en Sistemas Microinformáticos y Redes",
      school: "IES Doctor Balmis",
      dates: "08/09/2019 – 06/06/2021"
    },
    {
      degree: "Desarrollo de Aplicaciones Multiplataforma",
      school: "IES Doctor Balmis",
      dates: "13/09/2021 – 07/06/2024"
    }
  ];

  return (
    <section className="section">
      <h2>Educación y Formación</h2>
      {education.map((study, index) => (
        <div key={index}>
          <h3>{study.degree}</h3>
          <p>{study.school} | {study.dates}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
