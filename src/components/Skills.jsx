import React from 'react';

const SKILLS = [
  {
    category: 'AI / LLM Platforms',
    tags: ['OpenAI', 'AWS Bedrock', 'MCP', 'Agents', 'Prompt Security', 'Evaluation Frameworks'],
  },
  {
    category: 'Languages',
    tags: ['Java', 'Kotlin', 'Python', 'JavaScript (ES6)', 'Groovy', 'Node.js'],
  },
  {
    category: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    category: 'Cloud & Infrastructure',
    tags: ['AWS', 'DynamoDB', 'Bazel'],
  },
  {
    category: 'Frameworks & Libraries',
    tags: ['Spring Boot', 'ReactJS', 'OAuth 2.0', 'Apache POI', 'gRPC', 'Apache Thrift', 'ANTLR'],
  },
  {
    category: 'Architecture & Patterns',
    tags: ['Distributed Systems', 'Microservices', 'Load Levelling', 'Rate Limiting', 'Streaming', 'Backup & Restore'],
  },
  {
    category: 'Tools & Platforms',
    tags: ['Eclipse Plugin Dev', 'OSGi', 'Eclipse RCP', 'Forge Apps', 'Jira', 'Confluence'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-heading reveal">
        <span className="section-number">02.</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <div
            key={group.category}
            className="skill-card reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="skill-card-title">{group.category}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
