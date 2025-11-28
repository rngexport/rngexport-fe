import { useTranslation } from 'react-i18next'

export default function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]
  const outputs = t('process.outputs', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <section id="process" className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Minimalist & Centered */}
        <div className="text-center mb-20">
          <span className="text-[#cf8300] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('process.section_label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
            {t('process.section_title')}
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t('process.section_desc')}
          </p>
        </div>

        {/* Steps - Horizontal Minimalist Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-neutral-800 mb-24">
          {steps.map((step, i) => (
            <div key={step} className="relative py-10 px-6 group border-b md:border-b-0 border-neutral-800 md:border-r last:border-r-0">
              <div className="text-xs text-neutral-600 font-mono mb-4 group-hover:text-[#cf8300] transition-colors">
                0{i + 1}
              </div>
              <div className="h-1 w-6 bg-neutral-800 mb-6 group-hover:bg-[#cf8300] group-hover:w-12 transition-all duration-300"></div>
              <h4 className="text-sm font-medium text-white uppercase tracking-wide leading-relaxed">
                {step}
              </h4>
            </div>
          ))}
        </div>

        {/* Outputs - Compact List Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3 mb-8 text-center md:text-left">
             <h3 className="text-xl font-light text-white uppercase tracking-widest">
               {t('process.outputs_title')}
             </h3>
          </div>
          
          {outputs.map((product, idx) => (
            <div key={product.title} className="flex gap-6 items-start group">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#cf8300] text-sm font-bold group-hover:border-[#cf8300] transition-colors">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-base font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#cf8300] transition-colors">
                  {product.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
