import React, { useState } from 'react';

const EXPERIENCE = [
  {
    id: 'atlassian',
    company: 'Atlassian',
    role: 'Senior Software Engineer',
    period: 'Dec 2022 – Present',
    location: 'Bangalore',
    description:
      'Part of the Cloud Transition Org (Data Portability) and then the Ecosystem Organization, building a platform for 3P connectors to externalize the Teamwork Graph. Designed and architected a unified platform for backup/restore capabilities across Atlassian products.',
    bullets: [
      'Completely re-architected a scalable and distributed solution for Media transfer, enhancing backup and restore performance.',
      'Built the core platform for 3rd party connectors to externalize the Teamwork graph via Forge Apps.',
      'Designed and developed a new streaming solution for migrating third-party data to Jira Cloud.',
      'Created multiple services to enable backup and restore of Jira and Confluence while managing downstream service workload.',
      'Designed general-purpose libraries including Load Levelling pattern and Rate Limiter.',
      'Created an automated workflow for data collection using Rovo AI — converts Jira tickets to pull requests with minimal human intervention.',
      'Actively mentored junior engineers and onboarded multiple engineers to the team.',
    ],
    tech: ['Kotlin', 'Java', 'NodeJS', 'PostgreSQL', 'DynamoDB', 'Redis', 'AWS'],
  },
  {
    id: 'compass',
    company: 'Compass Inc.',
    role: 'Senior Software Engineer',
    period: 'Mar 2022 – Dec 2022',
    location: 'Bangalore',
    description:
      'Part of the Data Platforms Team, responsible for onboarding new feeds and keeping feed snapshots up to date using highly scalable and distributed architecture to pull listing data from various MLS sources across the US.',
    bullets: [
      'Onboarded data from around 30 feeds to the platform.',
      'Created multiple subscribers to ingest large-scale incoming data.',
      'Implemented concrete solutions to multiple production incidents that led to Sev2 issue resolution.',
      'Actively contributed to design discussions on distributed, scalable, and efficient architecture for pulling listing data from various MLSes in the US.',
    ],
    tech: ['Java', 'Python', 'Bazel', 'PostgreSQL', 'MongoDB', 'Redis', 'gRPC', 'Apache Thrift'],
  },
  {
    id: 'tracxn',
    company: 'Tracxn Technology',
    role: 'Senior Technology Lead',
    period: 'May 2018 – Mar 2022',
    location: 'Bangalore',
    description:
      'Collaborated on multiple microservices responsible for user management, authentication and authorisation, export generation and MIS. Led a team of 5 developers.',
    bullets: [
      'Designed and developed a distributed and scalable framework for platform exports based on views.',
      'Created a URL-based authorisation framework to control access for internal users.',
      'Designed various user login flows including magic-links/OpenID and multiple profile management channels.',
      'Actively involved in design discussions on user and resource management lifecycle.',
      'Led fine-tuning of user/client authorisation across all services requiring common authorisation points.',
      'Led a team of 5 developers.',
    ],
    tech: ['Java', 'Groovy', 'Node.js', 'JavaScript (ES6)', 'MySQL', 'Redis', 'MongoDB', 'Spring Boot', 'ReactJS', 'OAuth 2.0', 'Apache POI'],
  },
  {
    id: 'progress',
    company: 'Progress Software',
    role: 'Senior Software Engineer I',
    period: 'Oct 2015 – May 2018',
    location: 'Hyderabad',
    description:
      'Worked on Progress Developer Studio for OpenEdge (PDSOE) — an integrated ABL development environment built on the Eclipse plugin-based framework for building UI, business logic, managing data sources, and deploying code.',
    bullets: [
      'Developed multiple plugins for the ABL environment including a refactoring plugin.',
      'Fine-tuned existing plugins related to DB navigator, find references, visual designer.',
      'Involved in performance enhancements and owned the core model building and Abstract Syntax Tree (AST) generation of the product.',
    ],
    tech: ['Java', 'Eclipse Plugin Dev', 'ANTLR', 'Ant', 'OSGi', 'Eclipse RCP', 'YourKit'],
  },
  {
    id: 'verizon',
    company: 'Verizon Data Services',
    role: 'Software Engineer',
    period: 'Aug 2014 – Oct 2015',
    location: 'Hyderabad',
    description:
      'Worked on GWP E-Bonding API and CPSST (Customer Profile Self Service Tool) — creating APIs that allow external customers to request quoting details, self-register, and leverage the platform independently.',
    bullets: [
      'Created SOAP and REST web services APIs for external customer quoting and registration.',
      'Developed and tested end-to-end flows for different products across multiple scenarios.',
    ],
    tech: ['Java', 'JavaScript', 'Web Services', 'XSLT', 'SOAP', 'XML', 'REST', 'Oracle WebLogic'],
  },
];

function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const active = EXPERIENCE[activeTab];

  return (
    <section id="experience">
      <div className="section-heading reveal">
        <span className="section-number">01.</span>
        <h2>Work Experience</h2>
      </div>

      <div className="experience-container reveal">
        <div className="exp-tabs">
          {EXPERIENCE.map((exp, i) => (
            <button
              key={exp.id}
              className={`exp-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              type="button"
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="exp-content">
          <div className="exp-panel active">
            <h3 className="exp-role">
              {active.role} <span>@ {active.company}</span>
            </h3>
            <div className="exp-company-info">
              <span className="exp-period">{active.period}</span>
              <span className="exp-location">{active.location}</span>
            </div>
            <p className="exp-description">{active.description}</p>
            <ul className="exp-bullets">
              {active.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="exp-tech">
              {active.tech.map((t) => (
                <span key={t} className="exp-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
