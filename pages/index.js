import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import HeroPic from '../public/kees-streefkerk-Adl90-aXYwA-unsplash.jpg'

export default function Home() {
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
  return (
    <>
      <Head>
        <title>ג&apos;ו עיסוי שוודי הוליסטי בירושלים -  עיסוי שוודי הוליסטי בירושלים ובפסגת זאב</title>
        <meta name="description" content='מטפל מנוסה בעל וותק של למעלה מ20 שנה, מומחה בסגנון השוודי הוליסטי הכולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים, משפר את חילוף החומרים בגוף ומשרה תחושת רגיעה כללית בגוף ויוצר זרימה אנרגטית. ' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-8 lg:pt-48 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                עיסוי שוודי הוליסטי בירושלים
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                מטפל מנוסה בעל וותק של למעלה מ25 שנה, מומחה בסגנון השוודי הוליסטי הכולל שימוש בשמנים להרגעת המטופל, שחרור שרירים תפוסים, טיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם בגוף, מניעת התכווצויות שרירים, משפר את חילוף החומרים בגוף ומשרה תחושת רגיעה כללית בגוף ויוצר זרימה אנרגטית.              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
                >
                  התקשר/י עכשיו
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-ml-8 xl:absolute xl:inset-0 xl:right-1/2 xl:ml-0">
            <Image
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={HeroPic}
              alt="ציוד לעיסוי שוודי הוליסטי"
              width={1000}
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-24 sm:py-32" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-red-800">אודות</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ג&apos;ו מטפל אלטרנטיבי ומעסה שוודי הוליסטי בירושלים</h2>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  ג&apos;ו - מעסה שוודי הוליסטי בירושלים עם למעלה מ-25 שנות ניסיון בתחום. עיסוי שוודי הוליסטי בירושלים על מנת לעזור לכם להשיג בריאות ורווחה מיטביים באמצעות הכוח הייחודי של טיפול בעיסוי שוודי הוליסטי.                </p>
                <p className="mt-8">
                  בקליניקה בירושלים, אנו מאמינים בגישה הוליסטית לבריאות. אנו מבינים שהנפש, הגוף והרוח קשורים זה בזה, ואנו שואפים ליצור מרחב מטפח שבו הלקוחות שלנו יכולים להשיג איזון והרמוניה. המטפל המנוסה משתמש במגוון טכניקות, כולל עיסוי שוודי, עיסוי רקמות עמוק ומתיחות, כדי לטפל באזורים ספציפיים של כאבים, מתח, סטרס, ואי נוחות.                </p>
                <p className="mt-8">
                  במהלך הטיפולים, יש שילוב של שימוש בשמנים כדי לעזור להירגע ולשחרר שרירים תפוסים. סגנון עיסוי זה יעיל בטיפול בכאבי ראש, הפחתת דלקות וכאבים, שיפור זרימת הדם, מניעת התכווצויות שרירים והשראת תחושה כללית של רגיעה ורוגע בגוף.
                </p>
                <p className="mt-8">
                  הטיפול הינו בהתאם לצורכי המטופל וניתן להתמקד באזור ספציפי בו המטופל חש כאב או אי נוחות או טיפול מרגיע.                  </p>
              </div>
              <div>
                <p>
                  אני מקדיש זמן להבין את הצרכים והחששות הייחודיים של כל לקוח. בין אם אתם מחפשים הקלה מכאבים כרוניים, מתאוששים מפציעה או פשוט מחפשים להירגע ולהוריד מתח, אני כאן כדי לתמוך בכם במסע שלכם לבריאות.                </p>
                <p className="mt-8">
                  בקליניקה בירושלים, אני מחויב לספק סביבה שלווה ומסבירת פנים בה הלקוחות יכולים להירגע וליהנות מהטיפול שלהם. אנו מקפידים על טיפול בכל פרט, מהמוזיקה המרגיעה ועד למיטת עיסוי נוחה. אני מאמין שחווית קבלת העיסוי צריכה להיות מרעננת כמו העיסוי עצמו.                              </p>
                <p className="mt-8">
                  אני מצפה לארח אותך בקליניקה שלנו ולעזור לך להשיג בריאות ורווחה מיטביים. קיימת גם אופציה לטיפול בבית הלקוח. אנא אל תהסס/י לפנות  אם יש לך שאלות כלשהן או ברצונך לקבוע פגישה.                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-50" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לשמוע מידע נוסף?

          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="tel:0522635895"
              className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              התקשר/י עכשיו - 0522635895
            </a>
          </div>
        </div>
      </section>
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

      <footer className="bg-red-900 text-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2 text-sm">

            <Link href="/accessibility">
              הצהרת נגישות
            </Link>
            <a href="https://rivlin.dev/web-development">
              פיתוח אתרים
            </a>

          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center leading-5 text-gray-200">
              &copy; ג&apos;ו עיסוי שוודי הוליסטי בירושלים
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
