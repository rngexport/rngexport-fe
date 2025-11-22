import { Link } from 'react-router-dom'

import kenevaImg from '../../images/machine-keneva.png'
import kotonexImg from '../../images/machine-kotonex.png'
import uzunElyafImg from '../../images/machine-uzun-elyaf.png'
import rodiImg from '../../images/machine-rodi.png'
import presImg from '../../images/machine-pres-yatay.png' // Using for both presses for now
import peletImg from '../../images/machine-pelet.png'
import tohumImg from '../../images/machine-tohum-1.png'
import aspImg from '../../images/asp-1.png'
import mdImg from '../../images/md-1.png'
import shakerImg from '../../images/shaker-1.png'
import balyaImg from '../../images/balya-1.png'

// Helper to assign images based on ID
const getMachineImage = (id: string) => {
  switch (id) {
    case 'M-01': return kenevaImg
    case 'M-02': return kotonexImg
    case 'M-03': return uzunElyafImg
    case 'M-04': return rodiImg
    case 'M-05': return presImg
    case 'M-06': return balyaImg
    case 'M-07': return aspImg
    case 'M-08': return mdImg
    case 'M-09': return shakerImg
    case 'M-10': return peletImg
    case 'M-11': return tohumImg
    default: return null
  }
}

const machines = [
  {
    id: 'M-01',
    name: 'KENEVA – Ön Elyaf İşleme Hattı',
    category: 'Elyaf Üretimi',
    specs: { capacity: 'Yüksek', power: 'Optimize', automation: 'PLC Kontrol' },
  },
  {
    id: 'M-02',
    name: 'KOTONEX - Elyaf Kotonizasyon Hattı',
    category: 'Kotonizasyon',
    specs: { capacity: 'Endüstriyel', power: 'Düşük Tüketim', automation: 'Tam Otomatik' },
  },
  {
    id: 'M-03',
    name: 'Uzun Elyaf İşleme Hattı',
    category: 'Uzun Lif',
    specs: { capacity: '6-40 cm Lif', power: 'Hassas', automation: 'Servo' },
  },
  {
    id: 'M-04',
    name: 'RODI – Döner Tamburlu Elek',
    category: 'Eleme & Temizlik',
    specs: { capacity: '360° Tambur', power: 'Yüksek', automation: 'ATEX' },
  },
  {
    id: 'M-05',
    name: 'Dikey Balya Presi',
    category: 'Paketleme',
    specs: { capacity: '150-350 kg', power: 'Hidrolik', automation: 'Otomatik' },
  },
  {
    id: 'M-06',
    name: 'Yatay Balya Presi',
    category: 'Paketleme',
    specs: { capacity: '400-750 kg', power: 'Servo Kontrol', automation: 'PLC' },
  },
  {
    id: 'M-07',
    name: 'Aspirasyon Ünitesi',
    category: 'Toz Toplama',
    specs: { capacity: 'Tüm Hat', power: 'Merkezi', automation: 'Entegre' },
  },
  {
    id: 'M-08',
    name: 'Manyetik Dedektör',
    category: 'Güvenlik',
    specs: { capacity: 'Sıfır Hata', power: 'Sensör', automation: 'Otomatik Stop' },
  },
  {
    id: 'M-09',
    name: 'Shaker Ünitesi',
    category: 'İnce Temizlik',
    specs: { capacity: 'Hassas', power: 'Vibrasyon', automation: 'Anti-blinding' },
  },
  {
    id: 'M-10',
    name: 'Pelet Makinasi',
    category: 'Peletleme',
    specs: { capacity: '100-300 kg/h', power: 'Hidrolik', automation: 'Otomatik' },
  },
  {
    id: 'M-11',
    name: 'Tohum Eleme Ünitesi',
    category: 'Tohum Eleme',
    specs: { capacity: '5-12 t/saat' },
  }
]

export default function MachinesSection() {
  return (
    <section id="machines" className="py-24 md:py-32 bg-white border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-xl">
            <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4">MAKİNE PARKURU</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Profesyonel Makine Çözümleri</h2>
            <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-lg">
              Keten ve kenevir işleme süreçleri için özel olarak geliştirilmiş 9 ana ünite.
            </p>
          </div>
        </div>

        <div className="-mx-6 px-6 overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-6 min-w-max">
            {machines.map((machine, index) => {
              const machineImg = getMachineImage(machine.id)
              return (
                <Link
                  to={`/machines/${machine.id}`}
                  key={machine.id}
                  className="group min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] bg-white border border-neutral-200 hover:border-black transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
                    <span className="text-[11px] font-mono text-neutral-500">{machine.id}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">{machine.category}</span>
                  </div>

                  <div className="h-64 bg-neutral-50 relative overflow-hidden flex items-center justify-center p-6">
                    {machineImg ? (
                       <img src={machineImg} alt={machine.name} className="h-48 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply" />
                    ) : (
                      <div className="text-neutral-300 text-[10px] tracking-[0.2em] uppercase">NO IMAGE</div>
                    )}
                    
                    <div className="absolute inset-x-6 bottom-4 flex justify-between text-[10px] text-black/40 group-hover:text-black/60">
                      <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      <span>DETAYLAR</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-2 truncate">
                      {machine.name}
                    </h3>
                    <div className="space-y-2 text-[11px] text-neutral-500">
                      {Object.entries(machine.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-dashed border-neutral-100 pb-1 capitalize">
                          <span>{key}</span>
                          <span className="font-semibold text-neutral-900">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">İNCELE</span>
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
