import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import img1 from "./images/14.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpeg";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.jpeg";
import img10 from "./images/10.jpeg";
import img11 from "./images/11.jpeg";
import img12 from "./images/12.jpeg";
import img13 from "./images/13.jpeg";
import img14 from "./images/14.jpeg";
import img15 from "./images/15.jpeg";
import img16 from "./images/16.jpeg";
import img17 from "./images/17.jpeg";
import img18 from "./images/18.jpeg";
import img19 from "./images/19.jpeg";
import img20 from "./images/20.jpeg";
import img21 from "./images/21.jpeg";
import img22 from "./images/22.jpeg";
import img23 from "./images/23.jpeg";
import img24 from "./images/24.jpeg";
import img25 from "./images/25.jpeg";
import img26 from "./images/26.jpeg";
import img27 from "./images/27.jpeg";
import img28 from "./images/28.jpeg";
import img29 from "./images/29.jpeg";
import img30 from "./images/30.jpeg";
import img31 from "./images/31.jpeg";

export default function Facilities() {
  return (
    <Layout>
      <FacilityHero />
      <FacilityContent />
      <FacilityContact />
    </Layout>
  );
}

function FacilityHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={img1} 
          alt="Facility Hero" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 text-center">
        <span className="block text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-8">
          {t("facilities.hero.subtitle")}
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-10 max-w-5xl mx-auto leading-[0.9]">
          <span
            dangerouslySetInnerHTML={{ __html: t("facilities.hero.title") }}
          />
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light">
          {t("facilities.hero.desc")}
        </p>
      </div>
    </section>
  );
}

function FacilityContent() {
  const { t } = useTranslation();
  const stories = t("facilities.stories", { returnObjects: true }) as {
    title: string;
    description: string;
    cta: string;
    tag: string;
  }[];
  
  const storyImages = [
    [img2, img3, img23],
    [img4, img5, img30],
    [img6, img7, img8, img20],
    [img9, img10, img11, img17],
  ];

  const extraImages = [img23, img30, img20, img17, img24, img28, img19, img29, img22, img18, img27, img31, img21, img26, img25];

  return (
    <section className="bg-white">
      {stories.map((story, idx) => (
        <div key={idx} className="flex flex-col">
          <div className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[800px] relative group overflow-hidden">
              <img 
                src={storyImages[idx][0]} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 bg-black/80 text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase">
                {story.tag}
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-neutral-50 flex flex-col justify-center p-8 md:p-16 lg:p-32 relative">
              
              <div className="text-[#cf8300] text-4xl md:text-6xl font-bold opacity-20 mb-6 select-none">
                0{idx + 1}
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 md:mb-8 leading-[0.95] tracking-tight">
                {story.title}
              </h2>
              <p className="text-xl text-black leading-relaxed mb-12 font-light">
                {story.description}
              </p>
              <Link 
                to={idx === 0 || idx === 2 ? "/lines" : "/contact"}
                className="self-start border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer inline-block"
              >
                {story.cta}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 h-[200px] md:h-[300px] lg:h-[400px]">
             <div className="relative overflow-hidden group">
                <img src={storyImages[idx][1]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             
             <div className="relative overflow-hidden group">
                {storyImages[idx][2] ? (
                  <img src={storyImages[idx][2]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <img src={extraImages[idx * 2]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
             </div>

             <div className="relative overflow-hidden group">
                <img src={extraImages[idx * 2 + 1] || extraImages[0]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>

             <div className="relative overflow-hidden group">
                <img src={extraImages[idx * 2 + 2] || extraImages[1]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>

             <div className="relative overflow-hidden group">
                <img src={extraImages[idx * 2 + 3] || extraImages[2]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>

             <Link 
                to="/machines"
                className="bg-[#cf8300] flex items-center justify-center p-8 text-center group cursor-pointer overflow-hidden relative block h-full"
             >
                <div className="relative z-10 text-white">
                  <span className="block text-4xl mb-2 font-bold">→</span>
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">{t('facilities.view_machines_btn')}</span>
                </div>
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

function FacilityContact() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32 lg:py-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={img16} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="bg-black/80 border-2 border-white/10 backdrop-blur-md p-8 md:p-12 lg:p-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6">
                {t("facilities.contact.label")}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 md:mb-10 text-white">
                {t("facilities.contact.title")}
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-md leading-relaxed">
                {t("facilities.contact.desc")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:info@rngexport.com"
                  className="inline-flex items-center justify-center gap-3 bg-[#cf8300] hover:bg-[#cf8300]/90 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  INFO@RNGEXPORT.COM
                </a>
                <div className="flex flex-col gap-0">
                   <a 
                    href="tel:+902425021772"
                    className="inline-flex items-center justify-start gap-3 bg-white text-black hover:bg-neutral-200 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all border-b border-neutral-200 cursor-pointer"
                  >
                    +90 242 502 17 72
                  </a>
                   <a 
                    href="tel:+905466804772"
                    className="inline-flex items-center justify-start gap-3 bg-white text-black hover:bg-neutral-200 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    +90 546 680 47 72
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:pl-16 space-y-12 border-t-2 pt-10 lg:pt-0 lg:border-t-0 lg:border-l-2 border-white/10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                  {t("facilities.contact.global_center_label")}
                </h4>
                <p className="text-2xl font-light text-white leading-relaxed">
                  {t("facilities.contact.global_center_address")
                    .split("\n")
                    .map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                  {t("facilities.contact.schedule_label")}
                </h4>
                <ul className="space-y-4">
                  {(
                    t("facilities.contact.schedule_items", {
                      returnObjects: true,
                    }) as string[]
                  ).map((item) => (
                    <li key={item} className="flex items-center gap-4 text-lg text-white/80">
                      <div className="w-2 h-2 bg-[#cf8300] rounded-none"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}