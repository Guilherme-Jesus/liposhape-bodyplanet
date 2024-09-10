"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AdditionalInfoSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

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

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.6,
        duration: 1.2,
      },
    }),
  };

  const iconVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        delay: 1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2 + i * 0.1, // Delay the text to simulate typing effect
      },
    }),
  };

  const TypingEffect: React.FC<{ text: string; delay?: number }> = ({
    text,
    delay = 0,
  }) => {
    return (
      <motion.span
        initial="hidden"
        animate="visible"
        custom={0}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.05 * text.length,
              delay,
            },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, delay: delay + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <section
      id="additional"
      ref={sectionRef}
      className="bg-gray-100 dark:bg-gray-800 py-8 px-4 mx-auto max-w-screen-3xl sm:pb-4 lg:px-6"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={textVariants}
        custom={0}
        className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-white text-center"
      >
        <TypingEffect text="Experimente o Dual Care" />
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mt-16 md:grid md:grid-cols-2 md:gap-20"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          custom={0}
          className="order-1"
        >
          <Image
            src="/assets/liposhape-1.png"
            alt="Imagem LipoShape Dual Care"
            className="rounded-lg"
            width={500}
            height={300}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          custom={1}
          className="order-2"
        >
          <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <TypingEffect text="Dual Care" delay={2.5} />
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            <TypingEffect
              text="O LipoShape Dual Care utiliza ondas de ultrassom para atingir células de gordura, estimulando a sua destruição e facilitando a eliminação pelo corpo através da corrente sanguínea e linfática. Ao combinar este tratamento com a PressoShape garante um resultado mais eficaz e duradouro."
              delay={2.8}
            />
          </p>
          <motion.ul
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mt-4 space-y-2"
          >
            {[
              "Ondas de Ultrassom",
              "Eliminação Natural",
              "Tratamento Indolor",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                custom={index}
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={iconVariants}
                  className="mr-2"
                >
                  <FaCheckCircle className="text-blue-500" />
                </motion.div>
                <TypingEffect text={item} delay={3.5 + index * 0.3} />
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            <TypingEffect text="FAÇA JÁ SEU AGENDAMENTO" delay={4.5} />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mt-20 md:grid md:grid-cols-2 flex flex-col-reverse md:flex-row md:gap-6"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          custom={3}
          className="order-2 md:order-1  "
        >
          <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <TypingEffect text="PressoShape Professional Care" delay={5.0} />
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            <TypingEffect
              text="A PressoShape Professional Care é um tratamento tecnologicamente avançado de Massagem de Drenagem Linfática (por via mecânica) e de auto-regeneração corporal. Utilizando o método da Pressoterapia, a PressoShape melhora, promove e ajuda na recuperação dos vários sistemas do organismo, nomeadamente, o sistema circulatório, linfático, muscular, nervoso e digestivo, acelerando os processos de recuperação, potenciando assim os resultados dos tratamentos realizados com a LipoShape Dual Care."
              delay={5.3}
            />
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          custom={2}
          className="order-1 md:order-2 mb-8 md:mb-0"
        >
          <Image
            src="/assets/pressoshape-1.png"
            alt="Imagem PressoShape Professional Care"
            className="rounded-lg"
            width={500}
            height={300}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AdditionalInfoSection;
