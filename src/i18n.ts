import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import tr from './locales/tr.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

const getInitialLanguage = () => {
  // Önce URL'deki lang query parameter'ını kontrol et
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      location: 'src/i18n.ts:12',
      message: 'i18n detection',
      data: {
        langParam,
        hostname: window.location.hostname,
        pathname: window.location.pathname
      },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      hypothesisId: 'H2_i18n'
    })
  }).catch(() => {})
  // #endregion

  if (langParam && ['tr', 'en', 'ru'].includes(langParam)) {
    return langParam
  }
  
  // Sonra subdomain kontrolü
  const hostname = window.location.hostname
  if (hostname.endsWith('.ru')) {
    return 'ru'
  }
  return 'tr'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: getInitialLanguage(), 
    fallbackLng: 'tr',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
