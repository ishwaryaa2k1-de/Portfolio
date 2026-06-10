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
  {
    company: 'United India Insurance Co. Ltd.',
    location: 'Bengaluru, India',
    period: 'Aug 2022 – Dec 2023',
    role: 'GCP Data Engineer',
    bullets: [
      'Developed scalable ETL/ELT pipelines using Google Cloud Dataflow, Apache Beam, and BigQuery to process large insurance and financial datasets, enabling timely delivery for downstream analytics.',
      'Built streaming architectures with Cloud Pub/Sub, Apache Kafka, Apache Pulsar, and Cloud Functions for low-latency fraud monitoring and real-time transaction processing.',
      'Optimized BigQuery performance through partitioning, clustering, and query tuning, reducing query execution costs by 35% and improving performance by 60%.',
      'Implemented ML workflows using TensorFlow, AI Platform, and BigQuery ML for fraud detection and customer risk scoring.',
      'Automated deployment and orchestration using Docker, GKE, Jenkins, and Ansible for fault-tolerant, scalable data operations.',
      'Designed interactive dashboards in Looker, Tableau, and Power BI to support risk management and operational analytics.',
    ],
    tags: ['GCP', 'BigQuery', 'Dataflow', 'Apache Beam', 'Pub/Sub', 'Kafka', 'BigQuery ML', 'GKE', 'Looker'],
  },
  {
    company: 'Razorpay',
    location: 'Bengaluru, India',
    period: 'Apr 2021 – Jun 2022',
    role: 'Data Engineer',
    bullets: [
      'Built cloud-native ETL pipelines on AWS (Glue, Lambda, Kinesis, S3, Redshift) for transactional and operational data delivery to downstream reporting systems.',
      'Designed real-time streaming architectures using Kinesis Data Streams and event-driven serverless patterns for low-latency operational analytics.',
      'Developed dbt transformation models and star/snowflake schema warehouses in Amazon Redshift, improving analytical query performance by 50%.',
      'Automated data quality validation, monitoring, and alerting using CloudWatch and Lambda, reducing incident resolution time by 40%.',
      'Designed anomaly detection workflows to identify operational inefficiencies, improving resource utilization by 25%.',
    ],
    tags: ['AWS Glue', 'Kinesis', 'Amazon Redshift', 'dbt', 'Lambda', 'CloudWatch', 'Snowflake Schema'],
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
