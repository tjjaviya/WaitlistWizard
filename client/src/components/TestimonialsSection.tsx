import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const TestimonialsSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Testimonial items
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Forex Trader, Mumbai",
      testimonial: "AlgoTrade Transformer has revolutionized my trading approach. The MT5 integration with Indian brokers is seamless, and the backtesting results are impressively accurate.",
      rating: 5,
      color: "#00ffff"
    },
    {
      name: "Priya Patel",
      role: "Algorithmic Trader, Bangalore",
      testimonial: "The ability to convert my strategies into algorithms without coding knowledge has been a game-changer. The platform's support for Indian brokers makes it perfect for my needs.",
      rating: 4.5,
      color: "#4d54e0"
    },
    {
      name: "Vikram Singh",
      role: "Day Trader, Delhi",
      testimonial: "I've tried several platforms, but none match the efficiency and reliability of AlgoTrade Transformer. The backtesting results are spot-on, and the interface is incredibly intuitive.",
      rating: 5,
      color: "#ff6b6b"
    }
  ];

  // Render star rating
  const renderRating = (rating: number, color: string) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star" style={{ color }}></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt" style={{ color }}></i>);
      } else {
        stars.push(<i key={i} className="far fa-star" style={{ color }}></i>);
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="gradient-cyan-purple gradient-text">Trusted by Traders Worldwide</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear what our users have to say about their experience
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover-up transition-all duration-300 relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-6 right-6 text-4xl" style={{ color: `${testimonial.color}20` }}>"</div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <div className="w-full h-full bg-gradient-to-br from-[#00ffff] to-[#4d54e0]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">{testimonial.testimonial}</p>
              {renderRating(testimonial.rating, testimonial.color)}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-[#4d54e0]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
