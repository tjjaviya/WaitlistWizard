import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const IndianBrokersSection = () => {
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

  // Broker items
  const brokers = [
    {
      name: "Exness India",
      description: "Renowned for competitive spreads and reliability.",
      color: "#00ffff"
    },
    {
      name: "FXTM India",
      description: "Offers robust trading conditions and regulatory compliance.",
      color: "#4d54e0"
    },
    {
      name: "XM India",
      description: "Provides a diverse range of instruments and an intuitive MT5 experience.",
      color: "#ff6b6b"
    },
    {
      name: "OctaFX India",
      description: "Known for low latency and swift execution.",
      color: "#00ffff"
    },
    {
      name: "FBS India",
      description: "Trusted for its user-friendly interface and cost-effective pricing.",
      color: "#4d54e0"
    }
  ];

  // MT5 Platform Benefits
  const mt5Benefits = [
    {
      icon: "fa-check",
      color: "#00ffff",
      title: "Advanced Charting",
      description: "Multiple timeframes, technical indicators, and drawing tools."
    },
    {
      icon: "fa-check",
      color: "#4d54e0",
      title: "Automated Trading",
      description: "Support for algorithmic trading strategies and Expert Advisors."
    },
    {
      icon: "fa-check",
      color: "#ff6b6b",
      title: "Multi-Asset Trading",
      description: "Trade forex, stocks, indices, commodities, and cryptocurrencies."
    },
    {
      icon: "fa-check",
      color: "#00ffff",
      title: "Backtesting Capabilities",
      description: "Test your strategies against historical data to validate performance."
    }
  ];

  return (
    <section id="indian-brokers" className="py-20 relative circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-cyan-pink gradient-text">Indian Brokers & Forex on MT5</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Empowering Indian Traders with Global Standards
          </p>
        </motion.div>
        
        <motion.div
          className="glass-card rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/80 text-center max-w-4xl mx-auto mb-10">
            Our platform is designed to bridge international and local markets. In addition to global broker integrations, we specifically support all leading Indian brokers that offer Forex trading on the MT5 platform. Due to regulatory guidelines in India, these brokers typically offer a curated selection of forex pairs, including major pairs like USD/INR, EUR/INR, GBP/INR, and JPY/INR.
          </p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {brokers.map((broker, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 hover-up transition-all duration-300 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 flex items-center justify-center mb-4">
                  <div className="text-xl font-bold" style={{ color: broker.color }}>{broker.name}</div>
                </div>
                <p className="text-white/70 text-sm">{broker.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">
                <span className="gradient-cyan-purple gradient-text">MT5 Platform Benefits</span>
              </h3>
              <ul className="space-y-4">
                {mt5Benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      <i className={`fas ${benefit.icon} text-sm`} style={{ color: benefit.color }}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-white/70 text-sm">{benefit.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8 h-full relative overflow-hidden">
              <motion.div 
                className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b6b]/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <h3 className="text-2xl font-bold mb-6 font-montserrat relative">
                <span className="gradient-purple-pink gradient-text">Indian Forex Regulations</span>
              </h3>
              <p className="text-white/70 mb-6 relative">
                Due to regulatory considerations in India, forex trading is supervised by the Reserve Bank of India (RBI) and follows specific guidelines:
              </p>
              <div className="space-y-4 relative">
                <motion.div 
                  className="glass-card p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="font-bold text-white mb-1">Permitted Currency Pairs</h4>
                  <p className="text-white/70 text-sm">
                    Indian traders can trade specific currency pairs including USD/INR, EUR/INR, GBP/INR, and JPY/INR through authorized channels.
                  </p>
                </motion.div>
                <motion.div 
                  className="glass-card p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-bold text-white mb-1">Authorized Brokers</h4>
                  <p className="text-white/70 text-sm">
                    Trading should be conducted through brokers registered with regulatory authorities to ensure compliance.
                  </p>
                </motion.div>
                <motion.div 
                  className="glass-card p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="font-bold text-white mb-1">Reporting Requirements</h4>
                  <p className="text-white/70 text-sm">
                    Traders may need to report their forex transactions as per the Foreign Exchange Management Act (FEMA).
                  </p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndianBrokersSection;
