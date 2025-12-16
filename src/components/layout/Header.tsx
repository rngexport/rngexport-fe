import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo-dark.png'

export default function Header() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.corporate'), href: '/#corporate' },
    { label: t('nav.lines'), href: '/#lines' },
    { label: t('nav.machines'), href: '/#machines' },
    { label: t('nav.process'), href: '/#process' },
    { label: t('nav.facilities'), href: '/facilities' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  const languages = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'en', label: 'ENGLISH' },
    { code: 'ru', label: 'Русский' },
  ]

  const currentLangCode = (i18n.language || 'tr').slice(0, 2)
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0]

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:flex bg-neutral-900 text-white text-[10px] tracking-[0.2em] uppercase py-2 px-6 justify-between items-center">
        <span>{t('header.top_bar')}</span>
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <a href="mailto:INFO@RNGEXPORT.COM" className="hover:text-white transition-colors text-white" style={{ textTransform: 'none' }}>
              INFO@RNGEXPORT.COM
            </a>
            <div className="flex flex-col gap-1">
              <a href="tel:+902425021772" className="hover:text-white transition-colors text-white">
                +90 242 502 17 72
              </a>
              <a href="tel:+905466804772" className="hover:text-white transition-colors text-white">
                +90 546 680 47 72
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between">
          
          <Link to="/" className="flex flex-col gap-1 shrink-0 group">
            <div className="flex items-center gap-1.5">
              <img src={logo} alt="RNG Export" className="h-10 w-auto object-contain mb-0.5" />
              <span className="text-2xl font-bold tracking-tighter text-black">EXPORT</span>
            </div>
            <h1 className="sr-only">RNG Export - Kenevir Makina Üreticisi</h1>
            <span className="tracking-[0.3em] text-black uppercase ml-2 text-[10px]">
              {t('header.slogan')}
            </span>
          </Link>

          <div className={`hidden lg:flex items-center ${currentLangCode === 'ru' ? 'gap-6' : 'gap-10'}`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-bold uppercase tracking-widest transition-colors relative group ${
                    currentLangCode === 'ru' ? 'text-[10px]' : 'text-xs'
                  } ${isActive ? 'text-black' : 'text-black hover:text-black'}`}
                >
                  {item.label}
                  <span className="absolute -bottom-8 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              )
            })}
          </div>
          
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className={`flex items-center gap-3 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] transition-all duration-300 rounded-sm cursor-pointer ${
                  isLangOpen 
                    ? 'bg-neutral-900 text-white' 
                    : 'bg-neutral-50 text-black hover:bg-neutral-100 hover:text-black'
                }`}
              >
                <span>{currentLang.code.toUpperCase()}</span>
                <span className={`text-[8px] opacity-60 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-100 shadow-2xl shadow-neutral-200 rounded-sm overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    {languages.map((lng) => {
                      const isSelected = lng.code === currentLang.code
                      return (
                        <button
                          key={lng.code}
                          type="button"
                          onClick={() => changeLanguage(lng.code)}
                          className={`w-full flex items-center justify-between px-6 py-3 text-[11px] tracking-[0.15em] transition-colors cursor-pointer ${
                            isSelected 
                              ? 'bg-neutral-50 text-black font-bold' 
                              : 'text-black hover:bg-neutral-50 hover:text-black'
                          }`}
                          style={lng.code === 'en' ? { textTransform: 'none' } : { textTransform: 'uppercase' }}
                        >
                          <span>{lng.label}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#cf8300]"></span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="bg-neutral-900 text-white border border-neutral-900 px-8 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {t('header.quote_btn')}
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 lg:hidden pt-[88px] pb-10 px-6 flex flex-col overflow-y-auto">
              <div className="flex flex-col gap-4 mb-4 mt-0">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-tight text-black border-b border-neutral-100 pb-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-sm">
                  <a href="mailto:INFO@RNGEXPORT.COM" className="font-bold text-black">INFO@RNGEXPORT.COM</a>
                  <div className="flex flex-col gap-1 text-neutral-600">
                    <a href="tel:+902425021772">+90 242 502 17 72</a>
                    <a href="tel:+905466804772">+90 546 680 47 72</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                   <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">DİL SEÇİMİ</span>
                   <div className="flex gap-4">
                     {languages.map((lng) => (
                       <button
                         key={lng.code}
                         onClick={() => changeLanguage(lng.code)}
                         className={`px-4 py-2 border text-sm font-bold uppercase tracking-widest ${
                           lng.code === currentLang.code 
                             ? 'border-black bg-black text-white' 
                             : 'border-neutral-200 text-neutral-500'
                         }`}
                       >
                         {lng.code}
                       </button>
                     ))}
                   </div>
                </div>

                <a
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-[#cf8300] text-white text-center py-4 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  {t('header.quote_btn')}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
