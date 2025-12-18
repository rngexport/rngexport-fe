import { useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// Hero section için kaliteli görsel
import blogHeroImg from '../../images/blog/1000149201.jpg'
// Blog post kapak görselleri - konuya uygun seçilmiş
import hempOptimizationImg from '../../images/blog/1000149215.jpg'
import flaxFactoryImg from '../../images/blog/1000149251.jpg'
import longFiberImg from '../../images/blog/1000149271.jpg'

type BlogPost = {
  slug: string
  image: string
  date: string
  tags: string[]
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hemp-line-optimization',
    image: hempOptimizationImg,
    date: '2025-12-15',
    tags: ['kenevir', 'elyaf', 'kotonizasyon']
  },
  {
    slug: 'flax-turnkey-factory',
    image: flaxFactoryImg,
    date: '2025-12-10',
    tags: ['keten', 'anahtar teslim', 'tesis']
  },
  {
    slug: 'long-fiber-composites',
    image: longFiberImg,
    date: '2025-12-05',
    tags: ['uzun elyaf', 'kompozit', 'otomotiv']
  }
]

export default function BlogPage() {
  const { t, i18n } = useTranslation()

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'blog-render',
        hypothesisId: 'blog_seo_visibility',
        location: 'BlogPage.tsx:useEffect',
        message: 'Blog page rendered',
        data: { language: i18n.language, posts: BLOG_POSTS.length },
        timestamp: Date.now()
      })
    }).catch(() => {})
  }, [i18n.language])
  // #endregion

  const translatedPosts = useMemo(
    () =>
      BLOG_POSTS.map((post) => ({
        ...post,
        title: t(`blog.posts.${post.slug}.title`),
        excerpt: t(`blog.posts.${post.slug}.excerpt`),
        content: t(`blog.posts.${post.slug}.content`),
        tags: (t(`blog.posts.${post.slug}.tags`, { returnObjects: true }) as string[]) || post.tags
      })),
    [i18n.language, t]
  )

  return (
    <div className="bg-white text-neutral-900">
      <Helmet>
        <title>{t('seo.blog.title', 'RNG Export Blog')}</title>
        <meta name="description" content={t('seo.blog.description', 'Kenevir ve keten elyafı için makine, proses ve tesis yazıları.')} />
        <meta name="keywords" content={t('seo.blog.keywords', 'kenevir blog, keten blog, elyaf işleme makinaları')} />
      </Helmet>

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <img src={blogHeroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#cf8300] font-bold mb-4">{t('blog.label')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('blog.heading')}
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
              {t('blog.subheading')}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {translatedPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group border border-neutral-200 rounded-sm overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white text-[11px] font-mono px-3 py-1 rounded-sm">
                  {new Date(post.date).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'en' ? 'en-US' : 'tr-TR')}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] uppercase tracking-[0.15em] bg-neutral-100 text-neutral-700 px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 leading-tight group-hover:text-[#cf8300] transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">{t('blog.read_more')}</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

