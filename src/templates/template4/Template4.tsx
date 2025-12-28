import './style.css';

const Template4 = () => {
  return (
    <div className="resume">
      <header>
        <h1>Emily Watson</h1>
        <div className="contact-info">
          <span>emily.watson@email.com</span>
          <span>•</span>
          <span>+1 (555) 456-7890</span>
          <span>•</span>
          <span>Seattle, WA</span>
        </div>
      </header>

      <section>
        <h2>Experience</h2>
        
        <article>
          <header>
            <div className="role-info">
              <h3>Data Scientist</h3>
              <span className="company">Amazon Web Services</span>
            </div>
            <time>2021 — Present</time>
          </header>
          <ul>
            <li>Developed machine learning models improving prediction accuracy by 35%</li>
            <li>Built automated data pipelines processing 10TB+ daily</li>
            <li>Collaborated with product teams to implement data-driven features</li>
          </ul>
        </article>

        <article>
          <header>
            <div className="role-info">
              <h3>Data Analyst</h3>
              <span className="company">Microsoft</span>
            </div>
            <time>2018 — 2021</time>
          </header>
          <ul>
            <li>Analyzed user behavior patterns across 50M+ users</li>
            <li>Created dashboards and reports for executive leadership</li>
            <li>Reduced data processing costs by 40% through optimization</li>
          </ul>
        </article>

        <article>
          <header>
            <div className="role-info">
              <h3>Junior Analyst</h3>
              <span className="company">Tech Startup Inc.</span>
            </div>
            <time>2016 — 2018</time>
          </header>
          <ul>
            <li>Performed statistical analysis and A/B testing</li>
            <li>Developed Python scripts for data automation</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Education</h2>
        <article>
          <header>
            <div className="role-info">
              <h3>M.S. in Data Science</h3>
              <span className="company">University of Washington</span>
            </div>
            <time>2014 — 2016</time>
          </header>
        </article>
        <article>
          <header>
            <div className="role-info">
              <h3>B.S. in Statistics</h3>
              <span className="company">UCLA</span>
            </div>
            <time>2010 — 2014</time>
          </header>
        </article>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <p>Python, R, SQL, TensorFlow, PyTorch, Spark, Tableau, AWS, Machine Learning, Statistical Analysis, Data Visualization</p>
      </section>

      <section className="skills-section">
        <h2>Certifications</h2>
        <p>AWS Certified Machine Learning — Specialty, Google Professional Data Engineer</p>
      </section>
    </div>
  );
};

export default Template4;
