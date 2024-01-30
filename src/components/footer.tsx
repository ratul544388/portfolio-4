"use client";

import { icons } from "@/lib/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Footer = () => {
  const MotionLink = motion(Link);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted) {
    return null;
  }
  return (
    <footer className="mt-20">
      {pathname !== "/contact" && (
        <div className="flex flex-col items-center gap-3 mt-8 bg-rose-500/10 py-8">
          <h3 className="text-2xl font-bold text-center max-w-[430px]">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h3>
          <MotionLink href="/contact" className={buttonVariants()}>
            Contact me
          </MotionLink>
        </div>
      )}
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
    </footer>
  );
};
