import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlowingBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate relative position (0-1)
  const relativeX = windowSize.width ? mousePosition.x / windowSize.width : 0;
  const relativeY = windowSize.height ? mousePosition.y / windowSize.height : 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary glow that follows cursor */}
      <motion.div 
        className="absolute"
        animate={{
          left: `${relativeX * 100}%`,
          top: `${relativeY * 100}%`,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          },
          left: { duration: 0.1 },
          top: { duration: 0.1 }
        }}
        style={{
          width: '50vw',
          height: '50vh',
          borderRadius: '50%',
          filter: 'blur(150px)',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15), rgba(77, 84, 224, 0.1), transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Secondary static glows */}
      <div 
        className="absolute top-1/4 left-1/4"
        style={{
          width: '40vw',
          height: '40vh',
          borderRadius: '50%',
          filter: 'blur(150px)',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.05), transparent 70%)',
          opacity: 0.7,
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/4"
        style={{
          width: '30vw',
          height: '30vh',
          borderRadius: '50%',
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(77, 84, 224, 0.1), transparent 70%)',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default GlowingBackground;