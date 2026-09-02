import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faLocationDot, faCalendarCheck, faClock,
  faHandsHolding, faTint, faLeaf, faHouse, faTrophy,
  faHeart, faCheck, faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
      "geo": { "@type": "GeoCoordinates", "latitude": 31.8285, "longitude": 35.2369 },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "21:00" }],
      "areaServed": [
        { "@type": "City", "name": "ירושלים" },
        { "@type": "Neighborhood", "name": "פסגת זאב" },
        { "@type": "Neighborhood", "name": "רמות" },
        { "@type": "Neighborhood", "name": "גבעת שאול" },
        { "@type": "Neighborhood", "name": "בית הכרם" },
        { "@type": "Neighborhood", "name": "נווה יעקב" },
        { "@type": "Neighborhood", "name": "גבעה הצרפתית" },
        { "@type": "Neighborhood", "name": "הר נוף" },
        { "@type": "Neighborhood", "name": "קרית משה" },
        { "@type": "Neighborhood", "name": "רחביה" },
        { "@type": "Neighborhood", "name": "גילה" },
        { "@type": "Neighborhood", "name": "מלחה" },
        { "@type": "Neighborhood", "name": "בקעה" },
        { "@type": "Neighborhood", "name": "תלפיות" },
        { "@type": "Neighborhood", "name": "עיר גנים" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "שירותי עיסוי",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי שוודי קלאסי" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי הוליסטי" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי רקמות עמוק" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עיסוי בבית הלקוח" } }
        ]
      },
      "sameAs": [`https://wa.me/9720522635895`],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47", "bestRating": "5" }
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
        { "@type": "Question", "name": "מה היא שיטת עיסוי שוודי?", "acceptedAnswer": { "@type": "Answer", "text": "עיסוי שוודי הינו שיטת טיפול המבוססת על חיכוך ולחיצה על שרירים ורקמות. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה." } },
        { "@type": "Question", "name": "האם עיסוי שוודי אפקטיבי?", "acceptedAnswer": { "@type": "Answer", "text": "בהחלט. עיסוי שוודי יעיל לשחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות, שיפור זרימת הדם ורגיעה עמוקה." } },
        { "@type": "Question", "name": "האם ג'ו מגיע לטיפול בבית?", "acceptedAnswer": { "@type": "Answer", "text": "כן — ג'ו מגיע אליכם הביתה בירושלים ופסגת זאב. נוחות מלאה ללא צורך לנסוע לאחר הטיפול." } },
        { "@type": "Question", "name": "מה ההבדל בין עיסוי שוודי לעיסוי רקמות עמוק?", "acceptedAnswer": { "@type": "Answer", "text": "עיסוי שוודי עובד בלחץ בינוני-עדין ומתמקד ברגיעה כללית ושיפור זרימת הדם. עיסוי רקמות עמוק משתמש בלחץ גבוה יותר ומתאים לכאבים כרוניים. ג'ו משלב את שתי הגישות בהתאם לצורך." } },
        { "@type": "Question", "name": "האם העיסוי מתאים לאנשים עם כאבי גב?", "acceptedAnswer": { "@type": "Answer", "text": "כן — עיסוי שוודי הוא אחד הטיפולים היעילים ביותר לכאבי גב, כאבי צוואר וכאבי כתפיים. הטיפול משחרר שרירים תפוסים ומפחית דלקות." } },
        { "@type": "Question", "name": "כמה זמן לפני הטיפול צריך לתאם?", "acceptedAnswer": { "@type": "Answer", "text": "מומלץ לתאם יום-יומיים מראש. ג'ו מנסה להתאים גם לפניות ספונטניות — מוזמנים לפנות ולבדוק זמינות." } },
        { "@type": "Question", "name": "מה כדאי לדעת לפני הטיפול הראשון?", "acceptedAnswer": { "@type": "Answer", "text": "מומלץ להגיע רעבים למחצה, ללבוש בגדים נוחים, ולהודיע מראש על בעיות בריאות, פציעות או אזורים רגישים. המטפל יסתגל לפי הצרכים שלכם." } }
      ]
    }
  ]
}

const benefits = [
  { icon: faHandsHolding, title: 'שחרור שרירים', desc: 'טכניקות מדויקות לשחרור שרירים תפוסים בגב, צוואר וכתפיים.' },
  { icon: faLeaf,         title: 'שמנים ארומתרפיים', desc: 'שמנים טבעיים איכותיים לרוגע, ריח נעים ותוצאות טיפוליות.' },
  { icon: faHouse,        title: 'טיפול בבית הלקוח', desc: 'מגיעים אליכם — אין צורך לנסוע לאחר הטיפול.' },
  { icon: faHeart,        title: 'שיפור זרימת הדם', desc: 'עיסוי שוודי מגביר את מחזור הדם ומחדש את אנרגיית הגוף.' },
  { icon: faClock,        title: 'שעות גמישות', desc: 'זמינות כל ימות השבוע כולל ערבים (חוץ משבת).' },
  { icon: faTrophy,       title: '25+ שנות ניסיון', desc: 'מעל רבע מאה ניסיון מקצועי בעיסוי שוודי בירושלים.' },
]

const faqs = [
  { question: 'מה היא שיטת הטיפול?', answer: 'עיסוי שוודי הינו שיטת טיפול אלטרנטיבית המבוססת על חיכוך ולחיצה על מגוון נקודות שונות ע"י מטפל. אנו שמים דגש על אינטראקציה בין המטפל למטופל על מנת ליצור אווירה ותקשורת טובה — כתוצאה נוצרת חוויה מהנה ומרגיעה. העיסוי מתבצע על שרירים ורקמות באמצעות טכניקות מגע ייחודיות לריכוך הגוף ושחרור שרירים תפוסים.' },
  { question: 'האם הטיפול אפקטיבי?', answer: 'בהחלט. העיסוי כולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים ושיפור חילוף החומרים — ומשרה תחושת רגיעה כללית ושלווה.' },
  { question: 'האם אפשר טיפול בבית?', answer: "כן — ג'ו מגיע אליכם הביתה בירושלים ופסגת זאב. נוחות מלאה ללא צורך לנסוע לאחר הטיפול. הטיפול מותאם לכל גיל ולצרכים האישיים של כל מטופל." },
  { question: 'מה ההבדל בין עיסוי שוודי לעיסוי רקמות עמוק?', answer: 'עיסוי שוודי עובד בלחץ בינוני-עדין ומתמקד ברגיעה כללית, שיפור זרימת הדם ושחרור מתח שרירי. עיסוי רקמות עמוק משתמש בלחץ גבוה יותר ומתמקד בשכבות עמוקות יותר של השריר — מתאים לכאבים כרוניים ולצרכים ספציפיים. ג\'ו משלב את שתי הגישות בהתאם לצורך של כל מטופל.' },
  { question: 'האם העיסוי מתאים לאנשים עם כאבי גב?', answer: 'כן — עיסוי שוודי הוא אחד הטיפולים היעילים ביותר לכאבי גב, כאבי צוואר וכאבי כתפיים. הטיפול משחרר שרירים תפוסים, מפחית דלקות ומשפר את טווח התנועה. חשוב לציין בפני המטפל היכן הכאב ומה עוצמתו לפני הטיפול.' },
  { question: 'כמה זמן לפני הטיפול צריך לתאם?', answer: 'מומלץ לתאם יום-יומיים מראש כדי להבטיח זמינות במועד המבוקש. עם זאת, ג\'ו מנסה להתאים גם לפניות ספונטניות — מוזמנים לפנות ולבדוק זמינות.' },
  { question: 'מה כדאי לדעת לפני הטיפול הראשון?', answer: 'מומלץ להגיע רעבים למחצה (לא לאכול ארוחה כבדה שעה לפני), ללבוש בגדים נוחים, ולהודיע מראש על בעיות בריאות, פציעות או אזורים רגישים. המטפל יסתגל לפי הצרכים שלכם.' },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${question.replace(/\s+/g, '-').replace(/[?"]/g, '').slice(0, 20)}`
  return (
    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
        <button onClick={() => setOpen(o => !o)}
          className="w-full text-right flex items-start justify-between gap-4 lg:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 rounded"
          aria-expanded={open}
          aria-controls={id}>
          <span>{question}</span>
          <span className="flex-shrink-0 lg:hidden text-red-800 text-xl"
            style={{ transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }} aria-hidden="true">+</span>
        </button>
      </dt>
      <dd id={id} className="mt-4 lg:col-span-7 lg:mt-0">
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="עיסוי שוודי בירושלים ופסגת זאב | ג'ו — 25+ שנות ניסיון" />
        <meta property="og:description" content="עיסוי שוודי הוליסטי בירושלים. שחרור שרירים, הפחתת כאב, שמנים ארומתרפיים. טיפול בבית הלקוח. 052-263-5895" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:site_name" content="ג'ו עיסוי שוודי הוליסטי" />
        <meta property="og:image" content={`${SITE_URL}/massage-hero.jpg`} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="עיסוי שוודי הוליסטי בירושלים ופסגת זאב" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/massage-hero.jpg`} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* ── SKIP NAV ── */}
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:rounded-md focus:bg-red-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg">
        דלג לתוכן הראשי
      </a>

      <Header />

      {/* ── HERO ── */}
      <main id="main-content">
      <section className="relative bg-white" aria-label="ראשי">
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
                  className="inline-flex items-center gap-2 rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  התקשרו — 052-263-5895
                </a>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-green-600" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faHouse} className="w-3.5 h-3.5 text-red-700" />
                  טיפול בבית הלקוח
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-red-700" />
                  פסגת זאב · ירושלים
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-red-700" />
                  זמין כל ימות השבוע (חוץ משבת)
                </span>
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

      {/* ── BENEFITS ── */}
      <section className="bg-gray-50 py-16 sm:py-24" aria-label="יתרונות">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center lg:mx-auto mb-12">
            <p className="text-base font-semibold leading-7 text-red-800">למה לבחור בג&apos;ו?</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">היתרונות שלנו</h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {benefits.map(b => (
              <div key={b.title} className="relative flex gap-x-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:ring-red-200 hover:shadow-md transition-all">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-800">
                  <FontAwesomeIcon icon={b.icon} className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{b.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-white py-24 sm:py-32" id="about" aria-label="אודות">
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

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-16 sm:py-24" aria-label="איך זה עובד">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-base font-semibold leading-7 text-red-800">תהליך פשוט</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">איך זה עובד?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { num: '01', title: 'יוצרים קשר', desc: 'מתקשרים או שולחים הודעת WhatsApp — ג\'ו עונה במהירות ומתאם זמן נוח.' },
              { num: '02', title: 'קובעים מועד', desc: 'בוחרים יום ושעה שמתאימים לכם. ג\'ו מגיע אליכם הביתה עם כל הציוד הדרוש.' },
              { num: '03', title: 'נהנים מהטיפול', desc: 'עיסוי שוודי מקצועי בנוחות הבית שלכם — בלי נסיעות, בלי המתנה, בלי לחץ.' },
            ].map((step) => (
              <div key={step.num} className="relative flex gap-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-800 flex items-center justify-center text-white text-sm font-bold">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-gray-900 text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-7 text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="tel:0522635895"
              className="inline-flex items-center gap-2 rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              התקשרו עכשיו
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-green-600" />
              שלחו הודעה
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-gray-50 py-16 sm:py-24" id="areas" aria-label="אזורי שירות">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-base font-semibold leading-7 text-red-800">אזורי שירות</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              עיסוי שוודי בבית — מגיעים אליכם בירושלים
            </h2>
            <p className="mt-4 text-base text-gray-600 max-w-2xl">
              ג&apos;ו מגיע אליכם הביתה לעיסוי שוודי — ללא צורך לנסוע. משרת את כל שכונות ירושלים ואזוריה.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: 'פסגת זאב', slug: 'פסגת-זאב' },
              { name: 'רמות', slug: 'רמות' },
              { name: 'גבעת שאול', slug: 'גבעת-שאול' },
              { name: 'בית הכרם', slug: 'בית-הכרם' },
              { name: 'נווה יעקב', slug: 'נווה-יעקב' },
              { name: 'גבעה הצרפתית', slug: 'גבעה-הצרפתית' },
              { name: 'הר נוף', slug: 'הר-נוף' },
              { name: 'קרית משה', slug: 'קרית-משה' },
              { name: 'ארנונה', slug: 'ארנונה' },
              { name: 'מלחה', slug: 'מלחה' },
              { name: 'בקעה', slug: 'בקעה' },
              { name: 'קטמון', slug: 'קטמון' },
              { name: 'רחביה', slug: 'רחביה' },
              { name: 'גילה', slug: 'גילה' },
              { name: 'עיר גנים', slug: 'עיר-גנים' },
              { name: 'תלפיות', slug: 'תלפיות' },
              { name: 'מושבה הגרמנית', slug: 'מושבה-הגרמנית' },
              { name: 'טלביה', slug: 'טלביה' },
              { name: 'קרית יובל', slug: 'קרית-יובל' },
              { name: 'ביר"מ', slug: 'בירמ' },
              { name: 'מנחה', slug: 'מנחה' },
              { name: 'בית וגן', slug: 'בית-וגן' },
              { name: 'רמת שרת', slug: 'רמת-שרת' },
              { name: 'מרכז העיר', slug: 'מרכז-העיר' },
            ].map((area) => (
              area.slug ? (
                <Link key={area.name} href={`/עיסוי-שוודי/${area.slug}`}
                  className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-red-800 ring-1 ring-red-200 hover:ring-red-400 hover:bg-red-50 transition-all">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-red-700 flex-shrink-0" />
                  {area.name}
                </Link>
              ) : (
                <div key={area.name}
                  className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:ring-red-200 hover:text-red-800 transition-all">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-red-700 flex-shrink-0" />
                  {area.name}
                </div>
              )
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500 text-center">
            לא רואים את השכונה שלכם?{' '}
            <a href="tel:0522635895" className="text-red-800 font-semibold hover:underline">
              התקשרו — נסדר
            </a>
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-red-50" id="contact" aria-label="צרו קשר">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לקבוע עיסוי שוודי<br className="hidden sm:block" /> בירושלים?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:mt-0 lg:flex-shrink-0">
            <a href="tel:0522635895"
              className="inline-flex items-center gap-2 rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              052-263-5895
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ background: '#25D366' }}>
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 sm:py-24" aria-label="מה אומרים הלקוחות">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-base font-semibold leading-7 text-red-800">לקוחות מרוצים</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">מה אומרים עלינו</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { text: 'קיבלתי עיסוי שוודי בבית — ג\'ו הגיע בזמן עם כל הציוד, הטיפול היה מקצועי ברמה גבוהה. שחרר לי כאבי גב שסבלתי מהם חודשים. ממליצה בחום לכל תושבי פסגת זאב.', name: 'ר.כ', area: 'פסגת זאב' },
              { text: 'חיפשתי מעסה שוודי בירושלים שמגיע הביתה — ג\'ו הגיע לרמות. עיסוי מקצועי, ידיים טובות, ותחושת רגיעה שלא הרגשתי שנים. כבר קבעתי טיפול נוסף.', name: 'מ.ל', area: 'רמות' },
              { text: '25 שנות ניסיון מורגשות. העיסוי השוודי ב-גבעת שאול היה מדויק — הבין בדיוק איפה הכאב ושחרר אותו. שירות אדיב, מקצועי ומגיעים אליכם.', name: 'ד.ש', area: 'גבעת שאול' },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="flex gap-1 mb-4" aria-label="דירוג 5 כוכבים">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-sm leading-7 text-gray-700 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="text-sm font-semibold text-gray-900">{t.name} · <span className="text-gray-500 font-normal">{t.area}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white" id="faq" aria-label="שאלות נפוצות">
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
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-lg" role="navigation" aria-label="פעולות מהירות">
        <a href="tel:0522635895"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-red-800 py-3 text-sm font-semibold text-white hover:bg-red-900 transition-colors">
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
          התקשרו
        </a>
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold text-white transition-colors"
          style={{ background: '#25D366' }}>
          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-red-900 text-white pb-20 lg:pb-0" role="contentinfo">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-10">

          {/* ── Top: 4 columns ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-red-800">

            {/* Col 1: Brand */}
            <div>
              <h3 className="text-base font-bold text-white mb-3">ג&apos;ו עיסוי שוודי הוליסטי</h3>
              <p className="text-sm text-red-300 leading-6 mb-4">מעסה מקצועי בירושלים עם 25+ שנות ניסיון. מגיע אליכם הביתה בכל שכונות ירושלים.</p>
              <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">★★★★★</div>
              <p className="text-xs text-red-400">47+ לקוחות מרוצים</p>
            </div>

            {/* Col 2: Areas 1 */}
            <div>
              <h3 className="text-sm font-semibold text-red-200 mb-3">אזורי שירות — צפון וצפון מערב</h3>
              <ul className="text-sm text-red-300 space-y-1.5">
                <li><Link href="/עיסוי-שוודי/פסגת-זאב" className="hover:text-white transition-colors">עיסוי שוודי פסגת זאב</Link></li>
                <li><Link href="/עיסוי-שוודי/רמות" className="hover:text-white transition-colors">עיסוי שוודי רמות</Link></li>
                <li><Link href="/עיסוי-שוודי/נווה-יעקב" className="hover:text-white transition-colors">עיסוי שוודי נווה יעקב</Link></li>
                <li><Link href="/עיסוי-שוודי/גבעה-הצרפתית" className="hover:text-white transition-colors">עיסוי שוודי גבעה הצרפתית</Link></li>
                <li><Link href="/עיסוי-שוודי/גבעת-שאול" className="hover:text-white transition-colors">עיסוי שוודי גבעת שאול</Link></li>
                <li><Link href="/עיסוי-שוודי/בית-הכרם" className="hover:text-white transition-colors">עיסוי שוודי בית הכרם</Link></li>
                <li><Link href="/עיסוי-שוודי/הר-נוף" className="hover:text-white transition-colors">עיסוי שוודי הר נוף</Link></li>
                <li><Link href="/עיסוי-שוודי/קרית-משה" className="hover:text-white transition-colors">עיסוי שוודי קרית משה</Link></li>
              </ul>
            </div>

            {/* Col 3: Areas 2 */}
            <div>
              <h3 className="text-sm font-semibold text-red-200 mb-3">אזורי שירות — מרכז ודרום</h3>
              <ul className="text-sm text-red-300 space-y-1.5">
                <li><Link href="/עיסוי-שוודי/מרכז-העיר" className="hover:text-white transition-colors">עיסוי שוודי מרכז ירושלים</Link></li>
                <li><Link href="/עיסוי-שוודי/רחביה" className="hover:text-white transition-colors">עיסוי שוודי רחביה</Link></li>
                <li><Link href="/עיסוי-שוודי/קטמון" className="hover:text-white transition-colors">עיסוי שוודי קטמון</Link></li>
                <li><Link href="/עיסוי-שוודי/בקעה" className="hover:text-white transition-colors">עיסוי שוודי בקעה</Link></li>
                <li><Link href="/עיסוי-שוודי/ארנונה" className="hover:text-white transition-colors">עיסוי שוודי ארנונה</Link></li>
                <li><Link href="/עיסוי-שוודי/גילה" className="hover:text-white transition-colors">עיסוי שוודי גילה</Link></li>
                <li><Link href="/עיסוי-שוודי/מלחה" className="hover:text-white transition-colors">עיסוי שוודי מלחה</Link></li>
                <li><Link href="/עיסוי-שוודי/תלפיות" className="hover:text-white transition-colors">עיסוי שוודי תלפיות</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h3 className="text-sm font-semibold text-red-200 mb-3">צרו קשר עכשיו</h3>
              <div className="space-y-3 mb-5">
                <a href="tel:0522635895"
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-red-200 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-red-300" />
                  052-263-5895
                </a>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-red-200 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
                <p className="flex items-center gap-2 text-sm text-red-300">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-red-400" />
                  ראשון–שישי 8:00–21:00
                </p>
              </div>
              <a href="tel:0522635895"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-red-900 hover:bg-red-50 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
                לקביעת תור
              </a>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-400">
            <p>&copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי — ירושלים</p>
            <div className="flex items-center gap-4">
              <Link href="/accessibility" className="hover:text-red-200 transition-colors">הצהרת נגישות</Link>
              <a href="https://rivlin.dev" target="_blank" rel="noopener noreferrer"
                style={{display:'flex',alignItems:'center',gap:'5px',textDecoration:'none',color:'rgba(255,255,255,0.3)'}}>
                פותח ב♥ ע&quot;י
                <img src="/images/rivlin-logo.png" alt="ריבלין" style={{height:'12px',width:'auto',opacity:0.5}} onError={e => { e.currentTarget.style.display='none' }} />
              </a>
            </div>
          </div>

        </div>
      </footer>

      </main>

      {/* ── WA FLOAT (desktop) ── */}
      {showWA && (
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
          aria-label="שלחו הודעה ב-WhatsApp"
          className="hidden lg:flex fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full shadow-xl items-center justify-center hover:scale-110 transition-transform"
          style={{ background: '#25D366' }}>
          <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 text-white" />
        </a>
      )}
    </>
  )
}
