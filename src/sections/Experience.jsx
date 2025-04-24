import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

// Assuming experience is imported from your data file
import experience from "../data/experience"

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white" id="experience">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <motion.div 
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Date marker */}
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-px rounded-xl w-full md:max-w-sm">
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-full">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.role}</h3>
                        <div className="flex items-center mb-4">
                          <Briefcase size={16} className="text-gray-600 dark:text-gray-400 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-y-1/2 md:-translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">{exp.details}</p>
                      
                      {exp.achievements && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Experience