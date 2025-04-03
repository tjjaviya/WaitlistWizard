import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import GradientBorder from "./GradientBorder";
import ChartBackground from "./ChartBackground";

const FeaturesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  // Feature items
  const features = [
    {
      icon: "fa-network-wired",
      color: "#00ffff",
      title: "Multi-Broker Support",
      description: "Compatible with all brokers worldwide, including top Indian brokers."
    },
    {
      icon: "fa-chart-line",
      color: "#4d54e0",
      title: "Advanced Backtesting",
      description: "Generate and run backtesting code automatically to validate your strategies."
    },
    {
      icon: "fa-code",
      color: "#ff6b6b",
      title: "MT5 Integration",
      description: "Fully supports the MT5 platform for an enhanced trading experience."
    },
    {
      icon: "fa-shield-alt",
      color: "#00ffff",
      title: "Regulatory Compliant",
      description: "Trade major forex pairs with brokers that adhere to strict regulatory guidelines—especially for Indian markets."
    },
    {
      icon: "fa-user-circle",
      color: "#4d54e0",
      title: "User-Friendly Interface",
      description: "Intuitive design that caters to both beginners and seasoned traders."
    },
    {
      icon: "fa-bolt",
      color: "#ff6b6b",
      title: "Real-Time Analysis",
      description: "Get instant feedback on your strategies with real-time market data analysis."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      {/* Add the chart background with different color */}
      <ChartBackground opacity={0.12} color="#4d54e0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-purple-pink gradient-text">Features & Benefits</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our platform offers powerful features to enhance your trading experience
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <GlassCard 
                interactive={true} 
                shine={true} 
                glow={true}
                className="p-6 hover-target" 
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <i className={`fas ${feature.icon} text-2xl`} style={{ color: feature.color }}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard 
            className="p-8 md:p-12 overflow-hidden relative" 
            interactive={true}
            glow={true}
          >
            <motion.div 
              className="absolute top-0 right-0 w-48 h-48 bg-[#4d54e0]/30 rounded-full blur-3xl -mr-12 -mt-12"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <div className="flex flex-col md:flex-row gap-8 relative">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">
                  <span className="gradient-cyan-purple gradient-text">Experience the Future of Trading Today</span>
                </h3>
                <p className="text-white/70 mb-6">
                  Upgrade your trading strategy with our cutting-edge algorithm transformer. Save time, reduce errors, and maximize your potential returns.
                </p>
                <GradientBorder>
                  <div className="bg-gradient-to-r from-[#00ffff] to-[#4d54e0] px-6 py-3 rounded-md font-bold text-white">
                    Get Started Free
                  </div>
                </GradientBorder>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-[16/9] bg-[#050816] rounded-lg overflow-hidden border border-white/10 shine-effect">
                  <img 
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Trading dashboard" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button 
                      className="w-16 h-16 rounded-full bg-[#ff6b6b]/90 flex items-center justify-center text-white glow-on-hover hover-target"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="fas fa-play ml-1"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#00ffff]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
