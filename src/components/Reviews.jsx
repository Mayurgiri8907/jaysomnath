import { useEffect, useState } from 'react'
import { REVIEWS } from '../data'
export default function Reviews() {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setTimeout(() => setI((i + 1) % REVIEWS.length), 4500); return () => clearTimeout(id) }, [i])
  const [n, r, t] = REVIEWS[i]
  return (<section id="reviews"><div className="head"><h2>What our clients say</h2></div>
    <figure className="review" key={i}><blockquote>“{t}”</blockquote><figcaption><b>{n}</b>, {r}</figcaption></figure>
    <div className="dots center">{REVIEWS.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={'Review ' + (k + 1)} />)}</div></section>)
}
