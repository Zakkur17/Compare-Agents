import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import FeatureComparisonTable from './components/FeatureComparisonTable';
import PricingChart from './components/PricingChart';
import UseCases from './components/UseCases';
import SecurityTable from './components/SecurityTable';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-16">
          <section id="overview" className="animate-fade-in">
            <OverviewCards />
          </section>
          
          <section id="features" className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Feature Comparison
            </h2>
            <FeatureComparisonTable />
          </section>
          
          <section id="pricing" className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Pricing Comparison
            </h2>
            <PricingChart />
          </section>
          
          <section id="use-cases" className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Use Cases & Workflows
            </h2>
            <UseCases />
          </section>
          
          <section id="security" className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Security & Privacy
            </h2>
            <SecurityTable />
          </section>
          
          <section id="summary" className="animate-fade-in">
            <Summary />
          </section>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
