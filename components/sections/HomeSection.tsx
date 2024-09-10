"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeSection() {
  const images = ["/assets/weight-loss-2.png", "/assets/weight-loss-3.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-8 md:px-16 lg:px-24 text-gray-900 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          fill
          objectFit="cover"
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          LipoShape Dual Care
        </h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Uma nova silhueta no conforto do seu lar.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            variant="default"
            size="lg"
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300"
            onClick={handleScrollToContact}
          >
            <span className="mr-2">📥</span> FAÇA JÁ SEU AGENDAMENTO
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
