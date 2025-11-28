import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block py-1 px-3 border border-white/20 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-[#cf8300] uppercase mb-8">
                {t('contact.section_label')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                <span dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
              </h2>
              <p className="text-lg text-white max-w-md mb-16 font-light leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                 <h4 className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 bg-[#cf8300] rounded-none"></span>
                   {t('contact.global_center_title')}
                 </h4>
                 <p className="text-2xl font-light text-white leading-normal group-hover:text-white/80 transition-colors">
                    {t('contact.global_center_address')}
                 </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#cf8300] rounded-none"></span>
                    {t('contact.direct_contact_title')}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {t('contact.direct_contact_phone').split('\n').map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-lg hover:text-[#cf8300] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest text-[#cf8300] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#cf8300] rounded-none"></span>
                    E-MAIL
                  </h4>
                  <a href={`mailto:${t('contact.direct_contact_mail')}`} className="text-lg hover:text-[#cf8300] transition-colors break-words">
                    {t('contact.direct_contact_mail')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 lg:p-16 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#cf8300]/10 rounded-bl-full -mr-16 -mt-16"></div>
              
              <h3 className="text-3xl font-bold text-black mb-8 tracking-tight">{t('contact.form.title')}</h3>
              
              <form className="space-y-8 relative z-10">
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
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-[#cf8300] transition-colors">
                    {t('contact.form.project_label')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-neutral-50 border border-neutral-200 p-4 text-black focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all resize-none"
                    placeholder={t('contact.form.project_placeholder')}
                  ></textarea>
                </div>

                <button className="w-full bg-black text-white py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#cf8300] transition-colors duration-300 flex items-center justify-center gap-4 cursor-pointer">
                  <span>{t('contact.form.submit')}</span>
                  <span>→</span>
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
  label: string
  placeholder: string
  type?: string
}

function Field({ label, placeholder, type = 'text' }: FieldProps) {
  return (
    <div className="group">
      <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-[#cf8300] transition-colors">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-neutral-50 border border-neutral-200 p-4 text-black focus:outline-none focus:border-[#cf8300] focus:bg-white transition-all"
        placeholder={placeholder}
      />
    </div>
  )
}
