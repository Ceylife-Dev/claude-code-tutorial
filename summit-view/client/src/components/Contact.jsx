import { useRef, useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { business, serviceOptions, budgetOptions } from '../content.js';

const EMPTY = { name: '', email: '', phone: '', city: '', service: '', budget: '', message: '', website: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case 'name':
      return v ? '' : 'Please enter your name.';
    case 'email':
      if (!v) return 'Please enter your email address.';
      return EMAIL_RE.test(v) ? '' : 'Enter an email like name@example.com.';
    case 'phone':
      return !v || /^[\d\s()+.-]{7,30}$/.test(v) ? '' : 'Enter a phone number like (512) 555-0123.';
    case 'message':
      return v.length > 2000 ? 'Please keep your message under 2,000 characters.' : '';
    default:
      return '';
  }
}

const LABELS = { name: 'Full name', email: 'Email', phone: 'Phone', message: 'Message' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState('');
  const summaryRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    for (const k of Object.keys(LABELS)) {
      const msg = validateField(k, form[k]);
      if (msg) next[k] = msg;
    }
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus('idle');
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus('sending');
    setServerMsg('');
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        throw new Error(data.error || 'We couldn’t send your request.');
      }
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setServerMsg(`${err.message} Please try again, or call us at ${business.phone}.`);
    }
  };

  const errorList = Object.entries(errors).filter(([, m]) => m);
  const fieldProps = (name) => ({
    id: `f-${name}`,
    name,
    value: form[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `f-${name}-err` : undefined,
  });
  const FieldError = ({ name }) =>
    errors[name] ? (
      <p className="field-error" id={`f-${name}-err`}>
        <AlertCircle size={14} aria-hidden="true" /> {errors[name]}
      </p>
    ) : null;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="eyebrow">Get In Touch</p>
          <h2 id="contact-title" className="display">Start the Process Today</h2>
          <p className="lead">
            Tell us a little about your property and what you&rsquo;re dreaming of. We&rsquo;ll get back to you
            within one business day to schedule a free on-site consultation.
          </p>
          <ul className="contact-list">
            <li>
              <Phone size={20} aria-hidden="true" />
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <Mail size={20} aria-hidden="true" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <MapPin size={20} aria-hidden="true" />
              <span>{business.city}</span>
            </li>
            <li>
              <Clock size={20} aria-hidden="true" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>

        <div className="contact-card reveal">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={48} strokeWidth={1.5} aria-hidden="true" />
              <h3>Thank You, We&rsquo;ve Got It!</h3>
              <p>Your request is on its way to our design team. Expect a call or email within one business day.</p>
              <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="form-title">Request a Free Consultation</h3>
              <p className="form-note">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>

              {errorList.length > 0 && (
                <div className="error-summary" ref={summaryRef} tabIndex={-1} role="alert">
                  <p>Please fix the following:</p>
                  <ul>
                    {errorList.map(([k, m]) => (
                      <li key={k}><a href={`#f-${k}`}>{LABELS[k] || k}: {m}</a></li>
                    ))}
                  </ul>
                </div>
              )}

              {status === 'error' && (
                <div className="error-summary" role="alert"><p>{serverMsg}</p></div>
              )}

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="f-name">Full name <span className="req" aria-hidden="true">*</span></label>
                  <input type="text" autoComplete="name" required {...fieldProps('name')} />
                  <FieldError name="name" />
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email <span className="req" aria-hidden="true">*</span></label>
                  <input type="email" autoComplete="email" inputMode="email" required {...fieldProps('email')} />
                  <FieldError name="email" />
                </div>
                <div className="field">
                  <label htmlFor="f-phone">Phone</label>
                  <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps('phone')} />
                  <FieldError name="phone" />
                </div>
                <div className="field">
                  <label htmlFor="f-city">City / neighborhood</label>
                  <input type="text" autoComplete="address-level2" {...fieldProps('city')} />
                </div>
                <div className="field">
                  <label htmlFor="f-service">I&rsquo;m interested in</label>
                  <select {...fieldProps('service')}>
                    <option value="">Choose a service</option>
                    {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-budget">Estimated budget</label>
                  <select {...fieldProps('budget')}>
                    <option value="">Choose a range</option>
                    {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field field-full">
                  <label htmlFor="f-message">Tell us about your project</label>
                  <textarea rows={5} {...fieldProps('message')} />
                  <p className="field-help">Size of the space, must-haves, timing, anything that helps.</p>
                  <FieldError name="message" />
                </div>
                <div className="hp" aria-hidden="true">
                  <label htmlFor="f-website">Website</label>
                  <input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
                </div>
              </div>

              <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><Loader2 size={18} className="spin" aria-hidden="true" /> Sending…</>
                ) : (
                  'Request My Consultation'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
