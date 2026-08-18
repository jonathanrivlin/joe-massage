import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

const faqs = [
  {
    question: 'מה היא שיטת הטיפול?',
    answer: 'עיסוי שוודי הינו שיטת טיפול אלטרנטיבית המבוססת על חיכוך ולחיצה על מגוון נקודות שונות ע"י מטפל. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה — כתוצאה נוצרת חוויה מהנה ומרגיעה. העיסוי מתבצע על שרירים ורקמות באמצעות טכניקות מגע ייחודיות לריכוך הגוף ושחרור שרירים תפוסים.',
  },
  {
    question: 'האם הטיפול אפקטיבי?',
    answer: 'בהחלט. העיסוי כולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים ושיפור חילוף החומרים — ומשרה תחושת רגיעה כללית ושלווה.',
  },
  {
    question: 'האם אפשר טיפול בבית?',
    answer: "כן — ג'ו מגיע אליכם הביתה. נוחות מלאה ללא צורך לנסוע לאחר הטיפול. הטיפול מותאם לכל גיל ולצרכים האישיים של כל מטופל.",
  },
  {
    question: 'כמה זמן נמשך הטיפול?',
    answer: 'הטיפול מותאם אישית — החל מ-45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, ועד 90 דקות לחוויה מועשרת עם שמנים ארומתרפיים.',
  },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-right flex items-start justify-between gap-4 lg:block"
          aria-expanded={open}
        >
          <span>{question}</span>
          <span className="flex-shrink-0 lg:hidden text-red-800 text-xl" style={{ transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>+</span>
        </button>
      </dt>
      <dd className="mt-4 lg:col-span-7 lg:mt-0">
        <p className={`text-base leading-7 text-gray-600 ${!open ? 'hidden lg:block' : ''}`}>{answer}</p>
      </dd>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>ג&apos;ו | עיסוי שוודי הוליסטי בירושלים — 25+ שנות ניסיון</title>
        <meta name="description" content="מטפל מנוסה בעל וותק של למעלה מ-25 שנה, מומחה בסגנון השוודי הוליסטי הכולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם. ירושלים ופסגת זאב." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ג'ו עיסוי שוודי הוליסטי בירושלים" />
        <meta property="og:description" content="25+ שנות ניסיון. ירושלים ופסגת זאב. טיפול בבית הלקוח. 052-263-5895" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* ── HERO ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">

              {/* badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5">
                <span className="text-yellow-500 text-xs">★★★★★</span>
                <span className="text-red-800 text-xs font-semibold">25+ שנות ניסיון · ירושלים</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                עיסוי שוודי הוליסטי<br />בירושלים
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                מטפל מנוסה עם למעלה מ-25 שנות ניסיון. שחרור שרירים תפוסים, הפחתת כאב, שיפור זרימת הדם — גם בבית שלכם.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="tel:0522635895"
                  className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
                >
                  📞 התקשרו — 052-263-5895
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>

              {/* trust row */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>🏠 טיפול בבית הלקוח</span>
                <span>📍 ירושלים ופסגת זאב</span>
                <span>✓ זמין כל ימות השבוע</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:-ml-8 xl:absolute xl:inset-0 xl:right-1/2 xl:ml-0">
            <Image
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={HeroPic}
              alt="עיסוי שוודי הוליסטי בירושלים"
              width={1000}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-white py-24 sm:py-32" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-red-800">אודות</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ג&apos;ו — מעסה שוודי הוליסטי בירושלים
            </h2>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון בתחום. המטרה: לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של עיסוי שוודי הוליסטי.</p>
                <p className="mt-8">אנו מאמינים בגישה הוליסטית לבריאות — הנפש, הגוף והרוח קשורים זה בזה. המטפל המנוסה משתמש במגוון טכניקות, כולל עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, לטיפול באזורים ספציפיים של כאבים, מתח ואי נוחות.</p>
                <p className="mt-8">במהלך הטיפולים נעשה שימוש בשמנים לריכוך ושחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם — והשראת תחושה כללית של רגיעה ושלווה.</p>
              </div>
              <div>
                <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח. בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או פשוט מחפשים להירגע ולהוריד מתח.</p>
                <p className="mt-8">אני מחויב לסביבה שלווה ומסבירת פנים — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי בכל פרט. חווית קבלת העיסוי צריכה להיות מרעננת כמו העיסוי עצמו.</p>
                <p className="mt-8">אני מצפה לארח אתכם ולעזור לכם להשיג בריאות ורווחה מיטביים. <strong>קיימת גם אפשרות לטיפול בבית הלקוח</strong> — אנא אל תהססו לפנות אם יש שאלות או ברצונכם לקבוע פגישה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-red-50" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לקבוע תור?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:mt-0 lg:flex-shrink-0">
            <a
              href="tel:0522635895"
              className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              📞 התקשרו — 052-263-5895
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ background: '#25D366' }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">שאלות נפוצות</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-red-900 text-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2 text-sm">
            <Link href="/accessibility" className="hover:text-red-200 transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-red-200 transition-colors">פיתוח אתרים</a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-red-200">
              &copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי בירושלים
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
