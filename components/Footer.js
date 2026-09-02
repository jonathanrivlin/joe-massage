import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WA_HREF = "https://wa.me/9720522635895?text=%D7%A9%D7%9C%D7%95%D7%9D%2C+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%95%D7%A2+%D7%A2%D7%99%D7%A1%D7%95%D7%99+%D7%A2%D7%9D+%D7%92%27%D7%95"

export default function Footer() {
  return (
<footer className="bg-red-900 text-white pb-20 lg:pb-0" role="contentinfo">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-10">

          {/* ── Top: 4 columns ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-red-800">

            {/* Col 1: Brand */}
            <div>
              <h3 className="text-base font-bold text-white mb-3">ג&apos;ו עיסוי שוודי הוליסטי</h3>
              <p className="text-sm text-red-300 leading-6 mb-4">מעסה מקצועי בירושלים עם 25+ שנות ניסיון. מגיע אליכם הביתה בכל שכונות ירושלים.</p>
              <div className="flex items-center gap-1 text-yellow-400 text-sm" role="img" aria-label="דירוג 5 כוכבים מתוך 5"><span aria-hidden="true">★★★★★</span></div>
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
                  ראשון–חמישי 8:00–21:00 | שישי עד הצהריים
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
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-200">
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
  )
}
