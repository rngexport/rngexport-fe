import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const POSTS = [
  'hemp-line-optimization',
  'flax-turnkey-factory',
  'long-fiber-composites',
  'hemp-dust-control',
  'flax-quality-control',
  'hemp-metal-detection',
  'flax-energy-optimization',
]

export default function BlogPromo() {
  const { t, i18n } = useTranslation()

  const featured = POSTS.slice(0, 3)
  const secondary = POSTS.slice(3, 7)

  return (
    <section className="relative border-t border-neutral-200 bg-gradient-to-b from-white via-neutral-50 to-white py-18 md:py-20 text-neutral-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(207,131,0,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.04),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(207,131,0,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#cf8300]/8 via-transparent to-white/70 mix-blend-screen" />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#cfb27a]">{t('blog.label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900">
              {t('seo.blog.title', 'RNG Export Blog')}
            </h2>
            <p className="text-neutral-700 max-w-2xl">
              {t('seo.blog.description', 'Kenevir ve keten elyafı için makine, proses ve tesis yazıları.')}
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] px-5 py-3 border border-neutral-200 rounded-sm hover:bg-neutral-900 hover:text-white transition-colors bg-white shadow-sm"
          >
            {t('blog.back_to_blog', 'Tüm Yazılar')} →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {featured.map((slug) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_45px_-25px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-[#cf8300]/12 to-transparent" />
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                <span>{t(`blog.posts.${slug}.tags`, { returnObjects: true })?.[0] || 'BLOG'}</span>
                <span className="text-neutral-400">
                  {new Date(t(`blog.posts.${slug}.date`, { defaultValue: '2025-12-15' })).toLocaleDateString(
                    i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'en' ? 'en-US' : 'tr-TR',
                    { year: 'numeric', month: 'short', day: 'numeric' }
                  )}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight text-neutral-900 group-hover:text-[#cf8300] transition-colors">
                {t(`blog.posts.${slug}.title`)}
              </h3>
              <p className="mt-3 text-neutral-700 text-sm leading-relaxed line-clamp-3">
                {t(`blog.posts.${slug}.excerpt`)}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf8300]">
                {t('blog.read_more', 'Devamı')} <span className="text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((slug) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="group border border-neutral-200 bg-white p-4 rounded-sm hover:border-[#cf8300] transition-colors shadow-[0_8px_24px_-16px_rgba(0,0,0,0.2)]"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500 mb-2">
                {t(`blog.posts.${slug}.tags`, { returnObjects: true })?.[0] || 'BLOG'}
              </div>
              <div className="text-base md:text-lg font-semibold text-neutral-900 group-hover:text-[#cf8300] line-clamp-2">
                {t(`blog.posts.${slug}.title`)}
              </div>
              <p className="text-sm text-neutral-700 mt-2 line-clamp-3">
                {t(`blog.posts.${slug}.excerpt`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

