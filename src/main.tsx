import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme of your choice
import 'primereact/resources/primereact.min.css';  // Core CSS
import 'primeicons/primeicons.css';  // Prime Icons


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
