"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollToViewProps {
  children: ReactNode;
}

export const ScrollToView = ({ children }: ScrollToViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
};
