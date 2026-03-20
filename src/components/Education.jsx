import React from 'react';

const EDUCATION = [
  {
    degree: 'M. Tech — Information Technology',
    major: 'Majored in Software Engineering',
    school: 'Indian Institute of Information Technology, Allahabad',
    shortName: 'IIIT Allahabad',
    period: 'July 2012 – July 2014',
    achievement: 'CGPA: 9.55',
  },
  {
    degree: 'B.E. — Computer Science & Engineering',
    major: 'RGPV University',
    school: 'Shri Ram Institute of Technology, Jabalpur',
    shortName: 'SRIT Jabalpur',
    period: 'July 2008 – June 2012',
    achievement: 'Percentage: 76.09%',
  },
];

function Education() {
  return (
    <section id="education">
      <div className="section-heading reveal">
        <span className="section-number">03.</span>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {EDUCATION.map((edu) => (
          <div key={edu.school} className="edu-card reveal">
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-period">{edu.period}</div>
            <div className="edu-detail">
              <strong>{edu.achievement}</strong>
              {edu.major && <span> &nbsp;·&nbsp; {edu.major}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
