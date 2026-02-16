# AI Agent Platform Comparison

An interactive landing page for comparing AI agent platforms for business automation. Built with React, TailwindCSS, and Chart.js.

![AI Agent Comparison](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-blue)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.1-ff6384)

## 🚀 Features

- **Interactive Comparison Table**: Sort and filter platforms by features, pricing, deployment, and autonomy
- **Visual Pricing Charts**: Bar charts comparing monthly and self-hosted costs
- **Smart Filtering**: Filter by deployment type, autonomy level, price range, and search functionality
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Feature Color Coding**: 
  - 🟢 Green = Fully supported
  - 🟡 Yellow = Partially supported
  - 🔴 Red = Not supported
- **Hover Tooltips**: Detailed explanations for features, pricing, and security notes
- **Use Cases & Security**: Dedicated sections for workflow examples and security/privacy comparison

## 📊 Platforms Compared

1. **OpenClaw** - Open-source automation with AI agents
2. **Microsoft Copilot Studio** - Enterprise-ready AI automation
3. **Amazon Bedrock + Step Functions** - Serverless AI orchestration on AWS
4. **Google Gemini / Vertex AI** - Google's multimodal AI platform
5. **Claude AI (Anthropic)** - Constitutional AI for safe automation
6. **LangChain / AutoGen** - Framework for AI agent development
7. **n8n / Zapier / Make** - No-code workflow automation

## 🛠️ Tech Stack

- **React 18.2** - UI framework with functional components and hooks
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Chart.js 4.4** - Beautiful, responsive charts
- **React Context API** - State management for filters and theme
- **CSS Animations** - Smooth transitions and hover effects

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd "c:\Users\Peridot-IT\Downloads\P Projects\Compare Agents"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   ```
   http://localhost:3000
   ```

The app will automatically reload when you make changes to the source code.

## 📁 Project Structure

```
Compare Agents/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── Header.js          # Header with search and filters
│   │   ├── OverviewCards.js   # Platform overview cards
│   │   ├── FeatureComparisonTable.js  # Interactive feature table
│   │   ├── PricingChart.js    # Pricing visualization
│   │   ├── UseCases.js        # Use cases section
│   │   ├── SecurityTable.js   # Security comparison
│   │   ├── Summary.js         # Recommendations
│   │   └── Footer.js          # Footer with resources
│   ├── context/
│   │   └── AppContext.js      # Global state management
│   ├── data/
│   │   └── platformsData.js   # Platform data & definitions
│   ├── App.js                 # Main app component
│   ├── index.js               # App entry point
│   └── index.css              # Global styles & animations
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎯 Usage

### Filtering Platforms

1. **Search**: Type platform names, features, or keywords in the search bar
2. **Deployment Filter**: Select cloud, self-hosted, or hybrid options
3. **Autonomy Filter**: Filter by AI autonomy level (Low to High)
4. **Price Range**: Adjust slider to filter by monthly cost
5. **Reset**: Click "Reset Filters" to clear all filters

### Sorting Table

Click on column headers in the Feature Comparison Table to sort by:
- Platform name
- Price
- Deployment type
- Autonomy level

### Dark Mode

Click the sun/moon icon in the top-right header to toggle dark mode. Your preference is saved automatically.

## 🎨 Customization

### Adding New Platforms

Edit `src/data/platformsData.js` and add a new platform object:

```javascript
{
  id: "new-platform",
  name: "New Platform Name",
  logo: "🤖",
  tagline: "Brief description",
  deployment: "Cloud",
  autonomyLevel: "Medium",
  technicalKnowledge: "Intermediate",
  monthlyPrice: 50,
  selfHostedCost: 0,
  priceNote: "Pricing details",
  features: {
    naturalLanguageProcessing: "present",
    // ... other features
  },
  integrations: ["Service1", "Service2"],
  useCases: [
    { name: "Use case", complexity: "Medium" }
  ],
  security: {
    localData: false,
    compliance: "SOC 2",
    governance: "Vendor managed",
    encryption: "End-to-end"
  },
  pros: ["Pro 1", "Pro 2"],
  cons: ["Con 1", "Con 2"]
}
```

### Modifying Features

Add or remove features in the `featureDescriptions` object in `src/data/platformsData.js`.

### Styling

- **Colors**: Modify `tailwind.config.js` for theme colors
- **Animations**: Edit `src/index.css` for custom animations
- **Layout**: Adjust component styles using TailwindCSS classes

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components automatically adjust for optimal viewing on any device.

## 🚀 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

To serve the production build locally:

```bash
npm install -g serve
serve -s build
```

## 📊 Data Update Guidelines

Platform data should be updated regularly to reflect:
- Current pricing (check official websites)
- New features and capabilities
- Compliance certifications
- Integration additions
- User feedback and real-world usage

Review and update data quarterly or when major platform updates occur.

## 🔒 Security Considerations

This comparison tool:
- ✅ Runs entirely client-side (no data sent to servers)
- ✅ No tracking or analytics
- ✅ No personal data collection
- ✅ Open source and auditable

## 📝 License

This project is provided as-is for informational purposes. Not affiliated with any platform vendor.

## 🤝 Contributing

To contribute:
1. Update platform data with verified information
2. Add sources/links for accuracy
3. Test responsive design on multiple devices
4. Ensure dark mode compatibility

## 📧 Questions or Issues?

For questions or to report issues:
1. Check the official platform documentation
2. Verify data accuracy from official sources
3. Test in latest Chrome/Firefox/Safari

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Chart.js Guide](https://www.chartjs.org/docs/)
- Platform-specific documentation (see Footer links)

## 🌟 Highlights

- **Fully Interactive**: Real-time filtering and sorting
- **Presentation Ready**: Professional design suitable for demos
- **Easy to Update**: JSON-based data structure
- **Performance Optimized**: Memoized computations and efficient rendering
- **Accessible**: Semantic HTML and ARIA labels

---

**Built with ❤️ using React, TailwindCSS, and Chart.js**

Last Updated: February 2026
