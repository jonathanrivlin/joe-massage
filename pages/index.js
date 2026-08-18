import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const benefits = [
  { emoji: '💆', title: 'שחרור מתח ושרירים תפוסים', desc: 'הפגת מתחים עמוקים ושחרור שרירים קשוחים באמצעות טכניקות עיסוי מתקדמות.' },
  { emoji: '🩸', title: 'שיפור זרימת הדם', desc: 'עיסוי שוודי מגביר את זרימת הדם ומשפר את תפקוד מערכת הדם והלימפה.' },
  { emoji: '🌿', title: 'שמנים ארומתרפיים', desc: 'שימוש בשמנים טבעיים איכותיים לרוגע, ריח נעים ותוצאות טיפוליות מיטביות.' },
  { emoji: '🏠', title: 'טיפול בבית הלקוח', desc: 'מגיעים אליכם הביתה — נוחות מקסימלית ללא צורך לנסוע לאחר הטיפול.' },
  { emoji: '⏰', title: 'גמישות בשעות', desc: 'זמינות גבוהה לאורך כל שעות היום, כולל ערבים וסופי שבוע, לנוחיותכם.' },
  { emoji: '✅', title: '25+ שנות ניסיון', desc: 'מעל רבע מאה של ניסיון מקצועי ואלפי לקוחות מרוצים באזור ירושלים.' },
]

const faqs = [
  {
    question: 'מה היא שיטת הטיפול?',
    answer: 'עיסוי שוודי הינו שיטת טיפול אלטרנטיבית המבוססת על חיכוך ולחיצה על מגוון נקודות שונות ע"י מטפל. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה — כתוצאה מכך נוצרת חוויה מהנה ומרגיעה למטופל. העיסוי מתבצע על שרירים ורקמות באמצעות טכניקות מגע ייחודיות לריכוך עור הגוף ושחרור חסימות אנרגטיות.',
  },
  {
    question: 'האם הטיפול אפקטיבי?',
    answer: 'בהחלט. העיסוי כולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף ומניעת התכווצויות שרירים. התוצאה: תחושת רגיעה כללית בגוף וזרימה אנרגטית שגורמת לרוגע ושלווה.',
  },
  {
    question: 'האם אפשר טיפול בבית?',
    answer: 'כן! ג\'ו מגיע אליכם הביתה — נוחות מקסימלית ללא צורך לנסוע לאחר הטיפול. הטיפול מתאים לכל הגילאים ומותאם לצרכים האישיים של כל מטופל.',
  },
]

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-right gap-4 hover:text-red-800 transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        <span className={`flex-shrink-0 text-red-800 text-xl transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="pb-5 text-base leading-7 text-gray-600">{answer}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [showWA, setShowWA] = useState(false)
  const [waPulse, setWaPulse] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowWA(true), 2000)
    const t2 = setTimeout(() => setWaPulse(false), 7000)
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <Head>
        <title>ג&apos;ו עיסוי שוודי הוליסטי בירושלים | 25+ שנות ניסיון</title>
        <meta name="description" content="ג'ו — מעסה שוודי הוליסטי מנוסה עם 25+ שנות ניסיון. עיסוי בירושלים ופסגת זאב, טיפול בבית הלקוח. שחרור שרירים, הפחתת כאב, רגיעה עמוקה. התקשרו: 052-263-5895" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ג'ו עיסוי שוודי הוליסטי בירושלים" />
        <meta property="og:description" content="25+ שנות ניסיון בעיסוי שוודי הוליסטי. ירושלים ופסגת זאב. טיפול בבית הלקוח. 052-263-5895" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header scrolled={scrolled} />

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" dir="rtl">
        <Image
          src={HeroPic}
          alt="עיסוי שוודי הוליסטי בירושלים"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-red-300 font-semibold text-sm tracking-widest uppercase mb-4">ירושלים ופסגת זאב</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-4">
            עיסוי שוודי<br />הוליסטי בירושלים
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            25+ שנות ניסיון · שחרור מתח ושרירים · טיפול בבית הלקוח
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['✅ 25+ שנות ניסיון', '🏠 טיפול בבית', '📍 ירושלים'].map(b => (
              <span key={b} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0522635895"
              className="w-full sm:w-auto rounded-full bg-red-800 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-red-700 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              📞 התקשרו — 052-263-5895
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#1ebe5d] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              💬 שלחו הודעה
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-1 animate-bounce">
          <span>גללו למטה</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-red-800 py-8" dir="rtl">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-3 gap-4 text-center text-white">
          {[
            { num: '25+', label: 'שנות ניסיון' },
            { num: '1000+', label: 'לקוחות מרוצים' },
            { num: '100%', label: 'שביעות רצון' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-bold">{s.num}</div>
              <div className="text-red-200 text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-white py-20 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-800 tracking-widest uppercase mb-2">למה לבחור בג&apos;ו?</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">היתרונות שלנו</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-red-800 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group flex flex-col items-center text-center bg-gray-50 hover:bg-red-50 rounded-2xl p-8 border border-transparent hover:border-red-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-stone-50 py-24 sm:py-32" id="about" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-sm font-semibold text-red-800 tracking-widest uppercase mb-2">אודות</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">ג&apos;ו — מעסה שוודי הוליסטי</h2>
            <div className="w-12 h-1 bg-red-800 rounded-full mb-10" />
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-8 text-gray-600 lg:max-w-none lg:grid-cols-2">
              <div className="space-y-6">
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון בתחום. המטרה: לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של עיסוי שוודי הוליסטי.</p>
                <p>אנו מאמינים בגישה הוליסטית לבריאות — הנפש, הגוף והרוח קשורים זה בזה. המטפל המנוסה משתמש במגוון טכניקות, כולל עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, לטיפול באזורים ספציפיים של כאב, מתח ואי נוחות.</p>
                <p>שימוש בשמנים מיוחדים לשחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם והשראת רגיעה עמוקה בגוף.</p>
              </div>
              <div className="space-y-6">
                <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח — בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או פשוט מחפשים להירגע ולהוריד מתח.</p>
                <p>אני מחויב לסביבה שלווה ומסבירת פנים — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי בכל פרט. חווית קבלת העיסוי צריכה להיות מרעננת כמו העיסוי עצמו.</p>
                <p className="font-medium text-gray-800">קיימת גם אפשרות לטיפול בבית הלקוח — אני מגיע אליכם.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="bg-red-800" id="contact" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 text-center">
          <p className="text-red-300 text-sm font-semibold tracking-widest uppercase mb-3">צרו קשר</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            מעוניין/ת לקבוע תור?
          </h2>
          <p className="text-red-200 text-lg mb-10 max-w-xl mx-auto">
            דברו איתנו — נשמח לענות על כל שאלה ולתאם עיסוי בזמן הנוח לכם
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0522635895"
              className="w-full sm:w-auto rounded-full bg-white text-red-800 px-8 py-4 text-base font-bold shadow-lg hover:bg-red-50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              📞 052-263-5895
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-[#25D366] text-white px-8 py-4 text-base font-bold shadow-lg hover:bg-[#1ebe5d] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red-800 tracking-widest uppercase mb-2">שאלות נפוצות</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">כל מה שרציתם לדעת</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-red-800 rounded-full" />
          </div>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white" dir="rtl">
        <div className="mx-auto max-w-7xl py-10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© ג&apos;ו עיסוי שוודי הוליסטי בירושלים</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-white transition-colors">פיתוח אתרים</a>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOAT ===== */}
      {showWA && (
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className={`whatsapp-float fixed bottom-6 left-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-2xl transition-transform hover:scale-110 ${waPulse ? 'wa-pulse' : ''}`}
          style={{ backgroundColor: '#25D366' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}
