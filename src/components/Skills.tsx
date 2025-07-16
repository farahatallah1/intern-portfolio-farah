import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git',
  'Tailwind', 'MongoDB', 'GraphQL', 'Express', 'Python', 'Django', 'Framer Motion'
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
      </div>
    </section>
  );
};

export default Skills; 