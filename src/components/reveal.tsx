"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  contentHeight?: number;
}

export const Reveal = ({ children, contentHeight = 30 }: RevealProps) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: contentHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        variants={{ initial: { left: 0 }, animate: { left: "100%" } }}
        className="absolute inset-y-0 right-0 bg-theme"
      />
    </div>
  );
};
