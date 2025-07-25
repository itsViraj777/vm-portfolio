import React, { useState } from 'react';
import profileImage from '@assets/pdp_1751986504606.jpg';
import deepferImage from '@assets/DEEPFER_1751989933153.png';
import recipeImage from '@assets/Recipe Selection Interface_1751989591540.png';
import stockImage from '@assets/Market Anomaly Detection_1751988543586.png';

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
                  <p className="hero-name text-[30px]">Viraj Mhaske</p>
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
                  <ul className="about-list education-list">
                    <li>
                      <span className="education-text">
                        Bachelor's Degree in <span className="education-highlight">Artificial Intelligence and Data Science</span> with Honors in <span className="education-highlight">Cyber Security</span> from Vidyavardhini's College of Engineering and Technology 
                      </span>
                      <div className="education-right">
                        <span className="education-grade">CGPA - 7.4</span>
                        <span className="education-year">(2020 – 2024)</span>
                      </div>
                    </li>
                    <li>
                      <span className="education-text">
                        <span className="education-highlight">H.S.C.</span> in <span className="education-highlight">Computer Science</span>, Vidyavardhini's E.S. Andrades College of Science 
                      </span>
                      <div className="education-right">
                        <span className="education-grade">64.20%</span>
                        <span className="education-year">(2018 – 2020)</span>
                      </div>
                    </li>
                    <li>
                      <span className="education-text">
                        <span className="education-highlight">S.S.C.</span> from Ganpat Gagnnath Vartak Vidyalaya 
                      </span>
                      <div className="education-right">
                        <span className="education-grade">84.80%</span>
                        <span className="education-year">(2018)</span>
                      </div>
                    </li>
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
                    <li>
                      Machine Learning with Python - IBM
                      <a href="https://courses.cognitiveclass.ai/certificates/8debb135c7d84b37804a30d568d0812c" target="_blank" rel="noopener noreferrer" className="cert-link">
                        <ExternalLinkIcon />
                      </a>
                    </li>
                    <li>
                      Master in Artificial Intelligence - Udemy
                      <a href="https://www.udemy.com/certificate/UC-4e790a71-1e78-4430-967b-0c234be9ce78/" target="_blank" rel="noopener noreferrer" className="cert-link">
                        <ExternalLinkIcon />
                      </a>
                    </li>
                    <li>
                      SQL and Relational Databases 101 - IBM
                      <a href="https://courses.cognitiveclass.ai/certificates/a0727dfd55e24db5a649951d476e6279" target="_blank" rel="noopener noreferrer" className="cert-link">
                        <ExternalLinkIcon />
                      </a>
                    </li>
                    <li>
                      Prompt Engineering for Everyone - IBM
                      <a href="https://courses.cognitiveclass.ai/certificates/bf9700954fcb48278566043563074d50" target="_blank" rel="noopener noreferrer" className="cert-link">
                        <ExternalLinkIcon />
                      </a>
                    </li>
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
                  image={deepferImage}
                  githubLink="https://github.com/itsViraj777/DeepFER"
                  tags={['PyTorch', 'OpenCV', 'CNN', 'DNN']}
                />
                <ProjectCard
                  title="AI-Powered Recipe Generator"
                  description="React frontend with Node.js backend and Gemini API integration for personalized meal suggestions."
                  image={recipeImage}
                  githubLink="https://ai-recipe-webapp-yi2x-aoabazd0i-viraj-mhaskes-projects.vercel.app/"
                  tags={['React', 'Node.js', 'Gemini API']}
                />
                <ProjectCard
                  title="Stock Market Anomaly Detection"
                  description="Python-based system using Z-Score and Isolation Forest techniques for detecting unusual patterns."
                  image={stockImage}
                  githubLink="https://github.com/itsViraj777/Stock-Market-Anomaly-Detection-using-Python"
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
              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">
                    <EmailIcon />
                  </div>
                  <h3 className="contact-card-title">Email</h3>
                  <p className="contact-card-text">asliviraj973@gmail.com</p>
                  <a href="mailto:asliviraj973@gmail.com" className="contact-card-link">Send Email</a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <PhoneIcon />
                  </div>
                  <h3 className="contact-card-title">Phone</h3>
                  <p className="contact-card-text">+91 7767951841</p>
                  <a href="tel:+917767951841" className="contact-card-link">Call Now</a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <LocationIcon />
                  </div>
                  <h3 className="contact-card-title">Location</h3>
                  <p className="contact-card-text">Vasai, Maharashtra, India</p>
                  <span className="contact-card-link">Available for Remote Work</span>
                </div>
              </div>
              
              <div className="contact-social-section">
                <h3 className="contact-social-title">Connect With Me</h3>
                <div className="contact-social">
                  <a href="https://linkedin.com/in/viraj-mhaske-1b8a99306" target="_blank" rel="noopener noreferrer" className="social-link">
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/itsViraj777" target="_blank" rel="noopener noreferrer" className="social-link">
                    <GitHubIcon />
                    <span>GitHub</span>
                  </a>
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
const ProjectCard = ({ title, description, image, githubLink, tags }) => {
  const isLiveDemo = githubLink.includes('vercel.app') || githubLink.includes('netlify.app') || githubLink.includes('herokuapp.com');
  const linkText = isLiveDemo ? 'View Live Demo →' : 'View on GitHub →';
  
  return (
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
          {linkText}
        </a>
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ role, company, period, points }) => (
  <div className="experience-card">
    <div className="experience-header">
      <h3 className="experience-role">{role}</h3>
      <div className="experience-meta">
        <span className="experience-company">{company}</span>
        <span className="experience-period">{period}</span>
      </div>
    </div>
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

// Email Icon SVG
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// Phone Icon SVG
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

// Location Icon SVG
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

// External Link Icon SVG
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
  </svg>
);

export default Portfolio;
