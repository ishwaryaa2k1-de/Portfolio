const stats = [
  { value: '11+', label: 'Years Experience' },
  { value: '2000+', label: 'Advisors Impacted' },
  { value: '500+', label: 'Field Sales Reps' },
  { value: '35+', label: 'OmniStudio Processes Built' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="accent mono">01.</span> About Me
        </h2>

        <div className="about__grid">
          <div className="about__text fade-up">
            <p>
              I&apos;m a <span className="accent">Senior Salesforce &amp; AI Industry Cloud Consultant</span> with
              over 11 years of experience architecting and delivering enterprise Salesforce solutions
              across Financial Services, Healthcare, Consumer Goods, and Communications industries.
            </p>
            <p>
              My expertise spans <span className="accent">Agentforce &amp; Einstein AI</span>, enabling
              AI-powered automation — from autonomous advisory recommendations and proactive client
              alerts to Retrieval-Augmented Generation (RAG) workflows. I specialize in building
              scalable platforms using <span className="accent">Salesforce Data Cloud</span>,
              OmniStudio, Apex, LWC, and MuleSoft integrations.
            </p>
            <p>
              I lead cross-functional Agile teams across time zones, driving releases on schedule
              while meeting <span className="accent">SOX, FINRA, GDPR, and HL7/FHIR</span> compliance
              requirements. I&apos;m passionate about intelligent automation, real-time data activation,
              and building scalable platform designs in SAFe environments.
            </p>

            <div className="about__core-competencies">
              <h3>Core Competencies</h3>
              <div className="competency-grid">
                {[
                  'FSC / Health Cloud / CGC',
                  'Agentforce & Einstein AI',
                  'OmniStudio Suite',
                  'Salesforce Data Cloud',
                  'MuleSoft / REST / SOAP / FHIR',
                  'LWC / Apex / Flow',
                  'CI/CD: Copado, Gearset',
                  'Agile / Scrum / SAFe',
                ].map((comp) => (
                  <span key={comp} className="competency-tag">
                    <span className="accent">▹</span> {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about__stats fade-up">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-card__value accent">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
