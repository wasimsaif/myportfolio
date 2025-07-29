
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "/images/wswhitelogo.png"; // Update if needed

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src={logo}
            alt="Wasim Logo"
            className="w-20 h-20 object-contain rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Wasim Saifi</h2>
            <p className="text-sm text-gray-400 max-w-sm">
              Passionate Software Developer <br /> crafting clean, modern,
              <br /> and responsive digital experiences.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex  flex-wrap gap-6 justify-center text-sm font-medium text-gray-300 lg:pr-30">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/wasimsaif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/wasim-saifi-b6954321b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:wasimsaifi983@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Wasim Saifi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
