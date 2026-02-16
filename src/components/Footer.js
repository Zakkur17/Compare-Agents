import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const resources = [
    { name: "OpenClaw", url: "https://github.com/openclaw" },
    { name: "Microsoft Copilot Studio", url: "https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio" },
    { name: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/" },
    { name: "Google Vertex AI", url: "https://cloud.google.com/vertex-ai" },
    { name: "Claude AI", url: "https://www.anthropic.com/claude" },
    { name: "LangChain", url: "https://www.langchain.com/" },
    { name: "n8n", url: "https://n8n.io/" },
    { name: "Zapier", url: "https://zapier.com/" }
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              AI Agent Platform Comparison
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              An independent comparison of leading AI agent platforms for business automation. 
              Updated regularly to reflect the latest features and pricing.
            </p>
            <p className="text-xs text-gray-500">
              Last updated: February 2026
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Platform Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {resources.slice(0, 4).map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    → {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              More Platforms
            </h3>
            <ul className="space-y-2 text-sm">
              {resources.slice(4).map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    → {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span>⚠️</span> Important Disclaimer
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              This comparison is provided for informational purposes only. Pricing, features, and capabilities 
              are subject to change. Always verify current information with official platform documentation. 
              We are not affiliated with any of the platforms listed. Individual results may vary based on 
              specific use cases, implementation, and configuration. Conduct your own due diligence before 
              making purchasing decisions.
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">📝 Methodology Notes</h4>
          <ul className="text-xs text-gray-400 space-y-2">
            <li>
              • Pricing reflects base tier or starting costs as of February 2026. Usage-based charges may apply.
            </li>
            <li>
              • Feature assessments based on publicly available documentation and trial testing.
            </li>
            <li>
              • "Self-hosted costs" are estimates including infrastructure but excluding personnel.
            </li>
            <li>
              • Enterprise pricing and custom features may differ significantly from listed information.
            </li>
          </ul>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} AI Agent Platform Comparison. Not affiliated with any vendor.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#overview" className="text-gray-400 hover:text-white transition-colors">
              Overview
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            Built with React, TailwindCSS, and Chart.js | 
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 ml-1"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
