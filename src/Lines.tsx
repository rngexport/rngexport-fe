import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "./components/layout/Layout";
import ProductionLinesSection from "./components/home/ProductionLinesSection";
import heroImg from "./images/hero.jpeg";

export default function Lines() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>{t('seo.lines.title', 'Anahtar Teslim Kenevir & Keten Üretim Hatları - RNG Export')}</title>
        <meta 
          name="description" 
          content={t('seo.lines.description', 'Keneva Ön İşleme, Kotonex Kotonizasyon ve Uzun Elyaf işleme hatları. Tarladan son ürüne tam entegre endüstriyel çözümler.')} 
        />
        <meta
          name="keywords"
          content={t('seo.lines.keywords', 'kenevir üretim hattı, keten üretim hattı, kotonizasyon, ön açma hattı, uzun elyaf hattı')}
        />
        <link rel="canonical" href="https://www.rngexport.com/lines" />
      </Helmet>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Lines Hero" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 text-center">
          <span className="inline-block py-1 px-4 border-2 border-white/30 text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 md:mb-8 backdrop-blur-sm bg-black/20">
            {t("lines.section_label")}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-tight">
            {t("lines.section_title")}
          </h1>
        </div>
      </section>

      <ProductionLinesSection />
    </Layout>
  );
}

