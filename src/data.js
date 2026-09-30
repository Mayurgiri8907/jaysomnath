export const CONTACT = {
  whatsapp: '917874691848', // country code + number, no + or spaces
  phone: '+91 7874691848',
  email: 'gosai.tushar25@gmail.com',
  address: 'Office No. 000, Business Hub, opp. Gallops Restaurant, Mahuva 364290',
}
export const NAV = ['home','about','values','products','services','calculators','reviews','amcs','contact']
export const SLIDES = [
  { t: 'Build wealth with a plan, not a guess', d: 'Goal-based investing in mutual funds, SIPs and insurance, guided by people you can call.' },
  { t: 'Start a SIP from just ₹500 a month', d: 'Small, regular investments compound into large goals. We set it up in one sitting.' },
  { t: 'Protect your family, then grow your money', d: 'Life and health cover reviewed alongside your investments, so nothing is left out.' },
  { t: 'Retire on your terms', d: 'We work backwards from the income you want and build the portfolio to reach it.' },
]
export const VALUES = [
  ['Integrity','We recommend what fits your goals, and tell you plainly when something does not.'],
  ['Transparency','Every cost, risk and commission is explained before you invest.'],
  ['Long-term view','We measure success in years and decades, not in weekly market moves.'],
  ['Personal service','One relationship manager who knows your family and your goals.'],
]
export const PRODUCTS = [
  ['Mutual Funds','Equity, debt, hybrid and index funds across leading AMCs.'],
  ['SIP & STP','Automated monthly investing and systematic transfers.'],
  ['Fixed Income','Bonds, corporate FDs and debt instruments for steady returns.'],
  ['Insurance','Term, health and general insurance for full protection.'],
  ['Gold & Assets','Sovereign gold bonds, gold funds and asset allocation.'],
  ['Tax-saving','ELSS, NPS and other 80C options chosen for you.'],
]
export const SERVICES = [
  ['Financial planning','Goals for education, home, marriage and retirement, mapped to numbers.'],
  ['Portfolio review','A yearly check of what you hold, what it costs and what to change.'],
  ['KYC & onboarding','Paperless account opening and mutual fund registration.'],
  ['Tax planning','Reduce tax legally with the right instruments at the right time.'],
  ['Insurance advisory','Find the right cover amount and compare insurers.'],
  ['NRI investing','Guidance on investing in India from anywhere in the world.'],
]
export const REVIEWS = [
  ['Hareshgiri Gauswami','Businessman','They explained SIPs in simple words and my portfolio has grown steadily since.'],
  ['Kavita Shah','Teacher','Clear advice, no pressure. My daughter’s education fund is on track.'],
  ['Nilesh Makwana','Politician','Always available on WhatsApp when I have a question. Very dependable.'],
  ['Shayampari Gosai','engineer','They planned my monthly income so I no longer worry about expenses.'],
]
const fav = d => `https://www.google.com/s2/favicons?domain=${d}&sz=128`

export const AMCS = [
  { name: 'SBI Mutual Fund',       local: 'sbi.png',   remote: fav('sbimf.com') },
  { name: 'HDFC Mutual Fund',      local: 'hdfc.png',  remote: fav('hdfcfund.com') },
  { name: 'ICICI Prudential',      local: 'icici.png', remote: fav('icicipruamc.com') },
  { name: 'Axis Mutual Fund',      local: 'axis.png',  remote: fav('axismf.com') },
  { name: 'Nippon India',          local: 'nippon.png',remote: fav('nipponindiaim.com') },
  { name: 'Kotak Mahindra',        local: 'kotak.png', remote: fav('kotakmf.com') },
  { name: 'Aditya Birla Sun Life', local: 'absl.png',  remote: fav('adityabirlacapital.com') },
  { name: 'UTI Mutual Fund',       local: 'uti.png',   remote: fav('utimf.com') },
  { name: 'Mirae Asset',           local: 'mirae.png', remote: fav('miraeassetmf.co.in') },
  { name: 'DSP Mutual Fund',       local: 'dsp.png',   remote: fav('dspim.com') },
]