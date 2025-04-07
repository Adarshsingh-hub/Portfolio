import { motion } from "framer-motion"

const skills = [
  "React", "Tailwind", "MongoDB", "Python",
  "Blockchain", "AI/ML", "Shopify", "Three.js"
]

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white" id="about">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Adarsh Singh</span> — a full-stack developer passionate about AI, blockchain, and building products that scale. I combine frontend finesse with backend logic to create seamless, efficient digital experiences.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white/90">Core Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white shadow transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
