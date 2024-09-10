"use client";

import { useEffect, useRef } from "react";
import { FaHome, FaShieldAlt, FaWaveSquare } from "react-icons/fa";
import { motion, useAnimation, Variants } from "framer-motion";

// Tipagem para as propriedades do FeatureItem
interface FeatureItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

// Componente para o cabeçalho da seção
const SectionHeader: React.FC = () => {
  const controls = useAnimation();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={headerRef}
      initial="hidden"
      animate={controls}
      variants={headerVariants}
      className="max-w-screen-md mb-8 lg:mb-16 text-center"
    >
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-white">
        Conheça o Dual Care
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400">
        O LipoShape Dual Care é um tratamento revolucionário e exclusivo em
        Portugal, que utiliza tecnologia avançada para oferecer resultados
        excepcionais na estética e saúde.
      </p>
    </motion.div>
  );
};

// Variantes de animação para o cabeçalho
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variantes de animação para os itens
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Componente para cada item da seção
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const controls = useAnimation();
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={itemRef}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <motion.div
        className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function AboutSection() {
  const features = [
    {
      title: "Tratamento Confortável",
      icon: (
        <FaHome className="w-6 h-6 text-primary-600 dark:text-primary-300" />
      ),
      description:
        "O tratamento é realizado no conforto da sua casa, é indolor, não invasivo e sem necessidade de pós-operatório.",
    },
    {
      title: "Equipamento Certificado",
      icon: (
        <FaShieldAlt className="w-6 h-6 text-primary-600 dark:text-primary-300" />
      ),
      description:
        "O LipoShape é um dispositivo médico certificado pela Diretiva 93/42/EEC, com programas médicos para tratar diversas patologias.",
    },
    {
      title: "Resultados Excepcionais",
      icon: (
        <FaWaveSquare className="w-6 h-6 text-primary-600 dark:text-primary-300" />
      ),
      description:
        "O LipoShape utiliza ondas de ultrassom para atingir células de gordura, garantindo um resultado mais eficaz e duradouro.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-3xl sm:py-16 lg:px-6"
    >
      <SectionHeader />
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            index={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
