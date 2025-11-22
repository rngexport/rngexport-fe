const processSteps = [
  'Ham Balya Besleme',
  'KENEVA Ön Açma',
  'RODI Eleme (1. Kademe)',
  'Shaker İnce Temizlik',
  'Kırpık/Toz Çıkarma',
  'Metal Kontrol',
  'Kotonizasyon Ünitesi',
  'Uzun Elyaf Ünitesi',
  'Final Stabilizasyon',
  'Balya Presleme',
]

const processOutputs = [
  { title: 'KOTONİZE ELYAF', desc: 'Pamuk benzeri formatta, endüstriyel kalitede işlenmiş elyaf.' },
  { title: 'TEMİZLENMİŞ UZUN ELYAF', desc: 'Teknik tekstil ve kompozit uygulamaları için optimize edilmiş uzun lif.' },
  { title: 'KISA ELYAF', desc: 'Nonwoven ve biyokompozit sektörleri için standartlaştırılmış kısa elyaf.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">RNG STANDART PROSES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">GOLD-STANDARD PROSES AKIŞI</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Tüm hatlarımızda uygulanan, verimliliği kanıtlanmış standart işleyiş şeması.</p>
        </div>

        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-neutral-800 -translate-y-1/2"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {processSteps.map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-bold mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  {i + 1}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 max-w-[100px] group-hover:text-white transition-colors">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-neutral-800 pt-16">
          <h3 className="text-xl font-bold mb-12 text-center uppercase tracking-widest">PROSES ÇIKTI ÜRÜNLERİ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {processOutputs.map((product) => (
              <div key={product.title} className="bg-neutral-800 border border-neutral-700 p-8 hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-300 group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-white group-hover:bg-neutral-300 transition-colors duration-300"></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-neutral-200 transition-colors duration-300">
                    {product.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

