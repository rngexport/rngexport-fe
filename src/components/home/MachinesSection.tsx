import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useState } from 'react'

import kenevaImg from '../../images/machine-keneva.png'
import kotonexImg from '../../images/machine-kotonex.png'
import uzunElyafImg from '../../images/machine-uzun-elyaf.png'
import rodiImg from '../../images/machine-rodi.png'
import presImg from '../../images/machine-pres-yatay.png'
import peletImg from '../../images/machine-pelet.png'
import tohumImg from '../../images/machine-tohum-1.png'
import aspImg from '../../images/asp-1.png'
import mdImg from '../../images/md-1.png'
import shakerImg from '../../images/shaker-1.png'
import balyaImg from '../../images/balya-1.png'

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

export default function MachinesSection() {
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  
  const machines = t('machines.items', { returnObjects: true }) as any[]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        container.scrollLeft += e.deltaY
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  useEffect(() => {
    if (!isDragging) return

    const container = scrollContainerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startXRef.current) * 2
      container.scrollLeft = scrollLeftRef.current - walk
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      container.style.cursor = 'grab'
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    setIsDragging(true)
    startXRef.current = e.pageX - container.offsetLeft
    scrollLeftRef.current = container.scrollLeft
    container.style.cursor = 'grabbing'
  }

  const handleMouseLeave = () => {
    if (!isDragging) {
      const container = scrollContainerRef.current
      if (container) {
        container.style.cursor = 'grab'
      }
    }
  }

  return (
    <section id="machines" className="py-24 md:py-32 bg-white border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-xl">
            <span className="block text-xs font-bold tracking-[0.2em] text-black uppercase mb-4">
              {t('machinesSection.section_label')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
              {t('machinesSection.section_title')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-black max-w-lg">
              {t('machinesSection.section_desc')}
            </p>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="-mx-6 px-6 overflow-x-auto no-scrollbar pb-4 cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-6 min-w-max">
            {machines && machines.map((machine, index) => {
              const machineImg = getMachineImage(machine.id)
              return (
                <Link
                  to={`/machines/${machine.id}`}
                  key={machine.id}
                  className="group min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] bg-white border-2 border-neutral-200 hover:border-[#cf8300] hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer rounded-sm"
                  onClick={(e) => {
                    if (isDragging) {
                      e.preventDefault()
                    }
                  }}
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
                    <span className="text-[11px] font-mono text-black">{machine.id}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">{machine.category}</span>
                  </div>

                  <div className="h-64 bg-neutral-50 relative overflow-hidden flex items-center justify-center p-6">
                    {machineImg ? (
                       <img src={machineImg} alt={machine.name} className="h-48 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply" />
                    ) : (
                      <div className="text-neutral-300 text-[10px] tracking-[0.2em] uppercase">{t('machinesSection.no_image') || 'NO IMAGE'}</div>
                    )}
                    
                    <div className="absolute inset-x-6 bottom-4 flex justify-between text-[10px] text-black/40 group-hover:text-black/60">
                      <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      <span>{t('machinesSection.details')}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-[#cf8300] group-hover:underline underline-offset-4 decoration-[#cf8300] decoration-2 truncate text-black transition-colors">
                      {machine.name}
                    </h3>
                    <div className="space-y-2 text-base text-black">
                      {machine.specs && Object.entries(machine.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-dashed border-neutral-200 pb-1 capitalize">
                          <span className="text-black">{key}</span>
                          <span className="font-bold text-black">{val as string}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-black">
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
      </div>
    </section>
  )
}