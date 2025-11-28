import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logoLight from '../../assets/favicon.png'
import facilityImg from '../../images/10.jpeg'
import { NAV_ITEMS } from '../../constants/navigation'

export default function Footer() {
  const { t } = useTranslation()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHovering(true)
  }

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="relative bg-neutral-950 text-white pt-24 pb-12 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background Image Layer 1: Faded Base */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <img
          src={facilityImg}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Background Image Layer 2: Spotlight Reveal */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 transition-opacity duration-200 ease-out"
        style={{
          opacity: isHovering ? 0.15 : 0,
          maskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
        }}
      >
         <img
          src={facilityImg}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link to="/" className="flex flex-col gap-1 shrink-0 mb-8 group">
              <div className="flex items-center gap-1.5">
                <img src={logoLight} alt="RNG Export" className="h-10 w-auto object-contain mb-0.5" />
                <span className="text-2xl font-bold tracking-tighter text-white">EXPORT</span>
              </div>
              <span className="tracking-[0.3em] text-white uppercase ml-2 text-[10px]">
                {t('header.slogan')}
              </span>
            </Link>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              {t('footer.brand_text')}
            </p>

            <div className="flex gap-3">
               {['LN', 'IN', 'TW'].map((social, i) => (
                 <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#cf8300] hover:bg-[#cf8300] transition-all duration-300 text-[10px] font-bold">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#cf8300]"></span>
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-1 h-1 bg-neutral-700 group-hover:bg-[#cf8300] transition-colors rounded-none"></span>
                    {t(
                      item.label === 'ANASAYFA'
                        ? 'nav.home'
                        : item.label === 'KURUMSAL'
                        ? 'nav.corporate'
                        : item.label === 'HATLARIMIZ'
                        ? 'nav.lines'
                        : item.label === 'MAKİNELER'
                        ? 'nav.machines'
                        : item.label === 'PROSES'
                        ? 'nav.process'
                        : item.label === 'TESİSLER'
                        ? 'nav.facilities'
                        : 'nav.contact'
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
             <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#cf8300]"></span>
              {t('footer.contact_center')}
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Addresses */}
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-3 block font-bold">
                    {t('footer.hq_label')}
                  </span>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {t('footer.hq_address')}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-3 block font-bold">
                    {t('footer.factory_label')}
                  </span>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {t('footer.factory_address')}
                  </p>
                </div>
              </div>

              {/* Phones & Email */}
              <div className="space-y-8">
                 <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-3 block font-bold">
                    {t('footer.email_label')}
                  </span>
                  <a href="mailto:INFO@RNGEXPORT.COM" className="text-sm text-white hover:text-[#cf8300] transition-colors block">
                    INFO@RNGEXPORT.COM
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-3 block font-bold">
                    {t('footer.phone_label')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+902425021772" className="text-sm text-white hover:text-[#cf8300] transition-colors block">
                      +90 242 502 17 72
                    </a>
                    <a href="tel:+905466804772" className="text-sm text-white hover:text-[#cf8300] transition-colors block">
                      +90 546 680 47 72
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
            &copy; {new Date().getFullYear()} RNG EXPORT. {t('footer.bottom_text')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase hover:text-white transition-colors">
              {t('footer.kvkk')}
            </a>
            <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase hover:text-white transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
