import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollProgressBar from './components/pages/ScrollProgressBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProgressBar />
    <App />
  </StrictMode>
)
