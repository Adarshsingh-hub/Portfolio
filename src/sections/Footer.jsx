import { useState, useEffect } from "react";
import { Mail, Heart, ArrowRight, MapPin, Phone, Clock, MessageSquare, ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { SiFiverr, SiBuymeacoffee, SiGumroad } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Monitor scroll position for "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Email validation
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true); // Reset validation on change
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
    
    setIsSubscribed(true);
    setEmail("");
    // Here you would typically send this to your backend
    setTimeout(() => setIsSubscribed(false), 3000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-900 text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
        
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Newsletter section with enhanced design and animations */}
        <div className="mb-16 bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Stay Connected
              </h3>
              <p className="text-gray-300">
                Subscribe to my newsletter and be the first to know about my latest projects, 
                tech insights, and exclusive content. Never miss an update!
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col w-full md:w-1/2 space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email" 
                  className={`bg-gray-800/50 border ${isEmailValid ? 'border-gray-600' : 'border-red-500'} rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                  aria-label="Email subscription"
                />
                <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                className={`px-5 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubscribed 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
              >
                {isSubscribed ? (
                  <>
                    <Heart size={18} className="animate-pulse" />
                    <span>Thank you for subscribing!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Main footer content - 4 columns with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About section */}
          <div className="transition-all duration-300 hover:translate-y-1">
            <h4 className="text-lg font-semibold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              About Me
            </h4>
            <p className="text-gray-400 mb-4">
              Software engineer and tech enthusiast passionate about building innovative solutions
              that solve real-world problems and create meaningful experiences.
            </p>
            <a 
              href="mailto:addysingh409@gmail.com" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
            >
              <Mail size={16} className="transform group-hover:rotate-12 transition-transform duration-300" />
              <span>addysingh409@gmail.com</span>
            </a>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Projects</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">About</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Services</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Contact Info
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Phone size={16} className="text-blue-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span>+91 7572047077</span>
              </li>
              <li className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Clock size={16} className="text-blue-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span>Available: 10:00 AM - 6:00 PM IST</span>
              </li>
              <li className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1 mt-4">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <MessageSquare size={16} className="text-blue-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span>Let's connect for project inquiries!</span>
              </li>
            </ul>
          </div>
          
          {/* Latest Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Latest Projects
            </h4>
            <ul className="space-y-4">
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <a href="#project1" className="group block bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-blue-500/30">
                  <h5 className="text-blue-400 font-medium mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    E-Commerce Platform
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h5>
                  <p className="text-sm text-gray-400">Modern shopping experience with React and Node.js</p>
                </a>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <a href="#project2" className="group block bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-blue-500/30">
                  <h5 className="text-blue-400 font-medium mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    AI Assistant App
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h5>
                  <p className="text-sm text-gray-400">Intelligent assistant powered by machine learning</p>
                </a>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <a href="#project3" className="group block bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-blue-500/30">
                  <h5 className="text-blue-400 font-medium mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    Portfolio Website
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h5>
                  <p className="text-sm text-gray-400">Responsive portfolio with Next.js and Tailwind</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media links with enhanced animations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/Adarshsingh-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 group"
          >
            <FaGithub size={20} className="group-hover:animate-pulse" />
          </a>
          <a
            href="www.linkedin.com/in/adarshsingh01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="bg-gray-800 hover:bg-blue-900 p-3 rounded-full text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 group"
          >
            <FaLinkedin size={20} className="group-hover:animate-pulse" />
          </a>
          <a
            href="buymeacoffee.com/Adarsh_singh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buymeacoffee Profile"
            className="bg-gray-800 hover:bg-yellow-500 p-3 rounded-full text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300 group"
          >
            <SiBuymeacoffee size={20} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://dribbble.com/Unitycoin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble Profile"
            className="bg-gray-800 hover:bg-pink-900 p-3 rounded-full text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300 group"
          >
            <FaDribbble size={20} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://www.fiverr.com/adarsh_singh_9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr Profile"
            className="bg-gray-800 hover:bg-green-500 p-3 rounded-full text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300 group"
          >
            <SiFiverr size={20} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://addyspark.gumroad.com/?_gl=1*1pmgybl*_ga*MzEzOTcxMzYuMTc0Mzk0ODc5Nw..*_ga_6LJN6D94N6*MTc0NTY1NTM0My40LjEuMTc0NTY1NTM3NS4wLjAuMA.."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gumroad Profile"
            className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300 group"
          >
            <SiGumroad size={20} className="group-hover:animate-pulse" />
          </a>
          
        </div>
        
        {/* Copyright and bottom links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 flex items-center">
            © {currentYear} Adarsh Singh. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="/sitemap" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button with enhanced animation */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;