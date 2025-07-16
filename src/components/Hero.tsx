import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-container">
          <div className="profile-picture">
            <img src="/portofolio.jpg" alt="Farah Attallah" />
            <div className="pointing-hand">👆</div>
          </div>
        </div>
        
        <div className="hero-text">
         
          <h1>
          Hi, I'm Farah Attalla, a computer engineer .
           and I'm passionate about transforming ideas into impactful products
          </h1>
        </div>
        
        <div className="hero-actions">
          <button 
            className="cta-button contact-btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact me here
            <span className="arrow">→</span>
          </button>
          
          <a 
            href="/Farah CV 2.0.pdf" 
            download="Farah_Attallah_CV.pdf"
            className="cta-button download-btn"
          >
            Download CV
            <span className="arrow">↓</span>
          </a>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/farah-attalla-7a77832a7" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">in</span>
            </a>
            <a href="https://github.com/farahatallah1" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">🐙</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 