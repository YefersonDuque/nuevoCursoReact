import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroresApp } from './HeroresApp'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroresApp />
    </BrowserRouter>
  </StrictMode>,
)
