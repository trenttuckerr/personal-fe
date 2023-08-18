import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
// Run Ci-CD pipeline
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
