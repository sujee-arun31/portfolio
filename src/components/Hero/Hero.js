import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;

const Content = styled.div`
  max-width: 600px;
`;

const ImageContainer = styled(motion.div)`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactInfo = styled(motion.div)`
  position: absolute;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  z-index: 100;
  min-width: 300px;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #333; /* Added dark text color */
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <HeroSection>
      <ImageContainer
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ 
          opacity: 1, 
          rotate: 360,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            opacity: { duration: 1, ease: "easeOut" }
          }
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <img src="/images/laptop.png" alt="Laptop" />
      </ImageContainer>
      
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi,<br />I'm <span>Sujeetha</span>
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Junior Software Developer
        </Subtitle>
        <div style={{ position: 'relative' }}>
          <ContactButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(!showContact)}
          >
            Contact
          </ContactButton>
          
          {showContact && (
            <ContactInfo
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <h3>Contact Information</h3>
              <p>Email: sujiarun31@gmail.com</p>
              <p>Phone: 8098388674</p>
            
              <button onClick={() => setShowContact(false)}>Close</button>
            </ContactInfo>
          )}
        </div>
      </Content>
    </HeroSection>
  );
};

export default Hero;