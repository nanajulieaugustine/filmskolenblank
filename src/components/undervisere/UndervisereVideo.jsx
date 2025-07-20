"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const UndervisereVideo = () => {
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
      src={`/undervisere/undervisere.mp4`}
      alt={"samling af videoer fra undervisere"}
      playsInline
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    >
    </video>
    </motion.div>
        </div>
     );
}
 
export default UndervisereVideo;