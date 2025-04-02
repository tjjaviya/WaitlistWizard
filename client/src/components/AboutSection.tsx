import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Mission benefits
  const missionBenefits = [
    {
      icon: "fa-rocket",
      color: "#00ffff",
      text: "Lightning-fast execution speeds"
    },
    {
      icon: "fa-shield-alt",
      color: "#4d54e0",
      text: "Bank-grade security for your data"
    },
    {
      icon: "fa-headset",
      color: "#ff6b6b",
      text: "24/7 dedicated customer support"
    }
  ];

  // Technology stack icons
  const techStack = [
    { icon: "fab fa-python", color: "#00ffff" },
    { icon: "fas fa-database", color: "#4d54e0" },
    { icon: "fas fa-cloud", color: "#ff6b6b" },
    { icon: "fas fa-server", color: "#00ffff" },
    { icon: "fas fa-network-wired", color: "#4d54e0" },
    { icon: "fas fa-microchip", color: "#ff6b6b" }
  ];

  return (
    <section id="about" className="py-20 relative circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-pink-cyan gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Built by traders, for traders—our platform understands the need for speed, accuracy, and seamless integration
          </p>
        </motion.div>
        
        <motion.div 
          className="glass-card rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">
                <span className="gradient-cyan-purple gradient-text">Our Mission</span>
              </h3>
              <p className="text-white/80 mb-6">
                We strive to democratize algorithmic trading by making it accessible to traders of all skill levels. By automating the complex process of strategy-to-algorithm conversion, we empower traders to focus on what they do best: developing winning strategies.
              </p>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {missionBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      <i className={`fas ${benefit.icon}`} style={{ color: benefit.color }}></i>
                    </div>
                    <p className="text-white/80">{benefit.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern trading environment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center p-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="text-4xl font-bold text-white mb-4">5+ Years</div>
                    <p className="text-white/70">Of excellence in algorithmic trading solutions</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 font-montserrat">
            <span className="gradient-purple-pink gradient-text">Our Technology Stack</span>
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-4 rounded-xl w-20 h-20 flex items-center justify-center hover-up"
                whileHover={{ 
                  y: -5, 
                  boxShadow: `0 0 20px ${tech.color}40`,
                  transition: { duration: 0.3 }
                }}
              >
                <i className={`${tech.icon} text-3xl`} style={{ color: tech.color }}></i>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
