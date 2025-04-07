import { motion } from "framer-motion"
import projects from "../data/projects"

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" id="projects">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-white dark:bg-gray-700 px-3 py-1 text-xs rounded-full border dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-blue-600 dark:text-blue-400 underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    className="text-gray-800 dark:text-gray-200 underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                <span className="ml-auto font-medium text-gray-600 dark:text-gray-400">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
