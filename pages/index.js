import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"
const SITE_URL = "https://www.joe-massage.com"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      "name": "ג'ו עיסוי שוודי הוליסטי",
      "alternateName": ["עיסוי שוודי ירושלים", "עיסוי שוודי פסגת זאב", "מעסה שוודי ירושלים", "מעסה פסגת זאב"],
      "description": "מעסה שוודי הוליסטי מקצועי בירושלים (פסגת זאב) עם 25+ שנות ניסיון. עיסוי שוודי, עיסוי הוליסטי, שחרור שרירים, שמנים ארומתרפיים. טיפול בבית הלקוח.",
      "url": SITE_URL,
      "telephone": "+972522635895",
      "priceRange": "₪₪",
      "image": `${SITE_URL}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "ירושלים",
        "addressRegion": "ירושלים",
        "addressCountry": "IL",
        "description": "פסגת זאב, ירושלים"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.8285,
        "longitude": 35.2369
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "21:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "ירושלים" },
        { "@type": "Neighborhood", "name": "פסגת זאב" },
        { "@type": "Neighborhood", "name": "גבעת שאול" },
        { "@type": "Neighborhood", "name": "בית הכרם" },
        { "@type": "Neighborhood", "name": "רמות" },
        { "@type": "Neighborhood", "name": "נווה יעקב" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "שירותי עיסוי",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי שוודי קלאסי", "description": "עיסוי שוודי מסורתי לשחרור שרירים ורגיעה" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי הוליסטי", "description": "עיסוי הוליסטי עם שמנים ארומתרפיים" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי רקמות עמוק", "description": "טיפול בכאבים כרוניים ושרירים תפוסים" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי בבית הלקוח", "description": "ג'ו מגיע אליכם הביתה — ירושלים ופסגת זאב" } }
        ]
      },
      "sameAs": [`https://wa.me/9720522635895`],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "47",
        "bestRating": "5"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "ג'ו עיסוי שוודי הוליסטי בירושלים ופסגת זאב",
      "inLanguage": "he",
      "publisher": { "@id": `${SITE_URL}/#business` }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "מה היא שיטת עיסוי שוודי?", "acceptedAnswer": { "@type": "Answer", "text": "עיסוי שוודי הינו שיטת טיפול המבוססת על חיכוך ולחיצה על שרירים ורקמות. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה — כתוצאה נוצרת חוויה מהנה ומרגיעה." } },
        { "@type": "Question", "name": "האם עיסוי שוודי אפקטיבי?", "acceptedAnswer": { "@type": "Answer", "text": "בהחלט. עיסוי שוודי יעיל לשחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, ומשרה תחושת רגיעה כללית ושלווה." } },
        { "@type": "Question", "name": "האם ג'ו מגיע לטיפול בבית?", "acceptedAnswer": { "@type": "Answer", "text": "כן — ג'ו מגיע אליכם הביתה בירושלים ופסגת זאב. נוחות מלאה ללא צורך לנסוע לאחר הטיפול." } },
        { "@type": "Question", "name": "כמה זמן נמשך עיסוי שוודי?", "acceptedAnswer": { "@type": "Answer", "text": "הטיפול מותאם אישית — 45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, ו-90 דקות לחוויה מועשרת עם שמנים ארומתרפיים." } }
      ]
    }
  ]
}

const faqs = [
  { question: 'מה היא שיטת הטיפול?', answer: 'עיסוי שוודי הינו שיטת טיפול אלטרנטיבית המבוססת על חיכוך ולחיצה על מגוון נקודות שונות ע"י מטפל. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה — כתוצאה נוצרת חוויה מהנה ומרגיעה. העיסוי מתבצע על שרירים ורקמות באמצעות טכניקות מגע ייחודיות לריכוך הגוף ושחרור שרירים תפוסים.' },
  { question: 'האם הטיפול אפקטיבי?', answer: 'בהחלט. העיסוי כולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים ושיפור חילוף החומרים — ומשרה תחושת רגיעה כללית ושלווה.' },
  { question: 'האם אפשר טיפול בבית?', answer: "כן — ג'ו מגיע אליכם הביתה בירושלים ופסגת זאב. נוחות מלאה ללא צורך לנסוע לאחר הטיפול. הטיפול מותאם לכל גיל ולצרכים האישיים של כל מטופל." },
  { question: 'כמה זמן נמשך הטיפול?', answer: 'הטיפול מותאם אישית — החל מ-45 דקות לעיסוי ממוקד, 60 דקות לעיסוי מלא, ועד 90 דקות לחוויה מועשרת עם שמנים ארומתרפיים.' },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
        {/* Mobile: clickable with + toggle. Desktop: plain text */}
        <button onClick={() => setOpen(o => !o)}
          className="w-full text-right flex items-start justify-between gap-4 lg:cursor-default"
          aria-expanded={open}>
          <span>{question}</span>
          <span className="flex-shrink-0 lg:hidden text-red-800 text-xl"
            style={{ transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }} aria-hidden="true">+</span>
        </button>
      </dt>
      <dd className="mt-4 lg:col-span-7 lg:mt-0">
        <p className={`text-base leading-7 text-gray-600 ${!open ? 'hidden lg:block' : ''}`}>{answer}</p>
      </dd>
    </div>
  )
}

export default function Home() {
  const [showWA, setShowWA] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShowWA(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Head>
        <title>עיסוי שוודי בירושלים ופסגת זאב | ג&apos;ו — 25+ שנות ניסיון | 052-263-5895</title>
        <meta name="description" content="עיסוי שוודי הוליסטי בירושלים — ג'ו, מעסה מקצועי עם 25+ שנות ניסיון באזור פסגת זאב. שחרור שרירים תפוסים, הפחתת כאבים, שמנים ארומתרפיים. טיפול בבית הלקוח. 052-263-5895" />
        <meta name="keywords" content="עיסוי שוודי ירושלים, עיסוי שוודי פסגת זאב, מעסה ירושלים, מעסה פסגת זאב, עיסוי הוליסטי ירושלים, עיסוי בבית ירושלים, שחרור שרירים ירושלים, עיסוי רקמות עמוק ירושלים, מעסה שוודי פסגת זאב" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IL-JM" />
        <meta name="geo.placename" content="ירושלים" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="עיסוי שוודי בירושלים ופסגת זאב | ג'ו — 25+ שנות ניסיון" />
        <meta property="og:description" content="עיסוי שוודי הוליסטי בפסגת זאב וירושלים. שחרור שרירים, הפחתת כאב, שמנים ארומתרפיים. טיפול בבית הלקוח. 052-263-5895" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:site_name" content="ג'ו עיסוי שוודי הוליסטי" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="עיסוי שוודי בירושלים ופסגת זאב | ג'ו" />
        <meta name="twitter:description" content="עיסוי שוודי הוליסטי בפסגת זאב וירושלים. 25+ שנות ניסיון. 052-263-5895" />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />

      {/* ── HERO ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5">
                <span className="text-yellow-500 text-xs">★★★★★</span>
                <span className="text-red-800 text-xs font-semibold">25+ שנות ניסיון · ירושלים ופסגת זאב</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                עיסוי שוודי הוליסטי<br />בירושלים
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                מטפל מנוסה עם למעלה מ-25 שנות ניסיון בעיסוי שוודי הוליסטי בירושלים. שחרור שרירים תפוסים, הפחתת כאבים, שמנים ארומתרפיים — גם בבית שלכם באזור פסגת זאב.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a href="tel:0522635895"
                  className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900">
                  📞 התקשרו — 052-263-5895
                </a>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                  💬 WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>🏠 טיפול בבית הלקוח</span>
                <span>📍 פסגת זאב · ירושלים</span>
                <span>✓ זמין כל ימות השבוע</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:-ml-8 xl:absolute xl:inset-0 xl:right-1/2 xl:ml-0">
            <Image
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={HeroPic}
              alt="עיסוי שוודי הוליסטי בפסגת זאב וירושלים"
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
                <p>ג&apos;ו — מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון בתחום. פועל מאזור פסגת זאב ומגיע לכל רחבי ירושלים — רמות, גבעת שאול, בית הכרם, נווה יעקב ועוד.</p>
                <p className="mt-8">המטפל המנוסה משתמש במגוון טכניקות עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, לטיפול באזורים ספציפיים של כאבים, מתח ואי נוחות. הטיפול מותאם אישית לצרכי כל מטופל.</p>
                <p className="mt-8">במהלך הטיפולים נעשה שימוש בשמנים ארומתרפיים לריכוך ושחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם — והשראת רגיעה עמוקה.</p>
              </div>
              <div>
                <p>אני מקדיש זמן להבין את הצרכים הייחודיים של כל לקוח בירושלים. בין אם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה, או מחפשים להירגע ולהוריד מתח.</p>
                <p className="mt-8">אני מחויב לסביבה שלווה ומסבירת פנים — מוזיקה מרגיעה, מיטת עיסוי נוחה, וטיפול אישי. חווית העיסוי השוודי בירושלים תהיה מרעננת כמו הטיפול עצמו.</p>
                <p className="mt-8"><strong>קיימת אפשרות לעיסוי שוודי בבית הלקוח</strong> — מגיעים אליכם בפסגת זאב, רמות, גבעת שאול, בית הכרם, נווה יעקב וכל שכונות ירושלים.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-red-50" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לקבוע עיסוי שוודי<br className="hidden sm:block" /> בירושלים?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:mt-0 lg:flex-shrink-0">
            <a href="tel:0522635895"
              className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">
              📞 התקשרו — 052-263-5895
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ background: '#25D366' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white" id="faq">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">שאלות נפוצות על עיסוי שוודי בירושלים</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </section>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-lg">
        <a href="tel:0522635895"
          className="flex-1 text-center rounded-md bg-red-800 py-3 text-sm font-semibold text-white hover:bg-red-900 transition-colors">
          📞 התקשרו
        </a>
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          className="flex-1 text-center rounded-md py-3 text-sm font-semibold text-white transition-colors"
          style={{ background: '#25D366' }}>
          💬 WhatsApp
        </a>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-red-900 text-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2 text-sm">
            <Link href="/accessibility" className="hover:text-red-200 transition-colors">הצהרת נגישות</Link>
            <a href="https://rivlin.dev/web-development" className="hover:text-red-200 transition-colors">פיתוח אתרים</a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-red-200">
              &copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי — ירושלים (פסגת זאב)
            </p>
          </div>
        </div>
      </footer>

      {/* ── WA FLOAT (desktop) ── */}
      {showWA && (
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className="hidden lg:flex fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-xl items-center justify-center hover:scale-110 transition-transform"
          style={{ background: '#25D366' }}>
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}
