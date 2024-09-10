"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaInfoCircle,
  FaClipboardCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCircle,
} from "react-icons/fa";
import Image from "next/image";

const LipoCavitationInfo: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const data = {
    whatIs: {
      title: "O QUE É",
      description: [
        "A lipocavitação é um procedimento estético que serve para eliminar gordura localizada na barriga, coxas, culotes e costas, através de um aparelho de ultrassom que ajuda a destruir a gordura acumulada.",
        "Este procedimento, também conhecido por lipo sem cirurgia, não dói e ajuda a perder volume, deixando o corpo mais modelado e definido, além de ajudar a melhorar o aspecto da pele e a diminuir a celulite.",
      ],
      icon: (
        <FaInfoCircle className="text-blue-500 dark:text-yellow-500 mr-3" />
      ),
    },
    howItWorks: {
      title: "COMO SE APLICA",
      description: [
        "Este tratamento demora em média 40 minutos. A pessoa deve deitar-se ou sentar-se com roupa íntima, em seguida o profissional irá aplicar um gel sobre a área a ser tratada.",
        "Após a colocação do gel, é colocado o equipamento na região a ser tratada, e são realizados movimentos circulares durante todo procedimento.",
      ],
      icon: (
        <FaClipboardCheck className="text-blue-500 dark:text-yellow-500 mr-3" />
      ),
    },
    benefits: {
      title: "RESULTADOS, INDICAÇÕES E BENEFÍCIOS",
      description: [
        {
          label: "Resultados",
          text: "A lipocavitação elimina cerca de 3 a 4 cm logo no primeiro dia de tratamento e, em média, mais 1 cm em cada sessão.",
        },
        {
          label: "Indicações",
          text: "Eliminar gordura localizada na barriga, flancos, culote, coxas, braços e costas.",
        },
        {
          label: "Benefícios",
          text: "Modelar o corpo, melhorar o aspecto da pele, reduzir celulite, e aumentar o bem-estar e a autoestima.",
        },
      ],
      icon: (
        <FaCheckCircle className="text-blue-500 dark:text-yellow-500 mr-3" />
      ),
    },
    contraindications: {
      title: "CONTRAINDICAÇÕES",
      description: [
        "Gravidez",
        "Diabetes",
        "Colesterol elevado e não controlado",
        "Próteses metálicas; pacemaker e DIU",
        "Varizes ou veias dilatadas no local a tratar",
        "Obesidade",
        "Tensão arterial elevada",
        "Epilepsia",
        "Alterações cardíacas graves, flebites e tromboses",
        "Edema/retenção de líquidos (neste caso, deve realizar cerca de 3 sessões de Drenagem Linfática antes, para melhorar a circulação do sistema linfático).",
      ],
      icon: (
        <FaExclamationTriangle className="text-red-500 dark:text-red-400 mr-3 animate-pulse" />
      ),
    },
  };

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-gray-900 py-16 px-4 mx-auto max-w-screen-3xl sm:py-16 lg:px-6"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="text-center mb-12"
      >
        <h2 className="text-4xl tracking-tight font-extrabold text-blue-900 dark:text-white">
          RESUMO DE INFORMAÇÕES SOBRE A LIPOCAVITAÇÃO
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8 flex flex-col lg:flex-row items-center"
      >
        <div className="lg:w-1/2">
          <Image
            src="/assets/lipocavitation.png"
            alt="LipoCavitação"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 mt-8 lg:mt-0">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
            {data.whatIs.icon} {data.whatIs.title}
          </h3>
          {data.whatIs.description.map((desc, index) => (
            <p key={index} className="text-gray-500 dark:text-gray-400 mt-4">
              {desc}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          {data.howItWorks.icon} {data.howItWorks.title}
        </h3>
        {data.howItWorks.description.map((desc, index) => (
          <p key={index} className="text-gray-500 dark:text-gray-400 mt-4">
            {desc}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={listVariants}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          {data.benefits.icon} {data.benefits.title}
        </h3>
        <ul className="ml-6 space-y-4 text-gray-500 dark:text-gray-400">
          {data.benefits.description.map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="flex items-start"
            >
              <FaCircle className="text-blue-500 dark:text-yellow-500 mr-2 mt-1" />
              <div>
                <strong>{item.label}:</strong> {item.text}
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center">
          {data.contraindications.icon} {data.contraindications.title}
        </h3>
        <ul className="ml-6 space-y-4 text-gray-500 dark:text-gray-400">
          {data.contraindications.description.map((desc, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="flex items-start"
            >
              <FaCircle className="text-red-500 dark:text-red-400 mr-2 mt-1" />
              <div>{desc}</div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default LipoCavitationInfo;
