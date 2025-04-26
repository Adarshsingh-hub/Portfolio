import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, Star, Code, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// Import projects data
import projects from "../data/projects"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isInView, setIsInView] = useState(false)
  const scrollContainerRef = useRef(null)
  
  useEffect(() => {
    // Set in view after component mounts for animations
    const timer = setTimeout(() => setIsInView(true), 300)
    return () => clearTimeout(timer)
  }, [])
  
  // Extract unique categories from projects
  const projectCategories = [...new Set(projects.map(project => project.category))]
  // Add "All" category at the beginning
  const categories = ["All", ...projectCategories]
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  }

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  }
  
  // Scroll functions for mobile horizontal scrolling
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden" id="projects">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my latest work spanning web applications, blockchain innovations, and AI integrations.
          </motion.p>
        </motion.div>
        
        {/* Filter buttons - scrollable on mobile */}
        <motion.div 
          className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center gap-3 mb-8 md:mb-16 no-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Mobile scroll navigation buttons */}
        <div className="relative md:hidden mb-4">
          <div className="flex justify-between">
            <motion.button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-md z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-md z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
        
        {/* Projects container - horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <motion.div 
            ref={scrollContainerRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-8 md:pb-0 md:overflow-visible snap-x snap-mandatory no-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex-none w-72 md:w-auto snap-center md:snap-align-none h-auto md:h-full flex flex-col relative"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden h-36 md:h-48">
                    {/* Animated Project Image */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                      variants={imageVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {/* SVG Animation or Placeholder Image */}
                      <motion.div 
                        className="absolute inset-0 opacity-40"
                        initial={{ backgroundPosition: "0% 0%" }}
                        animate={{ 
                          backgroundPosition: ["0% 0%", "100% 100%"], 
                        }}
                        transition={{ 
                          duration: 15, 
                          ease: "linear", 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                          backgroundSize: "30px 30px"
                        }}
                      />
                      
                      {/* Project Icon Animation */}
                      <motion.div
                        className="bg-white rounded-full p-3 md:p-4 shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, 0] }}
                        transition={{ 
                          scale: { duration: 0.5 },
                          rotate: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                        }}
                      >
                        {/* You can add different icons based on project type */}
                        <div className="text-blue-600 font-bold text-lg md:text-xl">
                          {project.category.charAt(0)}
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex space-x-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={16} className="md:w-5 md:h-5" />
                          </motion.a>
                        )}
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={16} className="md:w-5 md:h-5" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-4 md:p-6 flex-grow">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <motion.h3 
                        className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.4,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }}
                        >
                          <Star size={16} className="md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                    
                    <motion.p 
                      className="text-xs md:text-sm mb-3 md:mb-4 text-gray-700 dark:text-gray-300 line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-gray-100 dark:bg-gray-700 px-2 md:px-3 py-1 text-xxs md:text-xs rounded-full border dark:border-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i + 0.5 }}
                          whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <motion.span
                          className="bg-gray-100 dark:bg-gray-700 px-2 md:px-3 py-1 text-xxs md:text-xs rounded-full border dark:border-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          +{project.tech.length - 3}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="p-3 md:p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex justify-between items-center">
                    <motion.span 
                      className={`inline-block px-2 md:px-3 py-1 rounded-full text-xxs md:text-xs font-medium ${
                        project.status === "Completed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.status}
                    </motion.span>
                    
                    <motion.button
                      className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      View <ArrowRight size={12} className="md:w-3 md:h-3" />
                    </motion.button>
                  </div>
                  
                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-10 h-10 md:w-16 md:h-16 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="absolute top-0 right-0 w-1 h-1 md:w-2 md:h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" 
                      style={{
                        boxShadow: "0 0 10px 2px rgba(79, 70, 229, 0.4)"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-3 text-center py-12 md:py-16"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4 bg-gray-100 dark:bg-gray-800 p-3 md:p-4 rounded-full"
                >
                  <Code className="w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500" />
                </motion.div>
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  No projects found in this category.
                </motion.p>
              </motion.div>
            )}
          </motion.div>
          
          {/* Scroll indicators for mobile - faded edges */}
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none md:hidden"></div>
        </div>
        
        {/* Floating animated elements */}
        <div className="relative">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <motion.div
              key={index}
              className="absolute hidden lg:block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects