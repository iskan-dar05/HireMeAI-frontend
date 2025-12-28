import React from "react";
import './style.css';

interface TemplateProps {
  data: any;
}

const Template3: React.FC<TemplateProps> = ({ data = {} }) => {
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
    : ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"];

  return (
    <div className="resume">
      <aside className="sidebar">
        <div className="photo-placeholder">
          <span>Photo</span>
        </div>
        
        <div className="sidebar-section">
          <h2>Contact</h2>
          <p>{data.email || "example@email.com"}</p>
          <p>{data.phone || "+1 (555) 123-4567"}</p>
          <p>{data.location || "City, Country"}</p>
          <p>{data.linkedin || "linkedin.com/in/example"}</p>
        </div>

        <div className="sidebar-section">
          <h2>Skills</h2>
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <span>{skill}</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h2>Interests</h2>
          <p>{data.interests || "Photography, Travel, Tech Innovation"}</p>
        </div>
      </aside>

      <main className="main-content">
        <header>
          <h1>{data.fullname || "John Doe"}</h1>
          <p className="tagline">{data.profession || "Your Job Title"}</p>
        </header>

        <section>
          <h2>About Me</h2>
          <p>{data.summary || "A brief summary about your professional background and goals."}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experiences.map((job, idx) => (
            <div className="exp-item" key={idx}>
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>{job.position || "Job Title"}</h3>
                  <span className="date">{job.startDate || "Start"} - {job.endDate || "End"}</span>
                </div>
                <p className="company">{job.company || "Company Name"}</p>
                <ul>
                  <li>{job.description || "Description of your work and achievements."}</li>
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((edu, idx) => (
            <div className="edu-item" key={idx}>
              <h3>{edu.degree || "Degree"}</h3>
              <p>{edu.school || "University Name"}, {edu.graduationDate || "Year"}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Template3;
