"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollUp = ({ children, speed = -100,  className = "" }) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
        <motion.div style={{ y }} className={`${className}`}>
        {children}
        </motion.div>
  );
};

export default ScrollUp;
