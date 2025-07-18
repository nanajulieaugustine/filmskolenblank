"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OptagHero() {

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
        <div ref={scrollYProgress} className="relative w-full h-[500px] overflow-hidden flex flex-col">
        <motion.div
            style={{ y }}
            className="absolute inset-0 z-[-1] will-change-transform"
        >
            <Image
            src={"/optag/optag_hero.webp"}
            fill
            priority
            className="object-cover w-full h-full"
            alt="fra blanks undervisning"
            />
        </motion.div>

        <section className="flex flex-col justify-end gap-5 grow ml-5">
            <h3 className="white">ANSØGNINGSPORTALEN TIL NÆSTE OPTAGELSESRUNDE ÅBNER</h3>
            <h1 className="display">august 2025</h1>
        </section>
        </div>

  );
}
