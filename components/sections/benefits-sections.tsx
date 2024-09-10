"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const accordionData = [
  {
    title: "O QUE É PRESSOTERAPIA?",
    content: [
      "Terapia de compressão avançada.",
      "Tecnologia de Massagem pneumática que realiza uma drenagem linfática eficiente e benéfica, atuando na parte inferior do corpo (tronco, pernas, pés e abdómen).",
      "A drenagem na zona superior do corpo, como zona lombar, dorsal e abdómen superior, é melhorada.",
      "Reforça o toque e tónus da pele, reduz, melhora e evita a má cicatrização tecidular.",
    ],
  },
  {
    title: "EFEITOS FISIOLÓGICOS DA PRESSOSHAPE",
    content: [
      "Promove a desintoxicação corporal, de forma natural, incrementando o funcionamento normal do organismo.",
      "A revitalização dos tecidos auxilia na perda de volume.",
      "Promove o emagrecimento.",
      "Redefine contornos e silhuetas corporais.",
      "Altamente recomendada para tratamento da celulite.",
      "Alivia dores e desconforto.",
      "Acalma e melhora transtornos musculares e relaxa o organismo, graças aos seus benefícios transmitidos por cada um dos Programas de tratamento.",
    ],
  },
  {
    title: "BENEFÍCIOS DA PRESSOSHAPE",
    content: [
      "Estimula os sistemas circulatório e linfático, de forma simples, rápida e eficaz.",
      "Melhora a circulação e atenua a sensação de peso e cansaço quer nas pernas, quer de forma geral.",
      "Favorece a eliminação de toxinas de forma natural, e por isso é o complemento ideal para os tratamentos redutores e anti-celulíticos.",
      "Elimina gorduras e toxinas que se acumulam nas paredes das células, os líquidos retidos e os resíduos acumulados no organismo, sempre de forma não invasiva.",
      "Reduz o inchaço e ajuda a eliminar líquidos.",
      "É ideal para a remodelação corporal.",
      "Contribui para melhorar o fluxo sanguíneo e, consequentemente, melhorar o tom e a firmeza da pele.",
      "É um tratamento indolor e não invasivo.",
      "É ainda um tratamento que quanto mais se faz, maiores serão os resultados.",
    ],
  },
  {
    title: "PRESSOSHAPE INDICADO PARA",
    content: [
      "Celulite Graus I, II e III.",
      "Estimulação da circulação de retorno venoso e linfático.",
      "Redução de volume (braços, pernas, tronco e abdómen).",
      "Alívio de inchaço dos braços e pernas, devido a insuficiência venosa, obesidade ou períodos prolongados em pé.",
      "Cuidados pós-parto.",
      "Relaxamento e redução de stress.",
      "Refirmação e tonificação da pele e dos músculos.",
      "Desintoxicante.",
      "Melhorar o trofismo muscular e recuperação da elasticidade da pele.",
      "Edemas e inchaços.",
      "Retenção de líquidos.",
      "Melhorar fatores metabólicos e imunitários.",
      "Ação cicatrizante.",
      "Ação regeneradora.",
      "Obstipação.",
      "Fisioterapia, alívio da dor muscular.",
    ],
  },
];

const BenefitsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const scrollToElement = (index: number | null) => {
    if (index !== null && itemRefs.current[index]) {
      const element = itemRefs.current[index];
      const offset =
        element?.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight / 2 +
        element?.clientHeight / 2;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (expandedIndex !== null) {
      scrollToElement(expandedIndex);
    }
  }, [expandedIndex]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="benefits"
      ref={ref}
      className="bg-gray-100 dark:bg-gray-800 py-16 px-4 mx-auto max-w-screen-3xl sm:pb-4 lg:px-6"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl tracking-tight font-extrabold">
          PRESSOSHAPE PROFESSIONAL CARE
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Aqui estão alguns dos principais benefícios do tratamento.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {accordionData.map((item, index) => (
          <Accordion
            key={`accordion-${index}`}
            type="single"
            collapsible
            className="w-full"
            value={expandedIndex === index ? `item-${index}` : ""}
            onValueChange={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <motion.div
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 shadow-2xl rounded-lg transition-all duration-300 transform hover:scale-105 p-6"
              >
                <AccordionTrigger className="font-semibold text-xl text-gray-700 dark:text-gray-200 flex justify-between items-center hover:no-underline">
                  <div className="flex items-center text-md">
                    <FaCheckCircle className="text-blue-500 mr-3 text-2xl" />
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 mt-4">
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="space-y-3"
                  >
                    {item.content.map((contentItem, contentIndex) => (
                      <motion.li
                        key={`content-${contentIndex}`}
                        variants={itemVariants}
                        className="flex items-start"
                      >
                        <FaCheckCircle
                          className="text-blue-500 mr-3 text-lg flex-shrink-0"
                          style={{ width: "1.3rem", height: "1.3rem" }}
                        />
                        <span>{contentItem}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        ))}
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
