// Stacked bar chart in SVG: invested amount + estimated returns, per year.
export default function Chart({ data }) {
  const W = 640, H = 260, P = 34, max = Math.max(...data.map(d => d.invested + d.returns), 1)
  const bw = (W - P * 2) / data.length
  const y = v => H - P - (v / max) * (H - P * 2)
  const fmt = v => v >= 1e7 ? (v / 1e7).toFixed(1) + ' Cr' : v >= 1e5 ? (v / 1e5).toFixed(1) + ' L' : Math.round(v / 1e3) + 'k'
  return (<svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Investment growth chart">
    {[0, .5, 1].map(f => <g key={f}><line x1={P} x2={W - P} y1={y(max * f)} y2={y(max * f)} className="grid-l" /><text x={P - 4} y={y(max * f) + 4} textAnchor="end">{fmt(max * f)}</text></g>)}
    {data.map((d, i) => { const x = P + i * bw + bw * .15, w = bw * .7
      return (<g key={i}><rect x={x} y={y(d.invested)} width={w} height={H - P - y(d.invested)} className="b-inv" />
        <rect x={x} y={y(d.invested + d.returns)} width={w} height={y(d.invested) - y(d.invested + d.returns)} className="b-ret" />
        {(data.length <= 12 || i % 2 === 0) && <text x={x + w / 2} y={H - 12} textAnchor="middle">{d.year}</text>}</g>) })}
  </svg>)
}
