const experiences = [
  {
    company: 'Mastercard',
    location: 'St. Louis, MO',
    period: 'Jan 2026 – Present',
    role: 'Senior Data Engineer',
    bullets: [
      'Designed and delivered enterprise-scale ETL/ELT pipelines using Azure Data Factory, Azure Databricks (Delta Lake), and Azure Synapse Analytics to process high-volume financial datasets, reducing reporting latency by 30%.',
      'Built scalable batch and near-real-time data processing solutions using PySpark, Spark SQL, and Apache Airflow for pipeline orchestration, improving processing throughput and reliability.',
      'Implemented data lakehouse architecture using Delta Lake and medallion (Bronze/Silver/Gold) patterns to standardize ingestion, transformation, and serving layers.',
      'Engineered ingestion frameworks for structured and semi-structured data (JSON, XML, CSV, fixed-width), applying dbt transformation layers for consistent data modeling.',
      'Integrated ML models into production pipelines using Azure Machine Learning and MLflow for fraud analytics and revenue forecasting.',
      'Automated infrastructure provisioning with Terraform, AWS CDK, and Azure DevOps CI/CD, enabling zero-downtime deployments and full IaC coverage.',
      'Designed executive KPI dashboards in Power BI, partnering with finance and analytics stakeholders to surface actionable operational insights.',
      'Enforced data governance, lineage tracking, and data quality checks using Great Expectations and Azure Purview.',
    ],
    tags: ['Azure Data Factory', 'Databricks', 'Delta Lake', 'PySpark', 'Airflow', 'dbt', 'Terraform', 'Power BI', 'Azure Synapse'],
  },
  {
    company: 'Anthem Elevance Health',
    location: 'St. Louis, MO',
    period: 'Feb 2025 – Dec 2025',
    role: 'AWS Data Engineer',
    bullets: [
      'Architected cloud-native data pipelines with AWS Glue, Lambda, Kinesis, S3, and Amazon Redshift to deliver timely healthcare analytics and Medicaid patient reporting.',
      'Built orchestrated ETL workflows using Apache Airflow, processing structured and semi-structured healthcare data (JSON, XML, flat files) with full reconciliation controls.',
      'Developed dbt models on Snowflake and Amazon Redshift to standardize healthcare data marts, reducing report generation time by 40% for healthcare operations teams.',
      'Created dimensional data models (star schema, SCD Type 2) in Azure Synapse Analytics and Databricks, enabling self-service reporting for clinical and operational analytics.',
      'Ensured HIPAA-compliant data handling by implementing secure access controls, audit logging, encryption, and governance policies across all data assets.',
      'Improved data pipeline reliability to 99.8% SLA by automating monitoring, alerting, and validation using CloudWatch, Lambda, and Great Expectations.',
    ],
    tags: ['AWS Glue', 'Amazon Redshift', 'Kinesis', 'Snowflake', 'dbt', 'Airflow', 'HIPAA', 'CloudWatch', 'Databricks'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <span className="section__label">03. Experience</span>
        <h2 className="section__title">Work Experience</h2>
        <div className="section__divider" />

        <div className="experience__timeline">
          {experiences.map((exp) => (
            <div key={exp.company} className="exp-card fade-up">
              <div className="exp-card__header">
                <div className="exp-card__meta">
                  <h3 className="exp-card__role">{exp.role}</h3>
                  <p className="exp-card__company">
                    <span className="exp-card__company-name">{exp.company}</span>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <span>{exp.location}</span>
                  </p>
                </div>
                <span className="exp-card__period">{exp.period}</span>
              </div>

              <ul className="exp-card__bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="exp-card__arrow">▹</span>
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
