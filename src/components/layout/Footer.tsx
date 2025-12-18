import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoLight from '../../assets/favicon.png'
import { NAV_ITEMS } from '../../constants/navigation'
import footerImg from '../../images/factory.jpeg'

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
      className="bg-gradient-to-b from-neutral-950 to-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cf8300] to-transparent z-20"></div>
      
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={footerImg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-right-bottom opacity-[0.03]"
        />
        
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: isHovering ? 1 : 0,
            maskImage: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
          }}
        >
          <img
            src={footerImg}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-right-bottom opacity-50 grayscale-0"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="max-w-[1800px] mx-auto px-6 pt-16 pb-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          <div className="lg:col-span-4">
            <Link to="/" className="flex flex-col gap-1 shrink-0 mb-6 group">
              <div className="flex items-center gap-1.5">
                <img src={logoLight} alt="RNG Export" className="h-10 w-auto object-contain mb-0.5" />
                <span className="text-2xl font-bold tracking-tighter text-white">EXPORT</span>
              </div>
              <span className="tracking-[0.3em] text-white uppercase ml-2 text-[10px]">
                {t('header.slogan')}
              </span>
            </Link>
            
            <p className="text-neutral-300 text-sm leading-relaxed mb-8 max-w-sm">
              {t('footer.brand_text')}
            </p>

            <div className="flex gap-3">
              {['IN', 'IG', 'TW'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#cf8300] hover:border-[#cf8300] hover:scale-110 transition-all duration-300 text-[10px] font-bold shadow-lg"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gradient-to-r from-[#cf8300] to-transparent"></span>
              {t('footer.quick_links')}
            </h4>
            <nav className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-neutral-700 group-hover:bg-[#cf8300] group-hover:scale-125 transition-all duration-300 rounded-none"></div>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
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
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gradient-to-r from-[#cf8300] to-transparent"></span>
              {t('footer.contact_center')}
            </h4>
            
            <div className="space-y-5">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-[#cf8300]/50 transition-all duration-300">
                <span className="text-[#cf8300] text-[10px] uppercase tracking-widest font-bold block mb-2">
                  {t('footer.hq_label')}
                </span>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {t('footer.hq_address')}
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-[#cf8300]/50 transition-all duration-300">
                <span className="text-[#cf8300] text-[10px] uppercase tracking-widest font-bold block mb-2">
                  {t('footer.factory_label')}
                </span>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {t('footer.factory_address')}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-[#cf8300]/50 transition-all duration-300">
                <div className="space-y-3">
                  <div>
                    <span className="text-[#cf8300] text-[10px] uppercase tracking-widest font-bold block mb-2">
                      {t('footer.phone_label')}
                    </span>
                    <a href="tel:+905466804772" className="text-white hover:text-[#cf8300] transition-colors block text-sm mb-1">
                      +90 546 680 47 72
                    </a>
                    <a href="tel:+902425021772" className="text-white hover:text-[#cf8300] transition-colors block text-sm">
                      +90 242 502 17 72
                    </a>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[#cf8300] text-[10px] uppercase tracking-widest font-bold block mb-2">
                      {t('footer.email_label')}
                    </span>
                    <a href="mailto:INFO@RNGEXPORT.COM" className="text-white hover:text-[#cf8300] transition-colors text-sm">
                      INFO@RNGEXPORT.COM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-0 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              &copy; {new Date().getFullYear()} RNG EXPORT. {t('footer.bottom_text')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase hover:text-[#cf8300] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase hover:text-[#cf8300] transition-colors">
                {t('footer.kvkk')}
              </a>
              <a href="#" className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase hover:text-[#cf8300] transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
