import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import TopBar from './components/TopBar'
import ScrollTop from './components/ScrollTop'
import Navbar from './components/Navbar'
import MarketTicker from './components/MarketTicker'
import Hero from './components/Hero'
import { About, Values, Products, Services, AMCs } from './components/Sections'
import Calculators from './components/Calculators'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') } catch { return 'light' }
  })
  useEffect(() => { const id = setTimeout(() => setLoading(false), 1800); return () => clearTimeout(id) }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])
  return (<>
    <Loader show={loading} />
    <TopBar />
    <Navbar theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    <MarketTicker />
    <main>
      <Hero /><About /><Values /><Products /><Services />
      <Calculators /><Reviews /><AMCs /><Contact />
    </main>
    <Footer /><WhatsAppFab /><ScrollTop />
  </>)
}
