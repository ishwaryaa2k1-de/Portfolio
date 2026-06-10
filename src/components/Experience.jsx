const experiences = [
  {
    company: 'TIAA',
    location: 'Charlotte, NC',
    period: 'Nov 2024 – Present',
    role: 'Senior Salesforce FSC Consultant',
    bullets: [
      'Architected and delivered end-to-end Salesforce FSC implementation for a Fortune 100 financial services firm, enabling scalable client onboarding, household management, financial account tracking, and advisor workflows for 2,000+ financial advisors.',
      'Built 15+ OmniStudio processes (OmniScripts, FlexCards, DataRaptors, Integration Procedures) automating client onboarding, loan origination, claims processing, and wealth management workflows — cutting manual processing time by 35%.',
      'Developed Apex triggers, LWC components, Salesforce Flows, and Platform Events to automate customer lifecycle management, advisor task creation, and compliance alerts across 5 business units.',
      'Integrated Salesforce FSC with core banking systems, policy administration platforms, and third-party financial providers via MuleSoft, REST, SOAP, and Salesforce Connect — supporting real-time account sync and transaction processing at scale.',
      'Deployed Salesforce Data Cloud to unify structured and unstructured customer data across 10+ source systems; implemented identity resolution and calculated insights to power Agentforce AI agents for advisor and service team assistance.',
      'Implemented Einstein AI and Agentforce to deliver AI-powered advisory recommendations, automated case routing, and proactive client alerts — improving service team response efficiency by 30%.',
      'Led security architecture including role-based access, permission sets, sharing rules, and Shield encryption to meet SOX, FINRA, and GDPR compliance requirements.',
      'Drove Agile ceremonies (sprint planning, retrospectives, story grooming) as technical lead, coordinating onshore and offshore teams across 3 time zones to deliver releases on schedule.',
    ],
    tags: ['FSC', 'Agentforce', 'OmniStudio', 'Data Cloud', 'MuleSoft', 'Einstein AI', 'LWC', 'Apex'],
  },
  {
    company: 'Sonata Software',
    location: 'Texas (Remote)',
    period: 'Sep 2021 – Oct 2023',
    role: 'Salesforce Industry Cloud Consultant',
    bullets: [
      'Led Salesforce Consumer Goods Cloud implementation for a Top-10 CPG manufacturer — enabling visit planning, retail execution, inventory monitoring, and promotion management across 500+ field sales representatives.',
      'Configured CG Cloud capabilities (Store Audits, Retail Execution, Account Insights, Promotion Management) that improved field sales productivity by 25% and in-store compliance tracking by 40%.',
      'Developed 20+ OmniStudio components (OmniScripts, FlexCards, DataRaptors, Integration Procedures) to streamline merchandising activities, store visit workflows, and customer interaction capture.',
      'Integrated Salesforce with SAP, Oracle ERP, POS systems, distributor platforms, and eCommerce applications via MuleSoft and REST APIs achieving near-real-time inventory synchronization across 3,000+ retail locations.',
    ],
    tags: ['Consumer Goods Cloud', 'OmniStudio', 'MuleSoft', 'SAP Integration', 'REST APIs', 'Apex'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="accent mono">03.</span> Work Experience
        </h2>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="exp-card fade-up">
              <div className="exp-card__header">
                <div className="exp-card__meta">
                  <h3 className="exp-card__role">{exp.role}</h3>
                  <p className="exp-card__company">
                    <span className="accent">{exp.company}</span>
                    <span className="exp-card__separator"> · </span>
                    <span className="exp-card__location">{exp.location}</span>
                  </p>
                </div>
                <span className="exp-card__period mono accent">{exp.period}</span>
              </div>

              <ul className="exp-card__bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>
                    <span className="accent exp-card__arrow">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="exp-card__tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
