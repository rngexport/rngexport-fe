import { useTranslation } from 'react-i18next'
import contactImg from '../../images/16.jpeg'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative bg-white text-black border-t border-neutral-200">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        
        {/* Left: Image Side */}
        <div className="relative h-64 lg:h-auto overflow-hidden order-2 lg:order-1 group">
          <div className="absolute inset-0 bg-[#cf8300]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src={contactImg} 
            alt="Contact" 
            className="w-full h-full object-cover grayscale-0 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay Info Box on Image */}
          <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white p-8 md:p-12 backdrop-blur-sm z-20 border-t-4 border-[#cf8300]">
             <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-[#cf8300]">
                {t('contact.global_center_title')}
             </h3>
             <p className="text-lg font-light leading-relaxed mb-8 max-w-md">
                {t('contact.global_center_address')}
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                   {t('contact.direct_contact_title')}
                 </h4>
                 <div className="flex flex-col gap-1">
                   {t('contact.direct_contact_phone').split('\n').map((phone, i) => (
                     <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-white hover:text-[#cf8300] transition-colors font-medium">
                       {phone}
                     </a>
                   ))}
                 </div>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                   E-MAIL
                 </h4>
                 <a href={`mailto:${t('contact.direct_contact_mail')}`} className="text-white hover:text-[#cf8300] transition-colors font-medium">
                   {t('contact.direct_contact_mail')}
                 </a>
               </div>
             </div>
          </div>
        </div>

        {/* Right: Form Side */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 lg:order-2 bg-white relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 rounded-bl-full -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#cf8300]/5 rounded-tr-full -z-0"></div>

          <div className="relative z-10">
            <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6">
              {t('contact.section_label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
            </h2>
            <p className="text-black text-base leading-relaxed mb-12 font-medium max-w-md">
              {t('contact.desc')}
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Field 
                  placeholder={t('contact.form.name_placeholder')} 
                />
                <Field 
                  placeholder={t('contact.form.company_placeholder')} 
                />
              </div>
              
              <Field 
                placeholder={t('contact.form.email_placeholder')} 
                type="email"
              />

              <div className="group">
                <textarea
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all resize-none font-medium"
                  placeholder={t('contact.form.project_placeholder')}
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#cf8300] transition-colors duration-300 cursor-pointer flex items-center justify-center gap-3 group">
                <span>{t('contact.form.submit')}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  placeholder: string
  type?: string
}

function Field({ placeholder, type = 'text' }: FieldProps) {
  return (
    <div>
      <input
        type={type}
        className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all font-medium"
        placeholder={placeholder}
      />
    </div>
  )
}
