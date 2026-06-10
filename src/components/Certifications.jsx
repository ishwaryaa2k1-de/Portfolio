const certs = [
  {
    name: 'Salesforce Certified Administrator',
    abbr: 'ADM-201',
    color: '#00a1e0',
    icon: '🏅',
    description: 'Core Salesforce platform administration, security, automation, and data management.',
  },
  {
    name: 'Salesforce Certified Platform Developer I',
    abbr: 'PD1',
    color: '#64ffda',
    icon: '💻',
    description: 'Apex, LWC, SOQL/SOSL, declarative & programmatic development on the Salesforce platform.',
  },
  {
    name: 'Salesforce Certified Application Architect',
    abbr: 'APP-ARCH',
    color: '#f7c59f',
    icon: '🏗️',
    description: 'Data modeling, security architecture, integration, and declarative/programmatic design patterns.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="accent mono">05.</span> Certifications
        </h2>

        <div className="certs__grid">
          {certs.map((cert) => (
            <div key={cert.name} className="cert-card fade-up">
              <div className="cert-card__icon">{cert.icon}</div>
              <div className="cert-card__badge mono" style={{ color: cert.color }}>{cert.abbr}</div>
              <h3 className="cert-card__name">{cert.name}</h3>
              <p className="cert-card__desc">{cert.description}</p>
              <div className="cert-card__badge-bar" style={{ background: cert.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
