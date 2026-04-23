import React from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { emailConfig, isEmailJSConfigured } from '../config/emailjs';

export const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [focused, setFocused] = React.useState(null);

  React.useEffect(() => {
    // Initialize EmailJS
    if (isEmailJSConfigured()) {
      emailjs.init(emailConfig.PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields');
      return;
    }

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      setError('Email service not configured. Please contact the site owner.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        {
          to_email: 'sumhector@gmail.com',
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          name: form.name,
          email: form.email,
        }
      );

      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(`Failed to send message: ${err.message}`);
      setLoading(false);
    }
  };

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: 'clamp(64px, 10vw, 140px) clamp(16px, 5vw, 64px) clamp(64px, 10vw, 96px)',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(40px, 8vw, 96px)', alignItems: 'start',
  };

  const overlineStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6B6B', marginBottom: '20px',
    display: 'flex', alignItems: 'center', gap: '12px',
  };

  const h2Style = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '52px', color: '#F0EDE6',
    lineHeight: 1.05, letterSpacing: '-0.02em',
    margin: '0 0 24px',
  };

  const paraStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '16px', color: '#A8A49D',
    lineHeight: 1.65, marginBottom: '40px',
  };

  const linkRowStyle = {
    display: 'flex', flexDirection: 'column', gap: '16px',
  };

  const linkItemStyle = {
    display: 'flex', alignItems: 'center', gap: '14px',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '14px', color: '#A8A49D',
    textDecoration: 'none', cursor: 'pointer',
    padding: '14px 18px',
    border: '1px solid rgba(240,237,230,0.08)',
    borderRadius: '4px', background: '#111111',
    transition: 'border-color 200ms ease',
  };

  const iconBox = {
    width: '36px', height: '36px', borderRadius: '4px',
    background: 'rgba(200,150,90,0.08)',
    border: '1px solid rgba(200,150,90,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#C8965A', fontSize: '16px', flexShrink: 0,
  };

  const inputStyle = (field) => ({
    width: '100%', background: '#111111',
    border: `1px solid ${focused === field ? '#C8965A' : 'rgba(240,237,230,0.08)'}`,
    borderRadius: '4px', padding: '11px 14px',
    color: '#F0EDE6', fontFamily: "'Outfit', sans-serif",
    fontSize: '14px', outline: 'none',
    boxShadow: focused === field ? '0 0 0 3px rgba(200,150,90,0.1)' : 'none',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    marginBottom: '12px',
  });

  const labelStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', fontWeight: 500,
    color: '#6B6B6B', marginBottom: '5px',
    display: 'block', letterSpacing: '0.02em',
  };

  const submitBtnStyle = {
    width: '100%', fontFamily: "'Outfit', sans-serif",
    fontSize: '14px', fontWeight: 500,
    background: '#F0EDE6', color: '#0D0D0D',
    padding: '13px 24px', borderRadius: '4px',
    border: 'none', cursor: 'pointer',
    transition: 'opacity 150ms ease', marginTop: '4px',
  };

  const successStyle = {
    textAlign: 'center', padding: '48px 24px',
    border: '1px solid rgba(75,171,114,0.2)',
    borderRadius: '4px', background: 'rgba(75,171,114,0.06)',
  };

  return (
    <div style={sectionStyle}>
      <div>
        <div style={overlineStyle}>
          <span style={{ width: '24px', height: '1px', background: '#C8965A', display: 'inline-block' }}></span>
          {t('contact.overline')}
        </div>
        <h2 style={h2Style}>{t('contact.title')}</h2>
        <p style={paraStyle}>
          {t('contact.description')}
        </p>
        <div style={linkRowStyle}>
          {[
            ['✉', t('contact.email'), 'sumhector@gmail.com'],
            ['💼', t('contact.linkedin'), 'linkedin.com/in/hector-herrera-cusi'],
            ['⌥', t('contact.github'), 'github.com/hectorsum']
          ].map(([icon, label, val]) => (
            <div key={label} style={linkItemStyle}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(240,237,230,0.16)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(240,237,230,0.08)'}>
              <div style={iconBox}>{icon}</div>
              <div>
                <div style={{ fontSize: '11px', color: '#6B6B6B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                <div style={{ fontSize: '14px', color: '#F0EDE6' }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {sent ? (
          <div style={successStyle}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: '#4BAB72', marginBottom: '12px' }}>{t('contact.success.title')}</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', color: '#A8A49D' }}>{t('contact.success.description')}</div>
          </div>
        ) : (
          <>
            {error && (
              <div style={{ ...successStyle, borderColor: 'rgba(200,75,75,0.2)', background: 'rgba(200,75,75,0.06)', marginBottom: '20px' }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', color: '#C84B4B' }}>{error}</div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 12px' }}>
              <div><label style={labelStyle}>{t('contact.form.name')}</label><input style={inputStyle('name')} type="text" placeholder={t('contact.form.namePlaceholder')} value={form.name} onChange={e => setForm({...form, name: e.target.value})} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} /></div>
              <div><label style={labelStyle}>{t('contact.form.email')}</label><input style={inputStyle('email')} type="email" placeholder={t('contact.form.emailPlaceholder')} value={form.email} onChange={e => setForm({...form, email: e.target.value})} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} /></div>
            </div>
            <label style={labelStyle}>{t('contact.form.subject')}</label>
            <input style={inputStyle('subject')} type="text" placeholder={t('contact.form.subjectPlaceholder')} value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} />
            <label style={labelStyle}>{t('contact.form.message')}</label>
            <textarea style={{ ...inputStyle('message'), height: '120px', resize: 'none' }} placeholder={t('contact.form.messagePlaceholder')} value={form.message} onChange={e => setForm({...form, message: e.target.value})} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
            <button
              type="submit"
              disabled={loading}
              style={{
                ...submitBtnStyle,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={e => !loading && (e.target.style.opacity='0.85')}
              onMouseLeave={e => !loading && (e.target.style.opacity='1')}>
              {loading ? 'Sending...' : t('contact.form.send')}
            </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
