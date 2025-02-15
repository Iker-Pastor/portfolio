import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section className="section">
      <h2>Contacto</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="mailto:ikerpastorros@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/iker-pastor-ros-309461303/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Iker-Pastor" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
