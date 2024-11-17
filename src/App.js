import React,{ useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Alterna el modo oscuro y claro
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode', !isLightMode);
  };

  return (
    <Router>
      <header>
      <h1>Iker Pastor Ros</h1>
      <p>Desarrollador de Software</p>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/experience">Experiencia</Link></li>
            <li><Link to="/education">Educación</Link></li>
            <li><Link to="/languages">Idiomas</Link></li>
            <li><Link to ="/contact">Contacto</Link></li>
          </ul>
        </nav>
        <button id="mode-toggle" onClick={toggleMode}>
          {isLightMode ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <footer>
        <p>&copy; 2024 Iker Pastor Ros. Todos los derechos reservados.</p>
      </footer>

    </Router>
  );
}

export default App;