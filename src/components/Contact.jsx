import { useState } from 'react'
import { CONTACT } from '../data'
export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', interest: 'Mutual Funds / SIP', msg: '' })
  const [err, setErr] = useState('')
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const send = e => {
    e.preventDefault()
    if (!f.name.trim() || !/^\d{10}$/.test(f.phone)) return setErr('Enter your name and a 10-digit mobile number.')
    setErr('')
    const text = `Hello Jay Somnath Financial Services,%0AName: ${encodeURIComponent(f.name)}%0APhone: ${f.phone}%0AInterested in: ${encodeURIComponent(f.interest)}%0AMessage: ${encodeURIComponent(f.msg)}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, '_blank', 'noopener')
  }
  return (<section id="contact" className="alt"><div className="head"><h2>Contact us</h2><p>Send your details and we will reply on WhatsApp.</p></div>
    <div className="contact">
      <form onSubmit={send} noValidate>
        <label>Your name<input value={f.name} onChange={on('name')} autoComplete="name" placeholder='Enter Your Name'/></label>
        <label>Mobile number<input value={f.phone} onChange={on('phone')} inputMode="numeric" maxLength={10} autoComplete="tel" placeholder='Enter Your Number'/></label>
        <label>I am interested in<select value={f.interest} onChange={on('interest')}>{['Mutual Funds / SIP', 'Insurance', 'Tax planning', 'Retirement planning', 'Other'].map(o => <option key={o}>{o}</option>)}</select></label>
        <label>Message<textarea rows="4" value={f.msg} onChange={on('msg')} placeholder='Enter Your Message'/></label>
        {err && <p className="error" role="alert">{err}</p>}
        <button className="btn" type="submit">Send on WhatsApp</button>
      </form>
      <div className="info"><h3>Reach us</h3>
        <p><b>Phone</b><br /><a href={'tel:' + CONTACT.phone.replace(/\s/g, '')}>{CONTACT.phone}</a></p>
        <p><b>Email</b><br /><a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a></p>
        <p><b>Address</b><br />{CONTACT.address}</p>
        <p><b>Hours</b><br />Mon to Sat, 10 am to 7 pm</p></div>
    </div></section>)
}
