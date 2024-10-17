import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThisProvider } from './components/context/context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThisProvider>
    <App />
    </ThisProvider>
  </StrictMode>,
)
