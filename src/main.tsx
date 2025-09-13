import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Global.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import MusicProvider from './context/MusicProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MusicProvider> 
        <App />
      </MusicProvider>
    </BrowserRouter>
  </StrictMode>,
)
