import { useTranslation } from "react-i18next";
import Layout from "./components/layout/Layout";

export default function Facilities() {
  const { t } = useTranslation();

  return (
    <Layout>
      <FacilityHero />
      <FacilityStories />
      <FacilityContact />
    </Layout>
  );
}

function FacilityHero() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-block border-l-3 border-[#cf8300] pl-4 mb-6">
            <p className="text-xs font-extralight tracking-[0.3em] uppercase">
              {t("facilities.hero.subtitle")}
            </p>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-neutral-900">
            <span
              dangerouslySetInnerHTML={{ __html: t("facilities.hero.title") }}
            />
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl border-l-4 border-[#cf8300] pl-6">
            {t("facilities.hero.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 h-64 md:h-96 w-full">
          {["#f0f0f0", "#e5e5e5", "#d4d4d4", "#a3a3a3"].map((color, idx) => (
            <div
              key={idx}
              className="h-full w-full flex items-center justify-center relative group overflow-hidden"
              style={{ backgroundColor: color }}
            >
              <span className="z-10 text-xs font-bold tracking-[0.2em] text-neutral-500 group-hover:scale-110 transition-transform duration-500">
                {t("facilities.hero.placeholder")}
              </span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityStories() {
  const { t } = useTranslation();
  const stories = t("facilities.stories", { returnObjects: true }) as {
    title: string;
    description: string;
    cta: string;
    tag: string;
  }[];
  const colors = ["#E5E5E5", "#D4D4D4", "#A3A3A3", "#737373"];

  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1800px] mx-auto">
        {stories.map((story, idx) => (
          <div key={story.title} className="grid lg:grid-cols-2 gap-0">
            {/* Image Area (Placeholder) */}
            <div
              className={`h-[400px] lg:h-auto lg:min-h-[600px] flex items-center justify-center relative overflow-hidden group ${
                idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}
              style={{ backgroundColor: colors[idx % colors.length] }}
            >
              <span className="text-sm font-bold tracking-[0.3em] text-neutral-500/50 group-hover:text-neutral-500 transition-colors">
                GÖRSEL ALANI ({story.tag})
              </span>
              <div className="absolute inset-0 border-[0.5px] border-neutral-900/5"></div>
            </div>

            {/* Content Area */}
            <div
              className={`flex flex-col justify-center p-12 lg:p-24 bg-neutral-50/50 ${
                idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6">
                {story.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 leading-tight">
                {story.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-10 text-base md:text-lg">
                {story.description}
              </p>

              <div className="mt-auto pt-8 border-t border-neutral-200">
                <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#cf8300] transition-colors cursor-pointer">
                  {story.cta}
                  <span className="text-xl leading-none group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FacilityContact() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-neutral-100 text-neutral-900">
      <div className="max-w-[1800px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-6">
            {t("facilities.contact.label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            {t("facilities.contact.title")}
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-10 text-lg max-w-xl">
            {t("facilities.contact.desc")}
          </p>
          <a
            href="mailto:info@rngexport.com"
            className="inline-flex items-center gap-4 border border-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer"
          >
            INFO@RNGEXPORT.COM <span>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
          <div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              {t("facilities.contact.global_center_label")}
            </p>
            <p className="font-medium text-neutral-900">
              {t("facilities.contact.global_center_address")
                .split("\n")
                .map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
          <div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              {t("facilities.contact.phone_label")}
            </p>
            <p className="font-medium text-neutral-900">
              {t("facilities.contact.phone_number")}
            </p>
          </div>
          <div className="bg-white p-8 hover:bg-neutral-50 transition-colors col-span-full border-t border-neutral-200">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4">
              {t("facilities.contact.schedule_label")}
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              {(
                t("facilities.contact.schedule_items", {
                  returnObjects: true,
                }) as string[]
              ).map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-700"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
