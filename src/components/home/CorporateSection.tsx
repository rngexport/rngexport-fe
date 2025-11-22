export default function CorporateSection() {
  return (
    <section id="corporate" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">HAKKIMIZDA</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-neutral-900">
            Biz sadece bu işe odaklanıyoruz. <br /> Ve bu işte en iyisiyiz.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xl text-neutral-800 leading-relaxed font-light mb-8">
              RNG Dış Ticaret, keten ve kenevir elyafının ön işleme, elyaf hazırlama ve kotonizasyon süreçlerine %100
              odaklanmış, bu alanda uzmanlaşmış bir mühendislik ve ticaret şirketidir.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              Bu coğrafyada keten ve kenevir elyaf teknolojilerini “başka işlerin arasında” yapmıyoruz. Sadece bu işe
              odaklanıyoruz.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              RNG Dış Ticaret, global ölçekte yatırım yapan firmalara; yüksek performanslı makine hatları, ileri
              mühendislik desteği ve uzun vadeli proses danışmanlığı sunmaktadır.
            </p>
            <div className="border-l-2 border-black pl-6 py-2 mb-8 bg-neutral-50">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">MİSYONUMUZ</h4>
              <p className="text-sm text-neutral-600">
                Müşterilerimize yüksek verimli, düşük enerji tüketimli, bakım dostu, ATEX/Ex-Proof güvenlik
                standartlarına uygun, modüler ve genişlemeye açık elyaf işleme hatları sunmak ve bu yatırımı güvenli
                şekilde sonuçlandırmak.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#cf8300] transition-opacity"
            >
              DETAYLI BİLGİ ALIN <span className="text-lg">→</span>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-neutral-100 p-10 border border-neutral-200">
              <h3 className="text-xl font-bold mb-6">VİZYONUMUZ</h3>
              <p className="text-sm text-neutral-600 mb-6">
                Keten ve kenevir gibi stratejik lif kaynaklarında; endüstriyel elyaf üretimi için birinci basamak olan
                elyaf hazırlama teknolojilerinde dünyanın en güvenilir markalarından biri olmak.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Endüstriyel elyaf üretimi',
                  'Selüloz üretimi (alpha-selüloz)',
                  'Nitroselüloz ve savunma sanayi',
                  'Biyokompozit ve biyoplastik',
                  'Nonwoven & tekstil sanayi',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700 text-sm font-medium group">
                    <div className="w-1.5 h-1.5 bg-neutral-700 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 divide-x divide-neutral-200 border border-neutral-200 bg-white">
              {[
                { val: '9', label: 'ANA MAKİNE GRUBU' },
                { val: '3', label: 'ENTEGRE HAT' },
                { val: '%100', label: 'ODAKLANMA' },
              ].map((stat) => (
                <div key={stat.label} className="p-8 text-center hover:bg-neutral-50 transition-colors duration-300 group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter text-neutral-900 group-hover:text-[#cf8300] transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

