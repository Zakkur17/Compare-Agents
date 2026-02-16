import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useAppContext } from '../context/AppContext';
import { platformsData } from '../data/platformsData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PricingChart = () => {
  const { searchTerm, selectedDeployment, selectedAutonomy, priceRange, darkMode } = useAppContext();

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

  const chartData = {
    labels: filteredPlatforms.map(p => p.name),
    datasets: [
      {
        label: 'Monthly Cloud Cost ($)',
        data: filteredPlatforms.map(p => p.monthlyPrice),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
      {
        label: 'Self-Hosted Cost ($)',
        data: filteredPlatforms.map(p => p.selfHostedCost),
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Monthly Cost Comparison',
        color: darkMode ? '#f9fafb' : '#111827',
        font: {
          size: 18,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          afterLabel: function(context) {
            const platform = filteredPlatforms[context.dataIndex];
            return `Note: ${platform.priceNote}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#e5e7eb' : '#374151',
          callback: function(value) {
            return '$' + value;
          }
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#e5e7eb' : '#374151',
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Cost Analysis
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Compare monthly subscription costs vs. self-hosting expenses. Note that usage-based pricing may vary significantly.
        </p>
      </div>

      <div className="h-96 mb-6">
        <Bar data={chartData} options={options} />
      </div>

      {/* Pricing Details Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Platform</th>
              <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Monthly Price</th>
              <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Self-Hosted</th>
              <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 dark:text-white">
            {filteredPlatforms.map((platform) => (
              <tr key={platform.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 font-medium">
                  <div className="flex items-center gap-2">
                    <span>{platform.logo}</span>
                    <span>{platform.name}</span>
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  {platform.monthlyPrice === 0 ? (
                    <span className="text-green-600 dark:text-green-400 font-semibold">Free</span>
                  ) : (
                    <span className="font-semibold">${platform.monthlyPrice}</span>
                  )}
                </td>
                <td className="text-center py-3 px-4">
                  {platform.selfHostedCost === 0 ? (
                    <span className="text-gray-400">N/A</span>
                  ) : (
                    <span className="font-semibold">${platform.selfHostedCost}</span>
                  )}
                </td>
                <td className="py-3 px-4 text-xs text-gray-600 dark:text-gray-400">
                  {platform.priceNote}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing Notes */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
          💡 Pricing Considerations
        </h4>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Pay-per-use platforms (AWS, Google) can scale from $0 to $1000s based on usage</li>
          <li>• Self-hosted costs include infrastructure but exclude developer time</li>
          <li>• Enterprise plans often have custom pricing not reflected here</li>
          <li>• LLM API costs are additional for most platforms</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingChart;
