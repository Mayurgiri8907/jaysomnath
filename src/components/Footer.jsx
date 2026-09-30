import Logo from './Logo'
import { NAV, CONTACT } from '../data'
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const label = n => (n === 'amcs' ? 'AMCs' : n[0].toUpperCase() + n.slice(1))

const SOCIALS = [
  { name: 'Instagram', href: CONTACT.instagram, icon: <FaInstagram />, cls: 'ig' },
  { name: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}`, icon: <FaWhatsapp />, cls: 'wa' },
  { name: 'Email', href: `mailto:${CONTACT.email}`, icon: <MdEmail />, cls: 'em' },
]

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-grid">
        {/* Brand */}
        <div className="ft-col ft-brand">
          <div className="ft-logo">
            <Logo />
            <span>Jay Somnath<small>Financial Services</small></span>
          </div>
          <p>Goal-based investing and financial planning for every stage of life.</p>
          <div className="ft-social">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.href} className={'ft-ico ' + s.cls}
                 target="_blank" rel="noopener noreferrer"
                 aria-label={s.name} title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="ft-col">
          <h4>Quick links</h4>
          <ul className="ft-links">
            {NAV.map(n => <li key={n}><a href={'#' + n}>{label(n)}</a></li>)}
          </ul>
        </div>

        {/* Contact */}
        <div className="ft-col">
          <h4>Contact us</h4>
          <ul className="ft-contact">
            <li><FaPhoneAlt /><a href={'tel:' + CONTACT.phone.replace(/\s/g, '')}>{CONTACT.phone}</a></li>
            <li><MdEmail /><a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a></li>
            <li><FaWhatsapp /><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
            <li><FaMapMarkerAlt /><span>{CONTACT.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="ft-bottom">
        <p className="ft-disc">
          AMFI Registered Mutual Fund Distributor ARN-34542. Mutual fund investments are subject to
          market risks. Read all scheme related documents carefully. Past performance is not
          indicative of future returns.
        </p>
        <p className="ft-copy">© {new Date().getFullYear()} Jay Somnath Financial Services. All rights reserved.</p>
      </div>
      
    </footer>
  )
}