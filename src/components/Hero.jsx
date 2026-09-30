import { useEffect, useState } from 'react'
import { SLIDES } from '../data'
export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setTimeout(() => setI((i + 1) % SLIDES.length), 5000); return () => clearTimeout(id) }, [i])
  const s = SLIDES[i]
  return (<section id="home" className="hero">
    <div className="hero-in">
      <p className="kicker">Trusted mutual fund distributor and financial planner</p>
      <h1 key={i} className="fade">{s.t}</h1>
      <p key={'d' + i} className="fade lead">{s.d}</p>
      <div className="row"><a className="btn" href="#calculators">Try a calculator</a><a className="btn ghost" href="#contact">Book a free consultation</a></div>
      <div className="dots">{SLIDES.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={'Slide ' + (k + 1)} />)}</div>
    </div>
  </section>)
}
