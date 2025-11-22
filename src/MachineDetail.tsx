import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import logoDark from './assets/logo-dark.png'

// Import images
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

const machineData: Record<string, {
  name: string
  category: string
  description: string
  features: string[]
  specs: Record<string, string>
  images: string[]
}> = {
  'M-01': {
    name: 'KENEVA – Ön Elyaf İşleme Ünitesi',
    category: 'Elyaf Üretimi',
    description: 'Ham balyadan girdi alan ilk büyük ünitedir. Balya bütünlüğünü bozmadan açar, büyük parçaları küçültür ve lifi ana kısımdan ayırarak stabil bir giriş akışı sağlar.',
    features: [
      'Yüksek kapasiteli tamburlu açıcı teknolojisi',
      'Tambur içi ters yönlü bıçak geometrisi',
      'Toz oluşumunu minimuma indiren düşük hız kontrolü',
      'ATEX uyumlu aspirasyon çıkışları',
      'Besleme yoğunluğunu sabitleyen otomatik kontrol sistemi'
    ],
    specs: {
      'Fonksiyon': 'Balya açma, lif parçalama, kaba tarama',
      'Verimlilik': 'Sonraki aşamaların verimliliğini %40-55 artırır',
      'Güvenlik': 'ATEX Uyumlu',
      'Kontrol': 'Otomatik Yoğunluk Kontrolü'
    },
    images: [kenevaImg, kenevaImg2]
  },
  'M-02': {
    name: 'Elyaf Kotonizasyon Makinesi',
    category: 'Kotonizasyon',
    description: 'Lifin en son ve en kritik dönüşümünü yapar. Lifleri inceltir, boyunu kararlı hale getirir ve "pamuksu" forma sokar. Selüloz, NC, biyokompozit, iplik ve nonwoven üretiminin "gold standard" hammaddesini üretir.',
    features: [
      'Çok kademeli tarak sistemi',
      'Yüksek hızlı rotorlar',
      'Lif açılışında %30 verim artışı',
      'Düşük enerji tüketimi',
      'Lif kırılmasını engelleyen tasarım'
    ],
    specs: {
      'Çıktı': 'Pamuksu, inceltilmiş lif',
      'Uygulama': 'Nonwoven, iplik, biyokompozit',
      'Verim': 'Yüksek saflıkta elyaf',
      'Enerji': 'Optimize edilmiş düşük tüketim'
    },
    images: [kotonexImg, kotonexImg2]
  },
  'M-03': {
    name: 'Uzun Elyaf İşleme Ünitesi',
    category: 'Uzun Lif',
    description: 'Keten/kenevirin 6–40 cm arası uzun liflerini koruyarak işler. Lif kırılmasını engelleyen özel açıcılar ve düşük hız kontrollü tarama tamburları ile çalışır.',
    features: [
      'Lif kırılmasını engelleyen düşük torklu açma',
      'Yumuşak tarama teknolojisi',
      'Uzun lif seçimi ve ayırma',
      'Yabancı madde eleme sistemi'
    ],
    specs: {
      'Lif Boyu': '6 - 40 cm',
      'Kullanım': 'Kompozit, teknik tekstil, inşaat güçlendirme',
      'Teknoloji': 'Düşük torklu hassas açma',
      'Kalite': 'Yüksek mukavemetli uzun lif'
    },
    images: [uzunElyafImg, uzunElyafImg2]
  },
  'M-04': {
    name: 'RODI – Döner Tamburlu Elek',
    category: 'Eleme & Temizlik',
    description: 'Keten ve kenevir proseslerinin her aşamasında kullanılan kritik eleme teknolojisi. Lif içinden toz, kırtık ve kısa parçacıkları ayırarak ürün kalitesini belirler.',
    features: [
      '360° döner tambur tasarımı',
      'Ayarlanabilir elek açıklığı',
      'ATEX uyumlu toz çıkışı',
      'Paslanmaz çelik tamburlu gövde',
      'Homojen ürün yoğunluğu sağlama'
    ],
    specs: {
      'Tip': 'Döner Tambur',
      'Malzeme': 'Paslanmaz Çelik',
      'Güvenlik': 'ATEX Uyumlu Aspirasyon',
      'Fonksiyon': 'Toz ve kırtık ayırma'
    },
    images: [rodiImg, rodiImg2, rodiImg3]
  },
  'M-05': {
    name: 'Dikey Balya Presi',
    category: 'Paketleme',
    description: 'Kısa elyaf, kotonize elyaf ve uzun elyaf için kompakt paketleme çözümü. Otomatik sıkıştırma ile yüksek yoğunluklu balyalar oluşturur.',
    features: [
      '150–350 kg balya kapasitesi',
      'Güçlü hidrolik ünite',
      'Tam korumalı çelik gövde',
      'Otomatik sıkıştırma döngüsü',
      'Yüksek dayanım ve güvenlik'
    ],
    specs: {
      'Kapasite': '150 - 350 kg/balya',
      'Sistem': 'Hidrolik Güç Ünitesi',
      'Gövde': 'Çelik Konstrüksiyon',
      'Operasyon': 'Yarı Otomatik / Otomatik'
    },
    images: [presImg, presImg2]
  },
  'M-06': {
    name: 'Yatay Balya Presi',
    category: 'Paketleme',
    description: 'Büyük kapasiteli işletmelerin tercih ettiği, sürekli beslemeye uygun yüksek hacimli pres sistemi.',
    features: [
      '400–750 kg balya ağırlığı',
      'Hidrolik servo kontrol sistemi',
      'Yatay besleme hunisi',
      'Ağır hizmet şasesi',
      'Otomatik ip sarma veya çelik kelepçe opsiyonu'
    ],
    specs: {
      'Kapasite': '400 - 750 kg/balya',
      'Kontrol': 'Hidrolik Servo',
      'Besleme': 'Sürekli/Yatay',
      'Opsiyon': 'Otomatik Bağlama'
    },
    images: [balyaImg]
  },
  'M-07': {
    name: 'Aspirasyon Ünitesi',
    category: 'Toz Toplama',
    description: 'Tüm hattın beynidir; tozu, hafif parçayı ve lif uçuntusunu toplar. Tesisin hava kalitesini korur ve ATEX güvenliğini sağlar.',
    features: [
      'Yüksek kapasiteli toz toplama',
      'Lif uçuşmasını önleme',
      'Kırtık ayrımı entegrasyonu',
      'Yangın ve kıvılcım riskini azaltma',
      'Hava kalitesi kontrolü'
    ],
    specs: {
      'Fonksiyon': 'Toz ve partikül emiş',
      'Güvenlik': 'ATEX Standartları',
      'Filtre': 'Endüstriyel tip',
      'Koruma': 'Yangın risk yönetimi'
    },
    images: [aspImg, aspImg2, aspImg3, aspImg4]
  },
  'M-08': {
    name: 'Manyetik Dedektör',
    category: 'Güvenlik',
    description: 'Hammaddeden gelebilecek metal parçaları ayırarak tüm hattı ve makineleri korur. RODI ve kotonizasyon ünitelerinin güvenliği için kritiktir.',
    features: [
      'Metal kontaminasyonunu sıfıra indirme',
      'Sensör tabanlı otomatik durdurma',
      'Operatör güvenliğini artırma',
      'Makine parkurunu koruma'
    ],
    specs: {
      'Tip': 'Manyetik / Sensörlü',
      'Tepki Süresi': 'Milisaniye',
      'Koruma': 'Tüm hat ekipmanları',
      'Otomasyon': 'Otomatik Stop & Alarm'
    },
    images: [mdImg, mdImg2, mdImg3, mdImg4]
  },
  'M-09': {
    name: 'Shaker Ünitesi',
    category: 'İnce Temizlik',
    description: 'Elyafın son formunu belirleyen, kalan kırtık ve talaşı ayıran ince temizlik ve ayırma makinesidir.',
    features: [
      'Çok kademeli elek sistemi',
      'Vibrasyon kontrollü gövde',
      'Anti-blinding mekanizması (tıkanma önleyici)',
      'Aspirasyon ile entegre çalışma',
      'Elyaf debisini stabil hale getirme'
    ],
    specs: {
      'Sistem': 'Vibrasyonlu Elek',
      'Fonksiyon': 'İnce toz ve kırtık ayrımı',
      'Teknoloji': 'Anti-blinding',
      'Entegrasyon': 'Aspirasyon uyumlu'
    },
    images: [shakerImg, shakerImg2]
  },
  'M-10': {
    name: 'Pelet Makinasi',
    category: 'Peletleme',
    description: 'Üretim artığı veya yan ürünlerin pelet formuna dönüştürülmesini sağlar.',
    features: [
      'Yüksek sıkıştırma oranı',
      'Dayanıklı disk ve rulo sistemi',
      'Otomatik yağlama',
      'Aşırı yük koruması'
    ],
    specs: {
        'Kapasite': '100 - 300 kg/h',
        'Güç': 'Hidrolik',
        'Kontrol': 'Otomatik',
        'Çıktı': 'Endüstriyel Pelet'
    },
    images: [peletImg, peletImg2]
  },
  'M-11': {
    name: 'Tohum Eleme Ünitesi',
    category: 'Tohum Eleme',
    description: 'Hasat sonrası tohumların ayrıştırılması ve temizlenmesi için kullanılır.',
    features: [
      'Hassas eleme teknolojisi',
      'Farklı boyuttaki tohumlar için ayarlanabilir',
      'Toz emiş sistemi',
      'Kolay temizlenebilir yapı'
    ],
    specs: {
        'Kapasite': '5-12 t/saat',
        'Hassasiyet': 'Yüksek',
        'Elek': 'Değiştirilebilir',
        'Kullanım': 'Tohum Temizliği'
    },
    images: [tohumImg, tohumImg2]
  }
}

export default function MachineDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const machine = id ? machineData[id] : null
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImageIndex(0)
  }, [id])

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

  const hasImages = machine.images && machine.images.length > 0

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Detail Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <img src={logoDark} alt="RNG Export" className="h-8 w-auto object-contain mb-0.5" />
              <span className="text-lg font-bold tracking-tighter">EXPORT</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase ml-1">
              ENDÜSTRİYEL ÇÖZÜMLER
            </span>
          </Link>
          <a href="#contact" className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
            Teklif Al
          </a>
        </div>
      </nav>

      <div className="max-w-[1800px] mx-auto px-6 py-8">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            Ana Sayfaya Dön
          </button>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Images & Key Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Image */}
            <div className="relative flex items-center justify-center bg-neutral-50 border border-neutral-100 rounded-sm group">
               {hasImages ? (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center p-12">
                   <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                    <img 
                        src={machine.images[selectedImageIndex]} 
                        alt={machine.name} 
                        className="max-w-full max-h-full object-contain mix-blend-multiply cursor-zoom-in"
                      />
                   </ControlledZoom>
                 </div>
               ) : (
                 <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">
                    <span className="text-neutral-300 text-lg font-bold tracking-widest uppercase">NO IMAGE</span>
                 </div>
               )}
               
               {hasImages && (
                 <button 
                    onClick={() => setIsZoomed(true)}
                    className="absolute bottom-6 right-6 bg-white hover:bg-neutral-50 shadow-sm px-4 py-2 text-[10px] uppercase tracking-widest text-neutral-600 font-bold border border-neutral-200 rounded-full transition-all active:scale-95 z-10"
                 >
                   Büyütmek İçin Tıkla
                 </button>
               )}
            </div>
            
            {/* Thumbnails */}
            {hasImages && (
                <div className="grid grid-cols-4 gap-4">
                {machine.images.map((img, i) => (
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
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Öne Çıkan Özellikler</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {machine.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <div className="w-2 h-2 bg-black"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Specs & Description */}
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
                Teknik Özellikler
              </h4>
              <div className="space-y-4">
                {Object.entries(machine.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm border-b border-dashed border-neutral-200 pb-2 last:border-0">
                    <span className="text-neutral-500 font-medium">{key}</span>
                    <span className="text-neutral-900 font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="block w-full bg-black text-white py-5 text-center text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
              Detaylı Bilgi İste
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
