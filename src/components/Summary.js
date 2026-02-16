import React from 'react';
import { platformsData } from '../data/platformsData';

const Summary = () => {
  const recommendations = [
    {
      title: "Best for Enterprises with Microsoft Stack",
      platform: "Microsoft Copilot Studio",
      icon: "🤖",
      reason: "Seamless integration with Microsoft 365, Teams, and Azure. Enterprise-grade support and compliance.",
      idealFor: ["Large organizations", "Microsoft-heavy environments", "Low-code preference"]
    },
    {
      title: "Best for AWS-Native Companies",
      platform: "Amazon Bedrock + Step Functions",
      icon: "☁️",
      reason: "Perfect for organizations already on AWS. Multiple AI models, serverless architecture, pay-per-use.",
      idealFor: ["AWS infrastructure", "Serverless workflows", "Multiple AI models"]
    },
    {
      title: "Best for Maximum Flexibility & Control",
      platform: "OpenClaw / LangChain",
      icon: "🦞",
      reason: "Open-source, no vendor lock-in, full customization. Ideal for teams with strong technical capabilities.",
      idealFor: ["Technical teams", "Custom requirements", "Cost-conscious at scale"]
    },
    {
      title: "Best for Quick No-Code Automation",
      platform: "n8n / Zapier / Make",
      icon: "⚡",
      reason: "Fastest time-to-value for simple automations. Thousands of pre-built integrations.",
      idealFor: ["Non-technical users", "Simple workflows", "Rapid prototyping"]
    },
    {
      title: "Best for Advanced AI Capabilities",
      platform: "Google Gemini / Claude AI",
      icon: "🔷",
      reason: "Cutting-edge multimodal AI and reasoning capabilities. Great for content, analysis, and research.",
      idealFor: ["Advanced AI features", "Multimodal processing", "Research & analysis"]
    }
  ];

  const decisionMatrix = [
    {
      question: "Do you need no-code/low-code?",
      yes: "Microsoft Copilot Studio, n8n/Zapier",
      no: "OpenClaw, LangChain, AWS Bedrock"
    },
    {
      question: "Is your data highly sensitive?",
      yes: "Self-hosted: OpenClaw, LangChain, n8n",
      no: "Any cloud platform"
    },
    {
      question: "Do you have technical AI expertise?",
      yes: "OpenClaw, LangChain, AWS Bedrock",
      no: "Copilot Studio, Zapier, Make"
    },
    {
      question: "Budget under $100/month?",
      yes: "OpenClaw, LangChain, n8n, Claude API",
      no: "All enterprise options available"
    },
    {
      question: "Need enterprise compliance?",
      yes: "Microsoft, AWS, Google platforms",
      no: "Self-hosted or any platform"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Recommendations & Summary
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Choose the right platform based on your specific needs
        </p>
      </div>

      {/* Recommendations Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 border-2 border-primary-200 dark:border-primary-700 card-hover"
          >
            <div className="text-4xl mb-3 text-center">{rec.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
              {rec.title}
            </h3>
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-semibold">
                {rec.platform}
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {rec.reason}
            </p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Ideal for:
              </p>
              <ul className="space-y-1">
                {rec.idealFor.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Decision Matrix */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Decision Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Question
                </th>
                <th className="text-left py-3 px-4 text-green-700 dark:text-green-300 font-semibold">
                  If Yes →
                </th>
                <th className="text-left py-3 px-4 text-blue-700 dark:text-blue-300 font-semibold">
                  If No →
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 dark:text-white">
              {decisionMatrix.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
                >
                  <td className="py-4 px-4 font-medium">{item.question}</td>
                  <td className="py-4 px-4 text-sm text-green-700 dark:text-green-300">
                    {item.yes}
                  </td>
                  <td className="py-4 px-4 text-sm text-blue-700 dark:text-blue-300">
                    {item.no}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {platformsData.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Platforms Compared
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {platformsData.filter(p => p.monthlyPrice === 0).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Free Options
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            {platformsData.filter(p => p.deployment.includes('Self-hosted')).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Self-Hosted Options
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
            15+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Features Analyzed
          </div>
        </div>
      </div>

      {/* Final Considerations */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Key Takeaways
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span>💡</span> Remember
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• No single platform is perfect for all use cases</li>
              <li>• Start small and scale gradually</li>
              <li>• Consider total cost of ownership (TCO)</li>
              <li>• Evaluate vendor lock-in risks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span>🎯</span> Action Items
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Define your specific use cases</li>
              <li>• Test with proof-of-concept projects</li>
              <li>• Review security requirements</li>
              <li>• Calculate expected ROI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
