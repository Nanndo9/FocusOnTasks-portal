import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection'; // Adicionando o novo componente
import Footer from './components/Footer';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <HeroSection />
    <div id="funcionalidades">
      <FeaturesSection />
    </div>
    <DemoSection />
    <div id="precos">
      <PricingSection />
    </div>
    <AboutSection />
    <Footer />
  </>
);

export default App;
