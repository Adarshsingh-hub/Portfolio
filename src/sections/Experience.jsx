import { motion } from "framer-motion"
import experience from "../data/experience"

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white" id="experience">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 italic mb-3">{exp.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
