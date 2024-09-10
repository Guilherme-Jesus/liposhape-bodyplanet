// app/components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold">BodyPlanet</h2>
            <p className="mt-2 text-gray-400">
              Transformando saúde e bem-estar através de tecnologia avançada.
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BodyPlanet. Todos os
            direitos reservados.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
