import { useState, useEffect } from "react";
import { Link } from "wouter";
import GradientBorder from "./GradientBorder";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md ${scrolled ? 'bg-deep-blue/80' : 'bg-transparent'} border-b border-white/5 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold font-montserrat">
                <span className="gradient-cyan-purple gradient-text">AlgoTrade</span>
                <span className="text-white">Transformer</span>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection("features")} 
              className="text-white/80 hover:text-[#00ffff] transition-all duration-300 cursor-pointer"
            >
              Features
            </a>
            <a 
              onClick={() => scrollToSection("how-it-works")} 
              className="text-white/80 hover:text-[#00ffff] transition-all duration-300 cursor-pointer"
            >
              How It Works
            </a>
            <a 
              onClick={() => scrollToSection("indian-brokers")} 
              className="text-white/80 hover:text-[#00ffff] transition-all duration-300 cursor-pointer"
            >
              Supported Brokers
            </a>
            <a 
              onClick={() => scrollToSection("about")} 
              className="text-white/80 hover:text-[#00ffff] transition-all duration-300 cursor-pointer"
            >
              About
            </a>
            <GradientBorder>
              <button className="px-3 py-2 text-[#00ffff] font-semibold">
                Get Started
              </button>
            </GradientBorder>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white" 
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-[#0a0b1e]/95 backdrop-blur-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            onClick={() => scrollToSection("features")} 
            className="block px-3 py-2 text-white/80 hover:text-[#00ffff] cursor-pointer"
          >
            Features
          </a>
          <a 
            onClick={() => scrollToSection("how-it-works")} 
            className="block px-3 py-2 text-white/80 hover:text-[#00ffff] cursor-pointer"
          >
            How It Works
          </a>
          <a 
            onClick={() => scrollToSection("indian-brokers")} 
            className="block px-3 py-2 text-white/80 hover:text-[#00ffff] cursor-pointer"
          >
            Supported Brokers
          </a>
          <a 
            onClick={() => scrollToSection("about")} 
            className="block px-3 py-2 text-white/80 hover:text-[#00ffff] cursor-pointer"
          >
            About
          </a>
          <GradientBorder className="mt-2 w-full">
            <button className="w-full px-3 py-2 text-[#00ffff] font-semibold">
              Get Started
            </button>
          </GradientBorder>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
