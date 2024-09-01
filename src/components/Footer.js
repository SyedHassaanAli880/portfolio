import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftStyle}>Designed and developed by Syed Hassaan Ali</div>
      <div style={centerStyle}>Copyright &copy; 2024</div>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0px',
  backgroundColor: '#1a1a1a',
  fontSize: '14px',
};

const leftStyle = {
    flex: '0',
    textAlign: 'left',
    color: '#00ffc3',
    whiteSpace: 'nowrap', // Prevents text wrapping
    position: 'absolute', // Absolute positioning to keep it on the left
    left: '10px', // Adjust this value as needed
  };
  
  const centerStyle = {
    position: 'absolute', // Absolute positioning to center the text
    left: '50%',
    transform: 'translateX(-50%)', // Centers the text horizontally
    textAlign: 'center',
    color: '#00ffc3',
  };

export default Footer;
