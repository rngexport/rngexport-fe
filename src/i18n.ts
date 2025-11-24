import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import tr from './locales/tr.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

// Domain kontrolü ile varsayılan dili belirleme fonksiyonu
const getInitialLanguage = () => {
  const hostname = window.location.hostname
  // Eğer domain .ru ile bitiyorsa (örn: rngexport.ru) Rusça aç
  if (hostname.endsWith('.ru')) {
    return 'ru'
  }
  // Diğer tüm durumlarda (com, com.tr, localhost) Türkçe aç
  return 'tr'
}

i18n
  // Dedektörü ekle (localStorage, cookie vb. kontrolü için)
  .use(LanguageDetector)
  // React entegrasyonu
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      ru: { translation: ru },
      en: { translation: en },
    },
    // Sayfa ilk açıldığında çalışacak mantık
    lng: getInitialLanguage(), 
    fallbackLng: 'tr',
    
    interpolation: {
      escapeValue: false, // React XSS korumasına sahip olduğu için gerek yok
    },
    
    detection: {
      // Kullanıcı dili değiştirdiğinde bunu hatırla
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
