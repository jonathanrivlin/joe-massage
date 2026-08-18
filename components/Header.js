import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoPic from '../public/logo.png'

const navigation = [
  { name: 'דף הבית', href: '/' },
  { name: 'אודות', href: '/#about' },
  { name: 'שאלות נפוצות', href: '/#faq' },
  { name: 'צור קשר', href: '/#contact' },
]

const WA_HREF =
  "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

/* ── SVG icons (inline, no external deps) ── */
const PhoneIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24
      1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6c0-.55.45-1
      1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
      -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
      .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
      -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
      -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
      5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085
      1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347
      m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648
      -.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0
      5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885
      9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096
      .547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005
      c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

/* ── Hamburger that morphs to X ── */
const HamburgerIcon = ({ open, color }) => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
    style={{ display: 'block' }}
  >
    {/* Top bar */}
    <line
      x1="4" y1="6" x2="20" y2="6"
      style={{
        transformOrigin: '12px 6px',
        transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
        transform: open ? 'rotate(45deg) translateY(6px)' : 'none',
      }}
    />
    {/* Middle bar */}
    <line
      x1="4" y1="12" x2="20" y2="12"
      style={{
        transition: 'opacity 300ms ease-in-out',
        opacity: open ? 0 : 1,
      }}
    />
    {/* Bottom bar */}
    <line
      x1="4" y1="18" x2="20" y2="18"
      style={{
        transformOrigin: '12px 18px',
        transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
        transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none',
      }}
    />
  </svg>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef(null)

  /* Scroll watcher — threshold 60px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll() // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Close drawer on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenuOpen(false)
  const toggle = () => setMenuOpen((o) => !o)

  /* Dynamic styles based on scroll state */
  const headerBg = scrolled ? 'rgba(255,255,255,0.96)' : 'transparent'
  const headerBackdrop = scrolled ? 'blur(16px)' : 'none'
  const headerShadow = scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none'
  const hamburgerColor = scrolled ? '#374151' : 'white'

  return (
    <>
      {/* ───────────────── HEADER ───────────────── */}
      <header
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: headerBg,
          backdropFilter: headerBackdrop,
          WebkitBackdropFilter: headerBackdrop,
          boxShadow: headerShadow,
          transition: 'background 300ms ease-in-out, box-shadow 300ms ease-in-out',
        }}
      >
        <nav
          dir="rtl"
          aria-label="ניווט ראשי"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8"
          style={{ height: 'clamp(60px, 5vw, 68px)' }}
        >
          {/* Logo — right side (RTL = visual left) */}
          <Link href="/" aria-label="דף הבית" onClick={close}
            className="flex-shrink-0 transition-opacity duration-300 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 rounded">
            <Image
              src={LogoPic}
              alt="לוגו ג'ו עיסוי שוודי"
              height={38}
              style={{ width: 'auto', height: 38, display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop nav links — center */}
          <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 rounded px-1"
                  style={{
                    color: scrolled ? '#374151' : 'rgba(255,255,255,0.85)',
                    transition: 'color 300ms ease-in-out',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = scrolled ? '#991b1b' : 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.85)'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone — outlined pill */}
            <a
              href="tel:0522635895"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
              style={{
                color: scrolled ? '#991b1b' : 'white',
                borderColor: scrolled ? '#fecaca' : 'rgba(255,255,255,0.40)',
                background: scrolled ? 'white' : 'transparent',
                transition: 'color 300ms ease-in-out, border-color 300ms ease-in-out, background 300ms ease-in-out',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = scrolled ? '#fef2f2' : 'rgba(255,255,255,0.12)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = scrolled ? 'white' : 'transparent' }}
            >
              <PhoneIcon size={14} />
              <span dir="ltr">052-263-5895</span>
            </a>

            {/* WhatsApp — filled green */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              style={{
                background: '#25D366',
                transition: 'filter 300ms ease-in-out, transform 300ms ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.08)'
                e.currentTarget.style.transform = 'scale(1.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
            style={{ transition: 'color 300ms ease-in-out' }}
            onClick={toggle}
            aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
          >
            <HamburgerIcon open={menuOpen} color={hamburgerColor} />
          </button>
        </nav>
      </header>

      {/* ───────────────── OVERLAY ───────────────── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 lg:hidden"
        onClick={close}
        style={{
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease-in-out',
        }}
      />

      {/* ───────────────── MOBILE DRAWER ───────────────── */}
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        dir="rtl"
        aria-label="תפריט ניווט"
        className="fixed inset-y-0 right-0 z-50 lg:hidden flex flex-col bg-white"
        style={{
          width: 'min(80vw, 320px)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 border-b border-gray-100 flex-shrink-0"
          style={{ height: 60 }}
        >
          <Link href="/" onClick={close} aria-label="דף הבית"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 rounded">
            <Image
              src={LogoPic}
              alt="לוגו ג'ו עיסוי"
              height={32}
              style={{ width: 'auto', height: 32, display: 'block' }}
            />
          </Link>
          <button
            onClick={close}
            aria-label="סגירת תפריט"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" width="18" height="18" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="ניווט מובייל">
          <ul className="list-none m-0 p-0 space-y-0.5" role="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-800 border-b border-gray-100 last:border-b-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 transition-colors duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <span>{item.name}</span>
                  <ChevronLeftIcon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer — CTA buttons */}
        <div className="flex-shrink-0 px-4 pb-8 pt-4 space-y-3 border-t border-gray-100">
          <a
            href="tel:0522635895"
            onClick={close}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-red-800 text-white font-bold text-sm hover:bg-red-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
          >
            <PhoneIcon size={16} />
            <span dir="ltr">052-263-5895</span>
          </a>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            style={{ background: '#25D366' }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = 'none' }}
          >
            <WhatsAppIcon size={16} />
            <span>שלחו הודעה ב-WhatsApp</span>
          </a>
          <p className="text-center text-xs text-gray-400 mt-1">
            זמין ראשון–שישי 8:00–21:00
          </p>
        </div>
      </aside>
    </>
  )
}
