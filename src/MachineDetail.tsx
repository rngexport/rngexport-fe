import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useTranslation } from 'react-i18next'
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

import presImg from './images/machine-pres-yatay.png'
import presImg2 from './images/machine-shaker-yatay-2.png'

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
import balyaImg2 from './images/balya-2.png'
import balyaImg3 from './images/balya-3.png'
import balyaImg4 from './images/balya-4.png'

const getMachineImages = (id: string) => {
  switch (id) {
    case 'M-01': return [kenevaImg, kenevaImg2]
    case 'M-02': return [kotonexImg, kotonexImg2]
    case 'M-03': return [uzunElyafImg, uzunElyafImg2]
    case 'M-04': return [rodiImg, rodiImg2, rodiImg3]
    case 'M-05': return [presImg, presImg2]
    case 'M-06': return [balyaImg, balyaImg2, balyaImg3, balyaImg4]
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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <span className="text-2xl font-bold uppercase tracking-widest mb-4">Machine Not Found</span>
            <Link to="/" className="text-sm border-b border-black">Return Home</Link>
        </div>
    )
  }

  const images = getMachineImages(id || '')
  const hasImages = images && images.length > 0

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <img src={logoDark} alt="RNG Export" className="h-8 w-auto object-contain mb-0.5" />
              <span className="text-lg font-bold tracking-tighter">EXPORT</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase ml-1">
              {t('header.slogan')}
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative language-dropdown">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className={`flex items-center gap-3 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] transition-all duration-300 rounded-sm cursor-pointer ${
                  isLangOpen 
                    ? 'bg-neutral-900 text-white' 
                    : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-black'
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
                              : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
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
            <a href="#contact" className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer">
              {labels?.get_offer || 'TEKLİF İSTE'}
            </a>
          </div>
        </div>
      </nav>
      <div className="max-w-[1800px] mx-auto px-6 py-8">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            {labels?.back_home || 'ANA SAYFAYA DÖN'}
          </button>
      </div>
      <div className="max-w-[1800px] mx-auto px-6 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative flex items-center justify-center bg-neutral-50 border border-neutral-100 rounded-sm group">
               {hasImages ? (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center p-12">
                   <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                    <img 
                        src={images[selectedImageIndex]} 
                        alt={machine.name} 
                        className="max-w-full max-h-full object-contain mix-blend-multiply cursor-zoom-in"
                      />
                   </ControlledZoom>
                 </div>
               ) : (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">
                    <span className="text-neutral-300 text-lg font-bold tracking-widest uppercase">{labels?.no_image || 'GÖRSEL YOK'}</span>
                 </div>
               )}
               
               {hasImages && (
                 <button 
                    onClick={() => setIsZoomed(true)}
                    className="absolute bottom-6 right-6 bg-white hover:bg-neutral-50 shadow-sm px-4 py-2 text-[10px] uppercase tracking-widest text-neutral-600 font-bold border border-neutral-200 rounded-full transition-all active:scale-95 z-10 cursor-pointer"
                 >
                   {labels?.zoom_hint || 'BÜYÜTMEK İÇİN TIKLA'}
                 </button>
               )}
            </div>
            {hasImages && (
                <div className="grid grid-cols-4 gap-4">
                {images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImageIndex(i)}
                      className={`aspect-square bg-neutral-50 border flex items-center justify-center hover:opacity-80 cursor-pointer transition-all duration-300 p-2 ${
                        selectedImageIndex === i ? 'border-black ring-1 ring-black/5' : 'border-neutral-100'
                      }`}
                    >
                       <img src={img} alt={`${machine.name} ${i}`} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                ))}
                </div>
            )}
            <div className="pt-12 border-t border-neutral-200">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">{labels?.features || 'ÖNE ÇIKAN ÖZELLİKLER'}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {machine.features && machine.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <div className="w-2 h-2 bg-black"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 sticky top-32 self-start">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase border border-neutral-200 px-3 py-1">
                {machine.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-8">
              {machine.name}
            </h1>
            
            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
              {machine.description}
            </p>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-neutral-200 pb-4">
                {labels?.specs || 'TEKNİK ÖZELLİKLER'}
              </h4>
              <div className="space-y-4">
                {machine.detailSpecs && Object.entries(machine.detailSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm border-b border-dashed border-neutral-200 pb-2 last:border-0">
                    <span className="text-neutral-500 font-medium">{key}</span>
                    <span className="text-neutral-900 font-bold">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="block w-full bg-black text-white py-5 text-center text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer">
              {labels?.cta || 'DETAYLI BİLGİ İSTE'}
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}