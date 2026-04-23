// ContactSection.jsx — Contact page
const ContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [focused, setFocused] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const sectionStyle = {
    maxWidth: '1200px', margin: '0 auto',
    padding: '140px 64px 96px',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '96px', alignItems: 'start',
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
          Contact
        </div>
        <h2 style={h2Style}>Let's build<br />something <em style={{ color: '#C8965A', fontStyle: 'italic' }}>together.</em></h2>
        <p style={paraStyle}>
          Have a project in mind? I'm available for freelance work.
          Send me a message and I'll get back to you within 24 hours.
        </p>
        <div style={linkRowStyle}>
          {[['✉', 'Email', 'sumhector@gmail.com'], ['💼', 'LinkedIn', 'linkedin.com/in/hector-herrera-cusi'], ['⌥', 'GitHub', 'github.com/hectorsum']].map(([icon, label, val]) => (
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
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: '#4BAB72', marginBottom: '12px' }}>Message sent!</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', color: '#A8A49D' }}>Thanks for reaching out. I'll be in touch soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 12px' }}>
              <div><label style={labelStyle}>Name</label><input style={inputStyle('name')} type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} /></div>
              <div><label style={labelStyle}>Email</label><input style={inputStyle('email')} type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} /></div>
            </div>
            <label style={labelStyle}>Subject</label>
            <input style={inputStyle('subject')} type="text" placeholder="What's the project about?" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} />
            <label style={labelStyle}>Message</label>
            <textarea style={{ ...inputStyle('message'), height: '120px', resize: 'none' }} placeholder="Tell me about your project, timeline, and budget..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
            <button type="submit" style={submitBtnStyle}
              onMouseEnter={e => e.target.style.opacity='0.85'}
              onMouseLeave={e => e.target.style.opacity='1'}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { ContactSection });
