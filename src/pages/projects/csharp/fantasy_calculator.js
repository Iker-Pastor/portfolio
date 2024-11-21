import React from "react";

function FantasyCalculator() {
  return (
    <section className="section">
      <h2>Fantasy Calculator</h2>
      <div>
        <h3>Introducción</h3>
        <p>
          <strong>Fantasy Calculator</strong> es una aplicación desarrollada en{" "}
          <strong>C#</strong> utilizando <strong>XAML</strong> como herramienta
          para la interfaz gráfica. El propósito principal de la aplicación es
          ofrecer una manera eficiente de gestionar y analizar estadísticas
          financieras en la Liga Fantasy exclusivamente, eliminando la
          necesidad de introducir datos manualmente gracias a la integración con
          la tecnología de reconocimiento de texto <strong>Tesseract</strong>.
          Esta aplicación está diseñada para brindar a los usuarios una ventaja
          competitiva al analizar las transacciones económicas entre los
          participantes de sus ligas, utilizando una interfaz intuitiva y
          funcional basada en la arquitectura <strong>MVVM</strong>.
        </p>
      </div>
      <div>
        <h3>Motivación</h3>
        <p>
          El creador de la aplicación buscó mejorar la eficiencia de las
          herramientas existentes, las cuales requerían la introducción manual
          de datos en la mayoría de los casos. Fantasy Calculator resuelve este
          problema al:
        </p>
        <ul>
          <li>
            Reconocer texto en imágenes con Tesseract para convertirlo
            automáticamente en transacciones dentro de la base de datos.
          </li>
          <li>Facilitar el seguimiento del dinero entre los participantes.</li>
          <li>
            Generar una visión clara y estructurada de las transacciones y los
            balances financieros.
          </li>
        </ul>
      </div>
      <div>
        <h3>Características principales</h3>
        <strong>1. Gestión de datos:</strong>
        <ul>
          <li>Almacena información de los participantes y sus balances financieros.</li>
          <li>
            Registra transacciones entre los participantes, incluyendo el
            pagador, beneficiario e importe.
          </li>
        </ul>
        <strong>2. Interfaz gráfica:</strong>
        <ul>
          <li>Presenta dos tablas principales:</li>
          <ul>
            <li>
              <strong>Tabla de personas:</strong> Muestra el nombre de cada
              participante y su saldo.
            </li>
            <li>
              <strong>Tabla de transacciones:</strong> Lista las transacciones,
              indicando el pagador, beneficiario e importe.
            </li>
          </ul>
          <li>Incluye cuatro botones principales para realizar acciones específicas.</li>
        </ul>
        <strong>3. Automatización:</strong>
        <ul>
          <li>
            Utiliza <strong>Tesseract</strong> para analizar imágenes y extraer
            datos de transacciones automáticamente, eliminando la necesidad de
            introducir datos manualmente.
          </li>
        </ul>
        <strong>4. Acciones disponibles:</strong>
        <ul>
          <li>Crear personas.</li>
          <li>Crear transacciones.</li>
          <li>Eliminar todos los datos de la aplicación.</li>
          <li>
            Analizar imágenes para añadir automáticamente transacciones.
          </li>
        </ul>
      </div>
      <div>
        <h3>Base de datos</h3>
        <p>
          La aplicación utiliza <strong>SQLite</strong> como sistema de gestión
          de bases de datos. Se diseñaron dos tablas principales:
        </p>
        <strong>1. Tabla de personas:</strong>
        <pre>
          <code>
            CREATE TABLE IF NOT EXISTS personas (<br />
              id INTEGER PRIMARY KEY AUTOINCREMENT,<br />
              nombre TEXT UNIQUE NOT NULL,<br />
              dinero INTEGER NOT NULL<br />
            );
          </code>
        </pre>
        <ul>
          <li>
            <strong>id:</strong> Identificador único de cada persona.
          </li>
          <li>
            <strong>nombre:</strong> Nombre del participante (único y no nulo).
          </li>
          <li>
            <strong>dinero:</strong> Saldo financiero del participante.
          </li>
        </ul>
        <strong>2. Tabla de transacciones:</strong>
        <pre>
          <code>
            CREATE TABLE IF NOT EXISTS transacciones (<br />
              id INTEGER PRIMARY KEY AUTOINCREMENT,<br />
              pagador TEXT NOT NULL,<br />
              beneficiario TEXT NOT NULL,<br />
              importe INTEGER NOT NULL<br />
            );
          </code>
        </pre>
        <ul>
          <li>
            <strong>id:</strong> Identificador único de cada transacción.
          </li>
          <li>
            <strong>pagador:</strong> Nombre del participante que realiza el
            pago.
          </li>
          <li>
            <strong>beneficiario:</strong> Nombre del participante que recibe el
            pago.
          </li>
          <li>
            <strong>importe:</strong> Cantidad transferida.
          </li>
        </ul>
      </div>
      <div>
        <h3>Arquitectura</h3>
        <p>
          La aplicación utiliza la arquitectura <strong>MVVM</strong> (Model-View-ViewModel) 
          para mantener una separación clara entre:
        </p>
        <ul>
          <li><strong>Model:</strong> Representa las entidades de datos como personas y transacciones.</li>
          <li><strong>View:</strong> Incluye la interfaz gráfica implementada en XAML.</li>
          <li><strong>ViewModel:</strong> Conecta el modelo y la vista, manejando la lógica de interacción.</li>
        </ul>
      </div>
      <div>
        <h3>Funcionamiento</h3>
        <p>
          El funcionamiento de la aplicación sigue los siguientes pasos:
        </p>
        <ol>
          <li>
            Al abrir la aplicación, se cargan las tablas de personas y transacciones desde la base de datos.
          </li>
          <li>
            Los usuarios pueden realizar acciones mediante los botones:
            <ul>
              <li><strong>Crear personas:</strong> Añade nuevos participantes con un saldo inicial.</li>
              <li><strong>Crear transacciones:</strong> Registra transferencias entre participantes.</li>
              <li><strong>Eliminar datos:</strong> Limpia completamente la base de datos.</li>
              <li><strong>Analizar imágenes:</strong> Usa Tesseract para extraer datos de transacciones automáticamente.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div>
        <h3>Beneficios</h3>
        <ul>
          <li>
            <strong>Eficiencia:</strong> Ahorra tiempo eliminando la necesidad de introducir datos manualmente.
          </li>
          <li>
            <strong>Automatización:</strong> Permite analizar grandes volúmenes de datos con precisión.
          </li>
          <li>
            <strong>Competitividad:</strong> Proporciona información detallada sobre las finanzas de las ligas.
          </li>
          <li>
            <strong>Facilidad de uso:</strong> Interfaz amigable incluso para usuarios sin experiencia técnica.
          </li>
        </ul>
      </div>
      <div>
        <h3>Conclusión</h3>
        <p>
          <strong>Fantasy Calculator</strong> es una herramienta poderosa e innovadora para gestionar las finanzas en ligas de fantasía.
          Al combinar la automatización con una interfaz intuitiva, ofrece una experiencia única que transforma cómo se analizan
          y manejan los datos financieros en este ámbito.
        </p>
      </div>
    </section>
  );
}

export default FantasyCalculator;
