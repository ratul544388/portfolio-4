"use client";

import { icons } from "@/lib/constant";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const MotionLink = motion(Link);
  return (
    <div className="bg-gray-900 flex flex-col items-center gap-2 py-8 px-5">
      <nav className="flex mt-1">
        {icons.map((icon, i) => (
          <MotionLink
            target="_blank"
            whileTap={{
              scale: 1.05,
            }}
            key={i}
            className="p-2 text-theme"
            href={icon.href}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
          >
            <icon.name className="h-5 w-5" />
          </MotionLink>
        ))}
      </nav>
      <p className="text-sm text-slate-400 text-center">
        All rights reserved © Ratul Hossain 2024. Designed and developed with
        passion for showcasing creativity and skills.
      </p>
    </div>
  );
};
