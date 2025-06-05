import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../Styles/ThemeContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.navBackground};
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

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
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 250px;
    background: ${props => props.theme.colors.navBackground};
    backdrop-filter: blur(10px);
    padding: 2rem;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

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

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-left: 0;
    padding: 0.4rem 0.8rem;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary}80;
    transform: translateY(-2px);
    color: white;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme.colors.background === '#000000';

  return (
    <HeaderContainer>
      <Logo href="#home">
        <span>Sujeetha</span>
      </Logo>
      <Nav isOpen={isMenuOpen}>
        <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
        <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
        <DownloadButton href="/Sujeetha_Resume.pdf" download onClick={() => setIsMenuOpen(false)}>
          Download CV
        </DownloadButton>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </Nav>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;