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
  return (
    <Layout>
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
