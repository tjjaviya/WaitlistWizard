import { ReactNode, useEffect, useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Classes for different effects
  const interactiveClass = interactive ? "interactive-hover hover-target" : "";
  const shineClass = shine ? "shine-effect" : "";
  const glowClass = glow ? "glow-on-hover" : "";
  
  // Effect to handle animated hover state for the cursor
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Create custom hover effect
    const card = cardRef.current;
    
    if (interactive) {
      let glowEffect: HTMLDivElement | null = null;
      
      // Create a glow effect that follows the mouse within the card
      const createGlowEffect = () => {
        if (glowEffect) return;
        
        glowEffect = document.createElement('div');
        glowEffect.className = 'absolute inset-0 opacity-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl transition-opacity duration-300 pointer-events-none';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.appendChild(glowEffect);
      };
      
      // Update glow position based on mouse position
      const updateGlowPosition = (e: MouseEvent) => {
        if (!glowEffect) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glowEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.15), transparent 50%)`;
        glowEffect.style.opacity = '1';
      };
      
      // Handle mouse leave
      const handleMouseLeave = () => {
        if (!glowEffect) return;
        glowEffect.style.opacity = '0';
      };
      
      // Set up the effects
      createGlowEffect();
      
      card.addEventListener('mousemove', updateGlowPosition);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mousemove', updateGlowPosition);
        card.removeEventListener('mouseleave', handleMouseLeave);
        
        if (glowEffect && card.contains(glowEffect)) {
          card.removeChild(glowEffect);
        }
      };
    }
  }, [interactive]);
  
  return (
    <motion.div 
      ref={cardRef}
      className={`glass-card rounded-xl ${interactiveClass} ${shineClass} ${glowClass} ${className}`}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      data-interactive={interactive}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
