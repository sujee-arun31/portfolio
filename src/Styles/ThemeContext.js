import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    colors: {
      primary: '#0066cc',
      background: '#ffffff',
      text: '#000000',
      navBackground: 'rgba(255, 255, 255, 0.8)'
    }
  },
  dark: {
    colors: {
      primary: '#0066cc',
      background: '#000000',
      text: '#ffffff',
      navBackground: 'rgba(0, 0, 0, 0.8)'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);