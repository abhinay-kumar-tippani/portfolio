export default function DemoSection() {
  return (
    <section id="demo" style={{ padding: '100px var(--space-10, 40px)', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563EB', marginBottom: '8px' }}>
            LIVE DEMO
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1A1A2E', fontFamily: 'Bricolage Grotesque, sans-serif', marginBottom: '12px' }}>
            See What Your Clinic Website Will Look Like
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '560px', lineHeight: 1.7 }}>
            I built a complete sample clinic website so you can see exactly the quality and professionalism you'll get. Click below to explore it live.
          </p>
        </div>

        {/* Demo card */}
        <div style={{
          border: '0.5px solid #E5E7EB',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        }}>
          {/* Browser bar mockup */}
          <div style={{
            background: '#F3F4F6',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '0.5px solid #E5E7EB',
          }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F09595' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF9F27' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#97C459' }} />
            </div>
            <div style={{
              flex: 1,
              background: '#fff',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '12px',
              color: '#6B7280',
              border: '0.5px solid #E5E7EB',
            }}>
              dr-sharma-cardiology-demo.vercel.app
            </div>
          </div>

          {/* Demo preview area */}
          <div style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)',
            padding: '48px 40px',
            textAlign: 'center',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <div style={{ fontSize: '48px' }}>🏥</div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A2E', fontFamily: 'Bricolage Grotesque, sans-serif' }}>Dr. Priya Sharma</div>
              <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>Cardiologist · Hyderabad · MBBS, MD Cardiology</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Appointment Booking', 'Doctor Profile', 'Services', 'Contact & Map', 'WhatsApp Button', 'Mobile Friendly'].map(f => (
                <span key={f} style={{
                  fontSize: '12px',
                  background: '#fff',
                  border: '0.5px solid #BFDBFE',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  color: '#185FA5',
                }}>✓ {f}</span>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#854F0B', background: '#FAEEDA', padding: '8px 16px', borderRadius: '8px', border: '0.5px solid #FAC775' }}>
              ⚠️ Demo coming soon — being built now. Check back in 2 days.
            </p>
          </div>

          {/* Bottom CTA bar */}
          <div style={{
            background: '#1A1A2E',
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
              Want a website exactly like this for your clinic?
            </p>

            <a
              href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%20saw%20your%20demo%20clinic%20website%20and%20I%27m%20interested%20in%20one%20for%20my%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Me Now
            </a>
          </div>
        </div>

        {/* Features grid below demo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '32px',
        }}>
          {[
            { icon: '📅', title: 'Appointment Booking', desc: 'Patients can request appointments directly from your website' },
            { icon: '📍', title: 'Google Maps Integration', desc: 'Show your exact clinic location so patients can find you easily' },
            { icon: '📱', title: 'Mobile First', desc: '80% of patients search on phone. Your site works perfectly on all devices' },
            { icon: '🔍', title: 'Google SEO Ready', desc: 'Show up when patients search "best cardiologist near me" in Hyderabad' },
          ].map(f => (
            <div key={f.title} style={{
              background: '#F8FAFC',
              border: '0.5px solid #E5E7EB',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '12px', color: '#6B7280', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}