import React from "react";
function TorneoMaker() {
    return (
        <section className="section">
            <h2>Torneo Maker</h2>
            <div>
                <h3>Introducción</h3>
                <p>
                    Torneo Maker es una aplicación móvil creada con <strong>Kotlin</strong> y <strong>Jetpack Compose</strong>, 
                    diseñada para gestionar torneos deportivos o competiciones de manera eficiente. 
                    Se enfoca en facilitar la planificación, administración y seguimiento de torneos para organizadores, 
                    ya sean principiantes o experimentados. Este proyecto es desarrollado como el Trabajo de Fin de Grado Superior, 
                    representando una aplicación práctica de conocimientos adquiridos en programación y desarrollo de software.
                </p>
            </div>
            <div>
                <h3>Motivación</h3>
                <p>
                    La idea de la aplicación surge de la necesidad de simplificar el proceso de organización de torneos, 
                    que puede ser complejo y consumir tiempo. Inspirado por su interés en datos y estadísticas, el creador desarrolló 
                    esta herramienta para hacer más accesible y práctica la creación de ligas entre amigos y familiares.
                </p>
            </div>
            <div>
                <h3>Características principales</h3>
                <ul>
                    <li><strong>Creación de torneos:</strong> Configuración personalizada con nombre, fechas, tipo de deporte y reglas.</li>
                    <li><strong>Gestión de participantes:</strong> Registro y administración de equipos o jugadores.</li>
                    <li><strong>Programación de partidos:</strong> Organización manual de encuentros, horarios y ubicaciones.</li>
                    <li><strong>Tablas y clasificaciones automáticas:</strong> Generación en tiempo real de estadísticas y resultados.</li>
                    <li><strong>Interfaz amigable:</strong> Navegación intuitiva para la gestión de datos de torneos y personas.</li>
                </ul>
            </div>
            <div>
                <h3>Base de datos</h3>
                <p>
                    La aplicación utiliza <strong>Room</strong> para gestionar la base de datos local, estructurada de la siguiente manera:
                </p>
                <ul>
                    <li><strong>CompeticionesEntity:</strong> Detalles de las competiciones (ID, Nombre, Tipo).</li>
                    <li><strong>PersonasEntity:</strong> Datos de los participantes (ID, Nombre, Apellido).</li>
                    <li><strong>ParticipantesEntity:</strong> Relaciona competiciones con participantes (ID, ID_Competicion, ID_Persona).</li>
                    <li><strong>PartidosEntity:</strong> Datos de los partidos (ID, ID_Competicion, ID_Local, ID_Visitante, Puntaje_Local, Puntaje_Visitante).</li>
                </ul>
            </div>
            <div>
                <h3>Arquitectura</h3>
                <p>
                    La aplicación implementa la arquitectura <strong>MVVM (Modelo-Vista-ViewModel)</strong>, 
                    asegurando modularidad y escalabilidad. Además:
                </p>
                <ul>
                    <li>Usa <strong>Dagger</strong> para gestionar dependencias.</li>
                    <li>Jetpack Compose para una interfaz declarativa y fluida.</li>
                </ul>
            </div>
            <div>
                <h3>Funcionamiento</h3>
                <ol>
                    <li><strong>Inicio:</strong> Los usuarios pueden crear torneos desde la pantalla principal o cargar datos de prueba.</li>
                    <li><strong>Gestión:</strong> Pantallas específicas permiten administrar personas, competiciones y partidos.</li>
                    <li><strong>Resultados:</strong> Los usuarios ingresan marcadores que actualizan automáticamente las tablas de clasificación.</li>
                    <li><strong>Visualización:</strong> Estadísticas y detalles de partidos están disponibles en tablas organizadas.</li>
                </ol>
            </div>
            <div>
                <h3>Video Demostrativo del Funcionamiento</h3>
                <iframe 
                    width="640" 
                    height="360" 
                    src="https://youtu.be/8bfP6FZG7V8" 
                    title="Torneo Maker"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div>
                <h3>Beneficios</h3>
                <ul>
                    <li>Simplifica tareas como crear cuadros y clasificaciones.</li>
                    <li>Interfaz intuitiva y personalizable.</li>
                    <li>Ideal para torneos locales y en línea.</li>
                    <li>Gestión simultánea de varias competiciones.</li>
                </ul>
            </div>
            <div>
                <h3>Conclusión</h3>
                <p>
                    Torneo Maker es una herramienta práctica que no solo reduce la complejidad de organizar torneos, 
                    sino que también representa un proyecto sólido como <strong>Trabajo de Fin de Grado Superior</strong>. 
                    Aunque es funcional, se plantean posibles mejoras como la integración en la nube, la capacidad de compartir torneos 
                    en línea y la implementación de un buscador. Estas ampliaciones incrementarían aún más su utilidad y potencial.
                </p>
            </div>
            <div className="center-container">
                <a
                href={`${process.env.PUBLIC_URL}/assets/downloads/Torneo_Maker.zip`}
                download="Torneo_Maker.zip"
                className="download-link"
                >
                 Descargar Torneo Maker
            </a>
            </div>
        </section>
    );
}

export default TorneoMaker;