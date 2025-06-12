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
  padding: 2rem;
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

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.7;

  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  strong {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'ANKA VEDA – Integrated Educational Management System',
      frontend: 'HTML, CSS, JavaScript, React.js',
      backend: 'Java, SpringBoot',
      database: 'MongoDB',
      responsibilities: [
        'Developed modules for teachers to upload marks, assign homework, and analyze student performance.',
        'Integrated WhatsApp messaging API to deliver student-specific test links and announcements.',
        'Designed a principal dashboard to approve data, send announcements, and monitor overall performance.',
        'Built a dynamic question bank to manage PDFs, videos, and handwritten notes.',
        'Implemented exam publishing with real-time scoring and controlled access.',
      ]
    },
    {
      title: 'NEET-JEE Test Series Platform',
      frontend: 'HTML, CSS, JavaScript, React.js',
      backend: 'Java, SpringBoot',
      database: 'MongoDB',
      responsibilities: [
        'Built a real-time mock exam platform with automatic scoring and result feedback.',
        'Created detailed dashboards with section-wise, area-wise, and difficulty-wise performance analysis.',
        'Developed tracking logic for question timers, skipped, wrong, and correct answers.',
        'Enabled answer review with explanations and graphical result summaries.',
        'Integrated a leaderboard displaying top-performing students.',
      ]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects 
      </ProjectsTitle>

      <ProjectsGrid>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx}>
            <ProjectTitle>{`${idx + 1}. ${proj.title}`}</ProjectTitle>

            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              color: '#fff',
            }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px', fontWeight: 'bold' }}>Front End Technology:</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px' }}>{proj.frontend}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px', fontWeight: 'bold' }}>Back End Technology:</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px' }}>{proj.backend}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px', fontWeight: 'bold' }}>Database:</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '10px' }}>{proj.database}</td>
                </tr>
              </tbody>
            </table>

            <ProjectDescription>
              <strong>Roles and Responsibilities:</strong>
              <ul>
                {proj.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
