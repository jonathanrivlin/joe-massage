import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoPic from '../public/logo.png'

const navigation = [
  { name: 'דף הבית', href: '/' },
  { name: 'אודות', href: '/#about' },
  { name: 'שאלות נפוצות', href: '/#faq' },
  { name: 'צור קשר', href: '/#contact' },
]

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on nav click
  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8"
          style={{ height: 64 }}
          dir="rtl"
          aria-label="ניווט ראשי"
        >
          {/* Logo */}
          <Link href="/" aria-label="דף הבית" onClick={close}
            className="flex-shrink-0 transition-opacity hover:opacity-80">
            <Image
              src={LogoPic}
              alt="לוגו ג'ו עיסוי שוודי"
              height={36}
              style={{ width: 'auto', height: 36 }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map(item => (
              <Link key={item.name} href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.85)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#991b1b'}
                onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.85)'}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0522635895"
              className="text-sm font-bold px-4 py-2 rounded-full border transition-all hover:scale-105"
              style={{
                color: scrolled ? '#991b1b' : 'white',
                borderColor: scrolled ? '#fca5a5' : 'rgba(255,255,255,0.4)',
                background: scrolled ? 'transparent' : 'rgba(255,255,255,0.08)',
              }}>
              052-263-5895
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold text-white px-4 py-2 rounded-full transition-all hover:scale-105 hover:brightness-110"
              style={{ background: '#25D366' }}>
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{ color: scrolled ? '#374151' : 'white' }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={close}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile menu drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 lg:hidden w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300"
        style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        dir="rtl"
      >
        <div className="flex items-center justify-between px-5 border-b border-gray-100" style={{ height: 64 }}>
          <Image src={LogoPic} alt="לוגו" height={32} style={{ width: 'auto', height: 32 }} />
          <button onClick={close} aria-label="סגירת תפריט"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map(item => (
            <Link key={item.name} href={item.href} onClick={close}
              className="flex items-center px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-800 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-8 space-y-3">
          <a href="tel:0522635895"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-red-800 text-white font-bold text-sm hover:bg-red-700 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            052-263-5895
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm transition-colors hover:brightness-110"
            style={{ background: '#25D366' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            שלחו הודעה ב-WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
