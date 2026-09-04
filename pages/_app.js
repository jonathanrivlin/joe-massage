import '../styles/globals.css'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}
