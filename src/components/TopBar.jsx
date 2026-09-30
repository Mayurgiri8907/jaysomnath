import { CONTACT } from '../data'
import { FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'

// Not sticky: scrolls away with the page. The main navbar below stays sticky.
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-in">
        <span className="tb-item"><FaUser /> Gosai Tusharpari Odhadpari</span>
        <span className="tb-item"><FaShield /> AMFI Registered Mutual Fund Distributor ARN-34542</span>
        <span className="tb-links">
          <a className="tb-item" href={'tel:' + CONTACT.phone.replace(/\s/g, '')}>
            <FaPhoneAlt /> {CONTACT.phone}
          </a>
          <a className="tb-item" href={'mailto:' + CONTACT.email}>
            <FaEnvelope /> {CONTACT.email}
          </a>
        </span>
      </div>
    </div>
  )
}