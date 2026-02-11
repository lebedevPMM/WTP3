import './index.css';
import './styles/Grid.css';
import './styles/Typography.css';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ValueGrid from './components/ValueGrid/ValueGrid';
import ProcessSection from './components/ProcessSection/ProcessSection';
import RiskPolicy from './components/RiskPolicy/RiskPolicy';
import PartnerModes from './components/PartnerModes/PartnerModes';
import CatalogGrid from './components/CatalogGrid/CatalogGrid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="grid-container">
      <Navbar />
      <HeroSection />
      <ValueGrid />
      <ProcessSection />
      <RiskPolicy />
      <PartnerModes />
      <CatalogGrid />
      <Footer />
    </div>
  );
}

export default App;
