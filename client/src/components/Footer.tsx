import { Link } from "wouter";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Footer link sections
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Supported Brokers", href: "#indian-brokers" },
    { text: "About Us", href: "#about" }
  ];

  const resources = [
    { text: "Documentation", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Tutorials", href: "#" },
    { text: "API Reference", href: "#" },
    { text: "FAQ", href: "#" }
  ];

  const contact = [
    { 
      icon: "fa-envelope",
      text: "info@algotrade-transformer.com",
      href: "mailto:info@algotrade-transformer.com",
      color: "#00ffff"
    },
    { 
      icon: "fa-phone",
      text: "+91 8000001234",
      href: "tel:+918000001234",
      color: "#4d54e0"
    },
    { 
      icon: "fa-map-marker-alt",
      text: "Cyber City, Gurugram, India",
      href: null,
      color: "#ff6b6b"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" }
  ];

  // Scrolling function for footer links
  const scrollToSection = (id: string) => {
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="py-12 bg-[#050816]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <div className="text-2xl font-bold font-montserrat mb-4">
              <span className="gradient-cyan-purple gradient-text">AlgoTrade</span>
              <span className="text-white">Transformer</span>
            </div>
            <p className="text-white/60 mb-6">Transforming trading strategies into powerful algorithms since 2018.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-white/60 hover:text-[#00ffff] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#00ffff] transition-colors duration-300 cursor-pointer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-[#00ffff] transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className={`fas ${item.icon} mr-2`} style={{ color: item.color }}></i>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-white/60 hover:text-[#00ffff] transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/60">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AlgoTradeTransformer. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-[#00ffff] text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#00ffff] text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-[#00ffff] text-sm transition-colors duration-300">Legal</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
