import { useTranslation, Trans } from 'react-i18next'
import facilityImg from '../../images/hero.jpeg'

export default function HomeHero() {
  const { t } = useTranslation()

  return (
    <header className="relative h-[85vh] bg-neutral-100 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img 
          src={facilityImg} 
          alt="Production Facility" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 w-full">
        <div className="max-w-4xl text-white">
          <div className="inline-block border-l-3 border-[#cf8300] pl-4 mb-6">
            <p className="text-xs font-extralight tracking-[0.3em] uppercase">
              {t('hero.subtitle')}
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8 text-white">
            <Trans i18nKey="hero.title" components={{ br: <br /> }} />
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white max-w-2xl leading-relaxed mb-8 md:mb-12 font-normal">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lines"
              className="bg-[#cf8300] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#cf8300]/90 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg text-center sm:text-left"
            >
              {t('hero.btn_discover')}
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#cf8300] transition-all duration-300 cursor-pointer hover:scale-105 text-center sm:text-left"
            >
              {t('hero.btn_start')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

