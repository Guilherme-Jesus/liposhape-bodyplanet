"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaImages,
  FaHandHoldingHeart,
  FaSmile,
  FaEnvelope,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80; // Ajuste conforme a altura do seu navbar
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "Sobre", icon: <FaInfoCircle /> },
    { id: "additional", label: "Informações Adicionais", icon: <FaListAlt /> },
    { id: "before-after", label: "Resultados", icon: <FaImages /> },
    { id: "pressotherapy", label: "Solução", icon: <FaHandHoldingHeart /> },
    { id: "benefits", label: "Benefícios", icon: <FaSmile /> },
    { id: "contact", label: "Contato", icon: <FaEnvelope /> },
  ];

  return (
    <header className="bg-white text-gray-900 fixed w-full z-50 top-0 left-0 shadow-md h-24 pt-4">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold uppercase tracking-wider">
          BodyPlanet
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              {item.icon}
              <Link
                href={`#${item.id}`}
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-100 overflow-hidden"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.id}`}
                  className="text-gray-900 py-2 flex items-center space-x-2"
                  onClick={(e) => {
                    handleSmoothScroll(e, item.id);
                    toggleMenu();
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
