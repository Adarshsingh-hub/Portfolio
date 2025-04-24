
// About.jsx - Enhanced version
import { motion } from "framer-motion"

const skills = [
  "React", "Tailwind CSS", "MongoDB", "Python",
  "Blockchain", "AI/ML", "Shopify", "Three.js"
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white" id="about">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Who I Am</h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Adarsh Singh</span> — a full-stack developer with a passion for creating innovative solutions. With expertise in both frontend and backend technologies, I specialize in building scalable applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach combines technical precision with creative problem-solving, allowing me to craft digital solutions that not only function flawlessly but also engage and delight users.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Core Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="bg-white/5 backdrop-blur border border-gray-300 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-gray-800 dark:text-white shadow transition flex items-center justify-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-px rounded-xl"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                <p className="text-center text-sm font-medium">
                  Always learning and expanding my technical toolkit
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About;