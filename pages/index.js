import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

// ── constants ──────────────────────────────────────────
const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"
const TEL         = "tel:0522635895"
const TEL_DISPLAY = "052-263-5895"

// ── icons ──────────────────────────────────────────────
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
const IconWA = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="#fbbf24" width="15" height="15" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
)

// ── content data ───────────────────────────────────────
const benefits = [
  { emoji: '🤲', title: 'שחרור שרירים', desc: 'טכניקות מדויקות לשחרור שרירים תפוסים בגב, צוואר וכתפיים.' },
  { emoji: '🩸', title: 'זרימת דם', desc: 'עיסוי שוודי מגביר מחזור הדם ומחדש את האנרגיה בגוף.' },
  { emoji: '🌿', title: 'שמנים טבעיים', desc: 'שמנים ארומתרפיים איכותיים לתוצאות טיפוליות וריח נעים.' },
  { emoji: '🏠', title: 'בבית שלכם', desc: 'מגיעים אליכם — נוחות מלאה ללא צורך לנסוע לאחר הטיפול.' },
  { emoji: '🕐', title: 'שעות גמישות', desc: 'זמינות כל ימות השבוע כולל ערבים וסופי שבוע.' },
  { emoji: '🏆', title: '25+ שנה', desc: 'מעל רבע מאה ניסיון מקצועי ואלפי לקוחות מרוצים בירושלים.' },
]

const faqs = [
  { q: 'מה היא שיטת הטיפול?', a: 'עיסוי שוודי הוליסטי המבוסס על לחיצה מדויקת על שרירים ורקמות. כל טיפול מותאם אישית תוך יצירת אווירה נעימה — כתוצאה נוצרת חוויה מרגיעה ומחדשת.' },
  { q: 'האם הטיפול אפקטיבי?', a: 'בהחלט. הטיפול יעיל לשחרור שרירים תפוסים, הפחתת כאבי ראש, שיפור זרימת הדם, הורדת דלקות ויצירת רגיעה עמוקה.' },
  { q: 'האם אפשר טיפול בבית?', a: "כן — ג'ו מגיע אליכם. נוחות מלאה, ללא נסיעה לאחר הטיפול. מותאם לכל גיל וצורך." },
  { q: 'כמה זמן נמשך הטיפול?', a: '45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, 90 דקות לחוויה מועשרת עם שמנים ארומתרפיים.' },
  { q: 'מה לובשים לעיסוי?', a: 'אין צורך בהכנה מיוחדת. הטיפול מתבצע על מיטת עיסוי נוחה עם כיסוי מלא בכל עת — הנוחות והפרטיות שלכם בראש סדר העדיפויות.' },
]

// ── components ─────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button onClick={() => setOpen(o => !o)} aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-right group">
        <span className="text-sm font-semibold text-stone-800 group-hover:text-red-800 transition-colors leading-relaxed">{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-red-200 text-red-700 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="10" height="10">
            <path d="M6 1v10M1 6h10" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-stone-500">{a}</p>}
    </div>
  )
}

// ── page ───────────────────────────────────────────────
export default function Home() {
  const [showWA, setShowWA] = useState(false)
  const [waPulse, setWaPulse] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setShowWA(true), 2500)
    const t2 = setTimeout(() => setWaPulse(false), 8000)
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

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center" dir="rtl">

        {/* תמונת רקע */}
        <Image
          src="/massage-hero.jpg"
          alt="עיסוי שוודי מקצועי"
          fill
          className="object-cover object-center"
          priority
        />

        {/* שכבת gradient: כהה מימין (שם הטקסט) → שקוף שמאלה */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to left, rgba(10,5,5,0.92) 0%, rgba(10,5,5,0.75) 40%, rgba(10,5,5,0.3) 100%)'
        }} />
        {/* bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(10,5,5,0.7))'
        }} />

        {/* תוכן */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-xl">

            {/* כוכבים */}
            <div className="hu-1 flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><StarIcon key={i}/>)}</div>
              <span className="text-white/50 text-xs font-medium">מעל 1,000 לקוחות מרוצים</span>
            </div>

            {/* כותרת */}
            <h1 className="hu-2 font-black text-white leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
              מרגישים{' '}
              <span className="text-red-400">כאב</span>
              <br />בגב או בצוואר?
            </h1>

            {/* תת-כותרת */}
            <p className="hu-3 text-white/65 leading-8 mb-10"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', maxWidth: 440 }}>
              ג&apos;ו מגיע אליכם הביתה ומשחרר אתכם.
              <br />
              <span className="text-white/38 text-sm">25+ שנות ניסיון · ירושלים ופסגת זאב</span>
            </p>

            {/* כפתורים */}
            <div className="hu-4 flex flex-col sm:flex-row gap-3 mb-9">
              <a href={TEL}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold px-7 py-4 text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                style={{ boxShadow: '0 4px 24px rgba(153,27,27,0.4)' }}>
                <IconPhone />
                התקשרו — {TEL_DISPLAY}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl font-bold px-7 py-4 text-base text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
                <IconWA />
                WhatsApp
              </a>
            </div>

            {/* trust row */}
            <div className="hu-5 flex flex-wrap gap-x-5 gap-y-1.5">
              {['🏠 טיפול בבית הלקוח', '📍 ירושלים ופסגת זאב', '✓ זמין כל ימות השבוע'].map(t => (
                <span key={t} className="text-xs text-white/35 font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <section className="bg-red-900 py-9" dir="rtl">
        <div className="mx-auto max-w-3xl px-6 grid grid-cols-3 divide-x divide-x-reverse divide-red-800 text-center text-white">
          {[['25+','שנות ניסיון'],['1,000+','לקוחות מרוצים'],['100%','מקצועיות']].map(([n,l]) => (
            <div key={l} className="px-4">
              <div className="text-2xl sm:text-3xl font-black tracking-tight">{n}</div>
              <div className="text-red-300 text-xs mt-1 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENEFITS
      ═══════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-800 mb-3">למה לבחור בג&apos;ו?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">היתרונות שלנו</h2>
            <div className="mt-3 mx-auto w-10 h-0.5 bg-red-800 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map(b => (
              <div key={b.title}
                className="group flex gap-4 items-start p-6 rounded-2xl border border-stone-100 hover:border-red-100 hover:bg-red-50 transition-all duration-300">
                <span className="text-3xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">{b.emoji}</span>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{b.title}</h3>
                  <p className="text-stone-500 text-xs leading-6">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <section className="bg-stone-50 py-20 sm:py-28" id="about" dir="rtl">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-red-800 mb-3">אודות</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">ג&apos;ו — מעסה שוודי הוליסטי</h2>
              <div className="w-10 h-0.5 bg-red-800 rounded mb-7" />
              <div className="space-y-4 text-stone-600 leading-8 text-sm">
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון. המטרה: לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות עיסוי שוודי הוליסטי.</p>
                <p>בכל טיפול נעשה שימוש במגוון טכניקות: עיסוי שוודי, עיסוי רקמות עמוק ומתיחות — לטיפול בכאב, מתח ואי נוחות. שמנים טבעיים לשחרור שרירים, הפחתת דלקות ושיפור זרימת הדם.</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 space-y-4 text-stone-600 leading-8 text-sm">
              <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח — בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או פשוט מחפשים להירגע.</p>
              <p>אני מחויב לסביבה שלווה — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי.</p>
              <div className="mt-2 p-5 bg-white rounded-xl border border-red-100">
                <p className="font-bold text-red-900 text-sm">🏠 מגיע אליכם הביתה</p>
                <p className="text-red-700 text-xs mt-1 leading-6">נוחות מלאה — אין צורך לנסוע אחרי הטיפול.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section className="bg-red-900 py-20 sm:py-28" id="contact" dir="rtl">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-red-400 mb-3">צרו קשר</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">מוכנים להתחיל?</h2>
          <p className="text-red-200 text-sm leading-7 mb-10 max-w-xs mx-auto">
            התקשרו או שלחו הודעה — נתאם בזמן הנוח לכם.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white text-red-900 px-8 py-4 text-sm font-bold shadow-lg hover:bg-red-50 transition-all hover:scale-105">
              <IconPhone />{TEL_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl text-white px-8 py-4 text-sm font-bold shadow-lg transition-all hover:scale-105 hover:brightness-110"
              style={{ background: '#25D366' }}>
              <IconWA />שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section id="faq" className="bg-stone-50 py-20 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-red-800 mb-3">שאלות ותשובות</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">כל מה שרציתם לדעת</h2>
            <div className="mt-3 mx-auto w-10 h-0.5 bg-red-800 rounded" />
          </div>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm px-6 sm:px-8">
            {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="bg-stone-900 text-stone-500" dir="rtl">
        <div className="mx-auto max-w-6xl py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי בירושלים</p>
          <div className="flex gap-5">
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-white transition-colors">פיתוח אתרים</a>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════
          WA FLOAT
      ═══════════════════════════════════════ */}
      {showWA && (
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className={`wa-float fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform ${waPulse ? 'wa-pulse' : ''}`}
          style={{ background: '#25D366' }}>
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}
