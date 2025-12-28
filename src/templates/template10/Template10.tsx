import './style.css';

const Template10 = () => {
  return (
    <div className="resume">
      <header>
        <h1>JAMES WILSON</h1>
        <div className="title-bar">
          <span className="title">CHIEF EXECUTIVE OFFICER</span>
        </div>
        <div className="contact-bar">
          <span>james.wilson@email.com</span>
          <span className="sep">◆</span>
          <span>+1 (555) 012-3456</span>
          <span className="sep">◆</span>
          <span>San Francisco, CA</span>
          <span className="sep">◆</span>
          <span>linkedin.com/in/jameswilson</span>
        </div>
      </header>

      <section className="executive-summary">
        <h2>Executive Profile</h2>
        <p>Visionary technology executive with 20+ years of experience scaling companies from startup to IPO. Proven track record of driving innovation, building high-performance teams, and delivering sustainable growth. Successfully led organizations through digital transformation, market expansion, and strategic acquisitions totaling $2B+.</p>
      </section>

      <section className="key-achievements">
        <h2>Key Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <span className="number">$500M</span>
            <span className="label">Revenue Growth</span>
          </div>
          <div className="achievement">
            <span className="number">3</span>
            <span className="label">Successful IPOs</span>
          </div>
          <div className="achievement">
            <span className="number">5,000+</span>
            <span className="label">Employees Led</span>
          </div>
          <div className="achievement">
            <span className="number">$2B+</span>
            <span className="label">M&A Value</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Executive Experience</h2>
        
        <div className="exec-role">
          <div className="role-header">
            <div className="role-info">
              <h3>Chief Executive Officer</h3>
              <p className="company">TechVenture Global Inc.</p>
            </div>
            <div className="role-meta">
              <span className="location">San Francisco, CA</span>
              <span className="dates">2019 - Present</span>
            </div>
          </div>
          <p className="role-desc">Leading $1.2B enterprise software company through strategic transformation and market expansion.</p>
          <ul>
            <li>Grew annual recurring revenue from $200M to $500M in 4 years</li>
            <li>Expanded operations to 15 countries, increasing international revenue by 300%</li>
            <li>Led successful Series E funding round of $150M at $2B valuation</li>
            <li>Built executive team and scaled organization from 800 to 3,000 employees</li>
          </ul>
        </div>

        <div className="exec-role">
          <div className="role-header">
            <div className="role-info">
              <h3>President & Chief Operating Officer</h3>
              <p className="company">CloudFirst Technologies</p>
            </div>
            <div className="role-meta">
              <span className="location">Seattle, WA</span>
              <span className="dates">2014 - 2019</span>
            </div>
          </div>
          <p className="role-desc">Oversaw all operations for cloud infrastructure company through IPO.</p>
          <ul>
            <li>Orchestrated successful IPO raising $400M at $3B market cap</li>
            <li>Implemented operational excellence programs reducing costs by $50M annually</li>
            <li>Led acquisition and integration of 3 strategic companies</li>
          </ul>
        </div>

        <div className="exec-role">
          <div className="role-header">
            <div className="role-info">
              <h3>Senior Vice President, Strategy</h3>
              <p className="company">Enterprise Systems Corp.</p>
            </div>
            <div className="role-meta">
              <span className="location">Boston, MA</span>
              <span className="dates">2008 - 2014</span>
            </div>
          </div>
          <ul>
            <li>Developed 5-year strategic plan driving 40% market share growth</li>
            <li>Identified and executed $800M acquisition expanding product portfolio</li>
          </ul>
        </div>
      </section>

      <div className="bottom-sections">
        <section>
          <h2>Education</h2>
          <div className="edu-item">
            <strong>MBA, Harvard Business School</strong>
            <span>2006</span>
          </div>
          <div className="edu-item">
            <strong>BS Computer Science, Stanford University</strong>
            <span>2002</span>
          </div>
        </section>

        <section>
          <h2>Board Positions</h2>
          <ul className="board-list">
            <li>Board Member, TechVenture Global Inc.</li>
            <li>Advisory Board, StartupAccelerator</li>
            <li>Board of Trustees, STEM Education Foundation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template10;
