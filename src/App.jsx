import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import WorkFlow from './components/WorkFlow';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <WorkFlow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
