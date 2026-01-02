import React from "react";
import './style.css'


interface TemplateProps {
  data: any;
}

const Template1: React.FC<TemplateProps> = ({ data = {} }) => {
  const experiences = data.experiences?.length
    ? data.experiences
    : [
        {
          position: "Senior Software Engineer",
          company: "Tech Solutions Inc.",
          startDate: "2020",
          endDate: "Present",
          description: `Led development of microservices architecture serving 2M+ daily users
Mentored team of 5 junior developers, improving code quality by 40%
Implemented CI/CD pipelines reducing deployment time by 60%`,
        },
        {
          position: "Software Engineer",
          company: "Digital Innovations Co.",
          startDate: "2016",
          endDate: "2020",
          description: `Developed RESTful APIs handling 500K+ requests daily
Built responsive web applications using React and Node.js
Optimized database queries improving performance by 50%`,
        },
      ];

  const education = data.education?.length
    ? data.education
    : [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University of California, Berkeley",
          graduationDate: "2012 - 2016",
        },
      ];

  const skills = data.skills
    ? data.skills.split(",")
    : [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Git",
        "Agile",
      ];

  return (
    <div className="resume">
      {/* HEADER */}
      <header className="header">
        <div className="name-title">
          <h1>{data.fullname || "Jhon Anderson"}</h1>
          <p className="title">{data.profession || experiences[0]?.position || "Senior Software Engineer"}</p>
        </div>
        <div className="contact">
          <p>{data.email || "john.anderson@email.com"}</p>
          <p>{data.phone || "+1 (555) 123-4567"}</p>
          <p>{data.location || "San Francisco, CA"}</p>
          <p>{data.linkedin || "linkedin.com/in/johnanderson"}</p>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          {data.summary ||
            "Results-driven software engineer with 8+ years of experience in full-stack development. Specialized in building scalable web applications using modern technologies. Proven track record of leading teams and delivering high-impact projects on time."}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <h2>Work Experience</h2>
        {experiences.map((job: any, idx: number) => (
          <div className="job" key={idx}>
            <div className="job-header">
              <div>
                <h3>{job.position || "Position Title"}</h3>
                <p className="company">{job.company || "Company Name"}</p>
              </div>
              <p className="date">{job.startDate} - {job.endDate}</p>
            </div>
            <ul>
              {job.description
                .split("\n")
                .map((desc: string, i: number) => <li key={i}>{desc}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="education">
        <h2>Education</h2>
        {education.map((edu: any, idx: number) => (
          <div className="edu-item" key={idx}>
            <div className="edu-header">
              <div>
                <h3>{edu.degree || "Degree Title"}</h3>
                <p className="school">{edu.school || "University Name"}</p>
              </div>
              <p className="date">{edu.graduationDate || "Graduation Year"}</p>
            </div>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill: string, idx: number) => (
            <span className="skill" key={idx}>
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Template1;
