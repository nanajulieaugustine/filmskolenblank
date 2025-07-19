"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const FilmRulleStills = ({ film }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100px] flex overflow-hidden mb-10"
    >
      <motion.ul style={{ x }} className="absolute -z-10 flex w-auto">
        {Array.from({ length: 3 })
          .flatMap(() => film.stills)
          .map((still, index) => (
            <div
              key={`${film.id}-${index}`}
              className="flex-shrink-0 w-[150px] h-[100px] relative"
            >
              <Image
                src={`/film/${still}`}
                alt={`${film.navn} still ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
      </motion.ul>
    </div>
  );
};

export default FilmRulleStills;
