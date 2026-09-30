import { useState, useMemo } from 'react'
import Chart from './Chart'
const inr = v => '₹' + Math.round(v).toLocaleString('en-IN')
function Field({ label, value, set, min, max, step }) {
  return (<label className="field"><span>{label}<b>{value.toLocaleString('en-IN')}</b></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => set(+e.target.value)} /></label>)
}
export default function Calculators() {
  const [mode, setMode] = useState('sip')
  const [amt, setAmt] = useState(10000), [lump, setLump] = useState(500000)
  const [rate, setRate] = useState(12), [yrs, setYrs] = useState(10)
  const { data, invested, total } = useMemo(() => {
    const r = rate / 1200, out = []
    for (let y = 1; y <= yrs; y++) {
      const n = y * 12
      const fv = mode === 'sip' ? amt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : lump * Math.pow(1 + rate / 100, y)
      const inv = mode === 'sip' ? amt * n : lump
      out.push({ year: y, invested: inv, returns: fv - inv })
    }
    const l = out[out.length - 1]; return { data: out, invested: l.invested, total: l.invested + l.returns }
  }, [mode, amt, lump, rate, yrs])
  return (<section id="calculators" className="alt"><div className="head"><h2>Financial calculators</h2><p>Estimates only. Actual returns vary with the market.</p></div>
    <div className="calc">
      <div className="panel">
        <div className="tabs" role="tablist">{[['sip', 'SIP'], ['lump', 'Lumpsum']].map(([k, l]) => <button key={k} role="tab" aria-selected={mode === k} className={mode === k ? 'on' : ''} onClick={() => setMode(k)}>{l}</button>)}</div>
        {mode === 'sip' ? <Field label="Monthly investment (₹)" value={amt} set={setAmt} min={500} max={200000} step={500} />
          : <Field label="One-time investment (₹)" value={lump} set={setLump} min={10000} max={10000000} step={10000} />}
        <Field label="Expected return (% per year)" value={rate} set={setRate} min={1} max={30} step={0.5} />
        <Field label="Time period (years)" value={yrs} set={setYrs} min={1} max={40} step={1} />
      </div>
      <div className="panel out">
        <dl><div><dt>Invested</dt><dd>{inr(invested)}</dd></div><div><dt>Estimated returns</dt><dd>{inr(total - invested)}</dd></div><div className="big"><dt>Total value</dt><dd>{inr(total)}</dd></div></dl>
        <Chart data={data} />
        <p className="legend"><i className="b-inv" /> Invested <i className="b-ret" /> Returns</p>
      </div>
    </div></section>)
}
