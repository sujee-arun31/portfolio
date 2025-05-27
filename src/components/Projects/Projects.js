import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

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

const Projects = () => {
  const projects = [
    {
      icon: <FaGraduationCap />,
      title: 'ANKA VEDA: Integrated Educational Management System',
      description: (
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
      )
    },
    {
      icon: <FaLaptopCode />,
      title: 'NEET-JEE Test Series Platform',
      description: (
        <ul>
          <li>Developed a platform for mock tests with section-wise analysis for NEET and JEE aspirants</li>
          <li>Implemented dynamic question displays</li>
          <li>Integrated a real-time scoring system that provides instant feedback upon test completion, enabling users to immediately gauge their performance</li>
          <li>Enabled detailed review functionality, allowing users to view the correct answers along with comprehensive explanations</li>
          <li>Result Analysis: Provided detailed performance analytics displayed area-wise, section-wise, and difficulty-wise</li>
        </ul>
      )
    }
  ];

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
        Showcasing my expertise in educational technology and web development
      </ProjectsSubtitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <ProjectHeader>
              <IconWrapper>{project.icon}</IconWrapper>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;