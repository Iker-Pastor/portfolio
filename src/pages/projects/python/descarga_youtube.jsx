import React from "react";

function DescargaYoutube() {
    return (
        <section className="section">
            <h2>Descarga Youtube</h2>
            <div>
                <h3>Introducción</h3>
                <p>
                    YouTube Downloader es una aplicación que permite descargar videos de YouTube de forma sencilla. 
                    La aplicación permite a los usuarios elegir la calidad del video o incluso solo descargar el audio. 
                    Esta herramienta fue creada para simplificar el proceso de descarga de contenido, utilizando <strong>Python</strong> y la biblioteca <strong>yt-dlp</strong>.
                </p>
            </div>
            <div>
                <h3>Motivación</h3>
                <p>
                    La motivación detrás de esta aplicación surgió de la necesidad de disponer de una herramienta rápida y eficiente para descargar videos de YouTube. 
                    En lugar de recurrir a sitios web complejos, la aplicación permite a los usuarios realizar descargas sin complicaciones.
                </p>
            </div>
            <div>
                <h3>Características principales</h3>
                <ul>
                    <li><strong>Descarga de videos y audio:</strong> Opción para descargar el video completo o solo el audio.</li>
                    <li><strong>Selección de calidades:</strong> Permite elegir entre varias calidades de video disponibles.</li>
                    <li><strong>Barra de progreso:</strong> Muestra el progreso de la descarga en tiempo real.</li>
                    <li><strong>Interfaz amigable:</strong> Una UI intuitiva y fácil de usar.</li>
                </ul>
            </div>
            <div>
                <h3>Base de datos</h3>
                <p>
                    La aplicación utiliza <strong>yt-dlp</strong> para interactuar con los videos de YouTube. Aunque no requiere una base de datos tradicional, 
                    utiliza configuraciones locales para gestionar las preferencias de calidad de video y la ubicación de descarga.
                </p>
            </div>
            <div>
                <h3>Arquitectura</h3>
                <p>
                    La aplicación se desarrolla utilizando un enfoque simple y directo en Python. El frontend es una interfaz gráfica creada con 
                    <strong>Tkinter</strong>, mientras que la lógica de descarga y manejo de errores es gestionada por <strong>yt-dlp</strong>.
                </p>
            </div>
            <div>
                <h3>Funcionamiento</h3>
                <ol>
                    <li><strong>Introducción de URL:</strong> Los usuarios pueden pegar el enlace del video de YouTube.</li>
                    <li><strong>Selección de calidad:</strong> El sistema extrae las calidades disponibles para el video.</li>
                    <li><strong>Descarga:</strong> Los usuarios seleccionan la calidad y la descarga comienza.</li>
                    <li><strong>Progreso:</strong> La barra de progreso muestra el avance de la descarga en tiempo real.</li>
                </ol>
            </div>
            <div>
                <h3>Video Demostrativo del Funcionamiento</h3>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://youtu.be/s5o1M4GKVsw" 
                    title="YouTube Downloader" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                ></iframe>
            </div>
            
            <div>
                <h3>Beneficios</h3>
                <ul>
                    <li>Descargar contenido de YouTube de forma sencilla.</li>
                    <li>Seleccionar entre video completo o solo audio.</li>
                    <li>Facilidad para elegir entre diferentes calidades de descarga.</li>
                </ul>
            </div>
            <div>
                <h3>Conclusión</h3>
                <p>
                    YouTube Downloader es una herramienta útil y eficiente para quienes desean descargar contenido de YouTube de forma rápida. 
                    Aunque se puede mejorar con más opciones de formatos y calidad, es una aplicación funcional que cubre lo esencial.
                </p>
            </div>
            <div className="center-container">
                <a
                    href={`${process.env.PUBLIC_URL}/assets/downloads/Descarga_Youtube.zip`}
                    download="YouTube_Downloader.zip"
                    className="download-link"
                >
                    Descargar YouTube Downloader
                </a>
            </div>
        </section>
    );
}

export default DescargaYoutube;