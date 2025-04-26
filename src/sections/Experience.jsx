import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, Award } from "lucide-react"

// Assuming experience is imported from your data file
import experience from "../data/experience"

const Experience = () => {
  // Sort experience to ensure Shopify developer card is last
  const sortedExperience = [...experience].sort((a, b) => {
    // Check if either item is the Shopify developer role
    const isAShopify = a.role.toLowerCase().includes('shopify') || a.company.toLowerCase().includes('shopify');
    const isBShopify = b.role.toLowerCase().includes('shopify') || b.company.toLowerCase().includes('shopify');
    
    // If A is Shopify and B is not, A should come after B
    if (isAShopify && !isBShopify) return 1;
    // If B is Shopify and A is not, B should come after A
    if (!isAShopify && isBShopify) return -1;
    
    // Otherwise maintain original order
    return 0;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden" id="experience">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Floating animated SVG background elements - hidden on mobile for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <motion.div 
            className="absolute top-20 left-8"
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, 5, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <GradientCircle size={120} />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 right-12"
            animate={{ 
              y: [0, 20, 0], 
              rotate: [0, -8, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <GradientSquare size={100} />
          </motion.div>
        </div>

        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>
        
        {/* Animated career journey image - hidden on small screens */}
        <motion.div
          className="relative mb-12 md:mb-20 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CareerJourneyGraphic />
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line - centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-blue-500 to-transparent"
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="space-y-8 md:space-y-16">
            {sortedExperience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                <div 
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Date marker - full width on mobile, half width on desktop */}
                  <div className="pl-10 md:pl-0 md:w-1/2 flex md:justify-end">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 p-px rounded-xl w-full md:max-w-sm"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl h-full">
                        <div className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
                          <Calendar size={16} className="mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{exp.duration}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.role}</h3>
                        <div className="flex items-center mb-2 md:mb-4">
                          <Briefcase size={16} className="text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium line-clamp-1">{exp.company}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot with pulse effect - repositioned for mobile */}
                  <div className="absolute left-4 top-6 md:left-1/2 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ scale: 1 }}
                      whileInView={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      viewport={{ once: false }}
                    />
                  </div>
                  
                  {/* Content - full width on mobile, half width on desktop */}
                  <div className="pl-10 md:pl-0 md:w-1/2">
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                      whileHover={{ 
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)", 
                        borderColor: "rgba(96, 165, 250, 0.7)" 
                      }}
                    >
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{exp.details}</p>
                      
                      {exp.achievements && (
                        <motion.div 
                          className="mt-3 md:mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          whileInView={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 flex items-center">
                            <Award size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="text-xs md:text-sm text-gray-700 dark:text-gray-300 flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                viewport={{ once: true }}
                              >
                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Animated decorative elements
const GradientCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="url(#circleGradient)" fillOpacity="0.15" />
    <circle cx="50" cy="50" r="45" stroke="url(#circleGradient)" strokeWidth="1" strokeOpacity="0.3" />
    <defs>
      <linearGradient id="circleGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
)

const GradientSquare = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" rx="10" fill="url(#squareGradient)" fillOpacity="0.15" />
    <rect x="10" y="10" width="80" height="80" rx="10" stroke="url(#squareGradient)" strokeWidth="1" strokeOpacity="0.3" />
    <defs>
      <linearGradient id="squareGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
)

// Career Journey SVG Graphic
const CareerJourneyGraphic = () => (
  <div className="w-full max-w-2xl">
    <svg viewBox="0 0 800 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Path for the journey line */}
      <defs>
        <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background decorative elements */}
      <g className="opacity-20">
        <circle cx="100" cy="150" r="40" fill="#3B82F6" />
        <rect x="250" y="70" width="80" height="80" rx="10" fill="#6366F1" />
        <path d="M500,200 L550,150 L600,200 L550,250 Z" fill="#8B5CF6" />
        <circle cx="700" cy="150" r="40" fill="#3B82F6" />
      </g>
      
      {/* Career journey path */}
      <path 
        id="journey" 
        d="M 50,150 C 150,50 250,250 350,150 C 450,50 550,250 650,150 C 700,100 750,150 750,150" 
        fill="none" 
        stroke="url(#journeyGradient)" 
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      
      {/* Animated gradient dot that moves along the path */}
      <circle r="8" fill="white">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M 50,150 C 150,50 250,250 350,150 C 450,50 550,250 650,150 C 700,100 750,150 750,150"
        />
      </circle>
      
      {/* Milestone points */}
      <g>
        {/* First milestone */}
        <circle cx="50" cy="150" r="15" fill="url(#journeyGradient)">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="50" y="180" textAnchor="middle" fill="#3B82F6" className="text-xs font-medium">Start</text>
        
        {/* Middle milestones */}
        <circle cx="350" cy="150" r="15" fill="url(#journeyGradient)">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <text x="350" y="180" textAnchor="middle" fill="#6366F1" className="text-xs font-medium">Growth</text>
        
        {/* Latest milestone */}
        <circle cx="750" cy="150" r="15" fill="url(#journeyGradient)">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>
        <text x="750" y="180" textAnchor="middle" fill="#8B5CF6" className="text-xs font-medium">Present</text>
      </g>
      
      {/* Small particles along the path */}
      <g className="particles">
        <circle cx="150" cy="50" r="4" fill="#3B82F6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="250" cy="250" r="4" fill="#6366F1">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="450" cy="50" r="4" fill="#8B5CF6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="550" cy="250" r="4" fill="#3B82F6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="3s" />
        </circle>
        <circle cx="650" cy="150" r="4" fill="#6366F1">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="2s" />
        </circle>
      </g>
    </svg>
  </div>
)

export default Experience