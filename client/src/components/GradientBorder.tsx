import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: boolean;
}

const GradientBorder = ({ 
  children, 
  className = "",
  interactive = true,
  glow = true
}: GradientBorderProps) => {
  const interactiveClass = interactive ? "interactive-hover hover-target" : "";
  const glowClass = glow ? "glow-on-hover" : "";
  
  return (
    <motion.div 
      className={`gradient-border relative group ${interactiveClass} ${glowClass} ${className}`}
      whileHover={{ scale: interactive ? 1.05 : 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="bg-[#050816] p-4 rounded-md relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#4d54e0] rounded-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .gradient-border {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #00ffff, #4d54e0, #ff6b6b);
          z-index: -1;
          border-radius: 0.6rem;
          animation: rotate 6s linear infinite;
        }
        .gradient-border:hover::before {
          animation: rotate 3s linear infinite;
          background-size: 200% 200%;
        }
        @keyframes rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `
      }} />
    </motion.div>
  );
};

export default GradientBorder;
