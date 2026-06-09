export const metadata = {
  title: 'Privacy Policy – Nuvoco Shabhash Card',
  description: 'Privacy policy for the Nuvoco Vistas Corp Ltd internal employee reward and recognition portal.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{
      maxWidth: '720px',
      margin: '48px auto',
      padding: '0 24px 48px',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#0F172A',
      lineHeight: '1.7',
    }}>
      <a href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontSize: '13px', color: '#64748B', textDecoration: 'none',
        marginBottom: '32px',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Back to form
      </a>

      <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1C5E38' }}>
        Nuvoco Vistas Corp Ltd
      </div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '6px', letterSpacing: '-0.4px' }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '40px' }}>
        Last updated: June 2026
      </p>

      <Section title="About This Application">
        <p>
          This application is the <strong>Shabhash Card Portal</strong> — an internal reward and recognition
          system operated by <strong>Nuvoco Vistas Corp Ltd, Sonadih Cement Plant</strong>. It is used
          exclusively by authorised managers and supervisors to submit recognition awards for employees
          who demonstrate outstanding safety behaviour or operational excellence.
        </p>
        <p style={{ marginTop: '12px' }}>
          This portal is <strong>not a public-facing service</strong>. It does not sell products, solicit
          payments from visitors, or distribute software. Access is limited to internal plant personnel.
        </p>
      </Section>

      <Section title="Data We Collect">
        <p>When a Shabhash Card is submitted, the following information is collected:</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <li>Employee name and Employee ID</li>
          <li>Department and contractor affiliation (where applicable)</li>
          <li>Phone number (mobile)</li>
          <li>Description of the recognised behaviour or achievement</li>
          <li>Name and department of the submitting manager</li>
          <li>Award type (Safety Award or Leap-O Excellence)</li>
        </ul>
      </Section>

      <Section title="How We Use This Data">
        <p>
          All data is used <strong>solely for internal reward and recognition purposes</strong> within
          Nuvoco Vistas Corp Ltd. Specifically:
        </p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <li>Submissions are recorded in a secure internal Google Sheet accessible only to authorised HR and safety personnel.</li>
          <li>Phone numbers are used to send a reward notification to the employee via an internal Telegram bot. No marketing or promotional messages are ever sent.</li>
          <li>Data is never sold, shared with third parties, or used for any purpose outside of this programme.</li>
        </ul>
      </Section>

      <Section title="Data Storage & Security">
        <p>
          Submission data is stored in Google Workspace (Google Sheets) under Nuvoco&apos;s internal
          Google account, protected by Google&apos;s enterprise security infrastructure. Access is
          restricted to designated HR and safety staff only.
        </p>
        <p style={{ marginTop: '12px' }}>
          Phone numbers are not stored in any external database beyond the internal spreadsheet and
          are not accessible to the public.
        </p>
      </Section>

      <Section title="Cookies & Tracking">
        <p>
          This application does not use cookies, tracking pixels, analytics scripts, or any
          third-party advertising technology. No personal data is shared with ad networks.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          Employees may request correction or deletion of their data by contacting the HR department
          at Sonadih Cement Plant. Requests will be processed within 15 working days.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For any questions regarding this privacy policy or your data, please contact:
        </p>
        <p style={{ marginTop: '12px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '14px' }}>
          <strong>HR Department</strong><br />
          Nuvoco Vistas Corp Ltd<br />
          Sonadih Cement Plant, Chhattisgarh, India
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '36px' }}>
      <h2 style={{
        fontSize: '16px', fontWeight: '700', color: '#0F172A',
        marginBottom: '12px', paddingBottom: '10px',
        borderBottom: '1px solid #E2E8F0',
        letterSpacing: '-0.1px',
      }}>
        {title}
      </h2>
      <div style={{ fontSize: '15px', color: '#334155' }}>{children}</div>
    </section>
  );
}
