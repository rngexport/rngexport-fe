import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Layout from './components/layout/Layout'
import HomeHero from './components/home/HomeHero'
import HomeMarquee from './components/home/HomeMarquee'
import CorporateSection from './components/home/CorporateSection'
import ProductionLinesSection from './components/home/ProductionLinesSection'
import MachinesSection from './components/home/MachinesSection'
import ProcessSection from './components/home/ProcessSection'
import ContactSection from './components/home/ContactSection'
import FactorySection from './components/home/FactorySection'
import TestimonialsSection from './components/home/TestimonialsSection'
import BlogPromo from './components/home/BlogPromo'

function App() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Helmet>
        <title>{t('seo.home.title', 'Kenevir Makinaları Üreticisi & Elyaf İşleme - RNG Export')}</title>
        <meta 
          name="description" 
          content={t('seo.home.description', 'RNG Export; Kenevir Makina Üreticisi ve Keten İşleme Makinaları konusunda uzmandır. Anahtar teslim elyaf üretim hatları, kotonizasyon, dekortikatör ve elyaf açma teknolojileri sunar.')} 
        />
        <meta 
          name="keywords" 
          content={t('seo.home.keywords', 'kenevir makina üreticileri, keten işleme makinaları, elyaf üretim hattı, kenevir soyma makinası, keten fabrikası kurulumu, rng export, kenevir işleme, keten makinası')} 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RNG Export',
            url: 'https://www.rngexport.com/',
            logo: 'https://www.rngexport.com/assets/logo-dark.png',
            description: 'Kenevir ve Keten Elyaf İşleme Makinaları Üreticisi',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Antalya',
              addressCountry: 'TR'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+90-546-680-47-72',
              contactType: 'sales',
              areaServed: ['TR', 'US', 'RU', 'EU'],
              availableLanguage: ['Turkish', 'English', 'Russian']
            },
            sameAs: [
              'https://www.linkedin.com/company/rngexport',
              'https://www.instagram.com/rngexport'
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Kenevir makina üreticileri kimdir?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'RNG Export, kenevir ve keten elyaf işleme için kotonizasyon, dekortikatör, soyma ve elyaf açma makinaları üreten mühendislik firmasıdır.'
                }
              },
              {
                '@type': 'Question',
                name: 'Keten işleme makinalarıyla hangi ürünler elde edilir?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Keten ve kenevirden uzun elyaf, kısa elyaf, kotonize elyaf ve biyokompozit hammaddeleri üretilir.'
                }
              },
              {
                '@type': 'Question',
                name: 'Anahtar teslim elyaf tesisinde hangi hatlar bulunur?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Balya açma, dekortikatör, aspirasyon, kotonizasyon, uzun elyaf hattı, kurutma, presleme ve otomasyon entegrasyonu bulunur.'
                }
              }
            ]
          })}
        </script>
        <link rel="canonical" href="https://www.rngexport.com/" />
      </Helmet>
      <HomeHero />
      <HomeMarquee />
      <CorporateSection />
      <ProductionLinesSection />
      <MachinesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <FactorySection />
      <BlogPromo />
    </Layout>
  )
}

export default App
