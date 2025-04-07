import { Github, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-900 text-white py-10 mt-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Adarsh Singh. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-300">
          <a
            href="https://github.com/adarsh-unity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-200"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-unitycoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/adarshunity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all duration-200"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
