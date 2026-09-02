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
    <header className="z-40 sticky top-0 bg-white border-b border-slate-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">

        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
          <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי בירושלים" height={36} style={{ width: 'auto', height: 36 }} />
        </Link>

        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}
              className="text-sm font-semibold leading-6 text-gray-700 hover:text-red-800 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0522635895"
            className="inline-flex items-center gap-2 rounded-md bg-red-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            052-263-5895
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors" style={{ background: '#25D366', color: '#0d3321' }}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <a href="tel:0522635895"
            className="inline-flex items-center gap-1.5 rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white shadow-sm">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            <span>052-263-5895</span>
          </a>
          <button type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">פתיחת תפריט ראשי</span>
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image src={LogoPic} alt="ג'ו עיסוי שוודי הוליסטי בירושלים" height={32} style={{ width: 'auto', height: 32 }} />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">סגירת תפריט ראשי</span>
              <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}
                    className="-mx-3 block rounded-lg py-3 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-red-50 hover:text-red-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <a href="tel:0522635895"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-red-800 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  052-263-5895
                </a>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors"
                  style={{ background: '#25D366' }}>
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
