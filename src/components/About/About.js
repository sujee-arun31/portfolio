import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Remove this line
// import profileImage from './profile.jpg';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 4rem 10%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    opacity: 0.1;
    border-radius: 50%;
  }
`;

const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentSection = styled(motion.div)`
  text-align: left;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const Greeting = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  opacity: 0.9;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  
  &::before {
    content: '•';
    color: ${props => props.theme.colors.primary};
  }
`;

// const TechnicalSkills = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 1.5rem 0;
  
//   li {
//     margin-bottom: 0.8rem;
//     padding-left: 1.5rem;
//     position: relative;
    
//     &::before {
//       content: '•';
//       color: ${props => props.theme.colors.primary};
//       position: absolute;
//       left: 0;
//     }
//   }
// `;

// const ContactButton = styled(motion.button)`
//   background-color: ${props => props.theme.colors.primary};
//   color: #fff;
//   border: none;
//   padding: 0.8rem 2rem;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     opacity: 0.9;
//   }
// `;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <ImageSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage>
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" />

          </ProfileImage>
        </ImageSection>
        
        <ContentSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AboutTitle>About <span>Me</span></AboutTitle>
          <Greeting>Hi, I'm a Web Developer</Greeting>
          
          <Description>
            Results-driven Web Developer over a year of experience in designing, developing, and maintaining responsive 
            web applications. Proficient in front-end technologies including HTML, CSS, JavaScript, and React.js. Skilled in optimizing 
            website performance, enhancing user experience, and collaborating with cross-functional teams to deliver scalable 
            solutions. Eager to contribute my technical expertise and problem-solving skills to drive innovation and support business 
            growth in a dynamic development environment.
          </Description>
          
          <SkillsList>
            <SkillItem>Front-end Development</SkillItem>
            <SkillItem>UI Designing</SkillItem>
            <SkillItem>Responsive Web Design</SkillItem>
            <SkillItem>Debugging</SkillItem>
          </SkillsList>
       
          
        
        </ContentSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;