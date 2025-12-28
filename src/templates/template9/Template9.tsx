import './style.css';

const Template9 = () => {
  return (
    <div className="resume">
      <header>
        <div className="header-main">
          <h1>Dr. Rachel Thompson</h1>
          <p className="credentials">MD, FACP | Internal Medicine</p>
        </div>
        <div className="header-contact">
          <div className="contact-row">
            <span>📧 r.thompson@hospital.org</span>
            <span>📞 +1 (555) 901-2345</span>
            <span>📍 Philadelphia, PA</span>
          </div>
        </div>
      </header>

      <div className="content">
        <section>
          <h2>Professional Summary</h2>
          <p>Board-certified internist with 12+ years of clinical experience in academic and community settings. Specializing in primary care, preventive medicine, and chronic disease management. Committed to patient-centered care and medical education. Published researcher with focus on healthcare quality improvement.</p>
        </section>

        <section>
          <h2>Professional Experience</h2>
          
          <div className="job-entry">
            <div className="job-main">
              <h3>Attending Physician, Internal Medicine</h3>
              <p className="employer">Penn Medicine - Hospital of the University of Pennsylvania</p>
            </div>
            <p className="dates">August 2018 - Present</p>
            <ul>
              <li>Provide comprehensive primary care to panel of 2,000+ patients</li>
              <li>Supervise and mentor internal medicine residents and medical students</li>
              <li>Lead quality improvement initiative reducing hospital readmissions by 25%</li>
              <li>Serve on hospital Ethics Committee and Peer Review Committee</li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-main">
              <h3>Staff Physician</h3>
              <p className="employer">Thomas Jefferson University Hospital</p>
            </div>
            <p className="dates">July 2014 - July 2018</p>
            <ul>
              <li>Managed complex medical patients in inpatient and outpatient settings</li>
              <li>Developed diabetes management program improving HbA1c outcomes</li>
              <li>Participated in clinical research trials for hypertension treatments</li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-main">
              <h3>Resident Physician, Internal Medicine</h3>
              <p className="employer">Johns Hopkins Hospital</p>
            </div>
            <p className="dates">July 2011 - June 2014</p>
            <ul>
              <li>Completed rigorous 3-year residency program</li>
              <li>Chief Resident in final year</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Education & Training</h2>
          <div className="edu-grid">
            <div className="edu-entry">
              <h3>Doctor of Medicine (MD)</h3>
              <p>Johns Hopkins University School of Medicine</p>
              <p className="year">2011</p>
            </div>
            <div className="edu-entry">
              <h3>Bachelor of Science, Biology</h3>
              <p>Duke University, Magna Cum Laude</p>
              <p className="year">2007</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Certifications & Licensure</h2>
          <ul className="cert-list">
            <li>American Board of Internal Medicine - Board Certified</li>
            <li>Pennsylvania Medical License - Active</li>
            <li>DEA Registration - Active</li>
            <li>ACLS/BLS Certified</li>
          </ul>
        </section>

        <section className="two-col">
          <div>
            <h2>Selected Publications</h2>
            <ol className="pub-list">
              <li>Thompson R, et al. "Reducing 30-day readmissions through care coordination." <em>JAMA Internal Medicine</em>, 2022.</li>
              <li>Thompson R, Smith J. "Telemedicine in primary care: lessons learned." <em>Annals of Internal Medicine</em>, 2021.</li>
            </ol>
          </div>
          <div>
            <h2>Professional Memberships</h2>
            <ul className="member-list">
              <li>American College of Physicians (Fellow)</li>
              <li>Society of General Internal Medicine</li>
              <li>Pennsylvania Medical Society</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template9;
