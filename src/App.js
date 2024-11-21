import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Languages from './pages/Languages';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectList from './components/ProjectList';
import FantasyCalculator from './pages/projects/csharp/fantasy_calculator';
import './App.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Alterna el modo oscuro y claro
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode', !isLightMode);
  };

  return (
    <Router basename="/portfolio">
      <header>
      <h1>Iker Pastor Ros</h1>
      <p>Desarrollador de Software</p>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/experience">Experiencia</Link></li>
            <li><Link to="/education">Educación</Link></li>
            <li><Link to="/languages">Idiomas</Link></li>          
            <li><Link to="/projects">Proyectos</Link></li>
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:language" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/csharp/fantasy_calculator" element={<FantasyCalculator />} />
      </Routes>

      
      <footer>
        <p>&copy; 2024 Iker Pastor Ros. Todos los derechos reservados.</p>
      </footer>

    </Router>
  );
}

export default App;