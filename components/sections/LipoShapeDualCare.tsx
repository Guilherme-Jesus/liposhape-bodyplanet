"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaHeart,
  FaPlusCircle,
  FaRegSmileBeam,
  FaUserCheck,
  FaBan,
  FaMagic,
} from "react-icons/fa";
import Image from "next/image"; // Certifique-se de que a imagem está na pasta pública

const LipoShapeDualCare: React.FC = () => {
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
          COMO ATUA O LIPOSHAPE DUAL CARE NA ESTÉTICA E SAÚDE
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 mt-4">
          Em consequência de traumatismo, infeções, desgaste e envelhecimento
          natural e outras patologias, as nossas células vão perdendo energia.
          Essa energia celular, também é conhecida por “carga vital”. Os
          Ultrassons Terapêuticos ajudam a criar um campo energético que
          recar­ga a energia perdida das células, permitindo assim ao nosso
          organismo que se defenda de forma natural e com maior eficácia às
          inúmeras doenças e questões de estética que vamos tendo ao longo da
          Vida.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8 flex flex-col lg:flex-row items-center"
      >
        <div className="lg:w-1/2">
          <Image
            src="/assets/benef-2.png" // Adicione a imagem relevante aqui
            alt="Ultrassom Terapêutico"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 mt-8 lg:mt-0">
          <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
            ULTRASSONS TERAPÊUTICOS
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            O ultrassom pertence ao ramo da eletroterapia e é um dos recursos
            mais utilizados em Fisioterapia. É um tratamento utilizado como
            coadjuvante de outras terapias, com estudos em que se revela muito
            eficaz, não invasivo, não doloroso.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8"
      >
        <h4 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          <FaPlusCircle className="text-blue-500 mr-3" /> O que faz o Ultrassom?
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Fisiologicamente o ultrassom promove a produção de calor para os
          tecidos (tendões, músculos e articulações) diminuindo os sintomas de
          inflamação e promovendo a regeneração dos tecidos. Não é doloroso, não
          tem efeitos colaterais e é feito por meio de um transdutor capaz de
          gerar correntes elétricas de frequências alternadas e capazes de
          penetrar o tecido e estimular o fluxo sanguíneo da região.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={listVariants}
        className="mb-8"
      >
        <h4 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          <FaRegSmileBeam className="text-blue-500 mr-3" /> Benefícios do
          Ultrassom
        </h4>
        <ul className="list-disc ml-6 space-y-2 text-gray-500 dark:text-gray-400">
          <motion.li variants={listItemVariants}>
            <strong>Alívio da dor:</strong> O Ultrassom Terapêutico é eficaz no
            alívio da dor, pois as ondas sonoras emitidas pelo aparelho têm a
            capacidade de estimular a liberação de substâncias analgésicas
            naturais no organismo, como as endorfinas.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Lesões musculares:</strong> O ultrassom terapêutico é muito
            utilizado no tratamento de lesões musculares, como distensões,
            contraturas e tendinites. A técnica ajuda a acelerar a recuperação
            dos tecidos musculares danificados e alivia a dor e inflamação.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Lesões articulares:</strong> Para lesões articulares, como
            entorses e bursites, o ultrassom terapêutico também é bastante
            eficaz.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Problemas circulatórios:</strong> A aplicação do Ultrassom
            Terapêutico promove a dilatação dos vasos sanguíneos, melhorando a
            circulação sanguínea na região tratada.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Aceleração da cicatrização:</strong> O Ultrassom Terapêutico
            estimula a produção de colágeno, uma proteína essencial para a
            cicatrização de feridas e lesões.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Redução de edemas:</strong> O ultrassom terapêutico também é
            eficaz na redução de edemas, que são o acúmulo de líquidos nos
            tecidos do corpo.
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8 flex flex-col lg:flex-row items-center"
      >
        <div className="lg:w-1/2">
          <Image
            src="/assets/benef-1.png" // Adicione a imagem relevante aqui
            alt="Ultrassom na Estética"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h4 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4">
            O Ultrassom na Estética
          </h4>
          <p className="text-gray-500 dark:text-gray-400">
            É uma excelente opção para tratamento da gordura localizada,
            nomeadamente, na zona abdominal, glúteos, coxas e flancos. Apresenta
            excelentes resultados no tratamento da gordura visceral, e também na
            modelação corporal.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="mb-8"
      >
        <h4 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          <FaMagic className="text-blue-500 mr-3" /> Como funciona o Ultrassom
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          O Ultrassom Terapêutico funciona através da emissão de ondas sonoras
          de alta frequência que são transmitidas para os tecidos do corpo
          através de um aplicador/manipulo. Essas ondas sonoras penetram nos
          tecidos, promovem a libertação de calor para os tecidos, promovendo a
          vasodilatação, melhoria da circulação sanguínea na região tratada, bem
          como têm a capacidade de chegarem aos tendões, músculos e
          articulações, diminuindo os sintomas de inflamação e promovendo a
          regeneração do tecido.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <h4 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4 flex items-center">
          <FaBan className="text-blue-500 mr-3" /> Contraindicações do Ultrassom
        </h4>
        <ul className="list-disc ml-6 space-y-2 text-gray-500 dark:text-gray-400">
          <motion.li variants={listItemVariants}>
            <strong>Gravidez:</strong> O ultrassom terapêutico não é recomendado
            para mulheres grávidas, pois não há estudos suficientes que
            comprovem a sua segurança durante a gestação.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Infeções:</strong> Em casos de infeções na região a ser
            tratada, o ultrassom terapêutico não deve ser utilizado.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Tumores:</strong> Pessoas com tumores na região a ser
            tratada também devem evitar o uso do ultrassom terapêutico.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Trombose:</strong> Em casos de trombose venosa profunda, o
            ultrassom terapêutico não deve ser utilizado.
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default LipoShapeDualCare;
