import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // Debounce function to improve performance
  const debounce = (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const updateMousePosition = useCallback(
    debounce((e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 10),
    [isVisible]
  );

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);
    
    // Hide cursor when mouse leaves the window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updateMousePosition]);

  // Set up enter/leave events on interactive elements
  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // Function to attach listeners to all interactive elements
    const attachListenersToElements = () => {
      // Get all interactive elements that don't already have listeners
      const interactiveElements = document.querySelectorAll(
        'a, button, .hover-target, .hover-up, .glow-on-hover, .shine-effect, [class*="glass-card"]'
      );
      
      interactiveElements.forEach(el => {
        // Remove existing listeners first to prevent duplicates
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        
        // Add fresh listeners
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      console.log('Cursor effect attached to', interactiveElements.length, 'elements');
    };

    // Listen for the custom event that signals new content has been loaded
    const handleRefreshElements = () => {
      console.log('Refreshing cursor elements');
      attachListenersToElements();
    };

    // Initial attachment
    if (typeof window !== 'undefined') {
      window.addEventListener('refresh-cursor-elements', handleRefreshElements);
      
      // Short delay to ensure DOM is fully loaded
      setTimeout(attachListenersToElements, 500);
      
      // Also run immediately for initial elements
      attachListenersToElements();
    }

    // MutationObserver to watch for DOM changes
    let observer: MutationObserver | null = null;
    if (typeof window !== 'undefined' && window.MutationObserver) {
      observer = new MutationObserver((mutations) => {
        let shouldRefresh = false;
        
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length > 0 || 
              mutation.attributeName === 'class' || 
              mutation.type === 'childList') {
            shouldRefresh = true;
          }
        });
        
        if (shouldRefresh) {
          attachListenersToElements();
        }
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('refresh-cursor-elements', handleRefreshElements);
      }
      
      if (observer) {
        observer.disconnect();
      }
      
      // Clean up all event listeners we've added
      const allElements = document.querySelectorAll(
        'a, button, .hover-target, .hover-up, .glow-on-hover, .shine-effect, [class*="glass-card"]'
      );
      
      allElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
        stiffness: 300
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      opacity: isVisible ? 1 : 0,
      backgroundColor: "rgba(0, 255, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
        stiffness: 300
      }
    }
  };

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Main cursor pointer */}
      <motion.div
        className="cursor-pointer hidden md:block"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          scale: cursorVariant === "hover" ? 1.2 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          damping: 15,
          stiffness: 350
        }}
        style={{
          position: "fixed",
          zIndex: 10000,
          pointerEvents: "none",
          width: 30,
          height: 30,
          marginLeft: -5,
          marginTop: -5,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M7 4L25 16L15 19L12 29L7 4Z' fill='white' stroke='%2300ffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Dot cursor for more precise indication */}
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none",
          height: 8,
          width: 8,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 255, 255, 0.8)",
          boxShadow: "0 0 10px 2px rgba(0, 255, 255, 0.5)",
          mixBlendMode: "screen"
        }}
      />

      {/* Ring effect */}
      <motion.div
        className="cursor-ring hidden md:block"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 0.5 : 0,
          scale: cursorVariant === "hover" ? 1.2 : 1
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          damping: 20,
          stiffness: 300
        }}
        style={{
          position: "fixed",
          zIndex: 9998,
          pointerEvents: "none",
          height: 40,
          width: 40,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "1.5px solid rgba(0, 255, 255, 0.5)",
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="cursor-glow hidden md:block"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 0.3 : 0,
          scale: cursorVariant === "hover" ? 1.1 : 1
        }}
        transition={{
          type: "spring",
          mass: 0.4,
          damping: 15,
          stiffness: 200
        }}
        style={{
          position: "fixed",
          zIndex: 9997,
          pointerEvents: "none",
          height: 120,
          width: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(77, 84, 224, 0.1) 50%, transparent 70%)",
          transform: "translate(-50%, -50%)"
        }}
      />
    </>
  );
};

export default CursorEffect;