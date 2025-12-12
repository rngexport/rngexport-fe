import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { hash, pathname } = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    } else if (pathname !== '/') {
       window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      <Helmet>
        <meta property="og:site_name" content="RNG Export" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rngexport.com/assets/logo-dark.png" />
        <meta property="og:locale" content={i18n.language === 'ru' ? 'ru_RU' : i18n.language === 'en' ? 'en_US' : 'tr_TR'} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RNG Export',
            url: 'https://www.rngexport.com/',
            logo: 'https://www.rngexport.com/assets/logo-dark.png',
            description: 'RNG Export, endüstriyel kenevir makina üreticileri arasında lider konumdadır. Kenevir işleme makinaları, keten elyaf üretim hatları ve anahtar teslim fabrika çözümleri sunar.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'AOSB 1. kısım Atatürk Bulvarı No: 10/1',
              addressLocality: 'Döşemealtı',
              addressRegion: 'Antalya',
              postalCode: '07190',
              addressCountry: 'TR'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+90-242-502-1772',
              contactType: 'sales',
              areaServed: ['TR', 'RU', 'US', 'EU'],
              availableLanguage: ['Turkish', 'English', 'Russian']
            },
            sameAs: [
              'https://www.linkedin.com/company/rngexport'
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'RNG Export',
            url: 'https://www.rngexport.com/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.rngexport.com/?s={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main 
        key={i18n.language}
        className="animate-in fade-in duration-700"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
