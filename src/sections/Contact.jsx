import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

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
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
  }

  return ( <section className="py-24 pb-0 px-6 bg-gradient-to-b from-gray-100 to-gray-900 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white" id="contact">
   
      <motion.div 
        className="max-w-4xl mx-auto"
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
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to explore potential collaborations? I'm always open to discussing new opportunities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div 
            className="md:col-span-2 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Contact Details</h3>
              <p className="text-gray-300 mb-1">adarsh@example.com</p>
              <p className="text-gray-300">Mumbai, India</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Response Time</h3>
              <p className="text-gray-300">I typically respond within 24 hours during business days.</p>
            </div>
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
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
            >
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </motion.div>
              
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </motion.div>
              
              <motion.div whileHover="focus" variants={inputVariants}>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className={`w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
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
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact