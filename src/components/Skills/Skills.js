import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 10%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

const SkillsTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const SkillsSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const SkillDescription = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
`;

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: 'HTML',
      description: 'Proficient in creating structured, semantic markup for modern web applications'
    },
    {
      icon: <FaCss3Alt />,
      title: 'CSS',
      description: 'Skilled in styling and creating responsive layouts for optimal user experience'
    },
    {
      icon: <FaJs />,
      title: 'JavaScript',
      description: 'Strong foundation in JavaScript programming and modern ES6+ features'
    },
    {
      icon: <FaReact />,
      title: 'React.js',
      description: 'Experience in building interactive user interfaces with React and its ecosystem'
    },
    {
      icon: <FaGitAlt />,
      title: 'Development Tools',
      description: 'Proficient with Git, VS Code, and Postman for efficient development workflow'
    },
    {
      icon: <FaDatabase />,
      title: 'Database',
      description: 'Knowledge of MongoDB and database management systems'
    }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Skills</span>
      </SkillsTitle>
      <SkillsSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Technical Expertise & Tools
      </SkillsSubtitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <IconWrapper>{skill.icon}</IconWrapper>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;