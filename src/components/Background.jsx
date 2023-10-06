import React from 'react';
import Modern from '../assets/Modern.jpg';

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Modern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'fixed',
        width: '100%',
        zIndex: '-1',
      }}
    />
  );
};

export default Background;
