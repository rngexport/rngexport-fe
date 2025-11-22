import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-dark.png'
import { NAV_ITEMS } from '../../constants/navigation'

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-neutral-900 text-white text-[10px] tracking-[0.2em] uppercase py-2 px-6 flex justify-between items-center">
        <span className="hidden md:block">RNG DIŞ TİCARET - KETEN & KENEVİR ELYAF TEKNOLOJİLERİ</span>
        <div className="flex gap-6">
          <a href="mailto:info@rngexport.com" className="hover:text-gray-300 transition-colors">
            info@rngexport.com
          </a>
          <a href="tel:+902425021772" className="hover:text-gray-300 transition-colors">
            +90 242 502 17 72
          </a>
        </div>
      </div>

      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <img src={logo} alt="RNG Export" className="h-10 w-auto object-contain mb-0.5" />
              <span className="text-2xl font-bold tracking-tighter">EXPORT</span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase ml-2">ENDÜSTRİYEL ÇÖZÜMLER</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors relative group ${
                    isActive ? 'text-black' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-8 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              )
            })}
          </div>

          <a
            href="/#contact"
            className="hidden md:flex border border-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
          >
            TEKLİF İSTE
          </a>
        </div>
      </nav>
    </header>
  )
}

