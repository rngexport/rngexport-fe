import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from './components/layout/Layout'
import img1 from './images/16.jpeg'
import kenevaImg from './images/machine-keneva.png'
import kotonexImg from './images/machine-kotonex.png'
import uzunElyafImg from './images/machine-uzun-elyaf.png'
import rodiImg from './images/machine-rodi.png'
import presImg from './images/machine-pres-yatay.png'
import peletImg from './images/machine-pelet.png'
import tohumImg from './images/machine-tohum-1.png'
import aspImg from './images/asp-1.png'
import mdImg from './images/md-1.png'
import shakerImg from './images/shaker-1.png'
import balyaImg from './images/balya-1.png'

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

export default function Machines() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const machines = t('machines.items', { returnObjects: true }) as any[]

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Machines Hero" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 text-center">
          <span className="inline-block py-1 px-4 border-2 border-white/30 text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 md:mb-8 backdrop-blur-sm bg-black/20">
            {t("machinesSection.section_label")}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-tight">
            {t("machinesSection.section_title")}
          </h1>
        </div>
      </section>

      {/* Breadcrumb & Navigation */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 py-6 flex items-center justify-between">
           <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-400">
             <Link to="/" className="hover:text-black transition-colors">HOME</Link>
             <span>/</span>
             <span className="text-black">MACHINES</span>
           </div>
           
           <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="text-base group-hover:-translate-x-1 transition-transform">←</span>
            GERİ DÖN
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines && machines.map((machine, index) => {
              const machineImg = getMachineImage(machine.id)
              return (
                <Link
                  to={`/machines/${machine.id}`}
                  key={machine.id}
                  className="group bg-white border-2 border-neutral-200 hover:border-[#cf8300] hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer rounded-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
                    <span className="text-[11px] font-mono text-black">{machine.id}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">{machine.category}</span>
                  </div>

                  <div className="h-64 bg-neutral-50 relative overflow-hidden flex items-center justify-center p-6">
                    {machineImg ? (
                       <img src={machineImg} alt={machine.name} className="h-48 w-auto object-contain transition-all duration-500 mix-blend-multiply" />
                    ) : (
                      <div className="text-neutral-300 text-[10px] tracking-[0.2em] uppercase">{t('machinesSection.no_image') || 'NO IMAGE'}</div>
                    )}
                    
                    <div className="absolute inset-x-6 bottom-4 flex justify-between text-[10px] text-black/40 group-hover:text-black/60">
                      <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      <span>{t('machinesSection.details')}</span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col gap-6">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-[#cf8300] group-hover:underline underline-offset-4 decoration-[#cf8300] decoration-2 text-black transition-colors">
                      {machine.name}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed line-clamp-3">
                      {machine.description}
                    </p>
                    <div className="space-y-2 text-sm text-black mt-auto">
                      {machine.specs && Object.entries(machine.specs).slice(0, 3).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-dashed border-neutral-200 pb-1 capitalize">
                          <span className="text-black/60">{key}</span>
                          <span className="font-bold text-black">{val as string}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex items-center justify-between mt-4 border-t border-neutral-100">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-black font-bold">
                        {t('machinesSection.view')}
                      </span>
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
