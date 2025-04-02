import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(0, 255, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  // Set up enter/leave events on interactive elements
  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-target');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none",
          height: 32,
          width: 32,
          borderRadius: "50%",
          backgroundColor: "rgba(77, 84, 224, 0.2)",
          backdropFilter: "blur(4px)",
          boxShadow: "0 0 20px 2px rgba(0, 255, 255, 0.3)",
          mixBlendMode: "difference"
        }}
      />
      <motion.div
        className="cursor-ring hidden md:block"
        style={{
          position: "fixed",
          zIndex: 9998,
          pointerEvents: "none",
          height: 100,
          width: 100,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "1px solid rgba(0, 255, 255, 0.2)",
          transform: "translate(-50%, -50%)",
          left: mousePosition.x,
          top: mousePosition.y,
          transition: "transform 0.1s ease-out, width 0.3s ease, height 0.3s ease"
        }}
      />
      <motion.div
        className="cursor-glow hidden md:block"
        style={{
          position: "fixed",
          zIndex: 9997,
          pointerEvents: "none",
          height: 200,
          width: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(77, 84, 224, 0.05) 50%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          left: mousePosition.x,
          top: mousePosition.y,
          transition: "transform 0.2s ease-out"
        }}
      />
    </>
  );
};

export default CursorEffect;