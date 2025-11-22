export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-neutral-100 overflow-hidden border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col h-full justify-between">
            <div>
              <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">BİZE ULAŞIN</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 text-neutral-900">
                PROJENİZİ <br /> BİRLİKTE <br /> BAŞLATALIM
              </h2>
              <p className="text-xl text-neutral-600 max-w-md mb-12 font-light leading-relaxed">
                Yüksek performanslı makine hatları ve ileri mühendislik çözümleri için ilk adımı atın. Uzman ekibimiz
                fizibilite ve projelendirme için sizi bekliyor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-auto pt-12 border-top border-neutral-100">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3">GLOBAL MERKEZ</h4>
                <p className="font-medium text-neutral-900">
                  Veliköy OSB Sanayi Bulvarı <br />
                  No: 86/1 Çerkezköy / Tekirdağ
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3">DOĞRUDAN İLETİŞİM</h4>
                <p className="font-medium text-neutral-900">
                  +90 242 502 17 72 <br />
                  info@rngexport.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 lg:p-20 border border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#cf8300]"></div>
            <div className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <Field label="AD SOYAD" placeholder="İsim Soyisim" />
                <Field label="FİRMA" placeholder="Firma Adı" />
              </div>
              <Field label="E-POSTA" placeholder="ornek@sirket.com" type="email" />
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-[#cf8300] transition-colors">
                  PROJE DETAYI
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-neutral-300 py-2 text-lg focus:outline-none focus:border-[#cf8300] transition-colors resize-none"
                  placeholder="Projenizden kısaca bahsedin..."
                ></textarea>
              </div>
              <button className="group flex items-center justify-between w-full bg-black text-white p-6 hover:bg-neutral-800 transition-all duration-300 mt-8 cursor-pointer">
                <span className="text-sm font-bold uppercase tracking-[0.2em]">TEKLİFİ GÖNDER</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </button>
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
      <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-[#cf8300] transition-colors">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border-b border-neutral-300 py-2 text-lg focus:outline-none focus:border-[#cf8300] transition-colors"
        placeholder={placeholder}
      />
    </div>
  )
}

