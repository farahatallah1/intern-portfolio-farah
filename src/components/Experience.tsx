import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Startup",
      period: "Jun 2023 - Aug 2023",
      description: "Developed and maintained web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions and improved user experience.",
      technologies: ["React", "TypeScript", "Node.js", "Git", "Figma"]
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      description: "Building responsive websites and web applications for various clients. Specializing in modern JavaScript frameworks, user experience design, and creating accessible digital solutions.",
      technologies: ["React", "TypeScript", "CSS3", "Figma", "WordPress"]
    },
    {
      id: 3,
      title: "Computer Engineering Student",
      company: "University",
      period: "2021 - Present",
      description: "Pursuing a degree in Computer Engineering with focus on software development, algorithms, system design, and modern web technologies. Maintaining excellent academic performance.",
      technologies: ["C++", "Python", "Data Structures", "Algorithms", "Computer Architecture"]
    },
    {
      id: 4,
      title: "Open Source Contributor",
      company: "GitHub",
      period: "2022 - Present",
      description: "Contributing to various open-source projects, particularly in the React ecosystem. Helping improve documentation, fix bugs, and add new features to popular libraries.",
      technologies: ["React", "JavaScript", "Git", "GitHub", "Documentation"]
    },
    {
      id: 5,
      title: "Coding Mentor",
      company: "Local Community",
      period: "2022 - Present",
      description: "Teaching programming fundamentals to beginners and helping them build their first projects. Organizing coding workshops and study groups in the local tech community.",
      technologies: ["JavaScript", "HTML/CSS", "Python", "Teaching", "Mentoring"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <span className="company-name">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="job-description">{exp.description}</p>
                <div className="job-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 