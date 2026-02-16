import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { platformsData, featureDescriptions } from '../data/platformsData';

const FeatureComparisonTable = () => {
  const { searchTerm, selectedDeployment, selectedAutonomy, priceRange } = useAppContext();
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const filteredPlatforms = useMemo(() => {
    return platformsData.filter(platform => {
      const matchesSearch = searchTerm === '' ||
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDeployment = selectedDeployment === 'all' ||
        platform.deployment.includes(selectedDeployment);
      const matchesAutonomy = selectedAutonomy === 'all' ||
        platform.autonomyLevel === selectedAutonomy;
      const matchesPrice = platform.monthlyPrice >= priceRange[0] &&
        platform.monthlyPrice <= priceRange[1];
      return matchesSearch && matchesDeployment && matchesAutonomy && matchesPrice;
    });
  }, [searchTerm, selectedDeployment, selectedAutonomy, priceRange]);

  const sortedPlatforms = useMemo(() => {
    if (!sortColumn) return filteredPlatforms;

    return [...filteredPlatforms].sort((a, b) => {
      let aValue, bValue;

      if (sortColumn === 'name') {
        aValue = a.name;
        bValue = b.name;
      } else if (sortColumn === 'price') {
        aValue = a.monthlyPrice;
        bValue = b.monthlyPrice;
      } else if (sortColumn === 'deployment') {
        aValue = a.deployment;
        bValue = b.deployment;
      } else if (sortColumn === 'autonomy') {
        const autonomyOrder = { 'Low': 1, 'Low-Medium': 2, 'Medium': 3, 'Medium-High': 4, 'High': 5 };
        aValue = autonomyOrder[a.autonomyLevel] || 0;
        bValue = autonomyOrder[b.autonomyLevel] || 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredPlatforms, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getFeatureIcon = (status) => {
    switch (status) {
      case 'present':
        return <span className="text-2xl feature-present">✓</span>;
      case 'partial':
        return <span className="text-2xl feature-partial">◐</span>;
      case 'absent':
        return <span className="text-2xl feature-absent">✗</span>;
      default:
        return <span className="text-gray-400">-</span>;
    }
  };

  const featureKeys = Object.keys(featureDescriptions);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto comparison-table">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center justify-between w-full hover:text-primary-600 dark:hover:text-primary-400 text-gray-800 dark:text-gray-100 font-semibold"
                >
                  <span>Platform</span>
                  {sortColumn === 'name' && (
                    <span className="ml-2">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  onClick={() => handleSort('price')}
                  className="flex items-center justify-between w-full hover:text-primary-600 dark:hover:text-primary-400 text-gray-800 dark:text-gray-100 font-semibold"
                >
                  <span>Price</span>
                  {sortColumn === 'price' && (
                    <span className="ml-2">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  onClick={() => handleSort('deployment')}
                  className="flex items-center justify-between w-full hover:text-primary-600 dark:hover:text-primary-400 text-gray-800 dark:text-gray-100 font-semibold"
                >
                  <span>Deployment</span>
                  {sortColumn === 'deployment' && (
                    <span className="ml-2">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  onClick={() => handleSort('autonomy')}
                  className="flex items-center justify-between w-full hover:text-primary-600 dark:hover:text-primary-400 text-gray-800 dark:text-gray-100 font-semibold"
                >
                  <span>Autonomy</span>
                  {sortColumn === 'autonomy' && (
                    <span className="ml-2">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </button>
              </th>
              {featureKeys.map((featureKey) => (
                <th key={featureKey} className="min-w-[140px] px-3">
                  <div className="tooltip">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 capitalize leading-tight block">
                      {featureKey
                        .replace(/([A-Z])/g, ' $1')
                        .trim()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                    </span>
                    <span className="tooltiptext">{featureDescriptions[featureKey]}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-900 dark:text-white">
            {sortedPlatforms.map((platform) => (
              <tr key={platform.id}>
                <td className="sticky left-0 z-10 bg-white dark:bg-gray-800 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{platform.logo}</span>
                    <span>{platform.name}</span>
                  </div>
                </td>
                <td className="text-center">
                  <div className="tooltip">
                    <span className="font-semibold">
                      {platform.monthlyPrice === 0 ? 'Free' : `$${platform.monthlyPrice}`}
                    </span>
                    <span className="tooltiptext">{platform.priceNote}</span>
                  </div>
                </td>
                <td className="text-center text-sm">{platform.deployment}</td>
                <td className="text-center text-sm">{platform.autonomyLevel}</td>
                {featureKeys.map((featureKey) => (
                  <td key={featureKey} className="text-center">
                    {getFeatureIcon(platform.features[featureKey])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl feature-present">✓</span>
            <span className="text-gray-700 dark:text-gray-300">Fully Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl feature-partial">◐</span>
            <span className="text-gray-700 dark:text-gray-300">Partially Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl feature-absent">✗</span>
            <span className="text-gray-700 dark:text-gray-300">Not Supported</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparisonTable;
