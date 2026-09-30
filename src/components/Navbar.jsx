import { useState } from 'react'
import Logo from '../images/logo.png'
import { NAV } from '../data'
const LABEL = { amcs: 'AMCs', calculators: 'Calculators' }
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  return (<header className="nav">
    <a href="#home" className="brand"><img src={Logo} width="60px" height="60px" alt="" srcset="" /><span>Jay Somnath<small>Financial Services</small></span></a>
    <nav className={open ? 'open' : ''}>
      {NAV.map(n => <a key={n} href={'#' + n} onClick={() => setOpen(false)}>{LABEL[n] || n[0].toUpperCase() + n.slice(1)}</a>)}
    </nav>
    <button className="icon" onClick={toggle} aria-label="Toggle light and dark theme">{theme === 'dark' ? '☀' : '☾'}</button>
    <button className="icon burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
  </header>)
}
