"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import ScrollUp from "../animationer/ScrollUp";

const TilbudSection = () => {
  const cards = [
    {
      src: "/om/gk-camps.webp",
      alt: "gk-camp ungdomsøen 2023",
      title: "GK-camps",
      text:
        "Talent Holbæk udvikler årligt camps for alle de kunstneriske grundkurser, hvor elever bliver blandet i grupper, og sammen skal bruge deres erfaringer til at danne et kunstnerisk projekt.",
    },
    {
      src: "/om/grundkurser.webp",
      alt: "what is a clown without an audience? videokunst 2023",
      title: "SAMARBEJDE MED GRUNDKURSER",
      text:
        "Vi samarbejder ofte med de andre kunstneriske grundkurser under Talent Holbæk. Vi har bl.a. arbejdet med videokunst med BGK, lyddesign med Ung Musik og skuespil med Holbæk Drama College.",
    },
    {
      src: "/om/aktiviteter.webp",
      alt: "fælles aktiviteter hos blank",
      title: "FÆLLES AKTIVITETER",
      text:
        "Filmskolen afholder fællesskabsaktiviteter, hvor elever på tværs af de forskellige årgange (inklusiv dimmitender) er samlet. Heriblandt julefrokoster, biografture, pizzaaftener, mm.",
    },
     {
      src: "/om/studietur.webp",
      alt: "fælles aktiviteter hos blank",
      title: "studietur",
      text:
        "Blank afholder forskellige studieturer efter elevernes ønsker til forskellige filmfestivaller. I 2023 var vi bl.a. til Berlinalen i Berlin. Studieturen er faciliteret af Blank er dermed helt graits.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = cards.length - 1;

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const slideTo = (index) => {
    if (index < 0 || index > maxIndex) return;

    setCurrentIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const slidePrev = () => slideTo(currentIndex - 1);
  const slideNext = () => slideTo(currentIndex + 1);

  return (
    <div>
      <h2 className="heading2-secondary pl-5 md:pl-25y">tilbud</h2>

      <ul
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-10 scroll-smooth"
      >
        {cards.map((card, i) => (
          <li
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex-shrink-0 w-[300px] md:w-[500px] snap-start"
          > 
            <Image
              src={card.src}
              height={500}
              width={500}
              alt={card.alt}
              className="w-[500px] h-[500px] object-cover"
            />
            <ScrollUp className="p-5 relative bottom-5">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            </ScrollUp>
          </li>
        ))}
      </ul>

      <div className="flex gap-10 justify-center relative bottom-20 md:bottom-15">
        <button
          aria-label="gå tilbage"
          onClick={slidePrev}
          disabled={currentIndex === 0}
          className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300 disabled:opacity-50"
        >
          <CgArrowLongLeft size={40} className="md:size-[60px]" />
        </button>

        <button
          aria-label="gå frem"
          onClick={slideNext}
          disabled={currentIndex === maxIndex}
          className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300 disabled:opacity-50"
        >
          <CgArrowLongRight size={40} className="md:size-[60px]" />
        </button>
      </div>
    </div>
  );
};

export default TilbudSection;
