import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white text-black border-t border-neutral-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50 -skew-x-12 translate-x-1/3 z-0"></div>
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5">
            <span className="block text-xs font-bold tracking-[0.2em] text-[#cf8300] uppercase mb-8">
              {t('contact.section_label')}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12 text-black">
              <span dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
            </h2>
            
            <p className="text-lg text-neutral-600 leading-relaxed font-light mb-16 max-w-md">
              {t('contact.desc')}
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                 <div className="mt-1 text-[#cf8300] group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-hover:text-[#cf8300] transition-colors">
                    {t('contact.direct_contact_title')}
                  </h4>
                  <div className="flex flex-col gap-1">
                    {t('contact.direct_contact_phone').split('\n').map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-xl font-light text-black hover:text-[#cf8300] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="mt-1 text-[#cf8300] group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-hover:text-[#cf8300] transition-colors">
                    E-MAIL
                  </h4>
                  <a href={`mailto:${t('contact.direct_contact_mail')}`} className="text-xl font-light text-black hover:text-[#cf8300] transition-colors">
                    {t('contact.direct_contact_mail')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 shadow-2xl border border-neutral-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-[#cf8300] to-black"></div>
              
              <h3 className="text-2xl font-bold text-black mb-8 tracking-tight flex items-center gap-3">
                {t('contact.form.title')}
                <span className="w-12 h-px bg-neutral-200 flex-1"></span>
              </h3>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Field 
                    label={t('contact.form.name_label')} 
                    placeholder={t('contact.form.name_placeholder')} 
                  />
                  <Field 
                    label={t('contact.form.company_label')} 
                    placeholder={t('contact.form.company_placeholder')} 
                  />
                </div>
                
                <Field 
                  label={t('contact.form.email_label')} 
                  placeholder={t('contact.form.email_placeholder')} 
                  type="email"
                />

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-[#cf8300] transition-colors">
                    {t('contact.form.project_label')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-neutral-50 border-b-2 border-neutral-200 p-4 text-black focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all resize-none font-medium placeholder-neutral-400"
                    placeholder={t('contact.form.project_placeholder')}
                  ></textarea>
                </div>

                <button className="w-full bg-black text-white py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#cf8300] transition-all duration-300 flex items-center justify-center gap-4 group cursor-pointer">
                  <span>{t('contact.form.submit')}</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label?: string
  placeholder: string
  type?: string
}

function Field({ label, placeholder, type = 'text' }: FieldProps) {
  return (
    <div className="group">
      {label && (
        <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-[#cf8300] transition-colors">
          {label}
        </label>
      )}
      <input
        type={type}
        className="w-full bg-neutral-50 border-b-2 border-neutral-200 p-4 text-black focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all font-medium placeholder-neutral-400"
        placeholder={placeholder}
      />
    </div>
  )
}
