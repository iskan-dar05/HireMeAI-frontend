import './style.css';

const Template8 = () => {
  return (
    <div className="resume">
      <div className="left-panel">
        <header>
          <div className="avatar">OM</div>
          <h1>Olivia<br />Martinez</h1>
          <p className="title">Art Director<br />& Visual Designer</p>
        </header>

        <section>
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <span className="icon">✉</span>
              <span>olivia.m@email.com</span>
            </li>
            <li>
              <span className="icon">☎</span>
              <span>+1 (555) 890-1234</span>
            </li>
            <li>
              <span className="icon">◎</span>
              <span>Miami, FL</span>
            </li>
            <li>
              <span className="icon">◈</span>
              <span>oliviamartinez.design</span>
            </li>
          </ul>
        </section>

        <section>
          <h2>Expertise</h2>
          <div className="expertise-item">
            <span className="expertise-name">Brand Identity</span>
            <div className="dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="expertise-item">
            <span className="expertise-name">Typography</span>
            <div className="dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="expertise-item">
            <span className="expertise-name">Motion Design</span>
            <div className="dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="expertise-item">
            <span className="expertise-name">UI/UX Design</span>
            <div className="dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>

        <section>
          <h2>Tools</h2>
          <div className="tools-grid">
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>After Effects</span>
            <span>Figma</span>
            <span>InDesign</span>
            <span>Premiere Pro</span>
          </div>
        </section>

        <section>
          <h2>Languages</h2>
          <p>English - Native</p>
          <p>Spanish - Native</p>
          <p>Portuguese - Conversational</p>
        </section>
      </div>

      <div className="right-panel">
        <section className="about">
          <h2>About Me</h2>
          <p>Award-winning Art Director with 9+ years of experience creating compelling visual narratives for global brands. I blend strategic thinking with artistic vision to deliver designs that captivate audiences and drive results. Passionate about pushing creative boundaries.</p>
        </section>

        <section>
          <h2>Experience</h2>
          
          <div className="exp-block">
            <div className="exp-header">
              <h3>Art Director</h3>
              <span className="period">2020 - Present</span>
            </div>
            <p className="company">Ogilvy Miami</p>
            <ul>
              <li>Lead creative direction for campaigns generating $50M+ in client revenue</li>
              <li>Manage team of 8 designers and motion artists</li>
              <li>Won 5 industry awards including Cannes Lions Bronze</li>
              <li>Clients: Nike, Coca-Cola, Spotify</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-header">
              <h3>Senior Designer</h3>
              <span className="period">2017 - 2020</span>
            </div>
            <p className="company">WeWork Creative Studio</p>
            <ul>
              <li>Developed global brand guidelines and visual systems</li>
              <li>Created campaigns across digital, print, and environmental</li>
              <li>Increased social media engagement by 200%</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-header">
              <h3>Graphic Designer</h3>
              <span className="period">2014 - 2017</span>
            </div>
            <p className="company">Local Design Agency</p>
            <ul>
              <li>Designed brand identities for 40+ clients</li>
              <li>Created print and digital marketing materials</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className="edu-block">
            <h3>BFA in Graphic Design</h3>
            <p>Rhode Island School of Design (RISD)</p>
            <span className="period">2010 - 2014</span>
          </div>
        </section>

        <section className="awards">
          <h2>Awards</h2>
          <div className="award-list">
            <span className="award">🏆 Cannes Lions Bronze 2023</span>
            <span className="award">🏆 D&AD Pencil 2022</span>
            <span className="award">🏆 Webby Award 2021</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template8;
