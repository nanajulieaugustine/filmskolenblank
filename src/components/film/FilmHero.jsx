"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FilmHero() {

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
            src={"/film/film_hero.webp"}
            fill
            priority
            className="object-cover w-full h-full"
            alt="musikvideo optagelse"
            />
        </motion.div>

        <section className="flex flex-col justify-end gap-2 grow ml-5">
            <h1>udgivede film</h1>
            <p className="max-w-md">På Blank er det ikke at krav at udgive dine produktioner. Vi arbejder med film af dig, til dig. </p>
            <p className="max-w-md">Dog er der mulighed for at tage filmen videre til næste skridt gennem Blanks vejledning. </p>
        </section>
        </div>

  );
}
