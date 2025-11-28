import { useTranslation } from 'react-i18next'

export default function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]
  const outputs = t('process.outputs', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-[#cf8300]/10 text-white">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="block text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
            {t('process.section_label')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            {t('process.section_title')}
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            {t('process.section_desc')}
          </p>
        </div>

        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-neutral-800 -translate-y-1/2"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {steps.map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-full bg-[#cf8300] border-2 border-[#cf8300] flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-white group-hover:text-[#cf8300] group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {i + 1}
                </div>
                <div className="text-sm uppercase tracking-wider text-white max-w-[100px] group-hover:text-white transition-colors">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-neutral-800 pt-16">
          <div className="flex items-center justify-center gap-4 mb-12">
             <span className="w-12 h-[2px] bg-[#cf8300]"></span>
             <h3 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-widest text-white">
               {t('process.outputs_title')}
             </h3>
             <span className="w-12 h-[2px] bg-[#cf8300]"></span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {outputs.map((product, idx) => (
              <div key={product.title} className="relative group">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-[#cf8300] transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="h-full bg-neutral-800 border border-neutral-700 p-10 hover:border-[#cf8300] transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[#cf8300] text-5xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      0{idx + 1}
                    </span>
                    <div className="w-3 h-3 bg-[#cf8300] group-hover:animate-pulse"></div>
                  </div>
                  
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white mb-4 group-hover:text-[#cf8300] transition-colors">
                    {product.title}
                  </h4>
                  
                  <p className="text-neutral-400 leading-relaxed group-hover:text-white transition-colors text-sm">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

