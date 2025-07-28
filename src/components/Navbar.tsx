import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-5 py-4 md:px-20">
        {/* Logo as Image */}
        <div className="flex items-center" style={{ height: "4rem" }}>
          <img
            src="src/assets/images/wslogo.png"
            alt="Logo"
            className="w-40 h-40 object-contain rounded-full"
            style={{ marginTop: "-1rem", marginBottom: "-1rem" }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium">
          <li>
            <a href="#home" className="cursor-pointer hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-pointer hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer hover:text-blue-500">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 pb-4">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li>
              <a
                href="#home"
                className="cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
