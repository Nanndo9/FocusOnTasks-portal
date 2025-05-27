import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
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
}