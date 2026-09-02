import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import LogoPic from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

const navigation = [
  { name: 'דף הבית', href: '/' },
  { name: 'אודות', href: '/#about' },
  { name: 'שאלות נפוצות', href: '/#faq' },
  { name: 'צור קשר', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="z-40 sticky top-0 bg-white border-b border-slate-200 shadow-sm" role="banner">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="ניווט ראשי">

        {/* Logo */}
        <Link href="/" className="-m-1.5 p-1.5 flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי בירושלים" height={36} style={{ width: 'auto', height: 36 }} priority />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="tel:0522635895"
            className="inline-flex items-center gap-2 rounded-md border border-red-800 px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-800 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            052-263-5895
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors"
            style={{ background: '#25D366', color: '#0d3321' }}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a href="tel:0522635895"
            className="inline-flex items-center gap-1.5 rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white shadow-sm">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            <span>052-263-5895</span>
          </a>
          <button type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu">
            <span className="sr-only">פתיחת תפריט ראשי</span>
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי" height={32} style={{ width: 'auto', height: 32 }} />
            </Link>
            <button type="button"
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">סגירת תפריט</span>
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 mb-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}
                className="rounded-lg py-3 px-4 text-base font-medium text-gray-800 hover:bg-red-50 hover:text-red-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-6">
            <a href="tel:0522635895"
              className="flex items-center justify-center gap-2 rounded-md bg-red-800 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              052-263-5895
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-semibold shadow-sm transition-colors"
              style={{ background: '#25D366', color: '#0d3321' }}>
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
