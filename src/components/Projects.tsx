import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Driven Drug Prediction for Liver Disease  ",
      description:
        "I collaborated on developing a Flask and Power BI platform that integrated IoT sensor data to provide real-time drug recommendations, achieving 85% model accuracy. I managed data preprocessing and SQL integration, creating clinician dashboards to visualize health metrics effectively. Demonstrating leadership, I organized team tasks and communicated insights clearly to ensure project success.",
      technologies: ["Python", "SQL Server", "PowerBI", "Microsoft Azure"],
    },
    {
      id: 2,
      title: "Memoria – Social Media Web/Mobile Application  ",
      description:
        "I co-developed a full-stack platform with a .NET backend and React.js frontend, incorporating user authentication, real-time chat, and personalized feeds to enhance user experience. I designed an optimized database using Entity-Relationship Diagrams to ensure scalability and performance. Leading agile development, I utilized strong communication skills to align team objectives, driving the delivery of a user-centric product.",
      technologies: ["React.js", ".Net", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card custom-project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag custom-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 