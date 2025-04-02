import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  shine?: boolean;
  glow?: boolean;
}

const GlassCard = ({ 
  children, 
  className = "", 
  interactive = false, 
  shine = false,
  glow = false 
}: GlassCardProps) => {
  const interactiveClass = interactive ? "interactive-hover hover-target" : "";
  const shineClass = shine ? "shine-effect" : "";
  const glowClass = glow ? "glow-on-hover" : "";
  
  return (
    <motion.div 
      className={`glass-card rounded-xl ${interactiveClass} ${shineClass} ${glowClass} ${className}`}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
