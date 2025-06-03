import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './Styles/ThemeContext';
import GlobalStyles from './Styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Background from './components/Background/Background';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import SocialLinks from './components/SocialLinks/SocialLinks';
import About from './components/About/About';

function AppContent() {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <Background />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
