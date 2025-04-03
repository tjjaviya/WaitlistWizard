import React, { useEffect, useRef } from 'react';

interface ChartBackgroundProps {
  className?: string;
  opacity?: number;
  color?: string;
}

const ChartBackground: React.FC<ChartBackgroundProps> = ({ 
  className = "", 
  opacity = 0.2,
  color = "#0ff"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawChart();
    };
    
    // Create a gradient that matches our theme
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, '#a855f7'); // Purple from our theme
      return gradient;
    };
    
    // Generate random data that resembles a trading chart
    const generateChartData = (points: number) => {
      const data = [];
      let value = Math.random() * 50 + 50;
      
      for (let i = 0; i < points; i++) {
        // Simulate some market movement
        value += Math.random() * 6 - 3;
        // Keep within a reasonable range
        value = Math.max(10, Math.min(90, value));
        data.push(value);
      }
      
      return data;
    };
    
    const drawChart = () => {
      const { width, height } = canvas;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Generate multiple chart lines
      for (let chart = 0; chart < 3; chart++) {
        const points = Math.floor(width / 20); // One point every 20px
        const data = generateChartData(points);
        
        // Calculate dimensions
        const chartHeight = height / 4;
        const chartTop = height / 6 + chart * (height / 3);
        
        // Set styles
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = createGradient();
        ctx.globalAlpha = opacity - (chart * 0.05);
        
        // Draw the line
        ctx.beginPath();
        data.forEach((value, index) => {
          const x = (index / (points - 1)) * width;
          const y = chartTop - (value / 100) * chartHeight;
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.stroke();
        
        // Draw some candlesticks at regular intervals
        if (chart === 1) { // Only on the middle chart
          ctx.fillStyle = createGradient();
          
          for (let i = 5; i < points; i += 10) {
            const x = (i / (points - 1)) * width;
            const open = chartTop - (data[i-1] / 100) * chartHeight;
            const close = chartTop - (data[i] / 100) * chartHeight;
            const high = Math.min(open, close) - Math.random() * 10;
            const low = Math.max(open, close) + Math.random() * 10;
            
            // Draw the candle body
            const candleWidth = width / points / 2;
            ctx.fillRect(
              x - candleWidth/2, 
              Math.min(open, close), 
              candleWidth, 
              Math.abs(close - open)
            );
            
            // Draw the wicks
            ctx.beginPath();
            ctx.moveTo(x, high);
            ctx.lineTo(x, Math.min(open, close));
            ctx.moveTo(x, Math.max(open, close));
            ctx.lineTo(x, low);
            ctx.stroke();
          }
        }
      }
    };
    
    // Initial draw
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, opacity]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
    />
  );
};

export default ChartBackground;