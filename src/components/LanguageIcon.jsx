import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageIcon = ({ language, iconClass }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${language.replace(/\s+/g, '').toLowerCase()}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', textAlign: 'center' }}>
      <i className={iconClass} style={{ fontSize: '50px' }}></i>
      <p>{language}</p>
    </div>
  );
};

export default LanguageIcon;
