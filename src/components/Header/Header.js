import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 100;
`;

const Logo = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  span {
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const DownloadButton = styled.a`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-left: 2rem;

  &:hover {
    background-color: ${props => props.theme.colors.text};
    transform: translateY(-2px);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="#home">
        <span>Sujeetha</span>
      </Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <DownloadButton href="/Sujeetha_Resume.pdf" download>
          Download CV
        </DownloadButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;