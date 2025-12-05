import { useTranslation } from 'react-i18next'
import facility1 from '../../images/facility-1.jpeg'
import facility2 from '../../images/lab.jpeg'
import facility3 from '../../images/facility-3.jpeg'

const facilityImages = [facility1, facility2, facility3]

export default function FactorySection() {
  const { t } = useTranslation()
  const cards = t('factory.cards', { returnObjects: true }) as Array<{
    title: string
    description: string
    meta: string
  }>

  return (
    <section className="py-20 md:py-28 bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)] pointer-events-none" />
      <div className="max-w-[1800px] mx-auto px-6 space-y-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#cf8300] uppercase">
            {t('factory.section_label')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {t('factory.title')}
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            {t('factory.description')}
          </p>
        </div>

        <div className="space-y-14">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`flex flex-col gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                <img
                  src={facilityImages[index % facilityImages.length]}
                  alt={card.title}
                  className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"></div>
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-black/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] rounded-full border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#cf8300]" />
                    {card.meta}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-white/5 rounded-2xl border border-white/10 p-8 md:p-10 space-y-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/50">
                  <span className="w-10 h-px bg-white/20" />
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{card.title}</h3>
                <p className="text-white/70 leading-relaxed">{card.description}</p>

                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-[11px] uppercase text-white/35 tracking-[0.3em] mb-2">
                      ÇEKİRDEK OPERASYON
                    </div>
                    <p className="text-lg font-semibold text-white">
                      {index === 0 ? 'Montaj + Test' : index === 1 ? 'Demo & Eğitim' : 'Ziyaret Deneyimi'}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase text-white/35 tracking-[0.3em] mb-2">
                      KAPASİTE
                    </div>
                    <p className="text-lg font-semibold text-white">
                      {index === 0 ? '24 Saat' : index === 1 ? '4 Lab Modülü' : 'Haftalık Turlar'}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

