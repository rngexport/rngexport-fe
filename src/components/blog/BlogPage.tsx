import { useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// Hero section için kaliteli görsel
import blogHeroImg from '../../images/blog/1000149201.jpg'

// Tüm blog görsellerini dinamik olarak yükle
const blogImagesGlob = import.meta.glob('../../images/blog/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const ALL_BLOG_IMAGES = Object.values(blogImagesGlob) as string[]

// Slug'a göre deterministik bir sayı üreten fonksiyon (BlogPostDetail ile aynı mantık)
const getSeededRandom = (seedStr: string) => {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    const char = seedStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Bir diziyi seeded random ile karıştıran fonksiyon
const shuffleArray = (array: string[], seed: number) => {
  const shuffled = [...array];
  let m = shuffled.length;
  let t, i;

  // Fisher-Yates shuffle with seed
  while (m) {
    // LCG random number generator
    seed = (seed * 9301 + 49297) % 233280;
    const rnd = seed / 233280;

    i = Math.floor(rnd * m--);
    t = shuffled[m];
    shuffled[m] = shuffled[i];
    shuffled[i] = t;
  }
  return shuffled;
}

type BlogPost = {
  slug: string
  image?: string // Opsiyonel yaptık, dinamik seçeceğiz
  date: string
  tags: string[]
}

const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: 'hemp-line-optimization',
    date: '2025-12-15',
    tags: ['kenevir', 'elyaf', 'kotonizasyon']
  },
  {
    slug: 'flax-turnkey-factory',
    date: '2025-12-10',
    tags: ['keten', 'anahtar teslim', 'tesis']
  },
  {
    slug: 'long-fiber-composites',
    date: '2025-12-05',
    tags: ['uzun elyaf', 'kompozit', 'otomotiv']
  },
  {
    slug: 'hemp-dust-control',
    date: '2025-12-18',
    tags: ['kenevir', 'aspirasyon', 'toz kontrolü']
  },
  {
    slug: 'flax-quality-control',
    date: '2025-12-12',
    tags: ['keten', 'kalite', 'proses']
  },
  {
    slug: 'hemp-metal-detection',
    date: '2025-12-20',
    tags: ['kenevir', 'metal', 'güvenlik']
  },
  {
    slug: 'flax-energy-optimization',
    date: '2025-12-22',
    tags: ['keten', 'enerji', 'otomasyon']
  },
  {
    slug: 'hemp-processing-checklist',
    date: '2025-12-25',
    tags: ['kenevir işleme', 'kurulum', 'checklist']
  },
  {
    slug: 'flax-fiber-production-line',
    date: '2025-12-23',
    tags: ['keten', 'elyaf üretim', 'optimizasyon']
  },
  {
    slug: 'decorticator-selection-guide',
    date: '2025-12-24',
    tags: ['dekortikatör', 'makina seçimi', 'rehber']
  },
  {
    slug: 'hemp-flax-machinery-comparison',
    date: '2025-12-26',
    tags: ['kenevir', 'keten', 'karşılaştırma']
  },
  {
    slug: 'fiber-plant-cost-analysis',
    date: '2025-12-27',
    tags: ['elyaf tesisi', 'maliyet', 'analiz']
  },
  {
    slug: 'flax-stalk-processing',
    date: '2025-12-28',
    tags: ['keten sapı', 'işleme', 'teknoloji']
  },
  {
    slug: 'hemp-peeling-machine',
    date: '2025-12-29',
    tags: ['kenevir soyma', 'makina', 'teknik']
  },
  {
    slug: 'industrial-flax-machinery',
    date: '2025-12-30',
    tags: ['endüstriyel keten', 'makinalar', 'uygulamalar']
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
        data: { language: i18n.language, posts: BLOG_POSTS_DATA.length },
        timestamp: Date.now()
      })
    }).catch(() => {})
  }, [i18n.language])
  // #endregion

  const translatedPosts = useMemo(
    () =>
      BLOG_POSTS_DATA.map((post) => {
        // Her post için deterministik bir görsel seç
        const seed = getSeededRandom(post.slug)
        const shuffledImages = shuffleArray(ALL_BLOG_IMAGES, seed)
        const selectedImage = shuffledImages[0] // Her zaman ilk görseli al (deterministik)

        return {
          ...post,
          image: selectedImage,
          title: t(`blog.posts.${post.slug}.title`),
          excerpt: t(`blog.posts.${post.slug}.excerpt`),
          content: t(`blog.posts.${post.slug}.content`),
          tags: (t(`blog.posts.${post.slug}.tags`, { returnObjects: true }) as string[]) || post.tags
        }
      }),
    [i18n.language, t]
  )

  return (
    <div className="bg-white text-neutral-900">
      <Helmet>
        <title>{t('seo.blog.title', 'RNG Export Blog')}</title>
        <meta name="description" content={t('seo.blog.description', 'Kenevir ve keten elyafı için makine, proses ve tesis yazıları.')} />
        <meta name="keywords" content={t('seo.blog.keywords', 'kenevir blog, keten blog, elyaf işleme makinaları, kenevir işleme, keten işleme, dekortikatör, kotonizasyon, elyaf üretim hattı, kenevir makina, keten makina')} />
        <meta property="og:title" content={t('seo.blog.title', 'RNG Export Blog')} />
        <meta property="og:description" content={t('seo.blog.description', 'Kenevir ve keten elyafı için makine, proses ve tesis yazıları.')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rngexport.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.rngexport.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'RNG Export', item: 'https://www.rngexport.com/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.rngexport.com/blog' }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'RNG Export Blog',
            description: 'Kenevir ve Keten Elyaf İşleme Makinaları, Kotonizasyon, Uzun Elyaf ve Tesis Kurulumu Üzerine Teknik İçerikler',
            url: 'https://www.rngexport.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'RNG Export',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.rngexport.com/assets/logo-dark.png'
              }
            }
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <img src={blogHeroImg} alt="Kenevir ve Keten Elyaf İşleme Blog" loading="lazy" className="w-full h-full object-cover opacity-40" />
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
                  alt={`${post.title} - ${post.excerpt.substring(0, 100)}`}
                  loading="lazy"
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
