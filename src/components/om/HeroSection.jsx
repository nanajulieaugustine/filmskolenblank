"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll fra 0 til -50% af containerens bredde
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500] overflow-hidden"
    >
      <motion.div
        style={{ x }}
        className="absolute top-40 md:top-20 left-0 flex"
      >
        <Image
          src="/om/filmrulle.webp"
          alt="medea 2024"
          width={3000}
          height={500}
          priority
          className="h-auto w-auto"
        />
            <Image
        src="/om/filmrulle.webp"
        alt="medea 2024"
        width={3000}
        height={500}
        priority
        className="w-auto h-auto"
        />
        <Image
          src="/om/filmrulle.webp"
          alt="medea 2024"
          width={3000}
          height={500}
          priority
          className="h-auto w-auto"
        />
      </motion.div>
    </div>
  );
}
