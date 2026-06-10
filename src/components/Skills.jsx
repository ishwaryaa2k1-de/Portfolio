const skillGroups = [
  {
    category: 'Languages & Query',
    icon: '💻',
    skills: [
      'Python',
      'SQL / Spark SQL',
      'PySpark',
      'Scala',
      'Java',
      'Snowflake SQL',
    ],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    skills: [
      'AWS (Glue, Lambda, Kinesis, S3, Redshift, CloudWatch, CDK)',
      'Microsoft Azure (ADF, Databricks, Synapse Analytics, DevOps, ML)',
      'GCP (BigQuery, Dataflow, Pub/Sub, Cloud Functions, GKE)',
    ],
  },
  {
    category: 'Big Data & Streaming',
    icon: '⚡',
    skills: [
      'Apache Spark & PySpark',
      'Apache Kafka',
      'Apache Airflow',
      'Apache Beam & Flink',
      'Apache Pulsar',
      'Delta Lake & Apache Iceberg',
      'Hadoop / HDFS',
    ],
  },
  {
    category: 'Data Warehousing & Modeling',
    icon: '🗄️',
    skills: [
      'Snowflake',
      'Amazon Redshift',
      'Azure Synapse Analytics',
      'BigQuery',
      'dbt (data build tool)',
      'Star / Snowflake Schema & SCD Types',
      'Medallion Architecture (Bronze / Silver / Gold)',
    ],
  },
  {
    category: 'DevOps & Orchestration',
    icon: '🛠️',
    skills: [
      'Apache Airflow',
      'Docker & Kubernetes',
      'Terraform & Ansible',
      'GitHub Actions & Azure DevOps CI/CD',
      'MLflow',
      'AWS CDK',
      'Jenkins',
    ],
  },
  {
    category: 'Data Quality & Governance',
    icon: '🔍',
    skills: [
      'Great Expectations',
      'dbt Tests & Data Lineage',
      'HIPAA Compliance',
      'Azure Purview',
      'Data Catalog & Metadata Management',
      'CloudWatch Monitoring & Alerting',
    ],
  },
  {
    category: 'Visualization & BI',
    icon: '📊',
    skills: [
      'Power BI',
      'Tableau',
      'Looker',
      'AWS QuickSight',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section__label">02. Skills</span>
        <h2 className="section__title">Technical Skills</h2>
        <div className="section__divider" />

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
