import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Background from './components/Background/Background';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import SocialLinks from './components/SocialLinks/SocialLinks';
import About from './components/About/About';

const theme = {
  colors: {
    primary: '#0066cc', // Professional blue color instead of #ff4d4d
    background: '#000000',
    text: '#ffffff'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Background />
      <Header />
      <Hero />
      <About />  {/* Add this line */}
      <Skills />
      <Projects />
      <SocialLinks />
    </ThemeProvider>
  );
}

export default App;
