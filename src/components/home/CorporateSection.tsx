import { useTranslation } from 'react-i18next'

export default function CorporateSection() {
  const { t } = useTranslation()
  const visionList = t('corporate.vision_list', { returnObjects: true }) as string[]
  const stats = t('corporate.stats', { returnObjects: true }) as { val: string; label: string }[]

  return (
    <section id="corporate" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] text-black uppercase mb-6">
            {t('corporate.section_label')}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            {t('corporate.headline').split('<br />')[0]}
            <br />
            {t('corporate.headline').split('<br />')[1] ?? ''}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-lg md:text-xl text-black leading-relaxed font-normal mb-8">
              {t('corporate.p1')}
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed mb-6">
              {t('corporate.p2')}
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed mb-8">
              {t('corporate.p3')}
            </p>
            <div className="border-l-2 border-black pl-6 py-2 mb-8 bg-neutral-50">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-black">
                {t('corporate.mission_title')}
              </h4>
              <p className="text-sm text-black">
                {t('corporate.mission_body')}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#cf8300] hover:border-[#cf8300] transition-all cursor-pointer"
            >
              {t('corporate.cta_detailed_info')} <span className="text-lg">→</span>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-gradient-to-br from-[#cf8300]/10 to-[#cf8300]/5 p-10 border-2 border-[#cf8300]/20 rounded-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">{t('corporate.vision_title')}</h3>
              <p className="text-base md:text-lg text-black mb-6">
                {t('corporate.vision_body')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {visionList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-black text-base font-medium group">
                    <div className="w-1.5 h-1.5 bg-black flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 divide-x divide-neutral-200 border-2 border-[#cf8300]/20 bg-white rounded-sm overflow-hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 text-center hover:bg-[#cf8300]/5 transition-colors duration-300 group cursor-default">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tighter text-[#cf8300] group-hover:text-[#cf8300] transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-black group-hover:text-[#cf8300] transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

