import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    // Only run on the client side
    const savedTheme = localStorage.getItem('darkMode');
    const initialDarkMode = savedTheme ? JSON.parse(savedTheme) : false;
    setDarkMode(initialDarkMode);

    // Apply theme class to document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));

      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, isClient]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Don't render children until client-side initialization is complete
  // This prevents hydration mismatches
  if (!isClient) {
    return <div className="app">Loading...</div>; // Or a skeleton loader
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};