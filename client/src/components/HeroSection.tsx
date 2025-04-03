import { motion } from "framer-motion";
import GradientBorder from "./GradientBorder";
import GlassCard from "./GlassCard";
import ChartBackground from "./ChartBackground";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Add the chart background */}
      <ChartBackground opacity={0.15} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
              <span className="block">Transform Your</span>
              <span className="gradient-cyan-purple gradient-text">Trading Strategy</span>
              <span className="block">into a Powerful</span>
              <span className="gradient-purple-pink gradient-text">Algorithm</span>
            </h1>
            <p className="text-xl text-white/70 max-w-lg">
              Seamlessly integrate with all brokers—including Indian brokers, Forex platforms like Exness, and MT5—and generate robust backtesting code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientBorder>
                <div className="bg-gradient-to-r from-[#00ffff] to-[#4d54e0] px-8 py-4 rounded-md font-semibold text-white transition-all duration-300">
                  Try Our Demo
                </div>
              </GradientBorder>
              <motion.button 
                className="px-8 py-4 rounded-md border border-white/20 text-white hover:bg-white/5 transition-all duration-300 hover-up font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
              </motion.button>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <i className="fas fa-shield-alt text-[#00ffff]"></i>
              <span className="text-sm">Secure. Reliable. Regulatory Compliant.</span>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <GlassCard 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden" 
              interactive={true}
              shine={true}
              glow={true}
            >
              <div className="w-full h-full object-cover opacity-70">
                <img 
                  src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80" 
                  alt="Trading dashboard with charts and algorithms" 
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/90 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                <GlassCard 
                  className="p-4 rounded-lg w-full max-w-md text-center" 
                  shine={true}
                  interactive={true}
                >
                  <div className="text-xs text-[#00ffff] uppercase tracking-wider mb-2">Live Algorithm Transformation</div>
                  <div className="relative h-32 overflow-hidden mb-4 bg-[#050816]/70 rounded border border-white/10 shine-effect">
                    <pre className="text-left text-xs text-white/70 p-3 font-mono">
                      <span className="text-[#ff6b6b]">function</span> <span className="text-[#00ffff]">tradingStrategy</span>() {"{"}{"\n"}
                      {"  "}<span className="text-[#ff6b6b]">if</span> (ema50 {">"} ema200 && rsi {"<"} 30) {"{"}{"\n"}
                      {"    "}<span className="text-[#00ffff]">return</span> <span className="text-green-400">"BUY"</span>;{"\n"}
                      {"  "}<span className="text-[#ff6b6b]">{"}"} else if</span> (ema50 {"<"} ema200 && rsi {">"} 70) {"{"}{"\n"}
                      {"    "}<span className="text-[#00ffff]">return</span> <span className="text-red-400">"SELL"</span>;{"\n"}
                      {"  "}{"}"}
                      <span className="text-[#00ffff]">return</span> <span className="text-white">"HOLD"</span>;{"\n"}
                      {"}"}
                    </pre>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="h-2 w-2 rounded-full bg-[#00ffff]"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.div>
                      <span className="text-xs text-white/70">Processing</span>
                    </div>
                    <div className="text-xs text-white/70">Compatible: <span className="text-[#00ffff]">MT5, Exness, FXTM</span></div>
                  </div>
                </GlassCard>
              </div>
            </GlassCard>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4d54e0]/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#00ffff]/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <GlassCard
            className="py-6 px-8 flex flex-wrap justify-between items-center gap-6"
            interactive={true}
            glow={true}
          >
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/60 text-sm">Brokers Supported</div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/60 text-sm">Uptime Reliability</div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-2">10ms</div>
              <div className="text-white/60 text-sm">Execution Speed</div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/60 text-sm">Support Available</div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      <div className="absolute top-1/4 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/4 bg-[#4d54e0]/20 rounded-full blur-[120px] opacity-30"></div>
    </section>
  );
};

export default HeroSection;
