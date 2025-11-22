import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        // Small delay to ensure layout is stable, especially after route transitions
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    } else if (pathname !== '/') {
       // Only scroll to top if not on home page with a hash (already handled)
       // or if we are just navigating between pages without hash
       window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
