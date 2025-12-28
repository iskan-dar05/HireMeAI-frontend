import './style.css';

const Template7 = () => {
  return (
    <div className="resume">
      <header>
        <h1>Dr. Jennifer Lee, Ph.D.</h1>
        <p className="subtitle">Computational Biology Researcher</p>
        <div className="contact-line">
          j.lee@university.edu | +1 (555) 789-0123 | Boston, MA | orcid.org/0000-0001-2345-6789
        </div>
      </header>

      <section>
        <h2>Research Interests</h2>
        <p>Machine learning applications in genomics, single-cell RNA sequencing analysis, computational drug discovery, and bioinformatics pipeline development.</p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="edu-entry">
          <div className="edu-main">
            <strong>Ph.D. in Computational Biology</strong>
            <span className="institution">Massachusetts Institute of Technology</span>
          </div>
          <span className="year">2018</span>
        </div>
        <p className="thesis">Dissertation: "Deep Learning Approaches for Single-Cell Transcriptome Analysis"</p>
        
        <div className="edu-entry">
          <div className="edu-main">
            <strong>M.S. in Bioinformatics</strong>
            <span className="institution">Stanford University</span>
          </div>
          <span className="year">2014</span>
        </div>
        
        <div className="edu-entry">
          <div className="edu-main">
            <strong>B.S. in Biology, Minor in Computer Science</strong>
            <span className="institution">University of California, San Diego</span>
          </div>
          <span className="year">2012</span>
        </div>
      </section>

      <section>
        <h2>Academic Appointments</h2>
        <div className="position">
          <div className="position-header">
            <div>
              <strong>Assistant Professor</strong>
              <span className="dept">Department of Biomedical Informatics, Harvard Medical School</span>
            </div>
            <span className="year">2021 - Present</span>
          </div>
        </div>
        <div className="position">
          <div className="position-header">
            <div>
              <strong>Postdoctoral Fellow</strong>
              <span className="dept">Broad Institute of MIT and Harvard</span>
            </div>
            <span className="year">2018 - 2021</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Selected Publications</h2>
        <ol className="publications">
          <li><strong>Lee J</strong>, Smith A, Johnson B. "Neural network framework for cell type annotation in single-cell data." <em>Nature Methods</em>, 2023; 20(3):412-420.</li>
          <li>Wang C, <strong>Lee J</strong>, Brown D. "Integrated multi-omics analysis reveals novel therapeutic targets." <em>Cell</em>, 2022; 185(12):2104-2118.</li>
          <li><strong>Lee J</strong>, Davis E. "Benchmarking deep learning models for genomic sequence analysis." <em>Genome Biology</em>, 2021; 22(1):89.</li>
          <li>Miller F, <strong>Lee J</strong>, Wilson G. "Scalable pipelines for population-scale genomics." <em>Bioinformatics</em>, 2020; 36(8):2402-2410.</li>
        </ol>
      </section>

      <section>
        <h2>Grants & Funding</h2>
        <ul className="grants">
          <li><strong>NIH R01</strong> - "Machine Learning for Drug Response Prediction" - $1.2M (PI) - 2022-2027</li>
          <li><strong>NSF CAREER</strong> - "Computational Methods for Single-Cell Analysis" - $500K (PI) - 2021-2026</li>
        </ul>
      </section>

      <section className="two-col">
        <div>
          <h2>Awards & Honors</h2>
          <ul className="simple">
            <li>ISCB Innovator Award, 2023</li>
            <li>NIH K99/R00 Pathway to Independence, 2019</li>
            <li>Best Paper Award, RECOMB 2018</li>
          </ul>
        </div>
        <div>
          <h2>Technical Skills</h2>
          <ul className="simple">
            <li>Python, R, Julia, C++</li>
            <li>TensorFlow, PyTorch, scikit-learn</li>
            <li>AWS, HPC clusters, Nextflow</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Template7;
