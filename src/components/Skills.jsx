const skillGroups = [
  {
    category: 'AI & Autonomous Agents',
    icon: '🤖',
    skills: [
      'Agentforce (Agent Builder, Prompt Builder, Agent Actions)',
      'Einstein Copilot',
      'Einstein AI (Prediction Builder, NLP, GenAI)',
      'Salesforce AI Platform',
      'Retrieval-Augmented Generation (RAG)',
    ],
  },
  {
    category: 'Data & Analytics',
    icon: '📊',
    skills: [
      'Salesforce Data Cloud',
      'Data Streams & Identity Resolution',
      'Calculated Insights & Activation',
      'CRM Analytics / Tableau CRM',
      'Data Graphs & Zero-Copy Data Federation',
    ],
  },
  {
    category: 'Industry Clouds',
    icon: '☁️',
    skills: [
      'Financial Services Cloud (FSC)',
      'Health Cloud (HL7/FHIR)',
      'Consumer Goods Cloud',
      'Communications Cloud (EPC, CPQ)',
      'Order Management',
    ],
  },
  {
    category: 'OmniStudio',
    icon: '⚡',
    skills: [
      'OmniScripts',
      'FlexCards',
      'DataRaptors (Extract/Load/Transform/Turbo)',
      'Integration Procedures',
      'Document Generation',
    ],
  },
  {
    category: 'Development',
    icon: '💻',
    skills: [
      'Apex (Triggers, Batch, Queueable, REST)',
      'Lightning Web Components (LWC)',
      'Aura Components',
      'Salesforce Flow & Platform Events',
      'Change Data Capture (CDC) & GraphQL API',
    ],
  },
  {
    category: 'Integration',
    icon: '🔗',
    skills: [
      'MuleSoft Anypoint Platform',
      'REST / SOAP APIs',
      'HL7/FHIR',
      'Salesforce Connect & External Services',
      'Event-Driven Architecture',
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      'Copado & Gearset',
      'GitHub & Azure DevOps',
      'Salesforce DevOps Center',
      'Jenkins & SFDX',
      'VS Code, Jira, Confluence',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="accent mono">02.</span> Technical Skills
        </h2>
        <p className="section__subtitle">2024 – 2026 focus areas</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card fade-up">
              <div className="skill-card__header">
                <span className="skill-card__icon">{group.icon}</span>
                <h3 className="skill-card__title">{group.category}</h3>
              </div>
              <ul className="skill-card__list">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="accent">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
