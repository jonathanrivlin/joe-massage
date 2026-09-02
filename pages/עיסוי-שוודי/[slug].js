import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faLocationDot, faCheck, faHouse, faClock, faTrophy, faHandsHolding, faLeaf, faHeart
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"
const SITE_URL = "https://www.joe-massage.com"
const PHONE = "0522635895"
const PHONE_DISPLAY = "052-263-5895"

// NEIGHBORHOOD DATA — one object per area
const NEIGHBORHOODS = {
  'pisga-zeev': {
    slug: 'pisga-zeev',
    name: 'פסגת זאב',
    title: 'עיסוי שוודי בפסגת זאב | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בפסגת זאב — ג\'ו מגיע אליכם הביתה עם 25+ שנות ניסיון. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בפסגת זאב',
    intro: 'חיים בפסגת זאב וסובלים מכאבי גב, כתפיים או צוואר? ג\'ו — מעסה שוודי מקצועי עם 25+ שנות ניסיון — מגיע אליכם הביתה בפסגת זאב. אין צורך לנסוע לקליניקה — הטיפול מגיע אליכם.',
    body: 'פסגת זאב היא אחד מאזורי הפעילות העיקריים של ג\'ו. הניסיון הרב שלו בעיסוי שוודי הוליסטי מאפשר לו להתאים כל טיפול לצרכים הספציפיים של כל מטופל — בין אם מדובר בשחרור שרירים תפוסים, הפחתת מתח כרוני, שיפור זרימת הדם או פשוט רגיעה עמוקה.\n\nהטיפול מתבצע עם שמנים ארומתרפיים טבעיים, מיטת עיסוי מקצועית ומוזיקה מרגיעה — הכל מגיע אליכם. לאחר הטיפול אפשר פשוט להישאר בבית ולנוח.',
    nearby: ['רמות', 'נווה יעקב', 'גבעה הצרפתית'],
    geo: { lat: 31.8285, lng: 35.2369 },
  },
  'ramot': {
    slug: 'ramot',
    name: 'רמות',
    title: 'עיסוי שוודי ברמות ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי ברמות ירושלים — ג\'ו מגיע אליכם הביתה. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. מעסה מקצועי עם 25+ שנות ניסיון. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי ברמות ירושלים',
    intro: 'גרים ברמות וחיפשתם מעסה שוודי מקצועי שמגיע הביתה? ג\'ו — עם 25+ שנות ניסיון בעיסוי שוודי הוליסטי — מגיע אליכם ברמות. טיפול אישי, מקצועי ומותאם לצרכים שלכם.',
    body: 'רמות היא שכונה גדולה ומרכזית בירושלים — וג\'ו מגיע לכל חלקי השכונה. הטיפול כולל עיסוי שוודי קלאסי או עיסוי רקמות עמוק, בהתאם לצרכים שלכם.\n\nלמטופלים עם כאבי גב כרוניים, מתח בכתפיים או קשיחות בצוואר — הטיפול מספק הקלה ניכרת כבר מהמפגש הראשון. ג\'ו עובד עם שמנים ארומתרפיים טבעיים ומכוון לאזורי הבעיה של כל מטופל.',
    nearby: ['פסגת זאב', 'גבעה הצרפתית', 'קרית משה'],
    geo: { lat: 31.8100, lng: 35.1900 },
  },
  'givat-shaul': {
    slug: 'givat-shaul',
    name: 'גבעת שאול',
    title: 'עיסוי שוודי בגבעת שאול ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בגבעת שאול — ג\'ו מגיע אליכם הביתה עם 25+ שנות ניסיון. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בגבעת שאול',
    intro: 'גרים בגבעת שאול וחיפשתם עיסוי שוודי מקצועי בבית? ג\'ו — מעסה שוודי הוליסטי עם 25+ שנות ניסיון — מגיע אליכם לגבעת שאול. ללא נסיעות, ללא המתנה — הטיפול בא אליכם.',
    body: 'גבעת שאול, הממוקמת במערב ירושלים, היא אחת השכונות שג\'ו משרת באופן קבוע. הקרבה לאזורי עסקים ומשרדים מגדילה את הביקוש לטיפולי הרפיה ושחרור שרירים — ועיסוי שוודי בבית הוא הפתרון המושלם לאחר יום עבודה ארוך.\n\nג\'ו מתמחה בשחרור שרירים תפוסים בגב, צוואר וכתפיים — האזורים הנפוצים ביותר לכאב בקרב עובדי משרד ואנשים עם אורח חיים יושבני.',
    nearby: ['בית הכרם', 'קרית משה', 'הר נוף'],
    geo: { lat: 31.7900, lng: 35.1850 },
  },
  'beit-hakerem': {
    slug: 'beit-hakerem',
    name: 'בית הכרם',
    title: 'עיסוי שוודי בבית הכרם ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בבית הכרם — ג\'ו מגיע אליכם הביתה. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. מעסה מקצועי עם 25+ שנות ניסיון. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בבית הכרם',
    intro: 'בית הכרם — שכונה שקטה ויפה בירושלים — מקבלת שירות עיסוי שוודי הוליסטי מקצועי מג\'ו. עם 25+ שנות ניסיון, ג\'ו מגיע אליכם הביתה ומספק טיפול מותאם אישית.',
    body: 'בית הכרם ידועה בסביבתה השלווה — בדיוק הסביבה הנכונה לטיפול עיסוי מרגיע. ג\'ו מגיע עם כל הציוד הנדרש: מיטת עיסוי מקצועית, שמנים ארומתרפיים ומוזיקה מרגיעה.\n\nהטיפול מותאם לכל מטופל — בין אם מדובר בעיסוי שוודי קלאסי לרגיעה עמוקה, או בעיסוי רקמות עמוק לטיפול בכאבים ספציפיים. ג\'ו שם דגש על תקשורת עם המטופל לאורך כל הטיפול.',
    nearby: ['גבעת שאול', 'קרית משה', 'הר נוף'],
    geo: { lat: 31.7850, lng: 35.1800 },
  },
  'neve-yaakov': {
    slug: 'neve-yaakov',
    name: 'נווה יעקב',
    title: 'עיסוי שוודי בנווה יעקב ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בנווה יעקב — ג\'ו מגיע אליכם הביתה עם 25+ שנות ניסיון. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בנווה יעקב',
    intro: 'מחפשים עיסוי שוודי מקצועי בנווה יעקב שמגיע הביתה? ג\'ו — מעסה הוליסטי עם 25+ שנות ניסיון — מגיע אליכם לנווה יעקב. טיפול אישי ומקצועי בנוחות הבית.',
    body: 'נווה יעקב, השכונה הצפונית של ירושלים, נמצאת בקרבת פסגת זאב — ואחת מהשכונות שג\'ו משרת. הטיפול כולל עיסוי שוודי מלא עם שמנים ארומתרפיים, שחרור שרירים תפוסים ורגיעה עמוקה.\n\nג\'ו מגיע עם מיטת עיסוי מקצועית ומכשירי עזר — כל שדרוש הוא חדר עם מרחב מינימלי. הטיפול מתאים לכל גיל ולכל צורך.',
    nearby: ['פסגת זאב', 'רמות', 'גבעה הצרפתית'],
    geo: { lat: 31.8400, lng: 35.2300 },
  },
  'har-nof': {
    slug: 'har-nof',
    name: 'הר נוף',
    title: 'עיסוי שוודי בהר נוף ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בהר נוף ירושלים — ג\'ו מגיע אליכם הביתה. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. מעסה מקצועי עם 25+ שנות ניסיון. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בהר נוף',
    intro: 'גרים בהר נוף וחיפשתם עיסוי שוודי מקצועי? ג\'ו מגיע אליכם הביתה בהר נוף — עיסוי שוודי הוליסטי מלא עם 25+ שנות ניסיון. בלי לנסוע, בנוחות הבית שלכם.',
    body: 'הר נוף, השכונה המערבית של ירושלים, היא אחד האזורים שג\'ו מגיע אליהם באופן קבוע. הטיפול מתאים לכל מי שסובל מכאבי גב, מתח שרירי, כאבי ראש או שרק רוצה להירגע ולהטעין מצברים.\n\nג\'ו מביא איתו את כל הציוד — מיטת עיסוי מקצועית, שמנים ארומתרפיים, מוזיקה מרגיעה. כל מה שצריך זה פינה שקטה בבית.',
    nearby: ['גבעת שאול', 'בית הכרם', 'קרית משה'],
    geo: { lat: 31.7750, lng: 35.1700 },
  },
  'kiryat-moshe': {
    slug: 'kiryat-moshe',
    name: 'קרית משה',
    title: 'עיסוי שוודי בקרית משה ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בקרית משה ירושלים — ג\'ו מגיע אליכם הביתה. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בקרית משה',
    intro: 'מחפשים מעסה שוודי בקרית משה שמגיע הביתה? ג\'ו — 25+ שנות ניסיון בעיסוי שוודי הוליסטי — מגיע אליכם לקרית משה. טיפול מקצועי ומותאם אישית.',
    body: 'קרית משה, השכונה השקטה של מערב ירושלים, מקבלת שירות עיסוי שוודי הוליסטי מקצועי מג\'ו. הטיפול מותאם לכל מטופל — שחרור שרירים תפוסים, עיסוי הרפיה, עיסוי רקמות עמוק.\n\nג\'ו מגיע עם כל הציוד: מיטת עיסוי מקצועית, שמנים ארומתרפיים ומוזיקה מרגיעה. תיאום מהיר — לרוב תוך יום-יומיים.',
    nearby: ['גבעת שאול', 'בית הכרם', 'הר נוף'],
    geo: { lat: 31.7900, lng: 35.1750 },
  },
  'giloh': {
    slug: 'giloh',
    name: 'גילה',
    title: 'עיסוי שוודי בגילה ירושלים | ג\'ו — 25+ שנות ניסיון | 052-263-5895',
    description: 'עיסוי שוודי הוליסטי בגילה ירושלים — ג\'ו מגיע אליכם הביתה. שחרור שרירים, הפחתת כאבים, שמנים ארומתרפיים. מעסה מקצועי עם 25+ שנות ניסיון. 052-263-5895',
    h1: 'עיסוי שוודי הוליסטי בגילה',
    intro: 'גרים בגילה וחיפשתם מעסה שוודי שמגיע הביתה? ג\'ו מגיע אליכם לגילה — עיסוי שוודי הוליסטי מקצועי עם 25+ שנות ניסיון. מותאם לכל גיל וצורך.',
    body: 'גילה, השכונה הדרומית של ירושלים, נמצאת ברשימת אזורי השירות של ג\'ו. הטיפול מתבצע בבית המטופל עם מיטת עיסוי מקצועית ושמנים ארומתרפיים טבעיים.\n\nעיסוי שוודי הוליסטי בגילה — שחרור שרירים, הפחתת כאבים, שיפור זרימת הדם ורגיעה עמוקה. ג\'ו מתאם ביקור מהיר ומגיע עם כל הציוד הנדרש.',
    nearby: ['מלחה', 'עיר גנים', 'תלפיות'],
    geo: { lat: 31.7350, lng: 35.1900 },
  },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(NEIGHBORHOODS).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const neighborhood = NEIGHBORHOODS[params.slug]
  if (!neighborhood) return { notFound: true }
  return { props: { neighborhood } }
}

export default function NeighborhoodPage({ neighborhood: n }) {
  const pageUrl = `${SITE_URL}/עיסוי-שוודי-${n.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        "name": "ג'ו עיסוי שוודי הוליסטי",
        "description": n.description,
        "url": pageUrl,
        "telephone": `+972${PHONE.slice(1)}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": `${n.name}, ירושלים`,
          "addressRegion": "ירושלים",
          "addressCountry": "IL",
        },
        "geo": { "@type": "GeoCoordinates", "latitude": n.geo.lat, "longitude": n.geo.lng },
        "areaServed": { "@type": "Neighborhood", "name": n.name },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "21:00" }],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47", "bestRating": "5" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "דף הבית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": `עיסוי שוודי ב${n.name}`, "item": pageUrl },
        ]
      }
    ]
  }

  return (
    <>
      <Head>
        <title>{n.title}</title>
        <meta name="description" content={n.description} />
        <meta name="keywords" content={`עיסוי שוודי ${n.name}, מעסה ${n.name}, עיסוי הוליסטי ${n.name}, עיסוי בבית ${n.name}, שחרור שרירים ${n.name}, מעסה ירושלים`} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={n.title} />
        <meta property="og:description" content={n.description} />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:rounded-md focus:bg-red-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg">
        דלג לתוכן הראשי
      </a>

      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="bg-white py-16 sm:py-24" aria-label={`עיסוי שוודי ב${n.name}`}>
          <div className="mx-auto max-w-4xl px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="ניווט">
              <Link href="/" className="hover:text-red-800 transition-colors">דף הבית</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">עיסוי שוודי ב{n.name}</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5">
              <span className="text-yellow-500 text-xs">★★★★★</span>
              <span className="text-red-800 text-xs font-semibold">25+ שנות ניסיון · {n.name} · ירושלים</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              {n.h1}
            </h1>

            <p className="text-lg leading-8 text-gray-600 mb-8">{n.intro}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-green-600" />
                שלחו הודעה ב-WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <FontAwesomeIcon icon={faHouse} className="w-3.5 h-3.5 text-red-700" />
                טיפול בבית הלקוח ב{n.name}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-red-700" />
                {n.name} · ירושלים
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-red-700" />
                ראשון–שישי 8:00–21:00
              </span>
            </div>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section className="bg-gray-50 py-16 sm:py-24" aria-label="אודות השירות">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">עיסוי שוודי הוליסטי ב{n.name}</h2>
                {n.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base leading-7 text-gray-700 mb-4">{para}</p>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">מה כולל הטיפול?</h3>
                {[
                  { icon: faHandsHolding, text: 'שחרור שרירים תפוסים בגב, צוואר וכתפיים' },
                  { icon: faLeaf, text: 'שמנים ארומתרפיים טבעיים לרוגע ותוצאות טיפוליות' },
                  { icon: faHouse, text: 'מיטת עיסוי מקצועית — מגיעה אליכם הביתה' },
                  { icon: faHeart, text: 'שיפור זרימת הדם ומחדש אנרגיית הגוף' },
                  { icon: faTrophy, text: '25+ שנות ניסיון בעיסוי שוודי הוליסטי' },
                  { icon: faCheck, text: 'טיפול מותאם אישית לכל מטופל' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl ring-1 ring-gray-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-800">
                      <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    </span>
                    <p className="text-sm text-gray-700 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-red-50 py-16" aria-label="צרו קשר">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              רוצים לקבוע עיסוי שוודי ב{n.name}?
            </h2>
            <p className="text-gray-600 mb-8">ג&apos;ו מגיע אליכם הביתה — מתאמים בקלות, ראשון עד שישי 8:00–21:00</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                התקשרו — {PHONE_DISPLAY}
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md py-3 px-6 text-sm font-semibold text-white transition-colors"
                style={{ background: '#25D366' }}>
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── NEARBY ── */}
        <section className="bg-white py-12" aria-label="שכונות קרובות">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="text-base font-semibold text-gray-900 mb-4">שכונות קרובות שאנחנו משרתים</h3>
            <div className="flex flex-wrap gap-3">
              {n.nearby.map(area => (
                <span key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-600 ring-1 ring-gray-200">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-red-700" />
                  {area}
                </span>
              ))}
              <Link href="/" className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 text-sm text-red-800 font-medium ring-1 ring-red-200 hover:bg-red-100 transition-colors">
                כל אזורי השירות →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-red-900 text-white" role="contentinfo">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-red-300">ג&apos;ו עיסוי שוודי הוליסטי — {n.name}, ירושלים</p>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="text-red-300 hover:text-white transition-colors">דף הבית</Link>
              <Link href="/accessibility" className="text-red-300 hover:text-white transition-colors">נגישות</Link>
              <a href={`tel:${PHONE}`} className="text-red-300 hover:text-white transition-colors">{PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
