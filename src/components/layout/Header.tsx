import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo-dark.png' // Logo will need update

export default function Header() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.corporate'), href: '/#corporate' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.industries'), href: '/#industries' },
    { label: t('nav.projects'), href: '/#projects' },
    { label: t('nav.rd'), href: '/#rd' },
    { label: t('nav.blog'), href: '/#blog' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  const languages = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ]

  const currentLangCode = (i18n.language || 'tr').slice(0, 2)

  return (
    <header className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
      {/* Top Bar - Tech Style */}
      <div className="hidden md:flex bg-black text-[#00f0ff] text-[9px] tracking-[0.3em] uppercase py-1.5 px-6 justify-between items-center border-b border-white/5">
        <span>{t('header.top_bar')}</span>
        <div className="flex items-center gap-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>SYSTEM ONLINE</span>
        </div>
      </div>

      <nav className="relative">
        <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex flex-col gap-0 shrink-0 group">
            <span className="text-2xl font-black tracking-tighter text-white">TRAKYA</span>
            <span className="text-xs font-bold tracking-[0.4em] text-[#00f0ff] uppercase group-hover:tracking-[0.6em] transition-all duration-300">
              DESIGN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all relative group py-2
                    ${isActive ? 'text-[#00f0ff]' : 'text-neutral-400 hover:text-white'}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f0ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              )
            })}
          </div>
          
          <div className="hidden xl:flex items-center gap-6 shrink-0">
            {/* Lang Switcher - Cyber Style */}
            <div className="relative">
              <div className="flex bg-neutral-900 border border-neutral-800 rounded-sm">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`px-3 py-1.5 text-[10px] font-bold hover:text-[#00f0ff] transition-colors ${
                      currentLangCode === lng.code ? 'text-[#00f0ff] bg-white/5' : 'text-neutral-500'
                    }`}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="/#contact"
              className="bg-[#00f0ff] text-black px-6 py-2 text-[10px] font-black uppercase tracking-[0.15em] hover:bg-white hover:scale-105 transition-all duration-300 clip-path-polygon"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              {t('header.quote_btn')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-8 h-0.5 bg-[#00f0ff] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-[#00f0ff] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 xl:hidden pt-32 pb-10 px-6 flex flex-col overflow-y-auto">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold uppercase tracking-widest text-white border-l-2 border-transparent hover:border-[#00f0ff] hover:pl-4 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
