// About.jsx - Enhanced version with scrolling tech stack using react-icons
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

// Import tech icons from react-icons
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaJs,
  FaVuejs,
  FaAngular,
  FaJava,
  FaPhp,
  FaDatabase,
  FaLinux
} from 'react-icons/fa';

import { 
  SiMongodb, 
  SiTensorflow, 
  SiPytorch, 
  SiTypescript, 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss,
  SiFirebase,
  SiDjango,
  SiFlask,
  SiGraphql,
  SiRedux,
  SiKubernetes
} from 'react-icons/si';

const skills = [
  "Natural Language Processing (NLP)", "Full-Stack Web Dev", "Machine Learning & Deep Learning", "MERN Stack",
  "Blockchain & Web3 Development", "AI Model Deployment", "RESTful API Design & Integration", "Backend Development with Python "
]

// Tech stack with icons and names
const techStack = [
  { name: "React", logo: <FaReact size={36} className="text-blue-500" /> },
  { name: "Node.js", logo: <FaNodeJs size={36} className="text-green-600" /> },
  { name: "Python", logo: <FaPython size={36} className="text-blue-400" /> },
  { name: "MongoDB", logo: <SiMongodb size={36} className="text-green-500" /> },
  { name: "TensorFlow", logo: <SiTensorflow size={36} className="text-orange-500" /> },
  { name: "PyTorch", logo: <SiPytorch size={36} className="text-red-500" /> },
  { name: "JavaScript", logo: <FaJs size={36} className="text-yellow-400" /> },
  { name: "TypeScript", logo: <SiTypescript size={36} className="text-blue-600" /> },
  { name: "Express", logo: <SiExpress size={36} className="text-gray-600 dark:text-gray-300" /> },
  { name: "Next.js", logo: <SiNextdotjs size={36} className="text-black dark:text-white" /> },
  { name: "Docker", logo: <FaDocker size={36} className="text-blue-500" /> },
  { name: "AWS", logo: <FaAws size={36} className="text-yellow-500" /> },
  { name: "Git", logo: <FaGitAlt size={36} className="text-red-500" /> },
  { name: "Tailwind CSS", logo: <SiTailwindcss size={36} className="text-blue-400" /> },
  { name: "Firebase", logo: <SiFirebase size={36} className="text-yellow-500" /> },
  { name: "Django", logo: <SiDjango size={36} className="text-green-700" /> },
  { name: "GraphQL", logo: <SiGraphql size={36} className="text-pink-600" /> },
  { name: "Redux", logo: <SiRedux size={36} className="text-purple-600" /> },
  { name: "Kubernetes", logo: <SiKubernetes size={36} className="text-blue-600" /> },
  { name: "Vue.js", logo: <FaVuejs size={36} className="text-green-500" /> }
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

  const scrollRef = useRef(null);

  // Setup the infinite scroll animation
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollerInner = scrollRef.current;
    const scrollerContent = Array.from(scrollerInner.children);
    
    // Clone all items for seamless looping
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
    
    let animationId = null;
    let startTime = null;
    const speed = 0.5; // pixels per frame
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      // Get current position
      const currentTransform = scrollerInner.style.transform || 'translateX(0px)';
      const currentPos = parseFloat(currentTransform.replace('translateX(', '').replace('px)', '')) || 0;
      
      // Calculate total width of original items (before cloning)
      const originalItemsWidth = scrollerContent.reduce((total, item) => total + item.offsetWidth, 0);
      
      // Calculate new position
      let newPos = currentPos - speed;
      
      // Reset position if we've scrolled through all original items
      if (Math.abs(newPos) >= originalItemsWidth) {
        newPos = 0;
      }
      
      // Apply transform
      scrollerInner.style.transform = `translateX(${newPos}px)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

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
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Adarsh Singh</span> — I'm Adarsh Singh, an AI Developer focused on creating intelligent systems that learn and adapt to solve real-world problems. Specializing in machine learning and AI technologies, I build smart solutions that enhance user experiences through automation and personalization. Additionally, I have hands-on experience in full-stack development, enabling me to create scalable applications that seamlessly integrate AI and deliver smooth, user-friendly interactions.
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
        
        {/* Tech Stack Scrolling Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Tech Stack
          </h3>
          
          {/* Scrolling row */}
          <div className="relative overflow-hidden py-6">
            {/* Gradient overlay on left side */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
            
            {/* Gradient overlay on right side */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
            
            <div className="flex items-center whitespace-nowrap" ref={scrollRef} style={{transform: 'translateX(0)'}}>
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center mx-8">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-md flex items-center justify-center p-3 mb-2 hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About;