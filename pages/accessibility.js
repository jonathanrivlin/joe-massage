import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

const features = [
  { title: 'שפה ותצוגה', items: [
    'האתר מוגדר בשפה עברית (lang="he") עם כיוון RTL (dir="rtl")',
    'גופן קריא ומגודל מתאים לנוחות קריאה מקסימלית',
    'ניגודיות צבעים עומדת בדרישות WCAG AA — יחס ניגודיות מינימלי 4.5:1',
  ]},
  { title: 'ניווט ומקלדת', items: [
    'קישור "דלג לתוכן הראשי" — מופיע בלחיצת Tab הראשונה לניווט מהיר',
    'כל הפונקציות נגישות באמצעות מקלדת בלבד (Tab, Enter, Esc)',
    'אינדיקטור focus-visible ברור על כל האלמנטים הניתנים לפעולה',
    'ניווט עקבי ומסודר בכל עמודי האתר',
  ]},
  { title: 'מבנה סמנטי', items: [
    'שימוש בתגיות HTML סמנטיות: <main>, <header>, <footer>, <nav>, <section>',
    'היררכיית כותרות תקנית: H1 → H2 → H3',
    'landmark roles לכל אזורי הדף (contentinfo, navigation)',
    'aria-label לכל section לתיאור ברור עבור קוראי מסך',
  ]},
  { title: 'תמונות ומדיה', items: [
    'לכל תמונה הוגדר טקסט אלטרנטיבי (alt) תיאורי בעברית',
    'אלמנטים דקורטיביים מסומנים כ-aria-hidden="true"',
  ]},
  { title: 'רכיבים אינטראקטיביים', items: [
    'כפתורי FAQ מכילים aria-expanded ו-aria-controls לקוראי מסך',
    'תפריט מובייל עם aria-expanded ו-aria-label',
    'כל הכפתורים ממוסמנים עם תיאור נגיש',
    'קישורי טלפון ו-WhatsApp עם aria-label ברור',
  ]},
  { title: 'מובייל ורספונסיביות', items: [
    'האתר מותאם לכל גדלי המסך — מובייל, טאבלט ודסקטופ',
    'כפתורי CTA בגודל מינימלי של 44×44 פיקסל (WCAG 2.5.5)',
    'שורת פעולות קבועה בתחתית המסך במובייל לנגישות מהירה',
  ]},
]

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>הצהרת נגישות | ג&apos;ו עיסוי שוודי הוליסטי</title>
        <meta name="description" content="הצהרת נגישות — אתר ג'ו עיסוי שוודי עומד בתקן WCAG 2.0 ברמת AA ובתקנות שיווין זכויות לאנשים עם מוגבלות." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.joe-massage.com/accessibility" />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:rounded-md focus:bg-red-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        דלג לתוכן הראשי
      </a>

      <Header />

      <main id="main-content">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">

          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <p className="text-base font-semibold leading-7 text-red-800 mb-2">נגישות</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              הצהרת נגישות
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">
              אתר זה עומד בדרישות תקנות שיוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013.
              ההתאמות בוצעו עפ&quot;י התקן הישראלי (ת&quot;י 5568) ומסמך WCAG 2.0 הבינלאומי ברמת <strong>AA</strong>.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-10">
            {features.map(section => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-gray-600">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-red-700 flex-shrink-0 mt-1" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-xl bg-gray-50 border border-gray-200 px-6 py-6">
            <p className="text-sm leading-7 text-gray-600">
              למרות מאמצינו להנגיש את האתר ברמה הגבוהה ביותר, ייתכן שיתגלו חריגות שטרם הונגשו כראוי.
              נשמח לשמוע ולתקן בהקדם.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">נתקלתם בבעיה? צרו קשר</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0522635895"
                className="inline-flex items-center gap-2 rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                aria-label="התקשרו אלינו — 052-263-5895">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" aria-hidden="true" />
                052-263-5895
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                style={{ background: '#25D366' }}
                aria-label="שלחו הודעת WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Back link */}
          <Link href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 rounded">
            <span aria-hidden="true">→</span>
            חזרה לדף הבית
          </Link>

        </div>
      </main>
    </>
  )
}
