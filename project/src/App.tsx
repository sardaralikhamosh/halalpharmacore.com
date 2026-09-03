import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ManufacturingPage from './pages/ManufacturingPage';
import EventsPage from './pages/EventsPage';
import DirectoryPage from './pages/DirectoryPage';
import HalalCompliancePage from './pages/HalalCompliancePage';
import HalalDrugCertificationPage from './pages/HalalDrugCertificationPage';
import HalalAssuranceSystemPage from './pages/HalalAssuranceSystemPage';
import MarketAnalysisPage from './pages/MarketAnalysisPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import MarketNewsPage from './pages/MarketNewsPage'; // Add this import

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/halal-compliance" element={<HalalCompliancePage />} />
            <Route path="/halal-drug-certification" element={<HalalDrugCertificationPage />} />
            <Route path="/halal-assurance-system" element={<HalalAssuranceSystemPage />} />
            <Route path="/market-analysis" element={<MarketAnalysisPage />} />
            <Route path="/market-news" element={<MarketNewsPage />} /> {/* Add this route */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;