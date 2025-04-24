import { motion } from "framer-motion"
import { useState } from "react"
import { Github, ExternalLink, Star } from "lucide-react"

// Assuming projects is imported from your data file
import projects from "../data/projects"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState(null)
  
  // For demonstration, let's assume your projects have a 'category' field
  // If not, you can add it to your projects data
  const categories = ["All", "Web", "Blockchain", "AI/ML", "Mobile"]
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" id="projects">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work spanning web applications, blockchain innovations, and AI integrations.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                {/* Replace with actual project image if available */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600">
                  {/* Placeholder for project preview/screenshot */}
                </div>
                
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity"
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                >
                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  {project.featured && (
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  )}
                </div>
                
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs rounded-full border dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Completed" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                }`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects