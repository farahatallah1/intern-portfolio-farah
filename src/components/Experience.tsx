import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer ",
      company: "GDG ",
      period: "Feb 2025 - Jun 2025",
      description: "Developed robust back-end services utilizing .NET, Entity Framework Core, and SQL for a full-stack platform. Participated in workshops focused on backend architecture, API development, and React.js frontend integration, significantly enhancing full-stack development expertise. Engineered authentication systems and real-time features leveraging WebSockets, demonstrating technical proficiency and collaborative excellence. Operated within agile environments, adhering to clean code principles and implementing Git workflows to ensure efficient collaboration and high-quality code delivery.",
      
    },
    {
      id: 2,
      title: "Data Analysis Trainee",
      company: "Digital Egypt Pioneers Initiative, Ministry of Communications and Information Technology",
      period: "Jun 2024 - Oct 2024",
      description: "Mastery of data processing and visualization has been achieved using Python, SQL Server, and Power BI to deliver robust business intelligence solutions. Efficient data models have been designed to streamline decision-making processes, enabling faster and more informed outcomes. Expertise in AI fundamentals and data engineering has been developed through intensive training, further enhancing the capability to drive data-driven insights.",
      
    },
    {
      id: 3,
      title: "Computer Engineering Student",
      company: "Nile University",
      period: "Sep 2022 - Present",
      description: "Passionate Senior Computer Engineering Student with a strong foundation in software development, algorithms, system design, and modern web technologies. Maintaining excellent academic performance while actively seeking opportunities to apply theoretical knowledge in practical projects.",
      
    },
    
  
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 