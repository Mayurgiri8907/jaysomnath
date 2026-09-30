export default function Logo({ size = 40 }) {
  return (<svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="var(--brand)"/>
    <path d="M12 34 L22 22 L28 28 L37 14" fill="none" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="37" cy="14" r="3" fill="var(--gold)"/>
  </svg>)
}
