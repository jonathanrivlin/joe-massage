import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>הצהרת נגישות | ג&apos;ו עיסוי שוודי הוליסטי בירושלים</title>
        <meta name="description" content="הצהרת נגישות לאתר ג'ו עיסוי שוודי הוליסטי בירושלים — עומד בתקן WCAG 2.0 רמה AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className="bg-gray-50 min-h-screen" style={{ paddingTop: 64 }} dir="rtl">
        <div className="mx-auto max-w-3xl px-6 py-16">

          {/* Back */}
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-red-800 hover:text-red-600 mb-10 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            חזרה לדף הבית
          </Link>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-black text-gray-900 mb-2">הצהרת נגישות</h1>
            <div className="w-10 h-1 bg-red-800 rounded mb-8" />

            <p className="text-gray-600 leading-8 mb-6">
              אתר זה עומד בדרישות תקנות שיוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013. ההתאמות בוצעו עפ&quot;י המלצות התקן הישראלי (ת&quot;י 5568) ומסמך WCAG 2.0 הבינלאומי ברמת AA.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-4">מה יושם באתר</h2>
            <ul className="space-y-3 mb-8">
              {[
                'מבנה סמנטי לטכנולוגיות מסייעות',
                'תמיכה בניווט מקלדת — חיצים, TAB, Enter, Esc',
                'מותאם לתצוגה בדפדפנים נפוצים ובמובייל',
                'ניגודיות צבעים מספקת עפ"י התקן',
                'טקסט אלטרנטיבי לכל תמונה ומדיה',
                'נבדק עם קורא מסכים וכלי בדיקת נגישות',
                'שפת האתר מוגדרת כעברית (lang="he")',
                'כיוון הטקסט: RTL לאורך כל האתר',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-7">
                  <span className="mt-1 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" stroke="#991b1b" strokeWidth="2" width="10" height="10">
                      <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h2 className="text-lg font-bold text-gray-900 mb-2">נתקלתם בבעיה?</h2>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                למרות מאמצינו, ייתכן שחלק מהתכנים עדיין אינם נגישים במלואם. נשמח לשמוע ולתקן בהקדם.
              </p>
              <a href="tel:0522635895"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-800 hover:text-red-600 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                052-263-5895
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 text-sm" dir="rtl">
        <div className="mx-auto max-w-6xl py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} ג&apos;ו עיסוי שוודי הוליסטי בירושלים</p>
          <Link href="/" className="hover:text-white transition-colors">חזרה לדף הבית</Link>
        </div>
      </footer>
    </>
  )
}
