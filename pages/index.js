import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"
const TEL = "tel:0522635895"
const TEL_DISPLAY = "052-263-5895"

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const benefits = [
  { icon: '🧘', title: 'שחרור מתח עמוק', desc: 'טכניקות מתקדמות לשחרור שרירים תפוסים ומתחים מצטברים בגב, צוואר וכתפיים.' },
  { icon: '🩸', title: 'שיפור זרימת הדם', desc: 'העיסוי מחדש את מחזור הדם, מחדש רקמות ומשפר את אנרגיית הגוף.' },
  { icon: '🌿', title: 'שמנים ארומתרפיים', desc: 'שמנים טבעיים איכותיים לרוגע, ריח נעים ותוצאות טיפוליות מיטביות.' },
  { icon: '🏠', title: 'טיפול בבית הלקוח', desc: 'מגיעים אליכם — נוחות מלאה ללא צורך לנסוע לאחר הטיפול.' },
  { icon: '⏰', title: 'גמישות בשעות', desc: 'זמינות גבוהה כל ימות השבוע, כולל ערבים וסופי שבוע.' },
  { icon: '🏆', title: '25+ שנות ניסיון', desc: 'מעל רבע מאה של מקצועיות ואלפי לקוחות מרוצים בירושלים.' },
]

const faqs = [
  { question: 'מה היא שיטת הטיפול?', answer: 'עיסוי שוודי הוליסטי המבוסס על חיכוך ולחיצה מדויקת על שרירים ורקמות. כל טיפול מותאם אישית למטופל תוך יצירת אווירה נעימה ותקשורת פתוחה — כתוצאה נוצרת חוויה מרגיעה ומחדשת.' },
  { question: 'האם הטיפול אפקטיבי?', answer: 'בהחלט. הטיפול יעיל לשחרור שרירים תפוסים, הפחתת כאבי ראש, שיפור זרימת הדם, הורדת דלקות, מניעת התכווצויות — ויוצר תחושת רגיעה עמוקה.' },
  { question: 'האם אפשר טיפול בבית?', answer: "כן — ג'ו מגיע אליכם הביתה. נוחות מלאה ללא צורך לנסוע לאחר הטיפול. הטיפול מותאם לכל גיל ולצרכים האישיים." },
  { question: 'כמה זמן נמשך הטיפול?', answer: 'הטיפול מותאם אישית — החל מ-45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, ועד 90 דקות לחוויה מועשרת עם שמנים ארומתרפיים.' },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-right gap-4 group"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800 group-hover:text-red-800 transition-colors leading-relaxed">{question}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-red-200 flex items-center justify-center text-red-700 transition-all duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
            <path d="M8 3v10M3 8h10"/>
          </svg>
        </span>
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-gray-500">{answer}</p>}
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

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" dir="rtl">

        {/* BG image */}
        <Image
          src={HeroPic}
          alt="עיסוי שוודי הוליסטי בירושלים"
          fill
          className="object-cover object-center scale-105"
          style={{ filter: 'brightness(0.45) saturate(0.6)' }}
          priority
        />

        {/* Multi-layer gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(120,10,10,0.55) 0%, rgba(0,0,0,0) 55%), linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 50%)'
        }} />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-16">
          <div className="max-w-2xl">

            {/* Stars */}
            <div className="hero-title flex items-center gap-2 mb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#facc15" width="16" height="16">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white/55 text-sm font-medium">מעל 1,000 לקוחות מרוצים</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)' }}>
              מרגישים{' '}
              <span style={{ color: '#f87171' }}>כאב</span>
              <br />בגב או בצוואר?
            </h1>

            {/* Subtitle */}
            <p className="hero-sub text-white/65 font-light leading-8 mb-3"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: 480 }}>
              ג&apos;ו מגיע אליכם הביתה ומשחרר אתכם.
            </p>
            <p className="hero-sub text-white/40 text-sm leading-7 mb-10"
              style={{ maxWidth: 480 }}>
              25+ שנות ניסיון בעיסוי שוודי הוליסטי · ירושלים ופסגת זאב
            </p>

            {/* CTA */}
            <div className="hero-btns flex flex-col sm:flex-row items-start gap-3 mb-10">
              <a href={TEL}
                className="inline-flex items-center gap-3 rounded-2xl text-white font-bold px-8 py-4 text-base shadow-2xl transition-all hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)', boxShadow: '0 8px 32px rgba(153,27,27,0.45)' }}>
                <PhoneIcon />
                התקשרו עכשיו — {TEL_DISPLAY}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl font-bold px-7 py-4 text-base transition-all hover:scale-105 active:scale-95"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)' }}>
                <WAIcon />
                WhatsApp
              </a>
            </div>

            {/* Pills */}
            <div className="hero-pills flex flex-wrap items-center gap-x-4 gap-y-2">
              {['🏠 טיפול בבית הלקוח', '📍 ירושלים ופסגת זאב', '✓ זמין כל ימות השבוע'].map((p, i) => (
                <span key={i} className="text-xs text-white/40 font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))' }} />
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-red-900 py-10" dir="rtl">
        <div className="mx-auto max-w-3xl px-6 grid grid-cols-3 gap-4 text-center text-white">
          {[['25+','שנות ניסיון'],['1,000+','לקוחות מרוצים'],['100%','מקצועיות']].map(([n,l])=>(
            <div key={l}>
              <div className="text-2xl sm:text-4xl font-black tracking-tight">{n}</div>
              <div className="text-red-300 text-xs sm:text-sm mt-1 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="bg-white py-24 sm:py-32" dir="rtl">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label mb-3">למה לבחור בג&apos;ו?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight heading-line">
              היתרונות שלנו
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title}
                className="group bg-gray-50 hover:bg-red-50 rounded-2xl p-7 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">{b.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="bg-stone-50 py-24 sm:py-32" id="about" dir="rtl">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div>
              <span className="section-label mb-3">אודות</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-8 heading-line-right">
                ג&apos;ו — מעסה שוודי הוליסטי
              </h2>
              <div className="space-y-5 text-gray-600 leading-8 text-[15px]">
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון. המטרה: לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של עיסוי שוודי הוליסטי.</p>
                <p>אנו מאמינים בגישה הוליסטית לבריאות — הנפש, הגוף והרוח קשורים זה בזה. בכל טיפול נעשה שימוש במגוון טכניקות: עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, לטיפול באזורים ספציפיים של כאב, מתח ואי נוחות.</p>
                <p>שמנים טבעיים מיוחדים לשחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם — והשראת רגיעה עמוקה.</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 space-y-5 text-gray-600 leading-8 text-[15px]">
              <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח. בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או פשוט מחפשים להירגע ולהוריד מתח.</p>
              <p>אני מחויב לסביבה שלווה ומסבירת פנים — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי בכל פרט.</p>
              <div className="mt-6 p-6 bg-red-50 rounded-2xl border border-red-100">
                <p className="font-bold text-red-900 text-sm mb-1">🏠 טיפול בבית הלקוח</p>
                <p className="text-red-700 text-sm leading-relaxed">מגיעים אליכם — נוחות מלאה ללא צורך לנסוע לאחר הטיפול.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className="bg-red-900 py-24 sm:py-32" id="contact" dir="rtl">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="section-label text-red-400 mb-4">צרו קשר</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            מוכנים לחוות?
          </h2>
          <p className="text-red-200 text-base sm:text-lg mb-12 max-w-sm mx-auto leading-relaxed">
            התקשרו או שלחו הודעה — נחזור אליכם בהקדם ונתאם בזמן הנוח לכם.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-red-900 px-8 py-4 text-base font-bold shadow-xl hover:bg-red-50 transition-all hover:scale-105">
              <PhoneIcon />{TEL_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl text-white px-8 py-4 text-base font-bold shadow-xl transition-all hover:scale-105"
              style={{background:'#25D366'}}>
              <WAIcon />שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="bg-white py-24 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-12">
            <span className="section-label mb-3">שאלות ותשובות</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight heading-line">
              כל מה שרציתם לדעת
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 px-6 sm:px-8 shadow-sm">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-gray-900 text-gray-500" dir="rtl">
        <div className="mx-auto max-w-6xl py-10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי בירושלים</p>
          <div className="flex gap-6">
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-white transition-colors">פיתוח אתרים</a>
          </div>
        </div>
      </footer>

      {/* ══ WA FLOAT ══ */}
      {showWA && (
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className={`whatsapp-float fixed bottom-6 left-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-2xl hover:scale-110 transition-transform ${waPulse ? 'wa-pulse' : ''}`}
          style={{background:'#25D366'}}>
          <svg viewBox="0 0 24 24" fill="white" width="30" height="30" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}
