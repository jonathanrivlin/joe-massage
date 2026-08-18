import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

export default function Accessibility() {
    return (
        <>
            <Head>
                <title>הצהרת נגישות</title>
                <meta name="description" content='הצהרת נגישות לאתר המתארת כיצד הונגש האתר' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <section className="container mx-auto py-12 text-slate-600 leading-9 px-5">
                <h1 className='text-3xl lg:text-4xl leading-relaxed font-extrabold pb-4 text-slate-900'>הצהרת נגישות</h1>
                <p>אתר זה עומד בדרישות תקנות שיוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013. ההתאמות של הנגישות בוצעו ע&quot;פ המלצות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך הWCAG2.0 הבינלאומי. </p>
                <p className="pb-4">באתר זה:</p>
                <ul className="list-disc mr-10 leading-relaxed pb-5">
                    <li>עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013.</li>
                    <li>התאמות הנגישות בוצעו עפ&quot;י התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.</li>
                    <li>מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת בעזרת מקשי החיצים, TAB,Enter ו- Esc ליציאה מתפריטים וחלונות.</li>
                    <li>מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי.</li>
                    <li>הצבעים בדף נבחרו על פי התקן בניגודיות מספקת.</li>
                    <li>לכל תמונה ומדיה ניתן טקסט אלטרנטיבי.</li>
                    <li>בוצעה בדיקה באמצעות קורא מסכים וכלי לבדיקת הנגשה של דפדפן כרום.</li>
                </ul>
                <p>יש לציין כי למרות המאמצים שלנו להנגיש את הדף והשירות ברמה הגבוהה ביותר, ייתכן שיתגלו חריגות שלא הונגשו כראוי או שלא עומדים בתקן הנדרש - במקרה כזה בבקשה תודיעו לנו ונעשה את המיטב לתקן ולהנגיש.</p>
                <h2 className="text-xl lg:text-2xl leading-relaxed font-extrabold pb-4 text-slate-900 pt-4">יצירת קשר</h2>
                <p>במידה ונתקלתם בבעיה נשמח לסייע ולטפל בבעיה בהקדם האפשרי, <br />
                    ניתן ליצור איתנו קשר באמצעות הטלפון 0522635895
                </p>
                <Link href="/" className="mt-6 block font-semibold leading-6 text-gray-900 hover:text-blue-800">
                    חזרה לדף הבית <span aria-hidden="true">&larr;</span>
                </Link>
            </section>

        </>
    )
}

