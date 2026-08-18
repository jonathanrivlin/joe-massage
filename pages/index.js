import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"
const TEL    = "tel:0522635895"
const TEL_DISPLAY = "052-263-5895"

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 21C12 21 4 14.5 4 9a8 8 0 0116 0c0 5.5-8 12-8 12z"/>
        <circle cx="12" cy="9" r="3"/>
      </svg>
    ),
    title: 'שחרור מתח עמוק',
    desc: 'טכניקות מתקדמות לשחרור שרירים תפוסים ומתחים מצטברים, בגב, צוואר וכתפיים.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: 'שיפור זרימת הדם',
    desc: 'עיסוי שוודי מגביר מחזור הדם, מחדש רקמות ומשפר את אנרגיית הגוף.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'שמנים ארומתרפיים',
    desc: 'שמנים טבעיים איכותיים לרוגע, ריח נעים ותוצאות טיפוליות מיטביות.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'טיפול בבית הלקוח',
    desc: 'מגיעים אליכם — נוחות מלאה ללא צורך לנסוע. מכבסים, מסדרים, ומגיעים.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'גמישות בשעות',
    desc: 'זמינות גבוהה כל ימות השבוע, כולל ערבים וסופי שבוע, לנוחיותכם.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: '25+ שנות ניסיון',
    desc: 'מעל רבע מאה של מקצועיות ואלפי לקוחות מרוצים באזור ירושלים ופסגת זאב.',
  },
]

const faqs = [
  {
    question: 'מה היא שיטת הטיפול?',
    answer: 'עיסוי שוודי הוליסטי הינו שיטת טיפול המבוססת על חיכוך ולחיצה מדויקת על שרירים ורקמות. אנו שמים דגש על אינטראקציה בין המטפל למטופל, יצירת אווירה נעימה ותקשורת פתוחה — כתוצאה מכך נוצרת חוויה מרגיעה ומחדשת.',
  },
  {
    question: 'האם הטיפול אפקטיבי?',
    answer: 'בהחלט. הטיפול יעיל לשחרור שרירים תפוסים, הפחתת כאבי ראש, שיפור זרימת הדם, הורדת דלקות, מניעת התכווצויות ויצירת תחושת רגיעה עמוקה וזרימה אנרגטית.',
  },
  {
    question: 'האם אפשר טיפול בבית?',
    answer: 'כן — ג\'ו מגיע אליכם הביתה. נוחות מלאה, ללא צורך לנסוע לאחר הטיפול. הטיפול מותאם לכל גיל ולצרכים האישיים של כל מטופל.',
  },
  {
    question: 'כמה זמן נמשך הטיפול?',
    answer: 'הטיפול מותאם אישית — החל מ-45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, ועד 90 דקות לחוויה מועשרת עם שמנים ארומתרפיים. הכל לפי הצורך שלכם.',
  },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-warm-200 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-right gap-4 group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-warm-900 group-hover:text-brand-700 transition-colors">{question}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-300 flex items-center justify-center text-brand-600 transition-all duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
            <path d="M8 3v10M3 8h10"/>
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-6 text-sm leading-7 text-warm-600">{answer}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [showWA, setShowWA] = useState(false)
  const [waPulse, setWaPulse] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setShowWA(true), 2000)
    const t2 = setTimeout(() => setWaPulse(false), 7000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <>
      <Head>
        <title>ג&apos;ו | עיסוי שוודי הוליסטי בירושלים — 25+ שנות ניסיון</title>
        <meta name="description" content="ג'ו — מעסה שוודי הוליסטי עם 25+ שנות ניסיון. שחרור שרירים, הפחתת כאב, רגיעה עמוקה. ירושלים ופסגת זאב. טיפול בבית הלקוח. 052-263-5895" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ג'ו עיסוי שוודי הוליסטי בירושלים" />
        <meta property="og:description" content="25+ שנות ניסיון. ירושלים ופסגת זאב. טיפול בבית הלקוח. 052-263-5895" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative h-screen min-h-[640px] flex items-end pb-20 overflow-hidden" dir="rtl">
        <Image src={HeroPic} alt="עיסוי שוודי הוליסטי בירושלים" fill className="object-cover object-center" priority />
        {/* gradient: transparent top → dark bottom */}
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.78) 100%)'}} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10">
          <p className="section-label text-orange-300 mb-3">ירושלים · פסגת זאב</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5" style={{textShadow:'0 2px 20px rgba(0,0,0,0.4)'}}>
            עיסוי שוודי<br />הוליסטי
          </h1>
          <p className="text-lg sm:text-xl text-white/75 mb-8 max-w-lg leading-relaxed font-light">
            מטפל מנוסה עם 25+ שנות ניסיון. שחרור מתח, הפחתת כאב, רגיעה עמוקה — גם בבית שלכם.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
            <a href={TEL}
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white px-7 py-3.5 text-sm font-bold shadow-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              {TEL_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 text-sm font-bold transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-4 text-white/60 text-xs font-medium">
            {['✓ 25+ שנות ניסיון', '✓ טיפול בבית הלקוח', '✓ ירושלים ופסגת זאב'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="bg-brand-700 py-10" dir="rtl">
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-3 gap-6 text-center text-white">
          {[['25+','שנות ניסיון'], ['1,000+','לקוחות מרוצים'], ['100%','מקצועיות']].map(([n,l]) => (
            <div key={l}>
              <div className="text-3xl sm:text-4xl font-black tracking-tight">{n}</div>
              <div className="text-brand-200 text-xs sm:text-sm mt-1 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ BENEFITS ══════════════ */}
      <section className="bg-warm-50 py-24 sm:py-32" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="section-label mb-3">למה לבחור בג&apos;ו?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 tracking-tight heading-underline">
              היתרונות שלנו
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title}
                className="group bg-white rounded-2xl p-7 border border-warm-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-100 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-base font-bold text-warm-900 mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed text-warm-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section className="bg-white py-24 sm:py-32" id="about" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="section-label mb-3">אודות</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 tracking-tight mb-6 heading-underline-right">
                ג&apos;ו — מעסה שוודי הוליסטי
              </h2>
              <div className="space-y-5 text-warm-600 leading-8 text-base">
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון. המטרה: לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של עיסוי שוודי הוליסטי.</p>
                <p>אנו מאמינים בגישה הוליסטית לבריאות — הנפש, הגוף והרוח קשורים זה בזה. בכל טיפול נעשה שימוש במגוון טכניקות: עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, לטיפול באזורים ספציפיים של כאב, מתח ואי נוחות.</p>
                <p>שמנים טבעיים מיוחדים לשחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם — והשראת רגיעה עמוקה.</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 space-y-5 text-warm-600 leading-8 text-base">
              <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח. בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או פשוט מחפשים להירגע ולהוריד מתח.</p>
              <p>אני מחויב לסביבה שלווה ומסבירת פנים — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי בכל פרט.</p>
              <div className="mt-8 p-6 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="font-semibold text-brand-800 text-base">🏠 קיימת גם אפשרות לטיפול בבית הלקוח</p>
                <p className="text-brand-600 text-sm mt-1">מגיעים אליכם — נוחות מלאה ללא צורך לנסוע לאחר הטיפול.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section className="py-24 sm:py-32" id="contact" dir="rtl"
        style={{background:'linear-gradient(135deg, #1c1917 0%, #2e2925 60%, #3d2f1e 100%)'}}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="section-label text-brand-400 mb-4">צרו קשר</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            מוכנים לחוות?
          </h2>
          <p className="text-warm-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            השאירו הודעה או התקשרו — נחזור אליכם בהקדם ונתאם עיסוי בזמן הנוח לכם.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-warm-900 px-8 py-4 text-base font-bold shadow-xl hover:bg-warm-50 transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-600 flex-shrink-0"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              {TEL_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105"
              style={{background:'#25D366'}}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="bg-warm-50 py-24 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">שאלות ותשובות</p>
            <h2 className="text-3xl font-bold text-warm-900 tracking-tight heading-underline">
              כל מה שרציתם לדעת
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-warm-100 px-6 sm:px-8 shadow-sm">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="bg-warm-900 text-warm-400" dir="rtl">
        <div className="mx-auto max-w-7xl py-10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי בירושלים</p>
          <div className="flex gap-6">
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-white transition-colors">פיתוח אתרים</a>
          </div>
        </div>
      </footer>

      {/* ══════════════ WA FLOAT ══════════════ */}
      {showWA && (
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className={`whatsapp-float fixed bottom-6 left-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-2xl transition-transform hover:scale-110 ${waPulse ? 'wa-pulse' : ''}`}
          style={{backgroundColor:'#25D366'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}
