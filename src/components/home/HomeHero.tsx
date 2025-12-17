import { useTranslation, Trans } from 'react-i18next'
import heroImg from '../../images/14.jpeg'

export default function HomeHero() {
  const { t } = useTranslation()

  return (
    <header className="relative min-h-screen md:h-[85vh] bg-neutral-100 overflow-hidden flex items-center py-32 md:py-0">
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          alt="Production Facility" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 w-full">
        <div className="max-w-4xl text-white">
          <div className="inline-block border-l-4 border-[#cf8300] pl-4 mb-6 md:mb-8">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white">
              {t('hero.subtitle')}
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter mb-6 md:mb-10 text-white">
            <Trans i18nKey="hero.title" components={{ br: <br /> }} />
          </h1>
          <h2 className="sr-only">
            Endüstriyel Kenevir ve Keten İşleme Makinaları Üreticisi
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 max-w-xl md:max-w-2xl leading-relaxed mb-10 md:mb-16 font-light">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#lines"
              className="w-full sm:w-auto bg-[#cf8300] text-white px-8 md:px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#cf8300]/90 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center sm:justify-start gap-3 text-left"
            >
              <span>{t('hero.btn_discover')}</span>
              <span className="text-lg">→</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer hover:scale-105 text-center sm:text-left"
            >
              {t('hero.btn_start')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

