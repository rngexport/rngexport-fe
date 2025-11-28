import { useTranslation } from 'react-i18next'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import kenevaImg from '../../images/line-keneva.png'
import kotonexImg from '../../images/line-kotonex.png'
import uzunElyafImg from '../../images/line-uzun-elyaf.png'
import facilityImg from '../../images/facility.png'

export default function ProductionLinesSection() {
  const { t } = useTranslation()
  const lines = t('lines.items', { returnObjects: true }) as any[]
  const listTitles = t('lines.list_titles', { returnObjects: true }) as {
    features: string
    applications: string
    outputs_long: string
    outputs_short: string
    advantage: string
  }

  const lineVisuals = [
    { image: kenevaImg, bgImage: facilityImg },
    { image: kotonexImg, bgImage: facilityImg },
    { image: uzunElyafImg, bgImage: facilityImg },
  ]

  return (
    <section id="lines" className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6 py-24">
        <div className="mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
            {t('lines.section_label')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black max-w-3xl">
            {t('lines.section_title')}
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {lines.map((item, idx) => (
            <div 
              key={item.title} 
              className="relative w-full overflow-hidden group rounded-sm bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#cf8300]/20 min-h-[600px] flex flex-col lg:flex-row border-2 border-[#cf8300]/30"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={lineVisuals[idx]?.bgImage || facilityImg}
                  alt="" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-900/40"></div>
              </div>

              {/* Content Side */}
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white max-w-3xl">
                <div className="mb-8">
                  <div className="text-xs font-bold tracking-[0.2em] text-[#cf8300] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-white">{item.title}</h3>
                  <span className="text-sm font-mono text-white block tracking-wider">{item.subtext}</span>
                </div>

                <p className="text-white text-base md:text-lg leading-relaxed mb-10 border-l-4 border-[#cf8300] pl-6">
                  {item.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {item.features && (
                    <ListBlock title={listTitles.features} items={item.features} />
                  )}
                  {item.applications && (
                    <ListBlock title={listTitles.applications} items={item.applications} />
                  )}
                  {item.outputs && (
                    <ListBlock
                      title={item.outputs.length > 3 ? listTitles.outputs_long : listTitles.outputs_short}
                      items={item.outputs}
                    />
                  )}
                </div>

                {item.benefit && (
                  <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded text-xs text-neutral-300 italic">
                    <span className="text-[#cf8300] font-bold not-italic mr-2">
                      {listTitles.advantage}
                    </span>
                    {item.benefit}
                  </div>
                )}
              </div>

              {/* Technical Image Side */}
              <div className="relative z-10 lg:w-5/12 min-h-[300px] lg:min-h-full bg-white/5 border-l border-white/5 flex items-center justify-center p-8 lg:p-12">
                 <div className="w-full relative">
                    <Zoom>
                      <img 
                        src={lineVisuals[idx]?.image}
                        alt={item.title} 
                        className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl transition-all duration-500 cursor-zoom-in invert" 
                      />
                    </Zoom>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[10px] font-bold tracking-widest text-white uppercase pointer-events-none">
                      {t('lines.zoom_hint')}
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
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-4 border-b border-white/20 pb-2 inline-block">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-white leading-relaxed group hover:text-white transition-colors">
            <div className="w-2 h-2 bg-[#cf8300] flex-shrink-0 mt-1.5 rounded-none group-hover:scale-110 transition-transform"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
