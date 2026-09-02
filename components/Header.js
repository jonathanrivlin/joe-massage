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
    <header className="z-40 sticky top-0 bg-white border-b border-gray-200" role="banner">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="ניווט ראשי">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי בירושלים" height={38} style={{ width: 'auto', height: 38 }} priority />
        </Link>

        {/* Desktop nav — clean underline style */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-red-800 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#1a7a3a' }}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
            WhatsApp
          </a>
          <div className="w-px h-5 bg-gray-200" aria-hidden="true" />
          <a href="tel:0522635895"
            className="inline-flex items-center gap-2 rounded-md bg-red-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-900 transition-colors shadow-sm">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            052-263-5895
          </a>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:0522635895"
            className="inline-flex items-center gap-1.5 rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            התקשרו
          </a>
          <button type="button"
            className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}>
            <span className="sr-only">פתיחת תפריט</span>
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-xl flex flex-col">

          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי" height={32} style={{ width: 'auto', height: 32 }} />
            </Link>
            <button type="button"
              className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">סגירת תפריט</span>
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-4 py-6 gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}
                className="py-3 px-3 text-base font-medium text-gray-700 hover:text-red-800 border-b border-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="px-4 pb-8 flex flex-col gap-3">
            <a href="tel:0522635895"
              className="flex items-center justify-center gap-2 rounded-md bg-red-800 px-4 py-3 text-base font-semibold text-white hover:bg-red-900 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              052-263-5895
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-semibold transition-colors"
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
