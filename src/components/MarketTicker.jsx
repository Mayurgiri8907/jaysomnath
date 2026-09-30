import { useEffect, useState } from 'react'
const START = [['NIFTY 50',24800],['SENSEX',81200],['BANK NIFTY',53100],['GOLD /10g',74500],['USD/INR',83.6],['SILVER /kg',91000]]
// Simulated data. Replace with a real API call (e.g. inside this function) for production.
async function fetchQuotes(prev) {
  return prev.map(q => { const p = q.price * (1 + (Math.random() - 0.5) * 0.002); return { ...q, price: p, chg: ((p - q.base) / q.base) * 100 } })
}
export default function MarketTicker() {
  const [q, setQ] = useState(START.map(([name, price]) => ({ name, price, base: price, chg: 0 })))
  useEffect(() => { const id = setInterval(() => fetchQuotes(q).then(setQ), 2500); return () => clearInterval(id) })
  const row = q.map(x => (
    <span className="tick" key={x.name}><b>{x.name}</b> {x.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
      <em className={x.chg >= 0 ? 'up' : 'down'}>{x.chg >= 0 ? '▲' : '▼'} {Math.abs(x.chg).toFixed(2)}%</em></span>))
  return (<div className="ticker" aria-label="Live market data (demo)"><div className="track">{row}{row}</div></div>)
}
