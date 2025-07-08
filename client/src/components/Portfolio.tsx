import React, { useState } from 'react';
import profileImage from '@assets/pdp_1751986504606.jpg';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Resume Download Handler
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/VirajMhaske_ResumeAI.pdf';
    link.download = 'Viraj_Mhaske_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Viraj Mhaske</h1>
          <nav className="nav">
            {['home', 'about', 'projects', 'experience', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <button
            onClick={handleDownloadResume}
            className="btn btn-primary"
          >
            Download Resume
          </button>
        </div>
      </header>
      {/* Mobile Nav Toggle */}
      <div className="mobile-nav-toggle">
        <button
          onClick={() => setActiveTab('menu')}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {activeTab === 'menu' && (
        <div className="mobile-menu-overlay">
          {['home', 'about', 'projects', 'experience', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="mobile-menu-link"
            >
              {tab}
            </button>
          ))}
          <button
            onClick={handleDownloadResume}
            className="btn btn-primary mobile-menu-btn-download"
          >
            Download Resume
          </button>
        </div>
      )}
      {/* Sections */}
      <main className="main-content">
        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="section home-section">
            <div className="container">
              <div className="home-content">
                <div className="home-text">
                  <h2 className="home-title">
                    AI & Data Science Enthusiast with Cybersecurity Expertise
                  </h2>
                  <p className="home-description">
                    I build intelligent systems using deep learning and data-driven solutions. Passionate about solving real-world problems through AI.
                  </p>
                  <div className="home-actions">
                    <button onClick={() => setActiveTab('contact')} className="btn btn-primary">Contact Me</button>
                    <button onClick={() => setActiveTab('projects')} className="btn btn-secondary">View Projects</button>
                  </div>
                </div>
                <div className="home-image">
                  <img src={profileImage} alt="Viraj Mhaske" className="hero-image" />
                  <p className="hero-name text-[32px]">Viraj Mhaske</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <section className="section about-section">
            <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="about-grid">
                <div>
                  <h3 className="about-subtitle">Professional Summary</h3>
                  <p className="about-text">
                    Artificial Intelligence and Data Science graduate with hands-on experience in machine learning, deep learning, and computer vision. Skilled in designing and training neural network models for real-world applications such as facial emotion recognition and anomaly detection.
                  </p>
                  <h3 className="about-subtitle">Education</h3>
                  <ul className="about-list">
                    <li>B.Tech AI & DS (Hons. Cyber Security), Vidyavardhini's COET – CGPA 7.4</li>
                    <li>HSC in Computer Science – 64.2%</li>
                    <li>SSC – 84.8%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="about-subtitle">Skills</h3>
                  <ul className="about-list">
                    <li><strong>Languages:</strong> Python, C++, Java, JavaScript, SQL</li>
                    <li><strong>Frameworks:</strong> TensorFlow, Scikit-learn, PyTorch, Flask, FastAPI</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB, SQLite</li>
                    <li><strong>Tools:</strong> Git, GitHub, Docker, VS Code, PyCharm</li>
                  </ul>
                  <h3 className="about-subtitle">Certifications</h3>
                  <ul className="about-list">
                    <li>Machine Learning with Python - IBM</li>
                    <li>Prompt Engineering for Everyone - IBM</li>
                    <li>SQL and Relational Databases 101 - IBM</li>
                    <li>Master in Artificial Intelligence - Udemy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <section className="section projects-section">
            <div className="container">
              <h2 className="section-title centered">Featured Projects</h2>
              <div className="projects-grid">
                <ProjectCard
                  title="DeepFER: Facial Emotion Recognition"
                  description="Built a CNN-based model using PyTorch to classify 7 emotions with 72% validation accuracy."
                  image="https://picsum.photos/400/300"
                  githubLink="https://github.com/itsViraj777/DeepFER"
                  tags={['PyTorch', 'OpenCV', 'CNN']}
                />
                <ProjectCard
                  title="AI-Powered Recipe Generator"
                  description="React frontend with Node.js backend and Gemini API integration for personalized meal suggestions."
                  image="https://picsum.photos/401/300"
                  githubLink="https://github.com/itsViraj777/AI-RecipeGenerator"
                  tags={['React', 'Node.js', 'Gemini API']}
                />
                <ProjectCard
                  title="Stock Market Anomaly Detection"
                  description="Python-based system using Z-Score and Isolation Forest techniques for detecting unusual patterns."
                  image="https://picsum.photos/402/300"
                  githubLink="https://github.com/itsViraj777/StockAnomalyDetection"
                  tags={['Python', 'Z-Score', 'Isolation Forest']}
                />
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <section className="section experience-section">
            <div className="container">
              <h2 className="section-title">Experience</h2>
              <div className="experience-list">
                <ExperienceCard
                  role="Technical Team Member"
                  company="NSDC Committee"
                  period="Mar 2023 - May 2024"
                  points={[
                    "Led the launch of TechZette magazine, improving usability.",
                    "Coordinated events like NSDC inauguration and TechBlitz with 200+ attendees."
                  ]}
                />
                <ExperienceCard
                  role="Cybersecurity Analyst Intern"
                  company="TCS Job Simulation"
                  period="Oct 2024 - Nov 2024"
                  points={[
                    "Executed IAM simulations and created 6+ process flowcharts.",
                    "Analyzed cybersecurity vulnerabilities and proposed actionable recommendations."
                  ]}
                />
                <ExperienceCard
                  role="AI & Data Science Intern"
                  company="Labmentix"
                  period="Apr 2025 - Present"
                  points={[
                    "Engineered DeepFER facial emotion recognition system achieving 72% validation accuracy.",
                    "Conducted EDA on Netflix dataset with 10,000+ records to identify viewer trends."
                  ]}
                />
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="section contact-section">
            <div className="container">
              <h2 className="section-title centered">Get In Touch</h2>
              <div className="contact-content">
                <div className="contact-form">
                  <form className="form">
                    <input type="text" placeholder="Your Name" className="form-input" />
                    <input type="email" placeholder="Your Email" className="form-input" />
                    <textarea placeholder="Your Message" rows={5} className="form-input form-textarea"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
                <div className="contact-info">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <ul className="contact-info-list">
                    <li>Email: asliviraj973@gmail.com</li>
                    <li>Phone: +91 7767951841</li>
                    <li>Location: Vasai, Maharashtra, India</li>
                  </ul>
                  <div className="contact-social">
                    <a href="https://linkedin.com/in/viraj-mhaske-1b8a99306" target="_blank" rel="noopener noreferrer" className="social-link">
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/itsViraj777" target="_blank" rel="noopener noreferrer" className="social-link">
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">&copy; 2025 Viraj Mhaske. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, image, githubLink, tags }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="project-tag">{tag}</span>
        ))}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
      </a>
    </div>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ role, company, period, points }) => (
  <div className="experience-card">
    <h3 className="experience-role">{role}</h3>
    <p className="experience-company">{company} | {period}</p>
    <ul className="experience-points">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// GitHub Icon SVG
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default Portfolio;
