import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css'

createRoot(document.getElementById('root')).render(
  // El modo estricto solo se aplica en desarrollo
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
