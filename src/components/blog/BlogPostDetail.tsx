import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo-dark.png'
import hempOptimizationImg from '../../images/blog/1000149215.jpg'
import flaxFactoryImg from '../../images/blog/1000149251.jpg'
import longFiberImg from '../../images/blog/1000149271.jpg'
import dustControlImg from '../../images/blog/1000149247.jpg'
import qualityControlImg from '../../images/blog/1000149263.jpg'
import metalDetectImg from '../../images/blog/1000149221.jpg'
import energyOptimizeImg from '../../images/blog/1000149235.jpg'
import gallery1 from '../../images/blog/1000149221.jpg'
import gallery2 from '../../images/blog/1000149235.jpg'
import gallery3 from '../../images/blog/1000149247.jpg'
import gallery4 from '../../images/blog/1000149259.jpg'
import gallery5 from '../../images/blog/1000149263.jpg'
import gallery6 from '../../images/blog/1000149275.jpg'

const BLOG_IMAGES: Record<string, string> = {
  'hemp-line-optimization': hempOptimizationImg,
  'flax-turnkey-factory': flaxFactoryImg,
  'long-fiber-composites': longFiberImg,
  'hemp-dust-control': dustControlImg,
  'flax-quality-control': qualityControlImg,
  'hemp-metal-detection': metalDetectImg,
  'flax-energy-optimization': energyOptimizeImg
}

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

export default function BlogPostDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const [post, setPost] = useState<any>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      const title = t(`blog.posts.${slug}.title`, { defaultValue: '' })
      if (title) {
        setPost({
          slug,
          title,
          content: t(`blog.posts.${slug}.long_content`),
          excerpt: t(`blog.posts.${slug}.excerpt`),
          date: t(`blog.posts.${slug}.date`),
          image: BLOG_IMAGES[slug] || hempOptimizationImg,
          tags: t(`blog.posts.${slug}.tags`, { returnObjects: true }) as string[]
        })
      }
    }
    
    fetch('http://127.0.0.1:7242/ingest/99af1884-19f5-4477-bacd-8027fd6b163d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'blog-detail-enhanced-fix',
        hypothesisId: 'hero_image_fix',
        location: 'BlogPostDetail.tsx:useEffect',
        message: 'Fixed blog detail page',
        data: { slug, language: i18n.language },
        timestamp: Date.now()
      })
    }).catch(() => {})
    // #endregion
  }, [slug, t, i18n.language])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-neutral-200 rounded mb-2"></div>
          <div className="h-2 w-24 bg-neutral-100 rounded"></div>
        </div>
      </div>
    )
  }

  const paragraphs = post.content.split('\n').filter((p: string) => p.trim() !== '')
  const firstHalf = paragraphs.slice(0, Math.ceil(paragraphs.length / 2))
  const secondHalf = paragraphs.slice(Math.ceil(paragraphs.length / 2))

  return (
    <div className="bg-white text-neutral-900 pb-20 font-sans">
      <Helmet>
        <title>{post.title} - RNG Export Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.rngexport.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: 'RNG Export'
            },
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
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'RNG Export', item: 'https://www.rngexport.com/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.rngexport.com/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.rngexport.com/blog/${post.slug}` }
            ]
          })}
        </script>
      </Helmet>

      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 max-w-[1600px] mx-auto w-full z-10">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-[#cf8300] mb-8 text-xs font-bold tracking-[0.2em] uppercase transition-colors">
              <span className="text-lg">←</span> {t('blog.back_to_blog')}
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="backdrop-blur-sm bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-neutral-300 text-sm font-medium tracking-wide">
              <span>{new Date(post.date).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'en' ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-500"></span>
              <span>RNG ENGINEERING TEAM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white pt-16 lg:pt-24 px-6 min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-neutral max-w-none">
                <p className="text-xl md:text-2xl leading-relaxed font-serif text-neutral-600 mb-10 border-l-4 border-[#cf8300] pl-6 italic">
                  {post.excerpt}
                </p>
                
                {firstHalf.map((paragraph: string, index: number) => (
                  <p key={`p1-${index}`} className="mb-6 leading-relaxed text-neutral-800 text-lg">
                    {paragraph}
                  </p>
                ))}

                <div 
                  className="my-12 relative h-96 rounded-sm overflow-hidden group cursor-pointer"
                  onClick={() => setLightboxImage(GALLERY_IMAGES[0])}
                >
                  <img 
                    src={GALLERY_IMAGES[0]} 
                    alt="Process detail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                      {t('blog.zoom')}
                    </span>
                  </div>
                </div>

                {secondHalf.map((paragraph: string, index: number) => (
                  <p key={`p2-${index}`} className="mb-6 leading-relaxed text-neutral-800 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-neutral-100">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-400 mb-8">{t('blog.gallery')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-[4/3] bg-neutral-100 overflow-hidden rounded-sm cursor-zoom-in group relative"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-24">
              <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-100">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <img src={logo} alt="RNG Export" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2">RNG Export</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {t('footer.brand_text')}
                </p>
                <Link to="/#contact" className="text-xs font-bold uppercase tracking-widest text-[#cf8300] hover:text-black transition-colors">
                  {t('contact.section_label')} →
                </Link>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-neutral-900"></span>
                  {t('blog.tags_label')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string) => (
                    <span key={tag} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1.5 uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-neutral-900"></span>
                  {t('blog.share_label')}
                </h3>
                <div className="flex gap-4 text-neutral-400">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.rngexport.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0077b5] transition-colors cursor-pointer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.rngexport.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1da1f2] transition-colors cursor-pointer"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.rngexport.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4267b2] transition-colors cursor-pointer"
                  >
                    Facebook
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${post.title}\n\n${post.excerpt}\n\n${`https://www.rngexport.com/blog/${post.slug}`}`)}`}
                    className="hover:text-black transition-colors cursor-pointer"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 pt-10 border-t border-neutral-200 mb-10">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-900 font-bold hover:text-[#cf8300] transition-colors tracking-widest uppercase text-sm"
            >
              <span>←</span> {t('blog.back_to_blog')}
            </Link>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img 
            src={lightboxImage} 
            alt="Full screen" 
            className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  )
}
