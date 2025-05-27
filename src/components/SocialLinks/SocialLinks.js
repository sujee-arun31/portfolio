import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    display: none;
    @media (min-width: 768px) {
      display: inline;
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLink 
        href="https://github.com/sujee-arun31/portfolio" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
    
      </SocialLink>
      <SocialLink 
        href="https://www.linkedin.com/in/sujeetha-periyasamy-827622366/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      
      </SocialLink>
      <SocialLink 
        href="https://wa.me/918098388674" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;