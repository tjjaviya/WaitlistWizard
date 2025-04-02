import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "./GlassCard";
import GradientBorder from "./GradientBorder";
import { apiRequest } from "@/lib/queryClient";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/subscribe", { email });
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-[#4d54e0]/30 rounded-full blur-3xl -mr-12 -mt-12"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ffff]/30 rounded-full blur-3xl -ml-12 -mb-12"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          
          <div className="relative text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-montserrat mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-full gradient-text">Ready to Transform Your Trading?</span>
            </motion.h2>
            <motion.p 
              className="text-white/80 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands of traders who have already elevated their trading strategies with our algorithm transformer.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GradientBorder>
                <div className="bg-gradient-to-r from-[#00ffff] to-[#4d54e0] px-8 py-4 rounded-md font-semibold text-white transition-all duration-300">
                  Start Free Trial
                </div>
              </GradientBorder>
              <motion.button 
                className="px-8 py-4 rounded-md border border-white/20 text-white hover:bg-white/5 transition-all duration-300 hover-up font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Schedule a Demo
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <GlassCard className="p-8 rounded-xl max-w-lg mx-auto">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Stay Updated</h3>
                <p className="text-white/70 mb-6">Subscribe to our newsletter for the latest updates and exclusive trading insights.</p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md bg-[#050816] border border-white/10 text-white focus:border-[#00ffff] focus:outline-none transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button 
                    type="submit"
                    className="bg-gradient-to-r from-[#00ffff] to-[#4d54e0] px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
