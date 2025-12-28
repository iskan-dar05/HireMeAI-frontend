import './style.css';

const Template5 = () => {
  return (
    <div className="resume">
      <header className="main-header">
        <div className="header-left">
          <h1>Michael Roberts</h1>
          <p className="title">Chief Financial Officer</p>
        </div>
        <div className="header-right">
          <p><strong>Email:</strong> m.roberts@email.com</p>
          <p><strong>Phone:</strong> +1 (555) 567-8901</p>
          <p><strong>Location:</strong> Chicago, IL</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/mroberts</p>
        </div>
      </header>

      <section className="summary">
        <h2><span className="icon">◆</span> Executive Summary</h2>
        <p>Accomplished financial executive with 15+ years of experience in corporate finance, strategic planning, and operational leadership. Proven track record of driving profitability, managing billion-dollar budgets, and leading organizational transformation. MBA from Wharton School of Business.</p>
      </section>

      <section>
        <h2><span className="icon">◆</span> Professional Experience</h2>
        
        <div className="job">
          <div className="job-header">
            <div className="job-title">
              <h3>Chief Financial Officer</h3>
              <p className="company">Global Manufacturing Corp.</p>
            </div>
            <div className="job-meta">
              <p className="location">Chicago, IL</p>
              <p className="dates">2018 - Present</p>
            </div>
          </div>
          <ul>
            <li>Oversee $2.5B annual budget and financial operations across 12 countries</li>
            <li>Led IPO preparation resulting in $500M capital raise</li>
            <li>Implemented cost optimization strategies saving $75M annually</li>
            <li>Manage team of 50+ finance professionals</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">
              <h3>Vice President of Finance</h3>
              <p className="company">Industrial Solutions Inc.</p>
            </div>
            <div className="job-meta">
              <p className="location">Detroit, MI</p>
              <p className="dates">2012 - 2018</p>
            </div>
          </div>
          <ul>
            <li>Directed financial planning and analysis for $800M revenue organization</li>
            <li>Negotiated $200M credit facility improving liquidity position</li>
            <li>Spearheaded ERP implementation across all business units</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div className="job-title">
              <h3>Senior Financial Analyst</h3>
              <p className="company">Big Four Consulting</p>
            </div>
            <div className="job-meta">
              <p className="location">New York, NY</p>
              <p className="dates">2008 - 2012</p>
            </div>
          </div>
          <ul>
            <li>Provided financial advisory services to Fortune 500 clients</li>
            <li>Led due diligence for M&A transactions totaling $1B+</li>
          </ul>
        </div>
      </section>

      <section>
        <h2><span className="icon">◆</span> Education</h2>
        <div className="education-grid">
          <div className="edu-item">
            <h3>MBA, Finance</h3>
            <p>The Wharton School, University of Pennsylvania</p>
            <p className="year">2008</p>
          </div>
          <div className="edu-item">
            <h3>B.S. Accounting</h3>
            <p>University of Michigan</p>
            <p className="year">2004</p>
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="bottom-col">
          <h2><span className="icon">◆</span> Certifications</h2>
          <ul className="simple-list">
            <li>Certified Public Accountant (CPA)</li>
            <li>Chartered Financial Analyst (CFA)</li>
          </ul>
        </div>
        <div className="bottom-col">
          <h2><span className="icon">◆</span> Core Competencies</h2>
          <ul className="simple-list">
            <li>Strategic Financial Planning</li>
            <li>M&A and Capital Markets</li>
            <li>Risk Management</li>
            <li>Team Leadership</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Template5;
