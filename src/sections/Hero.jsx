import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Adarsh Singh
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Full Stack Developer • AI Enthusiast • Blockchain Builder
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a 
          href="#projects" 
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
