import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const HowItWorksSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="how-it-works" className="py-20 relative circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-cyan-purple gradient-text">How It Works</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our platform transforms your trading strategies into algorithms with just a few simple steps
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Step 1 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 hover-up transition-all duration-500 relative"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-[#00ffff]/20 blur-xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#0a0b1e] flex items-center justify-center mb-6 border border-white/10">
                <span className="text-3xl font-bold text-[#00ffff]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Strategy Input</h3>
              <p className="text-white/70 mb-6">Input your trading strategy or choose from our built-in templates.</p>
              <div className="bg-[#050816]/70 p-4 rounded-lg border border-white/5">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/3">
                    <div className="h-4 bg-white/10 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded mb-2"></div>
                    <div className="h-3 bg-white/10 rounded mb-2 w-5/6"></div>
                    <div className="h-3 bg-white/10 rounded w-4/6"></div>
                  </div>
                  <div className="w-2/3 border-l border-white/10 pl-2">
                    <div className="h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-6 bg-[#00ffff]/20 rounded mb-2 border border-[#00ffff]/40"></div>
                    <div className="h-6 bg-[#4d54e0]/20 rounded mb-2 border border-[#4d54e0]/40"></div>
                    <div className="h-6 bg-[#ff6b6b]/20 rounded border border-[#ff6b6b]/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 hover-up transition-all duration-500 relative"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-[#4d54e0]/20 blur-xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#0a0b1e] flex items-center justify-center mb-6 border border-white/10">
                <span className="text-3xl font-bold text-[#4d54e0]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Algorithm Transformation</h3>
              <p className="text-white/70 mb-6">Our system converts your strategy into a fully-functional algorithm compatible with all brokers.</p>
              <div className="bg-[#050816]/70 p-4 rounded-lg border border-white/5">
                <div className="flex justify-center">
                  <div className="w-16 h-16 relative">
                    <motion.div 
                      className="absolute inset-0 bg-[#4d54e0]/20 rounded-full"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="absolute inset-3 border-t-2 border-[#4d54e0] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="fas fa-cogs text-[#4d54e0]"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  <div className="h-2 bg-[#4d54e0]/40 rounded w-4/6"></div>
                  <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  <div className="h-2 bg-[#4d54e0]/40 rounded w-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 hover-up transition-all duration-500 relative"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-[#ff6b6b]/20 blur-xl"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#0a0b1e] flex items-center justify-center mb-6 border border-white/10">
                <span className="text-3xl font-bold text-[#ff6b6b]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Backtesting & Integration</h3>
              <p className="text-white/70 mb-6">Automatically generate backtesting code and integrate with platforms like MT5 and Exness.</p>
              <div className="bg-[#050816]/70 p-4 rounded-lg border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-white/60">Results</div>
                  <div className="text-xs text-[#00ffff]">97.6% Accurate</div>
                </div>
                <div className="h-20 relative">
                  <motion.div 
                    className="absolute bottom-0 left-0 w-1/12 h-10 bg-[#ff6b6b]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[10%] w-1/12 h-14 bg-[#ff6b6b]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 56 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[20%] w-1/12 h-8 bg-[#ff6b6b]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[30%] w-1/12 h-16 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[40%] w-1/12 h-12 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[50%] w-1/12 h-16 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[60%] w-1/12 h-20 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[70%] w-1/12 h-14 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 56 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[80%] w-1/12 h-10 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-[90%] w-1/12 h-18 bg-[#00ffff]/50 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: 72 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 1 }}
                  ></motion.div>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#ff6b6b]/50 rounded-sm"></div>
                    <span className="text-xs text-white/60">Loss</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#00ffff]/50 rounded-sm"></div>
                    <span className="text-xs text-white/60">Profit</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
