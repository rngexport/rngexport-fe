import { useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation()

  const testimonials = useMemo(() => {
    const raw = t('testimonials.items', { returnObjects: true }) as unknown
    if (Array.isArray(raw)) return raw as Testimonial[]
    return [
      {
        name: 'RNG Export',
        role: 'Kenevir & Keten Elyaf',
        quote: 'Elyaf hatlarında kapasite ve kaliteyi aynı anda yükselttik.',
        rating: 5
      }
    ]
  }, [t, i18n.language])

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'testimonials-render',
        hypothesisId: 'seo_social_proof',
        location: 'TestimonialsSection.tsx:useEffect',
        message: 'Testimonials rendered',
        data: { language: i18n.language, count: testimonials.length },
        timestamp: Date.now()
      })
    }).catch(() => {})
  }, [i18n.language, testimonials.length])
  // #endregion

  const avgRating =
    testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) /
    (testimonials.length || 1)

  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white border-t border-neutral-900"
      id="testimonials"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AggregateRating',
            itemReviewed: {
              '@type': 'Organization',
              name: 'RNG Export'
            },
            ratingValue: avgRating.toFixed(1),
            reviewCount: testimonials.length || 3,
            bestRating: '5',
            worstRating: '1'
          })}
        </script>
      </Helmet>

      <div className="max-w-[1800px] mx-auto px-6 space-y-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf8300]">
              {t('testimonials.section_label')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {t('testimonials.subtitle')}
            </p>
            <div className="sr-only">
              Kenevir makina üreticileri, keten işleme makinaları, elyaf üretim hattı, kotonizasyon, dekortikatör, müşteri yorumları
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 bg-white/5 border border-white/10 px-4 py-3 rounded-md">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-[#cf8300]">{avgRating.toFixed(1)}</div>
                <div className="flex gap-1 text-[#cf8300]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <span className="uppercase tracking-[0.2em] text-white/60">
                {testimonials.length} {t('testimonials.section_label')}
              </span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              “{testimonials[0]?.quote}”
            </p>
            <div className="mt-6 flex items-center justify-between text-sm text-white/70">
              <div>
                <div className="font-bold text-white">{testimonials[0]?.name}</div>
                <div className="uppercase tracking-[0.2em] text-white/60">{testimonials[0]?.role}</div>
              </div>
              <div className="text-[#cf8300] font-bold">{testimonials[0]?.rating?.toFixed(1)}/5</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, idx) => (
            <article
              key={idx}
              className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 flex flex-col gap-4 rounded-md transition-colors"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white" itemProp="author">
                    {item.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60" itemProp="jobTitle">
                    {item.role}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-[#cf8300] font-bold"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <span itemProp="ratingValue">{item.rating.toFixed(1)}</span>
                  <span>/5</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed" itemProp="reviewBody">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

