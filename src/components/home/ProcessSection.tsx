import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import processBg from '../../images/15.jpeg'

export default function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]
  const outputs = t('process.outputs', { returnObjects: true }) as { title: string; desc: string }[]
  
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHovering(true)
  }

  return (
    <section 
      id="process" 
      className="relative py-32 bg-neutral-950 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base darkened image */}
        <img 
          src={processBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05]"
        />
        
        {/* Spotlight reveal */}
        <div 
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255,255,255,0.1), transparent 40%)`
          }}
        ></div>
        
        {/* Revealed image layer */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: isHovering ? 1 : 0,
            maskImage: `radial-gradient(300px circle at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(300px circle at ${cursorPos.x}px ${cursorPos.y}px, black, transparent)`
          }}
        >
           <img 
            src={processBg} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-0"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <span className="inline-block py-1 px-3 border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-[#cf8300] uppercase mb-6">
            {t('process.section_label')}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
            {t('process.section_title')}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {t('process.section_desc')}
          </p>
        </div>

        {/* Process Steps - Modern Timeline */}
        <div className="mb-32 relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-gradient-to-b from-transparent via-[#cf8300]/50 to-transparent -translate-x-1/2 md:hidden"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative">
             {/* Horizontal Line for Desktop */}
             <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cf8300]/30 to-transparent"></div>

             {steps.map((step, i) => (
               <div key={step} className="group relative pl-16 md:pl-0">
                 {/* Step Number/Indicator */}
                 <div className="absolute left-0 top-0 lg:relative lg:mx-auto w-12 h-12 md:w-16 md:h-16 bg-neutral-900 border border-white/10 group-hover:border-[#cf8300] flex items-center justify-center z-10 transition-all duration-300 mb-6 shadow-2xl shadow-black">
                    <span className="text-[#cf8300] font-bold text-lg md:text-xl group-hover:scale-110 transition-transform">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                 </div>
                 
                 {/* Step Content */}
                 <div className="lg:text-center pt-2">
                   <h4 className="text-white font-bold uppercase tracking-wider text-sm md:text-base group-hover:text-[#cf8300] transition-colors">
                     {step}
                   </h4>
                   <div className="w-8 h-px bg-[#cf8300] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:mx-auto"></div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Outputs Grid */}
        <div className="border-t border-white/10 pt-24">
          <div className="flex items-center justify-center gap-6 mb-16">
             <span className="w-16 h-px bg-[#cf8300]"></span>
             <h3 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-widest text-white">
               {t('process.outputs_title')}
             </h3>
             <span className="w-16 h-px bg-[#cf8300]"></span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {outputs.map((product, idx) => (
              <div key={product.title} className="relative group h-full">
                <div className="absolute inset-0 bg-[#cf8300] translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full bg-neutral-900 border border-white/10 p-10 hover:border-[#cf8300] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-bold text-white/5 group-hover:text-[#cf8300]/20 transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="w-3 h-3 bg-[#cf8300]"></div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-[#cf8300] transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-white transition-colors">
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
