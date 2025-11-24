import { useTranslation } from 'react-i18next'

export default function CorporateSection() {
  const { t } = useTranslation()
  const visionList = t('corporate.vision_list', { returnObjects: true }) as string[]
  const stats = t('corporate.stats', { returnObjects: true }) as { val: string; label: string }[]

  return (
    <section id="corporate" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">
            {t('corporate.section_label')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-neutral-900">
            {t('corporate.headline').split('<br />')[0]}
            <br />
            {t('corporate.headline').split('<br />')[1] ?? ''}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xl text-neutral-800 leading-relaxed font-light mb-8">
              {t('corporate.p1')}
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              {t('corporate.p2')}
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              {t('corporate.p3')}
            </p>
            <div className="border-l-2 border-black pl-6 py-2 mb-8 bg-neutral-50">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                {t('corporate.mission_title')}
              </h4>
              <p className="text-sm text-neutral-600">
                {t('corporate.mission_body')}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#cf8300] transition-opacity cursor-pointer"
            >
              {t('corporate.cta_detailed_info')} <span className="text-lg">→</span>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-neutral-100 p-10 border border-neutral-200">
              <h3 className="text-xl font-bold mb-6">{t('corporate.vision_title')}</h3>
              <p className="text-sm text-neutral-600 mb-6">
                {t('corporate.vision_body')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {visionList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700 text-sm font-medium group">
                    <div className="w-1.5 h-1.5 bg-neutral-700 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 divide-x divide-neutral-200 border border-neutral-200 bg-white">
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 text-center hover:bg-neutral-50 transition-colors duration-300 group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter text-neutral-900 group-hover:text-[#cf8300] transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
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

