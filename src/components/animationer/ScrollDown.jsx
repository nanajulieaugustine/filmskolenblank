"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollDwon = ({ children, speed = -100 }) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [1, 0], [0, speed]);

  return (
            <motion.div style={{ y }}>
            {children}
            </motion.div>
  );
};

export default ScrollDwon;
