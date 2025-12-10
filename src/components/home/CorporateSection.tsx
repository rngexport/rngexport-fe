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

export default function CorporateSection() {
  const { t } = useTranslation()
  const visionList = t('corporate.vision_list', { returnObjects: true }) as string[]
  const visionDetails = t('corporate.vision_details', { returnObjects: true }) as Array<{
    title: string
    description: string
    features: string[]
    applications: string[]
  }>
  const stats = t('corporate.stats', { returnObjects: true }) as { val: string; label: string }[]
  const [selectedVisionIndex, setSelectedVisionIndex] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const visionImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30]

  const getVisionImages = (index: number) => {
    const startIndex = index % visionImages.length
    return [visionImages[startIndex], visionImages[(startIndex + 1) % visionImages.length], visionImages[(startIndex + 2) % visionImages.length]]
  }

  return (
    <section id="corporate" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
          <div className="lg:w-2/3">
            <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6">
              {t('corporate.section_label')}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-black">
              <span dangerouslySetInnerHTML={{ __html: t('corporate.headline') }} />
            </h2>
          </div>
          <div className="lg:w-1/3 lg:pb-2">
            <p className="text-xl text-neutral-600 leading-relaxed font-light border-l-4 border-[#cf8300] pl-6">
              {t('corporate.p1')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
         <div className="lg:col-span-5 flex flex-col gap-8">
             <div 
               className="relative h-[500px] w-full overflow-hidden group cursor-zoom-in" 
               onClick={() => setLightboxImage(img23)} 
               role="button" 
               tabIndex={0} 
               aria-label="Görseli büyüt"
             >
                <img 
                  src={img23} 
                  alt="RNG Export Facility" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/90 text-white p-8">
                   <div className="grid grid-cols-3 divide-x divide-white/20">
                      {stats.map((stat) => (
                        <div key={stat.label} className="px-4 first:pl-0 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-[#cf8300] mb-1">{stat.val}</div>
                          <div className="text-[8px] uppercase tracking-widest text-white/60">{stat.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-neutral-800">
                <p className="text-lg leading-relaxed">{t('corporate.p2')}</p>
                <p className="text-lg leading-relaxed">{t('corporate.p3')}</p>
              </div>
              
              <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100">
                 <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-black flex items-center gap-3">
                   <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                   {t('corporate.mission_title')}
                 </h4>
                 <p className="text-xl font-light italic text-neutral-700 mb-0">
                   "{t('corporate.mission_body')}"
                 </p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-black flex items-center gap-3">
                   <span className="w-8 h-[2px] bg-[#cf8300]"></span>
                   {t('corporate.vision_title')}
                 </h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {visionList.map((item, idx) => (
                    <button
                      key={item}
                      onClick={() => setSelectedVisionIndex(idx)}
                      className="flex items-start gap-3 group text-left cursor-pointer hover:text-[#cf8300] transition-colors"
                    >
                      <span className="w-2 h-2 bg-[#cf8300] mt-1.5 shrink-0 group-hover:scale-110 transition-transform rounded-none"></span>
                      <span className="text-neutral-700 font-medium group-hover:text-[#cf8300] transition-colors">{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#cf8300] transition-colors duration-300"
              >
                {t('corporate.cta_detailed_info')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedVisionIndex !== null && visionDetails[selectedVisionIndex] && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedVisionIndex(null)}
        >
          <div 
            className="bg-white max-w-6xl w-full rounded-sm shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 md:px-12 py-6 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-black">
                  {visionDetails[selectedVisionIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVisionIndex(null)}
                className="text-black hover:text-[#cf8300] transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="px-6 md:px-12 py-8 md:py-12">
              <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
                {visionDetails[selectedVisionIndex].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {getVisionImages(selectedVisionIndex).map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative overflow-hidden group cursor-pointer rounded-sm"
                    onClick={() => setLightboxImage(img)}
                    role="button"
                    tabIndex={0}
                    aria-label="Görseli büyüt"
                  >
                    <img 
                      src={img} 
                      alt={`${visionDetails[selectedVisionIndex].title} - ${idx + 1}`}
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
                  {visionDetails[selectedVisionIndex].features.map((feature, idx) => (
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
                  {visionDetails[selectedVisionIndex].applications.map((application, idx) => (
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
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="RNG Export"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            />
            <button
              type="button"
              aria-label="Kapat"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white text-black font-bold text-xl flex items-center justify-center shadow-lg hover:bg-neutral-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
