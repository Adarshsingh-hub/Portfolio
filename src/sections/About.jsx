// About.jsx - Enhanced version with additional animations and visual elements
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

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
  FaLinux,
  FaBrain
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
  SiPostgresql,
  SiLangchain,
  SiPrisma,
  SiOpenai
} from 'react-icons/si';

import { RiRobot2Line, RiComputerLine } from 'react-icons/ri';
import { BsCodeSlash, BsGear, BsLightningCharge } from 'react-icons/bs';

const skills = [
  "Natural Language Processing (NLP)", "Full-Stack Web Dev", "Machine Learning & Deep Learning", "MERN Stack",
  "Blockchain & Web3 Development", "AI Model Deployment", "RESTful API Design & Integration", "Backend Development with Python "
]

// Tech stack with icons and names
const techStack = [
  { name: "React", logo: <FaReact size={36} className="text-blue-500" /> },
  { name: "Node.js", logo: <FaNodeJs size={36} className="text-green-600" /> },
  { name: "Flask", logo: <SiFlask size={36} className="text-blue-500" /> },
  { name: "Python", logo: <FaPython size={36} className="text-blue-400" /> },
  { name: "MongoDB", logo: <SiMongodb size={36} className="text-green-500" /> },
  { name: "TensorFlow", logo: <SiTensorflow size={36} className="text-orange-500" /> },
  { name: "PyTorch", logo: <SiPytorch size={36} className="text-red-500" /> },
  { name: "JavaScript", logo: <FaJs size={36} className="text-yellow-400" /> },
  { name: "TypeScript", logo: <SiTypescript size={36} className="text-blue-600" /> },
  { name: "Prisma", logo: <SiPrisma size={36} className="text-blue-500" /> },
  { name: "Express", logo: <SiExpress size={36} className="text-gray-600 dark:text-gray-300" /> },
  { name: "Next.js", logo: <SiNextdotjs size={36} className="text-black dark:text-white" /> },
  { name: "Docker", logo: <FaDocker size={36} className="text-blue-500" /> },
  { name: "AWS", logo: <FaAws size={36} className="text-yellow-500" /> },
  { name: "Git", logo: <FaGitAlt size={36} className="text-red-500" /> },
  { name: "Tailwind CSS", logo: <SiTailwindcss size={36} className="text-blue-400" /> },
  { name: "Firebase", logo: <SiFirebase size={36} className="text-yellow-500" /> },
  { name: "Django", logo: <SiDjango size={36} className="text-green-700" /> },
  { name: "Langchain", logo: <SiLangchain size={36} className="text-white-600" /> },
  { name: "OpenAI", logo: <SiOpenai size={36} className="text-green-500" /> },
  { name: "Redux", logo: <SiRedux size={36} className="text-purple-600" /> },
  { name: "PostgreSQL", logo: <SiPostgresql size={36} className="text-blue-600" /> },
  { name: "Vue.js", logo: <FaVuejs size={36} className="text-green-500" /> },
  { name: "GraphQL", logo: <SiGraphql size={36} className="text-pink-500" /> }
]

// Brain connections animation
const BrainConnectionsAnimation = () => {
  return (
    <motion.div 
      className="absolute right-0 bottom-0 w-40 h-40 md:w-56 md:h-56 opacity-20 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 2 }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Brain network connections */}
          {[...Array(20)].map((_, i) => {
            const x1 = 50 + Math.random() * 100;
            const y1 = 50 + Math.random() * 100;
            const x2 = 50 + Math.random() * 100;
            const y2 = 50 + Math.random() * 100;
            
            return (
              <motion.path
                key={i}
                d={`M${x1},${y1} ${x2},${y2}`}
                stroke={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"}
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: [0, 0.3, 0.1],
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2
                }}
              />
            );
          })}
          
          {/* Nodes */}
          {[...Array(10)].map((_, i) => {
            const x = 50 + Math.random() * 100;
            const y = 50 + Math.random() * 100;
            
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2
                }}
              />
            );
          })}
        </motion.g>
      </svg>
    </motion.div>
  );
};

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollRef = useRef(null);
  const statsRef = useRef(null);

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

  // Statistics counter animation
  const stats = [
    { value: 20, label: "Projects Completed", icon: <BsCodeSlash size={24} className="text-blue-500" /> },
    { value: 10, label: "AI Models Deployed", icon: <FaBrain size={24} className="text-purple-500" /> },
    { value: 3, label: "Years Experience", icon: <BsGear size={24} className="text-blue-600" /> }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${250 + Math.random() * 300}px`,
              height: `${250 + Math.random() * 300}px`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 15 + Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600 mr-6"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.h2 
            className="text-5xl font-bold tracking-tight text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-purple-600 to-transparent ml-6"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl relative"
          >
            {/* Animated brain connections in the background */}
            <BrainConnectionsAnimation />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative z-10">
                Who Am I
              </h3>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                I'm <motion.span 
                  className="font-semibold text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >Adarsh Singh</motion.span> — an AI Developer focused on creating intelligent systems that learn and adapt to solve real-world problems. Specializing in machine learning and AI technologies, I build smart solutions that enhance user experiences through automation and personalization. Additionally, I have hands-on experience in full-stack development, enabling me to create scalable applications that seamlessly integrate AI and deliver smooth, user-friendly interactions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                My approach combines technical precision with creative problem-solving, allowing me to craft digital solutions that not only function flawlessly but also engage and delight users.
              </p>
            </motion.div>
            
            {/* Animated dots connecting in the background */}
            <motion.div className="absolute bottom-4 right-4 text-2xl text-purple-500 opacity-50"
              animate={{ 
                rotateZ: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <RiRobot2Line />
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Core Expertise
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(79, 70, 229, 0.15)",
                    boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
                  }}
                  onHoverStart={() => setActiveSkill(index)}
                  onHoverEnd={() => setActiveSkill(null)}
                  className="bg-white/5 backdrop-blur border border-gray-300 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-gray-800 dark:text-white shadow transition flex items-center justify-center"
                >
                  <motion.span 
                    animate={activeSkill === index ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {skill}
                  </motion.span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-px rounded-xl"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(79, 70, 229, 0.5)",
                scale: 1.02
              }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 flex items-center justify-center">
                <BsLightningCharge className="text-yellow-500 mr-2" />
                <p className="text-center text-sm font-medium">
                  Always learning and expanding my technical toolkit
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={statsRef}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79, 70, 229, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="mb-4">
                {stat.icon}
              </motion.div>
              <motion.h4 
                className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}+
                </motion.span>
              </motion.h4>
              <motion.p 
                className="text-sm text-gray-600 dark:text-gray-300 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tech Stack Scrolling Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <RiComputerLine className="text-blue-500 mr-2" size={24} />
            <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Tech Stack
            </h3>
          </motion.div>
          
          {/* Scrolling row */}
          <div className="relative overflow-hidden py-6">
            {/* Animated glowing background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-blue-600/10 rounded-xl opacity-30"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 0%"],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Gradient overlay on left side */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
            
            {/* Gradient overlay on right side */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
            
            <div className="flex items-center whitespace-nowrap" ref={scrollRef} style={{transform: 'translateX(0)'}}>
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center justify-center mx-8"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-md flex items-center justify-center p-3 mb-2 hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      boxShadow: "0 0 25px rgba(79, 70, 229, 0.5)",
                      borderColor: "rgba(79, 70, 229, 0.5)",
                    }}
                  >
                    {tech.logo}
                  </motion.div>
                  <motion.span 
                    className="text-sm font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2 % 2
                    }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-10 left-10 text-blue-500/10 text-9xl font-bold z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          AI
        </motion.div>
        <motion.div 
          className="absolute top-10 right-10 text-purple-500/10 text-9xl font-bold z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          DEV
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About;