import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import ChartBackground from './ChartBackground';

const IndianBrokersSection: React.FC = () => {
  // List of popular Indian brokers
  const indianBrokers = [
    {
      name: "Zerodha",
      logo: "Z",
      description: "India's largest broker known for its advanced trading platforms and zero brokerage model."
    },
    {
      name: "Angel One",
      logo: "A",
      description: "Comprehensive trading platform with robust research services and algorithmic trading capabilities."
    },
    {
      name: "ICICI Direct",
      logo: "ID",
      description: "Full-service broker with integrated 3-in-1 account and extensive market research."
    },
    {
      name: "Upstox",
      logo: "U",
      description: "Discount broker with MT5 integration and advanced charting tools for algorithmic trading."
    },
    {
      name: "5paisa",
      logo: "5P",
      description: "Budget-friendly platform with API access for automated trading strategies."
    },
    {
      name: "Groww",
      logo: "G",
      description: "User-friendly interface with easy MT5 integration and comprehensive market data."
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="indian-brokers" className="py-20 relative">
      {/* Chart background with pink/purple tone */}
      <ChartBackground opacity={0.1} color="#a855f7" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-purple-pink gradient-text">Indian Broker Integration</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Seamlessly connect with all major Indian brokers for a complete trading experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {indianBrokers.map((broker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <GlassCard
                className="p-6 hover-target flex items-start gap-4"
                interactive={true}
                shine={true}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#ff6b6b] flex items-center justify-center text-white font-bold shrink-0">
                  {broker.logo}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 font-montserrat">{broker.name}</h3>
                  <p className="text-white/70 text-sm">{broker.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard className="p-6 inline-block mx-auto">
            <p className="text-white/80 mb-2">
              <span className="text-[#00ffff] font-semibold">100+</span> Additional brokers supported worldwide
            </p>
            <div className="flex justify-center items-center gap-3 mt-3">
              <span className="text-xs uppercase tracking-wider text-white/50">Including</span>
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs">MT5</div>
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs">Exness</div>
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs">FXTM</div>
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs">More</div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#a855f7]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default IndianBrokersSection;