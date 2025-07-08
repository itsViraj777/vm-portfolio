import React, { useState } from 'react';

const App = () => {
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
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="fixed w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Viraj Mhaske</h1>
          <nav className="space-x-6 hidden md:flex">
            {['home', 'about', 'projects', 'experience', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition duration-300 hover:text-purple-400 ${
                  activeTab === tab ? 'text-purple-400' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <button
            onClick={handleDownloadResume}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-medium hover:opacity-90 transition"
          >
            Download Resume
          </button>
        </div>
      </header>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setActiveTab('menu')}
          className="text-white p-2 bg-gray-800 rounded"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {activeTab === 'menu' && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center pt-20 space-y-6">
          {['home', 'about', 'projects', 'experience', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xl capitalize text-purple-400"
            >
              {tab}
            </button>
          ))}
          <button
            onClick={handleDownloadResume}
            className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-medium"
          >
            Download Resume
          </button>
        </div>
      )}

      {/* Sections */}
      <main className="pt-20">
        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="min-h-screen bg-gray-900 flex items-center">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
                  AI & Data Science Enthusiast with Cybersecurity Expertise
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  I build intelligent systems using deep learning and data-driven solutions. Passionate about solving real-world problems through AI.
                </p>
                <div className="flex space-x-4">
                  <a href="#contact" className="px-6 py-3 bg-purple-600 rounded-md hover:bg-purple-700 transition">Contact Me</a>
                  <a href="#projects" className="px-6 py-3 border border-purple-600 rounded-md hover:bg-purple-600 transition">View Projects</a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400 " alt="AI Hero" className="rounded-lg shadow-xl transform hover:scale-105 transition" />
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                  <p className="text-gray-300 mb-6">
                    Artificial Intelligence and Data Science graduate with hands-on experience in machine learning, deep learning, and computer vision. Skilled in designing and training neural network models for real-world applications such as facial emotion recognition and anomaly detection.
                  </p>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>B.Tech AI & DS (Hons. Cyber Security), Vidyavardhini’s COET – CGPA 7.4</li>
                    <li>HSC in Computer Science – 64.2%</li>
                    <li>SSC – 84.8%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Languages:</strong> Python, C++, Java, JavaScript, SQL</li>
                    <li><strong>Frameworks:</strong> TensorFlow, Scikit-learn, PyTorch, Flask, FastAPI</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB, SQLite</li>
                    <li><strong>Tools:</strong> Git, GitHub, Docker, VS Code, PyCharm</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Certifications</h3>
                  <ul className="text-gray-300 space-y-1">
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
          <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* DeepFER */}
                <ProjectCard
                  title="DeepFER: Facial Emotion Recognition"
                  description="Built a CNN-based model using PyTorch to classify 7 emotions with 72% validation accuracy."
                  image="https://picsum.photos/400/300 "
                  githubLink="https://github.com/itsViraj777/DeepFER "
                  tags={['PyTorch', 'OpenCV', 'CNN']}
                />
                {/* Recipe Generator */}
                <ProjectCard
                  title="AI-Powered Recipe Generator"
                  description="React frontend with Node.js backend and Gemini API integration for personalized meal suggestions."
                  image="https://picsum.photos/401/300 "
                  githubLink="https://github.com/itsViraj777/AI-RecipeGenerator "
                  tags={['React', 'Node.js', 'Gemini API']}
                />
                {/* Stock Anomaly Detection */}
                <ProjectCard
                  title="Stock Market Anomaly Detection"
                  description="Python-based system using Z-Score and Isolation Forest techniques for detecting unusual patterns."
                  image="https://picsum.photos/402/300 "
                  githubLink="https://github.com/itsViraj777/StockAnomalyDetection "
                  tags={['Python', 'Z-Score', 'Isolation Forest']}
                />
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <section id="experience" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12">Experience</h2>
              <div className="space-y-10">
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
          <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500" />
                    <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-purple-500"></textarea>
                    <button type="submit" className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-700 transition">Send Message</button>
                  </form>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>Email: asliviraj973@gmail.com</li>
                    <li>Phone: +91 7767951841</li>
                    <li>Location: Vasai, Maharashtra, India</li>
                  </ul>
                  <div className="mt-6 flex space-x-4">
                    <a href="https://linkedin.com/in/viraj-mhaske-1b8a99306 " target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/itsViraj777 " target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
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
      <footer className="bg-gray-800 text-center py-6">
        <p className="text-gray-400">&copy; 2025 Viraj Mhaske. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, image, githubLink, tags }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-purple-900 text-purple-200 rounded-full">{tag}</span>
        ))}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-400 hover:text-purple-300">
        View on GitHub →
      </a>
    </div>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ role, company, period, points }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold">{role}</h3>
    <p className="text-purple-400">{company} | {period}</p>
    <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
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

export default App;