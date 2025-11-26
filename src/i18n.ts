import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import tr from './locales/tr.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

const getInitialLanguage = () => {
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
