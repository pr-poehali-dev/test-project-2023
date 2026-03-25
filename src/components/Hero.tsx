import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/fbf2f932-a552-4d3e-97d7-8f02378c6d1b/files/a4c8fe29-c024-4fb8-acf9-d4c7927aa8f2.jpg"
          alt="Уютный интерьер кафе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ТВОЁ МЕСТО
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Уютное кафе, где каждая чашка кофе — повод остановиться и насладиться моментом
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 border border-white text-white uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Забронировать стол
        </a>
      </div>
    </div>
  );
}