import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroresApp } from './HeroresApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroresApp />
  </StrictMode>,
)
