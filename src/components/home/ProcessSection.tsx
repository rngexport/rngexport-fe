import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../../images/1.jpeg'
import img2 from '../../images/2.jpeg'
import img3 from '../../images/3.jpeg'
import img4 from '../../images/4.jpeg'
import img5 from '../../images/5.jpeg'
import img6 from '../../images/6.jpeg'

export default function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]
  const outputs = t('process.outputs', { returnObjects: true }) as { title: string; desc: string }[]

  const images = [img1, img2, img3, img4, img5, img6]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="process" className="py-24 bg-neutral-100 text-black border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Header - Centered & Minimal */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#cf8300] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('process.section_label')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            {t('process.section_title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg font-light leading-relaxed">
            {t('process.section_desc')}
          </p>
        </div>

        {/* Steps - Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200 mb-24">
           {steps.map((step, i) => (
             <div key={i} className="bg-white p-8 md:p-12 flex flex-col items-start justify-between min-h-[200px] hover:bg-neutral-50 transition-colors group relative overflow-hidden">
                
                {/* Step Number (Big Background) */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-neutral-100 group-hover:text-[#cf8300]/10 transition-colors select-none z-0">
                  {i + 1}
                </span>

                {/* Step Number (Small) */}
                <span className="text-[#cf8300] font-mono text-sm font-bold mb-4 relative z-10">
                   STEP 0{i + 1}
                </span>
                
                {/* Step Title */}
                <h4 className="text-xl font-bold uppercase tracking-tight text-black relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                  {step}
                </h4>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#cf8300] w-0 group-hover:w-full transition-all duration-500"></div>
             </div>
           ))}
        </div>

        {/* Photo Mosaic - Creative Layout */}
        <div className="relative mb-24 min-h-[500px] md:min-h-[600px]">
          {/* Main Large Image */}
          <div 
            className="absolute top-0 right-0 w-full md:w-2/3 h-2/3 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          >
            <img 
              src={images[0]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent group-hover:bg-black/10 transition-colors"></div>
          </div>

          {/* Medium Image - Top Left */}
          <div 
            className="absolute top-0 left-0 w-1/2 md:w-1/3 h-1/3 overflow-hidden group z-10 shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(images[1])}
          >
            <img 
              src={images[1]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          {/* Small Image - Bottom Left */}
          <div 
            className="absolute bottom-0 left-0 w-1/3 md:w-1/4 h-1/3 overflow-hidden group z-10 shadow-2xl border-4 border-white cursor-pointer"
            onClick={() => setSelectedImage(images[2])}
          >
            <img 
              src={images[2]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          {/* Medium Image - Bottom Right */}
          <div 
            className="absolute bottom-0 right-0 w-1/2 md:w-2/5 h-1/3 overflow-hidden group z-10 shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(images[3])}
          >
            <img 
              src={images[3]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          {/* Small Accent Images */}
          <div 
            className="absolute top-1/2 left-1/3 w-1/4 h-1/4 overflow-hidden group z-20 shadow-xl border-2 border-white transform -translate-y-1/2 cursor-pointer"
            onClick={() => setSelectedImage(images[4])}
          >
            <img 
              src={images[4]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          <div 
            className="absolute bottom-1/4 right-1/4 w-1/5 h-1/5 overflow-hidden group z-20 shadow-xl border-2 border-white cursor-pointer"
            onClick={() => setSelectedImage(images[5])}
          >
            <img 
              src={images[5]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
        </div>

        {/* Outputs - Minimalist List */}
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black uppercase tracking-widest inline-block border-b-2 border-[#cf8300] pb-2">
                {t('process.outputs_title')}
              </h3>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
             {outputs.map((product, idx) => (
               <div key={product.title} className="text-center group">
                  <div className="w-12 h-12 mx-auto bg-black text-white flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#cf8300] transition-colors rounded-full">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-black uppercase tracking-wide mb-3">
                    {product.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {product.desc}
                  </p>
               </div>
             ))}
           </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#cf8300] transition-colors text-2xl font-bold z-10"
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
