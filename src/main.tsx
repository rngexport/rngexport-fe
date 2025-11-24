import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MachineDetail from './MachineDetail'
import Facilities from './Facilities'
import './index.css'
import './i18n' // i18n konfigürasyonunu başlat

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/machines/:id" element={<MachineDetail />} />
            <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
