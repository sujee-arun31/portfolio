import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 10%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const ProjectsSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 4rem;
  max-width: 600px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  text-align: left;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.3;
  margin: 0;
`;

const ProjectDescription = styled.div`
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.8;

  ul {
    list-style-type: none;
    padding-left: 0;
    text-align: left;
  }

  li {
    margin-bottom: 1rem;
    padding-left: 1.8rem;
    position: relative;

    &:before {
      content: '→';
      color: ${props => props.theme.colors.primary};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }

  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  ul ul {
    margin-top: 0.5rem;
    margin-left: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      
      &:before {
        content: '•';
      }
    }
  }
`;

const ProjectTechStack = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

const Projects = () => {
  const projects = [
    {
      title: 'ANKA VEDA: Integrated Educational Management System',
      technologies: ['React js', 'HTML5', 'Tailwind CSS','CSS3', 'Javascript','Spring', 'Java', 'MongoDB'],
      description: (props) => (
        <>
          <ul>
            <li><strong>For Teachers:</strong>
              <ul>
                <li>Upload and manage student marks with comprehensive performance analytics (top performers, average, below-average, failing students)</li>
                <li>Send targeted announcements and homework assignments via WhatsApp with date-wise tracking</li>
                <li>Add personalized remarks and monitor attendance through detailed reports</li>
              </ul>
            </li>
            <li><strong>Question Bank Functionality:</strong>
              <ul>
                <li>Upload and manage diverse educational resources (videos, PDFs, handwritten notes, documents)</li>
                <li>Create and maintain a robust repository of questions</li>
              </ul>
            </li>
            <li><strong>Examination Module:</strong>
              <ul>
                <li>Upload and publish tests with WhatsApp delivery of links and scores</li>
              </ul>
            </li>
            <li><strong>For Principals:</strong>
              <ul>
                <li>Send school-wide or class-specific announcements</li>
                <li>Monitor performance and approve teacher uploaded data</li>
              </ul>
            </li>
          </ul>
          <ProjectTechStack>
            {props.technologies.map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </ProjectTechStack>
        </>
      )
    },
    {
      title: 'NEET-JEE Test Series Platform',
      technologies: ['React js', 'HTML5', 'Tailwind CSS','CSS3', 'Javascript','Spring', 'Java', 'MongoDB'],
      description: (props) => (
        <>
          <ul>
            <li>Developed a platform for mock tests with section-wise analysis for NEET and JEE aspirants</li>
            <li>Implemented dynamic question displays</li>
            <li>Integrated a real-time scoring system that provides instant feedback upon test completion, enabling users to immediately gauge their performance</li>
            <li>Enabled detailed review functionality, allowing users to view the correct answers along with comprehensive explanations</li>
            <li>Result Analysis: Provided detailed performance analytics displayed area-wise, section-wise, and difficulty-wise</li>
          </ul>
          <ProjectTechStack>
            {props.technologies.map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </ProjectTechStack>
        </>
      )
    }
  ];

  const ProjectContent = ({ title, description, technologies }) => (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>
        {description({ technologies })}
      </ProjectDescription>
    </>
  );

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Projects</span>
      </ProjectsTitle>
      <ProjectsSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Browse through my latest projects. Each one represents a unique challenge and
        solution, showcasing different aspects of my technical skills and creativity.
      </ProjectsSubtitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectContent {...project} />
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;