import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import MachineDetail from './MachineDetail'
import Facilities from './Facilities'
import Lines from './Lines'
import Contact from './Contact'
import Machines from './Machines'
import './index.css'
import './i18n'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// #region agent log
const logSiteIdentity = () => {
  setTimeout(() => {
    const title = document.title;
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    
    fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'main.tsx:logSiteIdentity',
        message: 'Identity Switch Check',
        data: { title, metaDesc },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        hypothesisId: 'rebrand_trakya_design'
      })
    }).catch(() => {});
  }, 1000);
};
logSiteIdentity();
// #endregion

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/machines/:id" element={<MachineDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
