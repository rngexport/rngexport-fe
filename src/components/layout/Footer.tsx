import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoLight from '../../assets/favicon.png'
import facilityImg from '../../images/facility.png'
import { NAV_ITEMS } from '../../constants/navigation'

export default function Footer() {
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
      className="relative bg-neutral-950 text-white pt-32 pb-12 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background Image Layer 1: Faded Base */}
      <div className="absolute bottom-0 right-0 w-[90%] md:w-[80%] lg:w-[60%] h-full pointer-events-none select-none">
        <img
          src={facilityImg}
          alt=""
          className="w-full h-full object-cover object-right-bottom opacity-[0.03] grayscale"
          style={{
            maskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Background Image Layer 2: Spotlight Reveal */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 transition-opacity duration-200 ease-out"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
        }}
      >
        <div className="absolute bottom-0 right-0 w-[90%] md:w-[80%] lg:w-[60%] h-full">
           <img
            src={facilityImg}
            alt=""
            className="w-full h-full object-cover object-right-bottom opacity-30 brightness-110 grayscale-0"
            style={{
              maskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 70%)'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col">
            <Link to="/" className="flex flex-col gap-1 mb-8">
              <div className="flex items-center gap-1.5 -ml-2.5">
                <img src={logoLight} alt="RNG Export" className="h-16 w-auto object-contain mb-0.5" />
                <span className="text-2xl font-bold tracking-tighter">EXPORT</span>
              </div>
              <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">ENDÜSTRİYEL ÇÖZÜMLER</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm max-w-md mb-8">
              Keten ve kenevir elyaf işleme teknolojilerinde global mühendislik ortağınız. 
              Tarladan son ürüne kadar %100 uzmanlık ve verimlilik odaklı çözümler sunuyoruz.
            </p>
            <div className="flex gap-4">
               {['Linkedin', 'Instagram', 'Twitter'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 text-xs uppercase tracking-wider">
                   {social[0]}
                 </a>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#cf8300]"></span>
                HIZLI ERİŞİM
              </h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.href} 
                      className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-400 group-hover:bg-white transition-colors"></span>
                      {item.label === 'ANASAYFA' ? 'Anasayfa' : item.label[0] + item.label.slice(1).toLowerCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1 lg:col-span-2 flex flex-col">
               <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#cf8300]"></span>
                İLETİŞİM MERKEZİ
              </h4>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block group-hover:text-[#cf8300] transition-colors">GENEL MERKEZ</span>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Veliköy OSB Sanayi Bulvarı No: 86/1 <br />
                      Çerkezköy / Tekirdağ / Türkiye
                    </p>
                  </div>
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block group-hover:text-[#cf8300] transition-colors">FABRİKA</span>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Çerkezköy Organize Sanayi Bölgesi<br />
                      Tekirdağ
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                   <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block group-hover:text-[#cf8300] transition-colors">E-POSTA</span>
                    <a href="mailto:info@rngexport.com" className="text-lg text-white font-light hover:underline decoration-[#cf8300] decoration-1 underline-offset-4">
                      info@rngexport.com
                    </a>
                  </div>
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block group-hover:text-[#cf8300] transition-colors">TELEFON</span>
                    <a href="tel:+902425021772" className="text-lg text-white font-light hover:underline decoration-[#cf8300] decoration-1 underline-offset-4">
                      +90 242 502 17 72
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
          <p>© 2025 RNG EXPORT. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">GİZLİLİK POLİTİKASI</a>
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
            <a href="#" className="hover:text-white transition-colors">ÇEREZ POLİTİKASI</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
