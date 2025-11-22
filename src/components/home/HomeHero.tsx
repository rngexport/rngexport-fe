import facilityImg from '../../images/facility.png'

export default function HomeHero() {
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
            <p className="text-xs font-extralight tracking-[0.3em] uppercase">MÜHENDİSLİK & TİCARET</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8">
            KETEN & KENEVİR <br /> ELYAF ÇÖZÜMLERİ
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-12 font-light">
            Tarladan çıkan ham balyayı, endüstriyel kaliteye sahip temizlenmiş, standardize edilmiş elyaf formatına
            dönüştüren %100 uzmanlaşmış mühendislik hatları.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#lines"
              className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              HATLARIMIZI KEŞFEDİN
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              PROJENİZİ BAŞLATIN
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

