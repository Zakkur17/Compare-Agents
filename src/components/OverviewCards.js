import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { platformsData } from '../data/platformsData';

const OverviewCards = () => {
  const {
    searchTerm,
    selectedDeployment,
    selectedAutonomy,
    priceRange
  } = useAppContext();

  const filteredPlatforms = useMemo(() => {
    return platformsData.filter(platform => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.deployment.toLowerCase().includes(searchTerm.toLowerCase());

      // Deployment filter
      const matchesDeployment = selectedDeployment === 'all' ||
        platform.deployment.includes(selectedDeployment);

      // Autonomy filter
      const matchesAutonomy = selectedAutonomy === 'all' ||
        platform.autonomyLevel === selectedAutonomy;

      // Price filter
      const matchesPrice = platform.monthlyPrice >= priceRange[0] &&
        platform.monthlyPrice <= priceRange[1];

      return matchesSearch && matchesDeployment && matchesAutonomy && matchesPrice;
    });
  }, [searchTerm, selectedDeployment, selectedAutonomy, priceRange]);

  const getAutonomyColor = (level) => {
    if (level.includes('High')) return 'text-green-600 dark:text-green-400';
    if (level.includes('Medium')) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  const getTechnicalColor = (level) => {
    if (level.includes('Advanced')) return 'text-red-600 dark:text-red-400';
    if (level.includes('Intermediate')) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Platform Overview
        </h2>
        <span className="text-gray-600 dark:text-gray-400">
          {filteredPlatforms.length} of {platformsData.length} platforms
        </span>
      </div>

      {filteredPlatforms.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No platforms match your filters. Try adjusting your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover border border-gray-200 dark:border-gray-700"
            >
              {/* Logo and Name */}
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{platform.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {platform.tagline}
                </p>
              </div>

              {/* Key Info */}
              <div className="space-y-3">
                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Price:</span>
                  <span className="font-semibold text-gray-900 dark:text-white tooltip">
                    {platform.monthlyPrice === 0 ? 'Free*' : `$${platform.monthlyPrice}/mo`}
                    <span className="tooltiptext">{platform.priceNote}</span>
                  </span>
                </div>

                {/* Deployment */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Deployment:</span>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {platform.deployment}
                  </span>
                </div>

                {/* Autonomy Level */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Autonomy:</span>
                  <span className={`text-sm font-medium ${getAutonomyColor(platform.autonomyLevel)}`}>
                    {platform.autonomyLevel}
                  </span>
                </div>

                {/* Technical Knowledge */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Skill Level:</span>
                  <span className={`text-sm font-medium ${getTechnicalColor(platform.technicalKnowledge)}`}>
                    {platform.technicalKnowledge}
                  </span>
                </div>
              </div>

              {/* Pros/Cons Preview */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">✓ Pros:</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {platform.pros.slice(0, 2).join(', ')}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400">✗ Cons:</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {platform.cons.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OverviewCards;
