import { motion } from "framer-motion"
import { ArrowDown, Code, Lightbulb, Server } from "lucide-react"
import { useEffect, useState } from "react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8 + Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6">
              PORTFOLIO
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Adarsh Singh
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            An AI-driven developer crafting scalable digital experiences at the intersection of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 font-medium"> Machine Learning</span>,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-medium"> Web Technologies</span>, and
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-400 font-medium"> APIs</span>.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Animated Image/Illustration */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Animated SVG Globe Illustration */}
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle */}
              <motion.circle 
                cx="200" 
                cy="200" 
                r="180" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.2)" 
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Inner circle */}
              <motion.circle 
                cx="200" 
                cy="200" 
                r="150" 
                fill="none" 
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
              
              {/* Web/Tech grid patterns */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                {/* Horizontal lines */}
                <path d="M50,120 L350,120" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                <path d="M50,200 L350,200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                <path d="M50,280 L350,280" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                
                {/* Vertical lines */}
                <path d="M120,50 L120,350" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                <path d="M200,50 L200,350" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                <path d="M280,50 L280,350" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              </motion.g>
              
              {/* Animated dots representing data points */}
              <motion.g>
                {[...Array(15)].map((_, i) => {
                  const angle = (i / 15) * Math.PI * 2;
                  const radius = 120 + (i % 3) * 20;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={i % 2 === 0 ? "#60a5fa" : "#c084fc"}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3 + i % 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  );
                })}
              </motion.g>
              
              {/* Connection lines */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2, delay: 1.5 }}
              >
                <path d="M150,120 C180,160 220,160 250,120" stroke="#60a5fa" strokeWidth="1" fill="none" />
                <path d="M120,150 C160,180 160,220 120,250" stroke="#c084fc" strokeWidth="1" fill="none" />
                <path d="M250,280 C210,240 210,200 250,180" stroke="#60a5fa" strokeWidth="1" fill="none" />
                <path d="M280,250 C240,220 240,180 280,150" stroke="#c084fc" strokeWidth="1" fill="none" />
              </motion.g>
              
              {/* Central element */}
              <motion.circle
                cx="200"
                cy="200"
                r="30"
                fill="url(#gradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              />
              
              {/* Define gradient */}
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </radialGradient>
              </defs>
            </svg>
            
            {/* Floating Technology Icons */}
            <motion.div 
              className="absolute top-0 left-0"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Code size={32} className="text-blue-400" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 right-0"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              <Server size={32} className="text-purple-400" />
            </motion.div>
            
            <motion.div 
              className="absolute top-0 right-0"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <Lightbulb size={32} className="text-blue-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.2,
          duration: 1.5, 
          repeat: Infinity,
        }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero