"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const EleverVideo = ({generation}) => {
    const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return ( 
        <div ref={scrollYProgress} className="relative w-full h-[300] overflow-hidden flex flex-col">
            <motion.div
            style={{ y }}
            className="absolute inset-0 z-[-1] will-change-transform"
        >
              <video
      src={`/elever/${generation.video}`}
      alt={`video af forside på ${generation.generation}`}
      playsInline
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    >
    </video>
    </motion.div>

            <section className="w-fit px-(--content-width)">
            <h1>{generation.generation}</h1>
            <div className="flex justify-between">
            <h3 className="red">{`(${generation.start})`}</h3>
            <h3 className="red">{`(${generation.slut})`}</h3>
            </div>
            </section>
        </div>
     );
}
 
export default EleverVideo;