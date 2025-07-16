import React from 'react';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'React.js',  'Git',
  'Python', 'SQL Server', 'Java','C#', 'C++', '.Net', 'Flask', 'Microsoft Azure'
];

const softSkills = [
  'Teamwork', 'Communication', 'Problem Solving', 'Adaptability', 'Time Management', 'Leadership', 'Critical Thinking',' Agile Methodologies'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-pill-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>{skill}</span>
          ))}
        </div>
        <h3 className="soft-skills-title">Soft Skills</h3>
        <div className="skills-pill-list soft-skills-list">
          {softSkills.map((skill) => (
            <span className="skill-pill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 