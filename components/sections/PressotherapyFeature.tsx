"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaHeartbeat,
  FaBrain,
  FaHandHoldingHeart,
  FaRunning,
  FaSmile,
  FaMedkit,
  FaWeight,
  FaHandsHelping,
} from "react-icons/fa";
import Image from "next/image";
import { GiHealthNormal } from "react-icons/gi";

const PressotherapyFeature: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80; // Ajuste conforme a altura do seu navbar
      const y =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="pressotherapy"
      ref={ref}
      className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 py-16 px-4 mx-auto max-w-screen-3xl sm:py-24 lg:px-8"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="text-center mb-16"
      >
        <h2 className="text-5xl tracking-tight font-extrabold text-white mb-4">
          APRESENTAMOS UMA SOLUÇÃO, NÃO UM PRODUTO.
        </h2>
        <p className="text-2xl text-gray-200">
          Um conceito inovador para transformar a sua saúde e bem-estar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            icon: (
              <FaHeartbeat className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Sistemas Vitais",
            text: "Melhora, promove e recupera os sistemas digestivo, circulatório, linfático, muscular e nervoso.",
          },
          {
            icon: (
              <FaRunning className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Benefícios Físicos",
            text: "Elimina toxinas, melhora a circulação, reduz gorduras e alivia a pressão nas pernas.",
          },
          {
            icon: (
              <FaBrain className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Bem-estar Mental",
            text: "Reduz o stress, melhora a qualidade do sono e combate a ansiedade.",
          },
          {
            icon: (
              <FaHandHoldingHeart className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Tratamento Personalizado",
            text: "Adapta-se ao seu corpo com níveis de intensidade variados e programas específicos.",
          },
          {
            icon: (
              <FaMedkit className="text-red-600 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Exclusividade",
            text: "Tratamento único, desenvolvido na Coreia do Sul, disponível apenas em Portugal.",
          },
          {
            icon: (
              <FaWeight className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Resultados Imediatos",
            text: "Visível desde a primeira sessão, com efeitos duradouros e sem efeito “yo-yo”.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
        className="mt-20"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          Detalhes Incríveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Image
              src="/assets/pressoshape-no-fundo.png"
              alt="Detalhe do PressoShape"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-white space-y-6">
            <p className="text-lg">
              O PressoShape oferece uma experiência única de tratamento, com
              tecnologias avançadas que proporcionam uma massagem completa em
              todo o corpo.
            </p>
            <p className="text-lg">
              Desenvolvido com precisão e qualidade, o PressoShape se adapta a
              diferentes tipos de corpo e necessidades, garantindo sempre o
              melhor resultado.
            </p>
            <p className="text-lg">
              A exclusividade do PressoShape está na sua capacidade de combinar
              vários tratamentos em um único dispositivo, sendo uma solução
              completa para o seu bem-estar.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: (
              <FaHandsHelping className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Facilidade de Uso",
            text: "Pensado para ser simples e intuitivo, ideal para uso doméstico, sem necessidade de assistência profissional.",
          },
          {
            icon: (
              <GiHealthNormal className="text-blue-200 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Segurança",
            text: "Desenvolvido com os mais altos padrões de segurança, garantindo eficácia sem comprometer a saúde.",
          },
          {
            icon: (
              <FaSmile className="text-blue-900 dark:text-white text-6xl mb-4 animate-pulse" />
            ),
            title: "Conforto",
            text: "Concebido para proporcionar a máxima sensação de conforto durante o tratamento, com um design ergonômico.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.5 }}
        variants={sectionVariants}
        className="mt-16 text-center"
      >
        <h2 className="text-5xl font-extrabold text-white mb-6">
          O PressoShape trabalha para você
        </h2>
        <p className="text-xl text-gray-200 mb-12">
          Proporciona uma verdadeira sessão de massagem, cuidando do seu corpo,
          mente e espírito.
        </p>
        <button
          onClick={handleScrollToContact}
          className="px-8 py-4 bg-yellow-500 text-white text-2xl font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          Experimente Agora
        </button>
      </motion.div>
    </section>
  );
};

export default PressotherapyFeature;
