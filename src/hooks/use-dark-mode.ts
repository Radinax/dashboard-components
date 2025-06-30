import { useState, useEffect } from "react";

// Custom hook for managing dark mode
const useDarkMode = () => {
  // Check if user has previously saved a theme
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply theme class to <html> and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
