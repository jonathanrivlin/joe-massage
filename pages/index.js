import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const benefits = [
  { emoji: '💆', title: 'שחרור מתח ושרירים תפוסים', desc: 'הפגת מתחים עמוקים ושחרור שרירים קשוחים באמצעות טכניקות עיסוי מתקדמות.' },
  { emoji: '🩸', title: 'שיפור זרימת הדם', desc: 'עיסוי שוודי מגביר את זרימת הדם בגוף ומשפר את תפקוד מערכת הדם והלימפה.' },
  { emoji: '🌿', title: 'שמנים ארומתרפיים', desc: 'שימוש בשמנים טבעיים איכותיים לרוגע, ריח נעים ותוצאות טיפוליות מיטביות.' },
  { emoji: '🏠', title: 'טיפול בבית הלקוח', desc: 'מגיעים אליכם הביתה — נוחות מקסימלית ללא צורך לנסוע לאחר הטיפול.' },
  { emoji: '⏰', title: 'גמישות בשעות', desc: 'זמינות גבוהה לאורך כל שעות היום, כולל ערבים וסופי שבוע, לנוחיותכם.' },
  { emoji: '✅', title: '25+ שנות ניסיון', desc: 'מעל רבע מאה של ניסיון מקצועי ואלפי לקוחות מרוצים באזור ירושלים.' },
]

const treatments = [
  {
    title: 'עיסוי חלקי',
    duration: '45 דקות',
    desc: 'עיסוי ממוקד לאזורים ספציפיים כגון גב עליון, צוואר וכתפיים — אידיאלי לשחרור מתח מהיר ויעיל.',
  },
  {
    title: 'עיסוי מלא',
    duration: '60 דקות',
    desc: 'עיסוי שוודי הוליסטי לכל הגוף, שמחזיר את האיזון הפיזי והנפשי ומשרה רגיעה עמוקה.',
  },
  {
    title: 'עיסוי מלא מועשר',
    duration: '90 דקות',
    desc: 'חוויה מועשרת הכוללת עיסוי מלא עם שמנים ארומתרפיים ייחודיים וטיפול מעמיק ברקמות.',
  },
]

const faqs = [
  {
    question: 'מה היא שיטת הטיפול?',
    answer:
      'עיסוי שוודי הינו שיטת טיפול אלטרנטיבית המבוססת על חיכוך ולחיצה על מגוון נקודות שונות ע"י מטפל, כחלק מתהליך העיסוי אנו שמים דגש על אינראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה בין הצדדים כתוצאה מכך נוצרת חוויה מהנה ומרגיעה למטופל. העיסוי מתבצע על שרירים ורקמות ומבוצע באמצעות טכניקות מגע יחודיות לריכוך עור הגוף, שיחרור חסימות אנרגטיות ושרירים תפוסים ותרום לחידוש הגוף.',
  },
  {
    question: 'האם הטיפול אפקטיבי?',
    answer:
      'העיסוי מתבצע על שרירים ורקמות ומבוצע באמצעות טכניקות מגע יחודיות לריכוך עור הגוף, שיחרור חסימות אנרגטיות ושרירים תפוסים ותרום לחידוש הגוף.  העיסוי כולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים, משפר את חילוף החומרים בגוף ומשרה תחושת רגיעה כללית בגוף ויוצר זרימה אנרגטית אשר גורמת לרוגע ושלווה.',
  },
]

const WA_HREF = "https://wa.me/9720522635895?text=שלום%2C+אשמח+לקבוע+עיסוי+עם+ג'ו"

export default function Home() {
  const [showWA, setShowWA] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowWA(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>ג&apos;ו עיסוי שוודי הוליסטי בירושלים — עיסוי שוודי הוליסטי בירושלים ובפסגת זאב</title>
        <meta
          name="description"
          content="מטפל מנוסה בעל וותק של למעלה מ-25 שנה, מומחה בסגנון השוודי הוליסטי הכולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים, משפר את חילוף החומרים בגוף ומשרה תחושת רגיעה כללית בגוף ויוצר זרימה אנרגטית."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ג'ו עיסוי שוודי הוליסטי בירושלים" />
        <meta
          property="og:description"
          content="25+ שנות ניסיון בעיסוי שוודי הוליסטי בירושלים ופסגת זאב. טיפול בבית הלקוח. התקשרו עכשיו: 052-263-5895"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* ===== HERO ===== */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden" dir="rtl">
        <Image
          src={HeroPic}
          alt="עיסוי שוודי הוליסטי בירושלים"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            עיסוי שוודי הוליסטי בירושלים
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 drop-shadow">
            25+ שנות ניסיון | ירושלים ופסגת זאב | טיפול בבית הלקוח
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0522635895"
              className="rounded-full bg-red-800 px-7 py-3 text-base font-semibold text-white shadow-lg hover:bg-red-900 transition-colors"
            >
              התקשרו עכשיו — 052-263-5895
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1ebe5d] transition-colors"
            >
              שלחו הודעה WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-white py-20 sm:py-28" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-base font-semibold text-red-800">למה לבחור בג&apos;ו?</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              היתרונות שלנו
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center text-center bg-red-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-5xl mb-4">{b.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TREATMENTS ===== */}
      <section className="bg-gray-50 py-20 sm:py-28" id="treatments" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-base font-semibold text-red-800">מה אנו מציעים</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              סוגי הטיפולים
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <div
                key={t.title}
                className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-800 px-6 py-5 text-center">
                  <h3 className="text-xl font-bold text-white">{t.title}</h3>
                  <p className="text-red-200 text-sm mt-1">{t.duration}</p>
                </div>
                <div className="flex flex-col flex-1 px-6 py-6">
                  <p className="text-gray-600 leading-relaxed flex-1">{t.desc}</p>
                  <a
                    href="tel:0522635895"
                    className="mt-6 block text-center rounded-full bg-red-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-900 transition-colors"
                  >
                    לפרטים ומחיר
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-white py-24 sm:py-32" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-red-800">אודות</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ג&apos;ו מטפל אלטרנטיבי ומעסה שוודי הוליסטי בירושלים</h2>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  ג&apos;ו - מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון בתחום. עיסוי שוודי הוליסטי בירושלים על מנת לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של טיפול בעיסוי שוודי הוליסטי.
                </p>
                <p className="mt-8">
                  בקליניקה בירושלים, אנו מאמינים בגישה הוליסטית לבריאות. אנו מבינים שהנפש, הגוף והרוח קשורים זה בזה, ואנו שואפים ליצור מרחב מטפח שבו הלקוחות שלנו יכולים להשיג איזון והרמוניה. המטפל המנוסה משתמש במגוון טכניקות, כולל עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, כדי לטפל באזורים ספציפיים של כאבים, מתח, סטרס, ואי נוחות.
                </p>
                <p className="mt-8">
                  במהלך הטיפולים, יש שילוב של שימוש בשמנים כדי לעזור להירגע ולשחרר שרירים תפוסים. סגנון עיסוי זה יעיל בטיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם, מניעת התכווצויות שרירים והשראת תחושה כללית של רגיעה ורוגע בגוף.
                </p>
                <p className="mt-8">
                  הטיפול הינו בהתאם לצורכי המטופל וניתן להתמקד באזור ספציפי בו המטופל חש כאב או אי נוחות או טיפול מרגיע.
                </p>
              </div>
              <div>
                <p>
                  אני מקדיש זמן להבין את הצרכים והחששות הייחודיים של כל לקוח. בין אם אתם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה או פשוט מחפשים להירגע ולהוריד מתח, אני כאן כדי לתמוך בכם במסע שלכם לבריאות.
                </p>
                <p className="mt-8">
                  בקליניקה בירושלים, אני מחויב לספק סביבה שלווה ומסבירת פנים בה הלקוחות יכולים להירגע וליהנות מהטיפול שלהם. אנו מקפידים על טיפול בכל פרט, מהמוזיקה המרגיעה ועד למיטת עיסוי נוחה. אני מאמין שחווית קבלת העיסוי צריכה להיות מרעננת כמו העיסוי עצמו.
                </p>
                <p className="mt-8">
                  אני מצפה לארח אותך בקליניקה שלנו ולעזור לך להשיג בריאות ורווחה מיטביים. קיימת גם אופציה לטיפול בבית הלקוח. אנא אל תהסס/י לפנות אם יש לך שאלות כלשהן או ברצונך לקבוע פגישה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="bg-red-50" id="contact" dir="rtl">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לשמוע מידע נוסף?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:mt-0 lg:flex-shrink-0">
            <a
              href="tel:0522635895"
              className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              📞 התקשרו עכשיו — 052-263-5895
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe5d] transition-colors"
            >
              💬 שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">שאלות נפוצות</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-red-900 text-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2 text-sm">
            <Link href="/accessibility">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development">פיתוח אתרים</a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center leading-5 text-gray-200">
              &copy; ג&apos;ו עיסוי שוודי הוליסטי בירושלים
            </p>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      {showWA && (
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className="whatsapp-float fixed bottom-6 left-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-xl"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="34"
            height="34"
            fill="white"
            aria-hidden="true"
          >
            <path d="M16.004 2.667C8.64 2.667 2.667 8.639 2.667 16c0 2.353.637 4.653 1.846 6.667L2.667 29.333l6.854-1.795A13.27 13.27 0 0016.004 29.333C23.365 29.333 29.333 23.361 29.333 16S23.365 2.667 16.004 2.667zm0 24.267a11.2 11.2 0 01-5.716-1.563l-.41-.243-4.067 1.066 1.083-3.952-.267-.406A11.2 11.2 0 014.8 16c0-6.18 5.027-11.2 11.204-11.2S27.2 9.82 27.2 16s-5.019 11.2-11.196 11.2v-.067zm6.135-8.395c-.334-.167-1.98-.977-2.287-1.088-.306-.112-.529-.167-.751.167-.223.334-.862 1.088-1.057 1.311-.195.222-.39.25-.724.083-.334-.167-1.408-.519-2.68-1.653-.99-.884-1.66-1.975-1.854-2.309-.195-.333-.021-.513.146-.678.15-.149.334-.39.5-.584.168-.195.223-.334.334-.557.112-.222.056-.418-.028-.584-.083-.167-.751-1.812-1.03-2.48-.271-.651-.545-.562-.751-.573l-.64-.011c-.222 0-.584.083-.89.418-.306.334-1.169 1.143-1.169 2.787 0 1.645 1.197 3.234 1.363 3.457.167.222 2.352 3.59 5.7 5.033.796.344 1.417.549 1.9.703.799.254 1.527.219 2.102.133.641-.095 1.98-.809 2.259-1.59.279-.779.279-1.447.195-1.59-.083-.14-.306-.223-.64-.39z" />
          </svg>
        </a>
      )}
    </>
  )
}
