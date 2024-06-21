// NavigateButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavigateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/flashcards');
  };

  const buttonStyle = {
    marginTop: '30px',
    width: '100%',
    height: '80px',
    backgroundColor: '#E88C16',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '30px',
  };


  return (
    <button style={buttonStyle} onClick={handleClick}>Starten</button>
  );
};

export default NavigateButton;
