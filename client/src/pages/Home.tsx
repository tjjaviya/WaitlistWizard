import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndianBrokersSection from "@/components/IndianBrokersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  return (
    <div className="font-inter text-white antialiased relative">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IndianBrokersSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
