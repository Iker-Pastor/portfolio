import React from "react";

function Portfolio(){
    return (
        <section className="section">
            <h2>Portfolio</h2>
            <div>
                <h3>Descripcion</h3>
                <p>
                    Este proyecto es una aplicación web desarrollada en React que funciona como mi portfolio personal. 
                    Está diseñada para mostrar mis proyectos de desarrollo web y multiplataforma. 
                </p>
            </div>

            <div>
                <h3>Características principales:</h3>
                <ul>
                    <li>Interactividad: Animaciones sutiles y transiciones fluidas para mejorar la experiencia del usuario.</li>
                    <li>Modo Oscuro: La posibilidad de cambiar entre modo oscuro y claro.</li>
                    <li>Currículum: Incluye toda la información relevante sobre mi trayectoria profesional y académica tanto los lenguajes que conozco.</li>
                    <li>Sección de proyectos: Un espacio dedicado para destacar mis proyectos, con descripciones detalladas, capturas de pantalla y enlaces a repositorios o demostraciones en vivo.</li>
                </ul>
            </div>

            <div>
                <h3>Objetivo del proyecto:</h3>
                <p>                  
                    El propósito de esta página web es actuar como una carta de presentación online 
                    proporcionando una plataforma centralizada donde se ve mi experiencia y mis proyectos.
                </p>
            </div> 
        </section>
    )
}

export default Portfolio;