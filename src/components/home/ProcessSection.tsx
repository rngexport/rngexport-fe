import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../../images/1.jpeg'
import img2 from '../../images/2.jpeg'
import img3 from '../../images/3.jpeg'
import img4 from '../../images/4.jpeg'
import img5 from '../../images/5.jpeg'
import img6 from '../../images/6.jpeg'
import img7 from '../../images/7.jpeg'
import img8 from '../../images/8.jpeg'
import img9 from '../../images/9.jpeg'
import img10 from '../../images/10.jpeg'
import img11 from '../../images/11.jpeg'
import img12 from '../../images/12.jpeg'
import img13 from '../../images/13.jpeg'
import img14 from '../../images/14.jpeg'
import img15 from '../../images/15.jpeg'
import img16 from '../../images/16.jpeg'
import img17 from '../../images/17.jpeg'
import img18 from '../../images/18.jpeg'
import img19 from '../../images/19.jpeg'
import img20 from '../../images/20.jpeg'
import img21 from '../../images/21.jpeg'
import img22 from '../../images/22.jpeg'
import img23 from '../../images/23.jpeg'
import img24 from '../../images/24.jpeg'
import img25 from '../../images/25.jpeg'
import img26 from '../../images/26.jpeg'
import img27 from '../../images/27.jpeg'
import img28 from '../../images/28.jpeg'
import img29 from '../../images/29.jpeg'
import img30 from '../../images/30.jpeg'

export default function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]
  const stepDetails = t('process.step_details', { returnObjects: true }) as Array<{
    title: string
    description: string
    features: string[]
  }>
  const outputs = t('process.outputs', { returnObjects: true }) as { title: string; desc: string }[]
  const outputDetails = t('process.output_details', { returnObjects: true }) as Array<{
    title: string
    description: string
    features: string[]
    applications: string[]
  }>
  const machines = t('machines.items', { returnObjects: true }) as Array<{
    id: string
    name: string
    category: string
    description: string
    specs?: Record<string, string>
    detailSpecs?: Record<string, string>
    features?: string[]
  }>

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null)
  const [selectedOutputIndex, setSelectedOutputIndex] = useState<number | null>(null)
  const stepMachineMap: string[] = ['M-01', 'M-01', 'M-04', 'M-07', 'M-07', 'M-04', 'M-02', 'M-03', 'M-02', 'M-05']
  const outputStepMap: number[][] = [
    [0, 1, 2, 3, 6],
    [0, 1, 2, 7, 8],
    [0, 1, 3, 4, 5, 9],
  ]

  const getStepImages = (index: number) => {
    const startIndex = index % images.length
    return [images[startIndex], images[(startIndex + 1) % images.length], images[(startIndex + 2) % images.length]]
  }

  const getOutputImages = (index: number) => {
    const startIndex = (index + 3) % images.length
    return [images[startIndex], images[(startIndex + 1) % images.length], images[(startIndex + 2) % images.length]]
  }

  const getMachineDataForStep = (index: number) => {
    const machineId = stepMachineMap[index]
    if (!machineId) return null
    return machines.find((machine) => machine.id === machineId) || null
  }

  const getRelatedStepsForOutput = (index: number) => {
    const mapping = outputStepMap[index] || []
    return mapping.map((stepIdx) => ({
      index: stepIdx,
      title: steps[stepIdx],
      description: stepDetails[stepIdx]?.description,
    }))
  }

  return (
    <section id="process" className="py-24 bg-neutral-100 text-black border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200 mb-24">
           {steps.map((step, i) => (
             <button
               key={i}
               onClick={() => setSelectedStepIndex(i)}
               className="bg-white p-8 md:p-12 flex flex-col items-start justify-between min-h-[200px] hover:bg-neutral-50 transition-colors group relative overflow-hidden cursor-pointer text-left w-full"
             >
                
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-neutral-100 group-hover:text-[#cf8300]/10 transition-colors select-none z-0">
                  {i + 1}
                </span>

                <span className="text-[#cf8300] font-mono text-sm font-bold mb-4 relative z-10">
                   STEP 0{i + 1}
                </span>
                
                <h4 className="text-xl font-bold uppercase tracking-tight text-black relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                  {step}
                </h4>

                <div className="absolute bottom-0 left-0 h-1 bg-[#cf8300] w-0 group-hover:w-full transition-all duration-500"></div>
             </button>
           ))}
        </div>

        <div className="relative mb-24 min-h-[500px] md:min-h-[600px]">
          <div 
            className="absolute top-0 right-0 w-full md:w-2/3 h-2/3 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(images[22])}
          >
            <img 
              src={images[22]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div 
            className="absolute top-0 left-0 w-1/2 md:w-1/3 h-1/3 overflow-hidden group z-10 shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(images[29])}
          >
            <img 
              src={images[29]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          <div 
            className="absolute bottom-0 left-0 w-1/3 md:w-1/4 h-1/3 overflow-hidden group z-10 shadow-2xl border-4 border-white cursor-pointer"
            onClick={() => setSelectedImage(images[19])}
          >
            <img 
              src={images[19]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          <div 
            className="absolute bottom-0 right-0 w-1/2 md:w-2/5 h-1/3 overflow-hidden group z-10 shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(images[16])}
          >
            <img 
              src={images[16]} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

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

        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black uppercase tracking-widest inline-block border-b-2 border-[#cf8300] pb-2">
                {t('process.outputs_title')}
              </h3>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
             {outputs.map((product, idx) => (
               <button
                 key={product.title}
                 onClick={() => setSelectedOutputIndex(idx)}
                 className="text-center group cursor-pointer"
               >
                  <div className="w-12 h-12 mx-auto bg-black text-white flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#cf8300] transition-colors rounded-full">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-black uppercase tracking-wide mb-3 group-hover:text-[#cf8300] transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {product.desc}
                  </p>
               </button>
             ))}
           </div>
        </div>

      </div>

      {selectedStepIndex !== null && stepDetails[selectedStepIndex] && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedStepIndex(null)}
        >
          <div 
            className="bg-white max-w-6xl w-full rounded-sm shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 md:px-12 py-6 flex items-center justify-between z-10">
              <div>
                <span className="text-[#cf8300] font-mono text-sm font-bold mb-2 block">
                  STEP 0{selectedStepIndex + 1}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-black">
                  {stepDetails[selectedStepIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStepIndex(null)}
                className="text-black hover:text-[#cf8300] transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="px-6 md:px-12 py-8 md:py-12 space-y-10">
              <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
                {stepDetails[selectedStepIndex].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {getStepImages(selectedStepIndex).map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative overflow-hidden group cursor-pointer rounded-sm"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${stepDetails[selectedStepIndex].title} - ${idx + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                  {t('machines.features_title')}
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {stepDetails[selectedStepIndex].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base text-black">
                      <div className="w-2 h-2 bg-[#cf8300] mt-2 flex-shrink-0 rounded-none"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(() => {
                const machineData = getMachineDataForStep(selectedStepIndex)
                if (!machineData) {
                  return null
                }
                const primarySpecs = machineData.specs ? Object.entries(machineData.specs) : []
                const detailSpecs = machineData.detailSpecs ? Object.entries(machineData.detailSpecs) : []
                return (
                  <div className="border-t border-neutral-200 pt-10 space-y-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3 block">
                        {t('machinesSection.section_label')}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">{machineData.name}</h4>
                      <p className="text-neutral-600 text-base leading-relaxed">
                        {machineData.description}
                      </p>
                    </div>

                    {!!primarySpecs.length && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {primarySpecs.map(([label, value]) => (
                          <div key={label} className="bg-neutral-50 border border-neutral-200 p-4 rounded-sm">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</span>
                            <p className="text-base font-semibold text-black mt-2">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {!!detailSpecs.length && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {detailSpecs.map(([label, value]) => (
                          <div key={label} className="p-4 border border-neutral-200 rounded-sm bg-white/60">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">{label}</span>
                            <p className="text-sm text-neutral-700 mt-1">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {machineData.features && machineData.features.length > 0 && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                          {t('machines.features_title')}
                        </h5>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {machineData.features.slice(0, 6).map((feature, idx) => (
                            <li key={`${machineData.id}-feature-${idx}`} className="flex items-start gap-3 text-sm text-neutral-700">
                              <span className="w-1.5 h-1.5 bg-[#cf8300] mt-1 flex-shrink-0 rounded-none"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      {selectedOutputIndex !== null && outputDetails[selectedOutputIndex] && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedOutputIndex(null)}
        >
          <div 
            className="bg-white max-w-6xl w-full rounded-sm shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 md:px-12 py-6 flex items-center justify-between z-10">
              <div>
                <span className="text-[#cf8300] font-mono text-sm font-bold mb-2 block">
                  PRODUCT {selectedOutputIndex + 1}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-black">
                  {outputDetails[selectedOutputIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOutputIndex(null)}
                className="text-black hover:text-[#cf8300] transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="px-6 md:px-12 py-8 md:py-12 space-y-10">
              <p className="text-lg md:text-xl text-black leading-relaxed">
                {outputDetails[selectedOutputIndex].description}
              </p>

              {(() => {
                const relatedSteps = getRelatedStepsForOutput(selectedOutputIndex)
                if (!relatedSteps.length) return null
                return (
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-6 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                      {t('process.section_label')} – {t('process.section_title')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {relatedSteps.map((stepInfo) => (
                        <div key={stepInfo.index} className="border border-neutral-200 p-4 rounded-sm bg-white/80">
                          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 block mb-1">
                            STEP 0{stepInfo.index + 1}
                          </span>
                          <h5 className="text-base font-semibold text-black mb-2">
                            {stepInfo.title}
                          </h5>
                          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                            {stepInfo.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {getOutputImages(selectedOutputIndex).map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative overflow-hidden group cursor-pointer rounded-sm"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${outputDetails[selectedOutputIndex].title} - ${idx + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                  {t('machines.features_title')}
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {outputDetails[selectedOutputIndex].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base text-black">
                      <div className="w-2 h-2 bg-[#cf8300] mt-2 flex-shrink-0 rounded-none"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                  {t('machines.applications_title')}
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {outputDetails[selectedOutputIndex].applications.map((application, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base text-black">
                      <div className="w-2 h-2 bg-[#cf8300] mt-2 flex-shrink-0 rounded-none"></div>
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-6 cursor-pointer"
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
