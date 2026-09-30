import { useState } from 'react'
import { CONTACT } from '../data'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false), [q, setQ] = useState('')
  const go = e => { e.preventDefault(); window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(q || 'Hello, I would like to know more about your services.')}`, '_blank', 'noopener') }
  return (<div className="fab-wrap">
    {open && <form className="quick" onSubmit={go}><b>Quick inquiry</b><p>Ask us anything. We reply on WhatsApp.</p>
      <textarea rows="3" value={q} onChange={e => setQ(e.target.value)} placeholder="Type your question" /><button className="btn">Chat on WhatsApp</button></form>}
    <button className="fab" onClick={() => setOpen(!open)} aria-label="Quick inquiry on WhatsApp">{open ? '✕' : <FaWhatsapp />
}</button></div>)
}
