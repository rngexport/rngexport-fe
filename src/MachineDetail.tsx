import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import 'react-medium-image-zoom/dist/styles.css'
import logoDark from './assets/logo-dark.png'

import kenevaImg from './images/machine-keneva.png'
import kenevaImg2 from './images/machine-keneva-2.png'

import kotonexImg from './images/machine-kotonex.png'
import kotonexImg2 from './images/machine-kotonex-2.png'

import uzunElyafImg from './images/machine-uzun-elyaf.png'
import uzunElyafImg2 from './images/machine-uzun-elyaf-2.png'

import rodiImg from './images/machine-rodi.png'
import rodiImg2 from './images/machine-rodi-2.png'
import rodiImg3 from './images/machine-rodi-3.png'

import peletImg from './images/machine-pelet.png'
import peletImg2 from './images/machine-pelet-2.png'

import tohumImg from './images/machine-tohum-1.png'
import tohumImg2 from './images/machine-tohum-2.png'

import aspImg from './images/asp-1.png'
import aspImg2 from './images/asp-2.png'
import aspImg3 from './images/asp-3.png'
import aspImg4 from './images/asp-4.png'

import mdImg from './images/md-1.png'
import mdImg2 from './images/md-2.png'
import mdImg3 from './images/md-3.png'
import mdImg4 from './images/md-4.png'

import shakerImg from './images/shaker-1.png'
import shakerImg2 from './images/shaker-2.png'

import balyaImg from './images/balya-1.png'
import dikeyBalyaImg from './images/dikey-balya-1.png'
const getMachineImages = (id: string) => {
  switch (id) {
    case 'M-01': return [kenevaImg, kenevaImg2]
    case 'M-02': return [kotonexImg, kotonexImg2]
    case 'M-03': return [uzunElyafImg, uzunElyafImg2]
    case 'M-04': return [rodiImg, rodiImg2, rodiImg3]
    case 'M-05': return [dikeyBalyaImg]
    case 'M-06': return [balyaImg]
    case 'M-07': return [aspImg, aspImg2, aspImg3, aspImg4]
    case 'M-08': return [mdImg, mdImg2, mdImg3, mdImg4]
    case 'M-09': return [shakerImg, shakerImg2]
    case 'M-10': return [peletImg, peletImg2]
    case 'M-11': return [tohumImg, tohumImg2]
    default: return []
  }
}

export default function MachineDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  
  const machines = t('machines.items', { returnObjects: true }) as any[]
  const labels = t('machines.detail_labels', { returnObjects: true }) as any
  
  const machine = id ? machines.find(m => m.id === id) : null
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const languages = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'en', label: 'ENGLISH' },
    { code: 'ru', label: 'Русский' },
  ]

  const currentLangCode = (i18n.language || 'tr').slice(0, 2)
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImageIndex(0)
  }, [id])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLangOpen && !target.closest('.language-dropdown')) {
        setIsLangOpen(false)
      }
    }

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangOpen])

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom)
  }, [])

  if (!machine) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
            <span className="text-2xl font-bold uppercase tracking-widest mb-4 text-neutral-400">Machine Not Found</span>
            <Link to="/" className="text-sm border-b border-black pb-1 hover:text-neutral-600 transition-colors">Return Home</Link>
        </div>
    )
  }

  const images = getMachineImages(id || '')
  const hasImages = images && images.length > 0
  const currentUrl = `https://www.rngexport.com/machines/${id}`

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Helmet>
        <title>{`${machine.name} | RNG Export`}</title>
        <meta name="description" content={machine.description} />
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: machine.name,
            image: hasImages ? images.map(img => `https://www.rngexport.com${img}`) : [],
            description: machine.description,
            brand: {
              '@type': 'Brand',
              name: 'RNG Export'
            },
            manufacturer: {
              '@type': 'Organization',
              name: 'RNG Export'
            },
            category: machine.category,
            url: currentUrl
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: t('nav.home', 'Home'),
                item: 'https://www.rngexport.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: t('nav.machines', 'Machines'),
                item: 'https://www.rngexport.com/#machines'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: machine.name,
                item: currentUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col gap-1 group">
            <div className="flex items-center gap-1.5">
              <img src={logoDark} alt="RNG Export" className="h-10 w-auto object-contain mb-0.5" />
              <span className="text-2xl font-bold tracking-tighter text-black">EXPORT</span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-black uppercase ml-1">
              {t('header.slogan')}
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="relative language-dropdown hidden md:block">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className={`flex items-center gap-3 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] transition-all duration-300 rounded-sm cursor-pointer border border-transparent hover:border-neutral-200 ${
                  isLangOpen 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black hover:bg-neutral-50'
                }`}
              >
                <span>{currentLang.code.toUpperCase()}</span>
                <span className={`text-[8px] opacity-60 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-100 shadow-xl rounded-sm overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
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
                              : 'text-neutral-500 hover:bg-neutral-50 hover:text-black'
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
              href="mailto:INFO@RNGEXPORT.COM" 
              className="hidden md:block bg-black text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#cf8300] transition-colors cursor-pointer"
            >
              {labels?.get_offer || 'TEKLİF İSTE'}
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 py-6 flex items-center justify-between">
           <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-400">
             <Link to="/" className="hover:text-black transition-colors">HOME</Link>
             <span>/</span>
             <Link to="/#machines" className="hover:text-black transition-colors">MACHINES</Link>
             <span>/</span>
             <span className="text-black">{machine.name}</span>
           </div>
           
           <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="text-base group-hover:-translate-x-1 transition-transform">←</span>
            {labels?.back_home || 'GERİ DÖN'}
          </button>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="relative bg-white border border-neutral-100 rounded-sm group overflow-hidden">
               {hasImages ? (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center p-12 bg-neutral-50/50">
                   <div className="relative w-full h-full flex items-center justify-center">
                     <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                      <img 
                          src={images[selectedImageIndex]} 
                          alt={machine.name} 
                          className="max-w-full max-h-full object-contain mix-blend-multiply cursor-zoom-in transition-transform duration-500 hover:scale-105"
                        />
                     </ControlledZoom>
                   </div>
                 </div>
               ) : (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center bg-neutral-50">
                    <span className="text-neutral-300 text-lg font-bold tracking-widest uppercase">{labels?.no_image || 'GÖRSEL YOK'}</span>
                 </div>
               )}
               
               {hasImages && (
                 <button 
                    onClick={() => setIsZoomed(true)}
                    className="absolute bottom-6 right-6 bg-white shadow-lg px-5 py-3 text-[10px] uppercase tracking-widest text-black font-bold border border-neutral-100 hover:bg-black hover:text-white transition-colors z-10 cursor-pointer flex items-center gap-2"
                 >
                   <span>🔍</span>
                   {labels?.zoom_hint || 'BÜYÜT'}
                 </button>
               )}
            </div>

            {hasImages && images.length > 1 && (
                <div className="grid grid-cols-5 gap-4">
                {images.map((img, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedImageIndex(i)}
                      className={`aspect-square bg-neutral-50 border flex items-center justify-center cursor-pointer transition-all duration-300 p-2 relative overflow-hidden group ${
                        selectedImageIndex === i ? 'border-black ring-1 ring-black/5' : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                       <img src={img} alt={`${machine.name} ${i}`} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    </button>
                ))}
                </div>
            )}

            <div className="hidden lg:block pt-12 border-t border-neutral-100">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                {labels?.features || 'ÖNE ÇIKAN ÖZELLİKLER'}
              </h3>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-6">
                {machine.features && machine.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-medium text-neutral-600 leading-relaxed group">
                    <div className="w-1.5 h-1.5 bg-black mt-2 group-hover:bg-[#cf8300] transition-colors flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              
              <div className="space-y-6 border-b border-neutral-200 pb-12">
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-white bg-black px-3 py-1.5 uppercase">
                  {machine.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-black">
                  {machine.name}
                </h1>
                
                <p className="text-lg text-neutral-600 leading-relaxed font-light">
                  {machine.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-8">
                  {labels?.specs || 'TEKNİK ÖZELLİKLER'}
                </h4>
                <div className="bg-neutral-50 border border-neutral-200 divide-y divide-neutral-200">
                  {machine.detailSpecs && Object.entries(machine.detailSpecs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 p-4 hover:bg-white transition-colors">
                      <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{key}</span>
                      <span className="text-sm font-medium text-black text-right">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden pt-8 border-t border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{labels?.features || 'ÖZELLİKLER'}</h3>
                <ul className="space-y-4">
                  {machine.features && machine.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:INFO@RNGEXPORT.COM" 
                  className="block w-full bg-black text-white py-5 text-center text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#cf8300] transition-colors cursor-pointer"
                >
                  {labels?.cta || 'TEKLİF İSTE'}
                </a>
                <a 
                  href="tel:+902425021772"
                  className="block w-full border border-black text-black py-5 text-center text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  {labels?.call_us || 'BİZİ ARAYIN'}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
