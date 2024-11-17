import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "Informático",
      company: "ANDA",
      location: "San Vicente, España",
      dates: "08/04/2021 – 15/06/2021",
      responsibilities: [
        "Solucionador de problemas informáticos",
        "Impartir curso de nociones básicas de informática a los usuarios del centro"
      ]
    },
    {
      role: "Desarrollador de software de aplicaciones",
      company: "Convotis Iberia",
      location: "Elche, España",
      dates: "18/04/2024 – 07/06/2024",
      responsibilities: [
        "Adquirir conocimientos en Spark, Dbt, Kafka, Postgres, DataBricks, Hadoop",
        "Realizar actividades aplicando los conocimientos adquiridos",
        "Investigar y utilizar el Modelo de Open IA para el uso en futuras aplicaciones"
      ]
    },
    {
      role: "Peón",
      company: "ADECCO OUTSOURCING",
      location: "Alicante, España",
      dates: "14/10/2022 – 15/10/2022",
      responsibilities: ["Trabajo nocturno arreglando tienda en Primark cubriendo una baja"]
    },
    {
      role: "Montador de escenarios y estructuras temporales",
      company: "VENTTUSS ILLUSION",
      location: "Alicante, España",
      dates: "11/08/2023 – 15/08/2023",
      responsibilities: ["Montaje y desmontaje de hinchables, equipos de música y escenarios"]
    }
  ];

  return (
    <section className="section">
      <h2>Experiencia Laboral</h2>
      {experiences.map((job, index) => (
        <div key={index}>
          <h3>{job.role} - {job.company}</h3>
          <p>{job.location} | {job.dates}</p>
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;