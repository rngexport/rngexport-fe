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
  const { t } = useTranslation()

  return (
    <section className="bg-white border-t border-neutral-200 py-16 md:py-20">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2">{t('blog.label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              {t('seo.blog.title', 'RNG Export Blog')}
            </h2>
            <p className="text-neutral-600 mt-3 max-w-2xl">
              {t('seo.blog.description', 'Kenevir ve keten elyafı için makine, proses ve tesis yazıları.')}
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#cf8300] transition-colors"
          >
            {t('blog.back_to_blog', 'Tüm Yazılar')} →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {POSTS.map((slug) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="group border border-neutral-200 bg-white p-4 hover:border-[#cf8300] transition-colors"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                {t(`blog.posts.${slug}.tags`, { returnObjects: true })?.[0] || 'BLOG'}
              </div>
              <div className="text-lg font-semibold text-neutral-900 group-hover:text-[#cf8300] line-clamp-2">
                {t(`blog.posts.${slug}.title`)}
              </div>
              <p className="text-sm text-neutral-600 mt-2 line-clamp-3">
                {t(`blog.posts.${slug}.excerpt`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

