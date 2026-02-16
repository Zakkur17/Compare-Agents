import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeployment, setSelectedDeployment] = useState('all');
  const [selectedAutonomy, setSelectedAutonomy] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDeployment('all');
    setSelectedAutonomy('all');
    setPriceRange([0, 500]);
    setSelectedFeatures([]);
  };

  const value = {
    darkMode,
    toggleDarkMode,
    searchTerm,
    setSearchTerm,
    selectedDeployment,
    setSelectedDeployment,
    selectedAutonomy,
    setSelectedAutonomy,
    priceRange,
    setPriceRange,
    selectedFeatures,
    setSelectedFeatures,
    resetFilters
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
