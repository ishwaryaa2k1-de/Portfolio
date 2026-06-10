const stats = [
  { value: '4+',    label: 'Years of Experience' },
  { value: '30%',   label: 'Pipeline Latency Reduced' },
  { value: '99.8%', label: 'SLA Achieved' },
  { value: '40%',   label: 'Faster Report Generation' },
]

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <span className="section__label">01. About</span>
        <h2 className="section__title">About Me</h2>
        <div className="section__divider" />

        <div className="about__grid">
          <div className="about__text fade-up">
            <p>
              I&apos;m a <strong style={{ color: 'var(--text)' }}>Senior Data Engineer</strong> with
              4+ years of experience designing and delivering cloud-native data solutions across{' '}
              <span className="accent">AWS, Azure, and GCP</span>. I specialize in building
              end-to-end ETL/ELT pipelines, real-time streaming architectures, and scalable data
              warehouse systems that empower data-driven decision-making.
            </p>
            <p>
              My expertise spans{' '}
              <span className="accent">Apache Spark, Kafka, Airflow, and dbt</span>, alongside
              modern data lakehouse patterns using Delta Lake and Apache Iceberg. I&apos;m passionate
              about Medallion Architecture, data quality governance, and building automated
              infrastructure that teams can rely on at scale.
            </p>
            <p>
              I hold a <span className="accent">Master&apos;s in Management Information Systems</span>{' '}
              from the University of Memphis (Dec 2025) and have delivered high-impact solutions at
              Mastercard and Anthem Elevance Health — including HIPAA-compliant healthcare pipelines
              and enterprise financial data platforms.
            </p>

            <div className="about__core-competencies">
              <h3>Core Competencies</h3>
              <div className="competency-grid">
                {[
                  'Cloud-Native Data Pipelines',
                  'ETL/ELT & Data Modeling',
                  'Real-Time Streaming (Kafka)',
                  'Data Lakehouse Architecture',
                  'dbt & Dimensional Modeling',
                  'HIPAA & Data Governance',
                  'Infrastructure as Code',
                  'Power BI & BI Dashboards',
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
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
