import { useState } from "react";
import { Mail, Heart, ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-900 text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter section */}
        <div className="mb-16 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-white/5 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Stay Connected</h3>
              <p className="text-gray-300">Subscribe to receive updates about my latest projects and tech insights.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-1/2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="bg-gray-700/70 border border-gray-600 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                required
              />
              <button 
                type="submit" 
                className={`px-5 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubscribed 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <Heart size={18} className="animate-pulse" />
                    <span>Subscribed!</span>
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
        
        {/* Footer links and content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About Me</h4>
            <p className="text-gray-400 mb-4">
              Software engineer and tech enthusiast passionate about building innovative solutions
              that solve real-world problems.
            </p>
            <a 
              href="mailto:addysingh409@gmail.com" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Mail size={16} />
              <span>addysingh409@gmail.com</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span>+91 7572047077</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <span>Available: 10:00 AM - 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and social links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 flex items-center">
            © {new Date().getFullYear()} Adarsh Singh. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/adarsh-unity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 p-2"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-unitycoin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200 p-2"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/adarshunity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-200 p-2"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;