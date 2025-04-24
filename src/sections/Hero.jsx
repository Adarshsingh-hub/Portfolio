import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
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
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8 + Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl">
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
          A full-stack developer crafting scalable digital experiences at the intersection of 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 font-medium"> AI</span>,
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-medium"> Blockchain</span>, and
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-400 font-medium"> Web</span>.
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