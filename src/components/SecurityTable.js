import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { platformsData } from '../data/platformsData';

const SecurityTable = () => {
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

  const getSecurityIcon = (value) => {
    if (value === true || value === 'Full control') {
      return <span className="text-green-600 dark:text-green-400 text-xl">✓</span>;
    }
    if (value === false) {
      return <span className="text-red-600 dark:text-red-400 text-xl">✗</span>;
    }
    return <span className="text-yellow-600 dark:text-yellow-400 text-xl">◐</span>;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Security & Privacy Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Compare data handling, compliance certifications, and governance models
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300 dark:border-gray-600">
              <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold min-w-[200px]">
                Platform
              </th>
              <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold min-w-[150px]">
                <div className="tooltip">
                  Local Data Storage
                  <span className="tooltiptext">Can data be stored entirely on your infrastructure?</span>
                </div>
              </th>
              <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold min-w-[200px]">
                <div className="tooltip">
                  Compliance
                  <span className="tooltiptext">Industry certifications and standards</span>
                </div>
              </th>
              <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold min-w-[180px]">
                <div className="tooltip">
                  Governance
                  <span className="tooltiptext">Who controls access and policies?</span>
                </div>
              </th>
              <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold min-w-[150px]">
                <div className="tooltip">
                  Encryption
                  <span className="tooltiptext">Data encryption capabilities</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-900 dark:text-white">
            {filteredPlatforms.map((platform, index) => (
              <tr
                key={platform.id}
                className={`border-b border-gray-100 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/30' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <td className="py-4 px-4 font-medium align-top">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{platform.logo}</span>
                    <span>{platform.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 align-top">
                  <div className="flex items-center gap-2">
                    {getSecurityIcon(platform.security.localData)}
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {typeof platform.security.localData === 'boolean' 
                        ? (platform.security.localData ? 'Yes' : 'No')
                        : platform.security.localData}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 align-top">
                  <span className="text-xs text-gray-700 dark:text-gray-300">
                    {platform.security.compliance}
                  </span>
                </td>
                <td className="py-4 px-4 align-top">
                  <span className="text-xs text-gray-700 dark:text-gray-300">
                    {platform.security.governance}
                  </span>
                </td>
                <td className="py-4 px-4 align-top">
                  <span className="text-xs text-gray-700 dark:text-gray-300">
                    {platform.security.encryption}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Security Notes */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <span>🔒</span> Data Privacy
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Self-hosted = full data control</li>
            <li>• Cloud platforms = vendor manages data</li>
            <li>• Check data residency requirements</li>
          </ul>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
            <span>✓</span> Compliance
          </h4>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• SOC 2: Security controls audit</li>
            <li>• ISO 27001: Information security</li>
            <li>• GDPR/HIPAA: Data protection regulations</li>
          </ul>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
          ⚠️ Security Best Practices
        </h4>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Review vendor security documentation before deployment</li>
          <li>• Implement role-based access control (RBAC)</li>
          <li>• Regularly audit AI agent actions and data access</li>
          <li>• Use API keys and secrets management</li>
          <li>• Consider data classification and sensitivity levels</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityTable;
