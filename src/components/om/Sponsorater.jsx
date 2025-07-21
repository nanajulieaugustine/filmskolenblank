"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Sponsorater = () => {
  const sponsorater = [
    { src: "/logo/sparekassen_white.png", alt: "sparekassen logo" },
    { src: "/logo/lucerna_white.png", alt: "lucerna logo" },
    { src: "/logo/beierholm_white.png", alt: "beierholm logo" },
    { src: "/logo/onprint_white.png", alt: "onprint logo" },
    { src: "/logo/kulturbiografen_white.png", alt: "kulturbiografen logo" },
    { src: "/logo/talent_holbaek_white.png", alt: "talent holbæk logo" },
  ];

  const loopSponsorater = [...sponsorater, ...sponsorater, ...sponsorater];

  return (
    <div className="overflow-x-hidden w-full py-12">
      <motion.ul
        className="flex w-max gap-10 md:gap-20 items-center"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        }}
      >
        {loopSponsorater.map((sponsorat, index) => (
          <li key={index} className="flex-shrink-0">
            <Image
              src={sponsorat.src}
              alt={sponsorat.alt}
              width={160}
              height={80}
              className="w-auto h-16 md:h-20 lg:h-24 object-contain"
            />
          </li>
        ))}
      </motion.ul>

      <div className="mt-10 px-(--content-width-lg)">
        <p className="text-(--yellow) uppercase">
          Har du en virksomhed, der kunne være interesseret i at hjælpe Holbæks lokale filmskole for unge til at fortsætte med at løbe rundt?{" "}
          Send en mail til <a href="mailto:theis@escapeable.dk" className="underline no-break">theis@escapeable.dk</a> og book et møde!
        </p>
      </div>
    </div>
  );
};

export default Sponsorater;
