import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"
import { Send, Loader2, Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [focusedField, setFocusedField] = useState(null)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const form = e.target
    const data = new FormData(form)
    
    try {
      const res = await fetch("https://formspree.io/f/mblgpkzn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (res.ok) {
        toast.success("Message sent successfully! I'll respond soon.", {
          duration: 5000,
          icon: '✅',
        })
        setFormData({ name: "", email: "", message: "" })
        setShowSuccessAnimation(true)
        setTimeout(() => setShowSuccessAnimation(false), 5000)
      } else {
        toast.error("Something went wrong. Please try again.", {
          duration: 5000,
        })
      }
    } catch (err) {
      toast.error("Error sending message. Please try again later.", {
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }
  
  const inputVariants = {
    idle: { scale: 1 },
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
  }

  // Animation for particles
  const [particles, setParticles] = useState([])
  
  useEffect(() => {
    const particleCount = 10
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10
    }))
    
    setParticles(newParticles)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  }

  return (
    <section className="relative py-24 pb-16 px-6 bg-gradient-to-b from-gray-100 to-gray-900 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden" id="contact">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, particle.id % 2 === 0 ? 50 : -50, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Connection lines SVG animation */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,40 50,50 T100,50"
            stroke="url(#contactGradient)"
            strokeWidth="0.2"
            fill="none"
            animate={{ 
              d: [
                "M0,50 Q25,40 50,50 T100,50",
                "M0,50 Q25,60 50,50 T100,50",
                "M0,50 Q25,40 50,50 T100,50"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,30 Q35,20 65,30 T100,30"
            stroke="url(#contactGradient)"
            strokeWidth="0.2"
            fill="none"
            animate={{ 
              d: [
                "M0,30 Q35,20 65,30 T100,30",
                "M0,30 Q35,40 65,30 T100,30",
                "M0,30 Q35,20 65,30 T100,30"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,70 Q40,60 60,70 T100,70"
            stroke="url(#contactGradient)"
            strokeWidth="0.2"
            fill="none"
            animate={{ 
              d: [
                "M0,70 Q40,60 60,70 T100,70",
                "M0,70 Q40,80 60,70 T100,70",
                "M0,70 Q40,60 60,70 T100,70"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
   
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to explore potential collaborations? I'm always open to discussing new opportunities.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div 
            className="md:col-span-2 flex flex-col justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              
              <motion.div 
                className="flex items-center mb-4"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Contact Details</h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-1 ml-12"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                addysingh409@gmail.com
              </motion.p>
              
              <motion.div 
                className="flex items-center ml-12"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MapPin size={16} className="text-gray-400 mr-2" />
                <p className="text-gray-300">Delhi, India</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 30px -10px rgba(139, 92, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              
              <motion.div 
                className="flex items-center mb-4"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-2 bg-purple-500/20 rounded-lg mr-4">
                  <Clock size={20} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Response Time</h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 ml-12"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                I typically respond within 24 hours during business days.
              </motion.p>
            </motion.div>
            
            {/* New connection animation */}
            <motion.div 
              className="mt-6 text-center px-6 py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ConnectionAnimation />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl space-y-6 relative overflow-hidden"
            >
              {/* Glowing orb decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
              
              {/* Success animation overlay */}
              {showSuccessAnimation && (
                <motion.div 
                  className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-white mt-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Message sent successfully!
                  </motion.p>
                </motion.div>
              )}
              
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'name' ? 'focus' : 'idle'}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 opacity-50"
                    >
                      <MessageSquare size={16} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focus' : 'idle'}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 opacity-50"
                    >
                      <Mail size={16} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focus' : 'idle'}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project or inquiry"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                  {focusedField === 'message' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-8 text-blue-400 opacity-50"
                    >
                      <MessageSquare size={16} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className={`w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg relative overflow-hidden ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
                
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                
                {/* Button shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12"
                  animate={{
                    x: ["100%", "-100%"],
                    opacity: [0, 0.15, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Animated connection visual
const ConnectionAnimation = () => {
  return (
    <div className="relative h-16 w-full">
      <svg viewBox="0 0 200 50" className="w-full h-full">
        <defs>
          <linearGradient id="connectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Dots representing connection */}
        <motion.circle
          cx="40"
          cy="25"
          r="4"
          fill="url(#connectGradient)"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            r: [4, 5, 4]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.circle
          cx="100"
          cy="25"
          r="4"
          fill="url(#connectGradient)"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            r: [4, 5, 4]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.circle
          cx="160"
          cy="25"
          r="4"
          fill="url(#connectGradient)"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            r: [4, 5, 4]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Connection lines */}
        <motion.line
          x1="44"
          y1="25"
          x2="96"
          y2="25"
          stroke="url(#connectGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        <motion.line
          x1="104"
          y1="25"
          x2="156"
          y2="25"
          stroke="url(#connectGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5
          }}
        />
        
        {/* Data pulse animation */}
        <motion.circle
          cx="40"
          cy="25"
          r="2"
          fill="#ffffff"
          animate={{ 
            cx: [40, 160, 160],
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        
        <motion.circle
          cx="160"
          cy="25"
          r="2"
          fill="#ffffff"
          animate={{ 
            cx: [160, 40, 40],
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2
          }}
        />
      </svg>
    </div>
  )
}

export default Contact