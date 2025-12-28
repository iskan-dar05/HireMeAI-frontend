import React from "react";

interface TemplateProps {
  data: any;
}

const Template1: React.FC<TemplateProps> = ({ data = {} }) => {
  const experiences = data.experiences?.length
    ? data.experiences
    : [
        {
          position: "Frontend Developer",
          company: "Tech Company",
          startDate: "2022",
          endDate: "Present",
          description:
            "Developed modern web applications using React and collaborated with cross-functional teams.",
        },
      ];

  const education = data.education?.length
    ? data.education
    : [
        {
          degree: "Bachelor of Computer Science",
          school: "University Name",
          graduationDate: "2021",
        },
      ];

  const skills = data.skills
    ? data.skills.split(",")
    : ["JavaScript", "React", "HTML", "CSS"];

  return (
    <div className="resume">
      {/* HEADER */}
      <header className="header">
        <div className="name-title">
          <h1>{data.fullName || "John Doe"}</h1>
          <p className="title">
            {experiences[0]?.position || "Your Position"}
          </p>
        </div>

        <div className="contact">
          <p>{data.email || "john.doe@email.com"}</p>
          <p>{data.phone || "+1 (555) 123-4567"}</p>
          <p>{data.location || "City, Country"}</p>
          <p>{data.linkedin || "linkedin.com/in/johndoe"}</p>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          {data.summary ||
            "Results-driven professional with experience in building scalable applications and delivering high-quality solutions."}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <h2>Work Experience</h2>
        {experiences.map((job: any, idx: number) => (
          <div className="job" key={idx}>
            <div className="job-header">
              <div>
                <h3>{job.position || "Job Title"}</h3>
                <p className="company">{job.company || "Company Name"}</p>
              </div>
              <p className="date">
                {job.startDate || "Start"} – {job.endDate || "End"}
              </p>
            </div>

            <ul>
              <li>
                {job.description ||
                  "Worked on key features, improved performance, and collaborated with the team."}
              </li>
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
              <p className="date">
                {edu.graduationDate || "Graduation Year"}
              </p>
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
