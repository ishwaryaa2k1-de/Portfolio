const projects = [
  {
    title: 'FSC Client Onboarding Automation',
    description:
      'Redesigned the client onboarding journey from 12 manual steps to a fully automated 4-step digital workflow. Integrated with KYC/AML platforms and core banking via MuleSoft. Agentforce AI agent handles 60% of routine onboarding queries autonomously.',
    highlights: [
      '12 → 4 step onboarding journey',
      '60% queries handled by Agentforce autonomously',
      'KYC/AML & core banking integration via MuleSoft',
      'Real-time document verification & compliance checks',
    ],
    tags: ['Salesforce FSC', 'OmniStudio', 'DataRaptors', 'Apex', 'LWC', 'MuleSoft', 'Data Cloud', 'Agentforce'],
    company: 'TIAA',
  },
  {
    title: 'Advisor Household & Relationship Intelligence',
    description:
      'Built household hierarchy and relationship network models in FSC integrated with Data Cloud identity resolution across 8 source systems. CRM Analytics dashboards surface AUM trends and next-best-action recommendations to advisors in real time.',
    highlights: [
      'Household & relationship network models across 8 source systems',
      'Real-time AUM trend analytics via CRM Analytics',
      'Next-best-action AI recommendations for advisors',
      'Data Cloud identity resolution & zero-copy federation',
    ],
    tags: ['Salesforce FSC', 'Data Cloud', 'Einstein AI', 'CRM Analytics', 'LWC', 'REST APIs'],
    company: 'TIAA',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="accent mono">04.</span> Featured Projects
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card fade-up">
              <div className="project-card__top">
                <svg className="project-card__folder accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="project-card__company mono">{project.company}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h) => (
                  <li key={h}><span className="accent">▹</span> {h}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag--sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
