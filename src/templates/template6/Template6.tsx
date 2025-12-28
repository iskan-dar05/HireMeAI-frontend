import './style.css';

const Template6 = () => {
  return (
    <div className="resume">
      <header>
        <div className="header-content">
          <h1>David Park</h1>
          <p className="role">Full Stack Developer</p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="label">Email</span>
              <span className="value">david.park@email.com</span>
            </div>
            <div className="contact-item">
              <span className="label">Phone</span>
              <span className="value">+1 (555) 678-9012</span>
            </div>
            <div className="contact-item">
              <span className="label">Location</span>
              <span className="value">Austin, TX</span>
            </div>
            <div className="contact-item">
              <span className="label">GitHub</span>
              <span className="value">github.com/davidpark</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>Passionate full-stack developer with 6+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Open source contributor and tech community speaker.</p>
        </section>

        <section>
          <h2>Experience</h2>
          
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Senior Full Stack Developer</h3>
                <p className="company">Stripe</p>
              </div>
              <span className="badge">2021 - Present</span>
            </div>
            <ul>
              <li>Build payment infrastructure serving millions of transactions daily</li>
              <li>Led migration to microservices architecture reducing latency by 40%</li>
              <li>Mentor junior developers and conduct code reviews</li>
            </ul>
            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Ruby</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Software Engineer</h3>
                <p className="company">Shopify</p>
              </div>
              <span className="badge">2018 - 2021</span>
            </div>
            <ul>
              <li>Developed e-commerce features used by 1M+ merchants</li>
              <li>Improved checkout conversion rate by 15% through UX optimizations</li>
              <li>Built real-time inventory management system</li>
            </ul>
            <div className="tech-stack">
              <span>React</span>
              <span>GraphQL</span>
              <span>Ruby on Rails</span>
              <span>Redis</span>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Junior Developer</h3>
                <p className="company">Local Tech Startup</p>
              </div>
              <span className="badge">2017 - 2018</span>
            </div>
            <ul>
              <li>Built responsive web applications using modern JavaScript frameworks</li>
              <li>Implemented RESTful APIs and database integrations</li>
            </ul>
            <div className="tech-stack">
              <span>JavaScript</span>
              <span>Vue.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
        </section>

        <div className="two-column">
          <section>
            <h2>Education</h2>
            <div className="edu-card">
              <h3>B.S. Computer Science</h3>
              <p>University of Texas at Austin</p>
              <p className="year">2013 - 2017</p>
            </div>
          </section>

          <section>
            <h2>Skills</h2>
            <div className="skills-cloud">
              <span className="skill-tag primary">JavaScript</span>
              <span className="skill-tag primary">TypeScript</span>
              <span className="skill-tag primary">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">GraphQL</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Template6;
