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

function App() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Helmet>
        <title>{t('seo.home.title', 'Kenevir Makinaları Üreticisi & Elyaf İşleme - RNG Export')}</title>
        <meta 
          name="description" 
          content={t('seo.home.description', 'RNG Export, endüstriyel kenevir işleme makinaları, keten elyaf üretim hatları ve mühendislik çözümleri sunar. Keneva ve Kotonex ile tanışın.')} 
        />
        <meta 
          name="keywords" 
          content={t('seo.home.keywords', 'kenevir makinaları, kenevir işleme, elyaf üretim hattı, keten makinası, rng export')} 
        />
        <link rel="canonical" href="https://www.rngexport.com/" />
      </Helmet>
      <HomeHero />
      <HomeMarquee />
      <CorporateSection />
      <ProductionLinesSection />
      <MachinesSection />
      <ProcessSection />
      <ContactSection />
      <FactorySection />
    </Layout>
  )
}

export default App
