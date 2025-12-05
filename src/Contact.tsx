import { useTranslation } from "react-i18next";
import Layout from "./components/layout/Layout";
import ContactSection from "./components/home/ContactSection";
import FactorySection from "./components/home/FactorySection";
import img16 from "./images/16.jpeg";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img16} 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 text-center">
          <span className="inline-block py-1 px-4 border-2 border-white/30 text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 md:mb-8 backdrop-blur-sm bg-black/20">
            {t("contact.section_label")}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-tight">
            {t("contact.title").replace(/<br\s*\/?>/gi, " ")}
          </h1>
        </div>
      </section>

      <ContactSection />
      <FactorySection />
    </Layout>
  );
}

