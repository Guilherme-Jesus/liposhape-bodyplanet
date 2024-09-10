"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  FaUserCheck,
  FaSmile,
  FaThumbsUp,
  FaEye,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/assets/5-1.jpg", alt: "Antes do tratamento", label: "Antes" },
  { src: "/assets/5.jpg", alt: "Depois do tratamento", label: "Depois" },
  { src: "/assets/6.jpg", alt: "Antes do tratamento", label: "Antes" },
  { src: "/assets/7.jpg", alt: "Depois do tratamento", label: "Depois" },
  {
    src: "/assets/1.jpg",
    alt: "Antes e Depois do tratamento",
    label: "Antes x Depois",
  },
  {
    src: "/assets/2.jpg",
    alt: "Antes e Depois do tratamento",
    label: "Antes x Depois",
  },
  {
    src: "/assets/3.jpg",
    alt: "Antes e Depois do tratamento",
    label: "Antes x Depois",
  },
  {
    src: "/assets/4.jpg",
    alt: "Antes e Depois do tratamento",
    label: "Antes x Depois",
  },
];

const BeforeAfterCarousel: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const CountUpAnimation = ({
    value,
    suffix = "",
    prefix = "",
  }: {
    value: number;
    suffix?: string;
    prefix?: string;
  }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }, [value]);

    return (
      <motion.h4 className="text-3xl font-bold">{`${prefix}${count}${suffix}`}</motion.h4>
    );
  };

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section
      id="before-after"
      ref={ref}
      className="bg-gray-900 py-8 px-4 mx-auto max-w-screen-3xl sm:py-16 lg:px-6 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-4 text-4xl tracking-tight font-extrabold text-center flex items-center justify-center"
      >
        <FaEye className="text-yellow-500 mr-3" />
        Antes
        <FaExchangeAlt className="mx-3 text-blue-500" />
        Depois com LipoShape Dual Care
      </motion.h2>

      <Carousel
        className="w-full max-w-4xl mx-auto mt-8" // Ajustado para um tamanho menor
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 lg:basis-1/2" // Ajustado para ocupar metade da largura em telas grandes
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800} // Ajustado para um tamanho menor
                  height={600} // Ajustado para um tamanho menor
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                  <h3 className="text-xl font-semibold">{image.label}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-12 space-x-6  text-center max-w-screen-lg mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 w-1/3"
        >
          <FaUserCheck className="text-3xl text-blue-500 mx-auto mb-3" />
          <CountUpAnimation value={1000} prefix="+" />
          <p className="text-xl text-gray-400">Tratamentos realizados</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="p-4 w-1/3"
        >
          <FaSmile className="text-3xl text-green-500 mx-auto mb-3" />
          <CountUpAnimation value={98} suffix="%" />
          <p className="text-xl text-gray-400">Clientes satisfeitos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="p-2 w-1/3"
        >
          <FaThumbsUp className="text-3xl text-yellow-500 mx-auto mb-3" />
          <CountUpAnimation value={500} prefix="+" />
          <p className="text-xl text-gray-400">Resultados positivos</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
