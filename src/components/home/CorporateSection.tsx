import { useTranslation } from 'react-i18next'
import img1 from '../../images/1.jpeg'

export default function CorporateSection() {
  const { t } = useTranslation()
  const visionList = t('corporate.vision_list', { returnObjects: true }) as string[]
  const stats = t('corporate.stats', { returnObjects: true }) as { val: string; label: string }[]

  return (
    <section id="corporate" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        {/* Header Section */}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Image & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8">
             <div className="relative h-[500px] w-full overflow-hidden group">
                <img 
                  src={img1} 
                  alt="RNG Export Facility" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Overlay Stats */}
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

          {/* Right Column: Text Content */}
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
                  {visionList.map((item) => (
                    <div key={item} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 bg-[#cf8300] mt-1.5 shrink-0 group-hover:scale-110 transition-transform"></span>
                      <span className="text-neutral-700 font-medium">{item}</span>
                    </div>
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
    </section>
  )
}
