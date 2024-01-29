"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Badge } from "../ui/badge";

interface TechBadgesProps {
  technologies: string[];
}

export const TechBadges = ({ technologies }: TechBadgesProps) => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView, control]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
      }}
      initial="hidden"
      animate={control}
      className="flex gap-3 mt-3 flex-wrap justify-center"
    >
      {technologies.map((item) => (
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          key={item}
        >
          <Badge variant="secondary">{item}</Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};
