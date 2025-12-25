import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import MachineDetail from './MachineDetail'
import Facilities from './Facilities'
import Lines from './Lines'
import Contact from './Contact'
import Machines from './Machines'
import Blog from './Blog'
import BlogPost from './BlogPost'
import './index.css'
import './i18n'

// #region agent log
fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    location: 'src/main.tsx:16',
    message: 'App mounting',
    data: {
      href: window.location.href,
      pathname: window.location.pathname,
      search: window.location.search
    },
    timestamp: Date.now(),
    sessionId: 'debug-session',
    hypothesisId: 'H1_ClientLoad'
  })
}).catch(() => {})
// #endregion

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

function RedirectHandler() {
  const location = useLocation()
  const path = location.pathname
  
  // /ru, /en, /tr ile başlayan path'leri yakala
  const match = path.match(/^\/(ru|en|tr)(\/|$)(.*)/)
  
  if (match) {
    const lang = match[1]
    const rest = match[3] || ''
    // Mevcut query params varsa koru, yoksa sadece lang ekle
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('lang', lang)
    
    return <Navigate to={`/${rest}?${searchParams.toString()}`} replace />
  }
  
  return <Navigate to="/" replace />
}

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<RedirectHandler />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
