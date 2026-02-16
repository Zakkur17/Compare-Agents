import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { deploymentTypes, autonomyLevels } from '../data/platformsData';

const Header = () => {
  const {
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
    resetFilters
  } = useAppContext();

  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        {/* Title and Dark Mode Toggle */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              AI Agent Platform Comparison
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Compare features, pricing, and capabilities of leading AI automation platforms
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search platforms, features, or use cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
            />
            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Filter Toggle Button */}
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all flex items-center gap-2"
          >
            <span>Filters</span>
            <span className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-white rounded-lg transition-all"
          >
            Reset Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-slide-in">
            {/* Deployment Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Deployment Type
              </label>
              <select
                value={selectedDeployment}
                onChange={(e) => setSelectedDeployment(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Deployments</option>
                {deploymentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Autonomy Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Autonomy Level
              </label>
              <select
                value={selectedAutonomy}
                onChange={(e) => setSelectedAutonomy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Levels</option>
                {autonomyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monthly Price: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Quick Navigation */}
        <nav className="mt-3 flex flex-wrap gap-2">
          {['overview', 'features', 'pricing', 'use-cases', 'security', 'summary'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 text-gray-700 dark:text-gray-200 rounded-lg transition-all capitalize"
            >
              {section.replace('-', ' ')}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
