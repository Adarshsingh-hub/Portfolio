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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
        
        {/* Enhanced gradient blobs with animations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/4 right-1/5 w-20 h-20 rounded-full border border-blue-500/20 animate-spin"></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 rounded-full border border-purple-500/20 animate-spin"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Newsletter section with enhanced design and animations */}
        <div className="mb-16 bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Stay Connected
              </h3>
              <p className="text-gray-300">
                Subscribe to my newsletter and be the first to know about my latest projects, 
                tech insights, and exclusive content. Never miss an update!
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col w-full md:w-1/2 space-y-3">
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email" 
                  className={`bg-gray-800/50 border ${isEmailValid ? 'border-gray-600 group-hover:border-blue-400' : 'border-red-500'} rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                  aria-label="Email subscription"
                />
                <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                className={`px-5 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-500 ${
                  isSubscribed 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 bg-size-200 bg-pos-0 hover:bg-pos-100"
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
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Main footer content - 2 columns with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          {/* Quick links with enhanced animations */}
          <div className="transform hover:translate-y-1 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 grid sm:grid-cols-2 gap-x-4">
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-blue-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Projects</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-purple-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">About</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-indigo-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-pink-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-pink-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-green-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                  <div className="bg-red-500/10 p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={14} className="text-red-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Skills</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info with enhanced animations and email added */}
          <div className="transform hover:translate-y-1 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 group transition-all duration-300 hover:-translate-x-1 bg-gray-800/30 p-3 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 group transition-all duration-300 hover:-translate-x-1 bg-gray-800/30 p-3 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} className="text-green-400 flex-shrink-0 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <span>+91 7572047077</span>
              </li>
              <li className="flex items-center gap-3 group transition-all duration-300 hover:-translate-x-1 bg-gray-800/30 p-3 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} className="text-purple-400 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <span>contact@adarshsingh.dev</span>
              </li>
              <li className="flex items-center gap-3 group transition-all duration-300 hover:-translate-x-1 bg-gray-800/30 p-3 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Clock size={18} className="text-yellow-400 flex-shrink-0 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <span>Available: 10:00 AM - 6:00 PM IST</span>
              </li>
              <li className="flex items-center gap-3 group transition-all duration-300 hover:-translate-x-1 bg-gray-800/30 p-3 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30">
                <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare size={18} className="text-indigo-400 flex-shrink-0 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <span>Let's connect for project inquiries!</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media links with enhanced animations */}
        <div className="flex flex-wrap justify-center gap-5 mb-12 bg-gray-800/30 p-6 rounded-xl backdrop-blur-md border border-white/5">
          <a
            href="https://github.com/Adarshsingh-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-full text-gray-400 hover:text-white transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <FaGithub size={22} className="group-hover:animate-bounce" />
          </a>
          <a
            href="https://www.linkedin.com/in/adarshsingh01/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="bg-gradient-to-br from-blue-700 to-blue-900 p-4 rounded-full text-gray-400 hover:text-blue-300 transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <FaLinkedin size={22} className="group-hover:animate-bounce" />
          </a>
          <a
            href="https://buymeacoffee.com/adarsh_singh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buymeacoffee Profile"
            className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-4 rounded-full text-gray-300 hover:text-yellow-300 transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <SiBuymeacoffee size={22} className="group-hover:animate-bounce" />
          </a>
          <a
            href="https://dribbble.com/Unitycoin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble Profile"
            className="bg-gradient-to-br from-pink-700 to-pink-900 p-4 rounded-full text-gray-300 hover:text-pink-300 transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <FaDribbble size={22} className="group-hover:animate-bounce" />
          </a>
          <a
            href="https://www.fiverr.com/adarsh_singh_9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr Profile"
            className="bg-gradient-to-br from-green-700 to-green-900 p-4 rounded-full text-gray-300 hover:text-green-300 transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <SiFiverr size={22} className="group-hover:animate-bounce" />
          </a>
          <a
            href="https://addyspark.gumroad.com/?_gl=1*1pmgybl*_ga*MzEzOTcxMzYuMTc0Mzk0ODc5Nw..*_ga_6LJN6D94N6*MTc0NTY1NTM0My40LjEuMTc0NTY1NTM3NS4wLjAuMA.."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gumroad Profile"
            className="bg-gradient-to-br from-purple-700 to-purple-900 p-4 rounded-full text-gray-300 hover:text-purple-300 transition-all duration-300 group transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl"
          >
            <SiGumroad size={22} className="group-hover:animate-bounce" />
          </a>
        </div>
        
        {/* Copyright and bottom links with enhanced design */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <span className="inline-block w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
            © {currentYear} Adarsh Singh. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/privacy" className="relative text-gray-400 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300">Privacy Policy</a>
            <a href="/terms" className="relative text-gray-400 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300">Terms of Service</a>
            <a href="/sitemap" className="relative text-gray-400 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Enhanced back to top button with improved animations */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-50 animate-bounce group"
          aria-label="Back to top"
        >
          <ChevronUp size={20} className="group-hover:animate-pulse" />
        </button>
      )}
    </footer>
  );
};

export default Footer;