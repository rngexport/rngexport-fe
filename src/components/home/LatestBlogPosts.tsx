import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import hempOptimizationImg from '../../images/blog/1000149215.jpg'
import flaxFactoryImg from '../../images/blog/1000149251.jpg'
import longFiberImg from '../../images/blog/1000149271.jpg'

export default function LatestBlogPosts() {
  const { t, i18n } = useTranslation()

  const blogPosts = [
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

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="block text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">
              {t('blog.label')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
              {t('blog.heading')}
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-[#cf8300] transition-colors"
          >
            {t('blog.read_more')} <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100">
                <img 
                  src={post.image} 
                  alt={t(`blog.posts.${post.slug}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-mono px-3 py-1 rounded-sm">
                  {new Date(post.date).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'en' ? 'en-US' : 'tr-TR')}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {(t(`blog.posts.${post.slug}.tags`, { returnObjects: true }) as string[]).map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-[#cf8300] transition-colors">
                  {t(`blog.posts.${post.slug}.title`)}
                </h3>
                <p className="text-neutral-600 line-clamp-3 text-sm leading-relaxed">
                  {t(`blog.posts.${post.slug}.excerpt`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
