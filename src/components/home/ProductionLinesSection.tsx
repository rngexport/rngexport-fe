import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import kenevaImg from '../../images/line-keneva.png'
import kotonexImg from '../../images/line-kotonex.png'
import uzunElyafImg from '../../images/line-uzun-elyaf.png'
import facilityImg from '../../images/facility.png'

const productionLines = [
  {
    title: 'KENEVA – Keten & Kenevir Ön Elyaf İşleme Hattı',
    desc: 'Tarladan gelen ham balyanın ilk kez açıldığı, lifin ana kısım ve odunsu parçadan ayrıldığı, yabancı maddelerin temizlendiği ve stabil bir giriş akışı elde edildiği hattır.',
    image: kenevaImg,
    bgImage: facilityImg, // Placeholder or real image
    subtext: 'Pre-Processing & Opening Line',
    outputs: [
      'Balya bütünlüğünün bozulmadan açılması',
      'Büyük parçaların küçültülmesi',
      'Elyafın taranması',
      'Kırtık, toz, saman, yabancı madde ayrımı',
      'Lifin temel temizliği',
      'Homojen bir besleme malzemesi oluşturma',
    ],
    benefit: 'Sonraki aşamaların verimliliğini %40-55 oranında artırır. Selüloz, biyokompozit ve kotonizasyon uygulamaları için olmazsa olmazdır.',
  },
  {
    title: 'KOTONEX - Keten & Kenevir Elyaf Kotonizasyon Hattı',
    desc: 'İşin kalbi burasıdır. Kotonizasyon hattı lif boyunu kısaltır, elyafı inceltir, temizler, hafifletir ve “pamuk benzeri” bir formata getirir.',
    image: kotonexImg,
    bgImage: facilityImg, // Placeholder
    subtext: 'Cottonization Line',
    applications: [
      'Nonwoven',
      'Tekstil karışım ipliği',
      'Alfa-selüloz üretimi',
      'Nitroselüloz üretimi',
      'Savunma sanayi propellant üretimi',
      'Biyokompozit takviye malzemesi',
    ],
    outputs: [
      'Lif boyu kontrolü',
      'İnceltilmiş, açılmış lif',
      'Metal ve tozdan arındırılmış malzeme',
      'Sürekli ve stabil debi',
      'Düşük nem & homojen yoğunluk',
    ],
  },
  {
    title: 'Uzun Elyaf İşleme Hattı',
    desc: 'Bu hat özellikle teknik tekstiller, otomotiv kompozitleri ve inşaat güçlendirme malzemeleri için uzun lif üreten hattır.',
    image: uzunElyafImg,
    bgImage: facilityImg, // Placeholder
    subtext: 'Long Fibre Line',
    features: [
      'Lif boyu kırılmasını engelleyen özel açıcılar',
      'Düşük hız kontrollü tarama tamburları',
      'Hassas shaker-eleme',
      'Metal ve kir ayrımı',
    ],
    applications: ['Teknik tekstiller', 'Otomotiv kompozitleri', 'İnşaat güçlendirme malzemeleri'],
    outputs: ['Keten esaslı kompozit', 'Lif takviyeli plastik', 'Cam elyafa alternatif bio-fiber çözümler'],
  },
]

export default function ProductionLinesSection() {
  return (
    <section id="lines" className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6 py-24">
        <div className="mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4">
            ÜRETİM HATLARIMIZ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
            Global pazarda sunduğumuz tam entegre 3 ana çözüm.
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {productionLines.map((item, idx) => (
            <div 
              key={item.title} 
              className="relative w-full overflow-hidden group rounded-sm bg-neutral-900 min-h-[600px] flex flex-col lg:flex-row"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-900/40"></div>
              </div>

              {/* Content Side */}
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white max-w-3xl">
                <div className="mb-8">
                  <div className="text-xs font-bold tracking-[0.2em] text-[#cf8300] mb-4">0{idx + 1}</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">{item.title}</h3>
                  <span className="text-xs font-mono text-neutral-400 block tracking-wider">{item.subtext}</span>
                </div>

                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 border-l-2 border-neutral-700 pl-6">
                  {item.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {item.features && (
                    <ListBlock title="ÖZELLİKLER" items={item.features} />
                  )}
                  {item.applications && (
                    <ListBlock title="UYGULAMA ALANLARI" items={item.applications} />
                  )}
                  {item.outputs && (
                    <ListBlock
                      title={item.outputs.length > 3 ? 'ÇIKTI ÜRÜNLER' : 'TEMEL ÇIKTILAR'}
                      items={item.outputs}
                    />
                  )}
                </div>

                {item.benefit && (
                  <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded text-xs text-neutral-300 italic">
                    <span className="text-[#cf8300] font-bold not-italic mr-2">AVANTAJ:</span>
                    {item.benefit}
                  </div>
                )}
              </div>

              {/* Technical Image Side */}
              <div className="relative z-10 lg:w-5/12 min-h-[300px] lg:min-h-full bg-white/5 border-l border-white/5 flex items-center justify-center p-8 lg:p-12">
                 <div className="w-full relative">
                    <Zoom>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 cursor-zoom-in invert" 
                      />
                    </Zoom>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[10px] font-bold tracking-widest text-neutral-500 uppercase pointer-events-none">
                      Büyütmek için tıkla
                    </div>
                 </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type ListBlockProps = {
  title: string
  items: string[]
}

function ListBlock({ title, items }: ListBlockProps) {
  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4 border-b border-white/10 pb-2 inline-block">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-xs text-neutral-400 leading-relaxed group hover:text-white transition-colors">
            <div className="w-1.5 h-1.5 bg-[#cf8300] flex-shrink-0 mt-1.5"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
