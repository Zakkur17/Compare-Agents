import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { platformsData } from '../data/platformsData';

const UseCases = () => {
  const { searchTerm, selectedDeployment, selectedAutonomy, priceRange } = useAppContext();

  const filteredPlatforms = useMemo(() => {
    return platformsData.filter(platform => {
      const matchesSearch = searchTerm === '' ||
        platform.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDeployment = selectedDeployment === 'all' ||
        platform.deployment.includes(selectedDeployment);
      const matchesAutonomy = selectedAutonomy === 'all' ||
        platform.autonomyLevel === selectedAutonomy;
      const matchesPrice = platform.monthlyPrice >= priceRange[0] &&
        platform.monthlyPrice <= priceRange[1];
      return matchesSearch && matchesDeployment && matchesAutonomy && matchesPrice;
    });
  }, [searchTerm, selectedDeployment, selectedAutonomy, priceRange]);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Common Use Cases
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Explore what each platform excels at and implementation complexity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{platform.logo}</span>
              <h4 className="font-bold text-gray-900 dark:text-white">
                {platform.name}
              </h4>
            </div>

            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Best For:
                </h5>
                <ul className="space-y-2">
                  {platform.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">→</span>
                      <div className="flex-1">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {useCase.name}
                        </span>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getComplexityColor(useCase.complexity)}`}>
                          {useCase.complexity}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Integrations:
                </h5>
                <div className="flex flex-wrap gap-1">
                  {platform.integrations.slice(0, 3).map((integration, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                    >
                      {integration}
                    </span>
                  ))}
                  {platform.integrations.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{platform.integrations.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Complexity Legend */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Complexity Guide:</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded">
              Low
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              No coding required, quick setup
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded">
              Medium
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              Some technical knowledge needed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded">
              High
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              Advanced programming required
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
