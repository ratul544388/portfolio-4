"use client";

import { icons } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, Download, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Button, buttonVariants } from "./ui/button";

// const variants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   },
// };

const iconVariants = {
  down: {
    y: 4,
  },
  up: {
    y: -4,
    x: 4,
  },
};

export const Intro = () => {
  const DownloadIcon = motion(Download);
  const MouseIcon = motion(MousePointer2);
  const MotionButton = motion(Button);
  const MotionLink = motion(Link);
  return (
    <section className="grid items-center md:grid-cols-2 gap-5 max-w-[500px] md:max-w-[900px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "tween" }}
        className="flex flex-col items-center sm:items-start gap-2"
      >
        <p className="text-theme text-sm font-medium tracking-widest">
          WEB DEVELOPER
        </p>
        <h1 className="font-bold text-4xl text-center sm:text-start leading-[3rem]">
          Hello, my name is
          <br />
          Ratul Hossain
        </h1>
        <p className="text-center sm:text-start">
          I&apos;m a{" "}
          <span className="font-bold">Full Stack Web Developer </span>
          with <span className="font-bold">2 years </span> of expertise in{" "}
          <Link
            href="https://react.dev"
            target="_blank"
            className="font-bold underline"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="font-bold underline"
          >
            Next.js,
          </Link>{" "}
          dadicated to building outstanding digital solutions.
        </p>
        <nav className="flex gap-3 mt-3">
          <MotionButton
            className="relative rounded-full"
            whileTap={{ scale: 1.05 }}
            whileHover="up"
          >
            Contact me
            <MouseIcon
              initial={{
                rotate: 90,
              }}
              className="ml-2 h-4 w-4"
              variants={iconVariants}
            />
          </MotionButton>
          <MotionButton
            className="relative rounded-full"
            whileTap={{ scale: 1.05 }}
            whileHover="down"
            variant="default"
          >
            Download CV
            <DownloadIcon className="ml-2 h-4 w-4" variants={iconVariants} />
          </MotionButton>
        </nav>
        <nav className="flex mt-1">
          {icons.map((icon, i) => (
            <MotionLink
              target="_blank"
              whileTap={{
                scale: 1.05,
              }}
              key={i}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                }),
                "rounded-full"
              )}
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="relative p-10"
      >
        <div className="relative w-full aspect-square">
          <Image
            src="/images/hero/shape-1.svg"
            alt="image"
            fill
            className="object-cover"
          />
          <Image
            src="/images/hero/shape-2-light.svg"
            alt="image"
            fill
            className="object-cover"
          />
          <Image
            src="/images/hero/developer.png"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <HeroCard
          icon={FaBriefcase}
          highlight={2}
          title="Years of Experience"
          className="top-1/2 -translate-y-1/2 left-0"
          animate={{
            x: [0, 10, 10, 0, 0],
            y: [0, 0, -10, -10, 0],
          }}
        />
        <HeroCard
          icon={FaProjectDiagram}
          highlight={6}
          title="Completed Projects"
          className="bottom-24 right-0"
          animate={{
            x: [10, 10, 0, 0, 10],
            y: [0, -10, -10, 0, 0],
          }}
        />
        <HeroCard
          icon={HiUserGroup}
          highlight={10}
          title="Satisfied Clients"
          className="top-16 right-0"
          animate={{
            x: [10, 10, 0, 0, 10],
            y: [-10, 0, 0, -10, -10],
          }}
        />
      </motion.div>
      <ChevronDown className="md:col-span-2 mt-10 h-5 w-5 mx-auto animate-bounce text-theme" />
    </section>
  );
};

export const HeroCard = ({
  icon: Icon,
  highlight,
  title,
  className,
  animate,
}: {
  icon: IconType;
  highlight: number;
  title: string;
  className?: string;
  animate?: {
    x: number[];
    y: number[];
  };
}) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayNumber((prev) => {
        const nextNumber = prev + 1;
        return nextNumber > highlight ? highlight : nextNumber;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [highlight]);

  return (
    <motion.div
      animate={animate}
      transition={{
        delay: 2,
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      className={cn(
        "absolute flex items-center gap-3 p-2 bg-background rounded-md shadow-md border",
        className
      )}
    >
      <Icon className="min-h-6 min-w-6 text-theme" />
      <div className="flex items-center gap-1.5">
        <h2 className="text-xl font-extrabold text-theme">{displayNumber}+</h2>
        <p className="text-xs font-semibold leading-4 max-w-[70px]">{title}</p>
      </div>
    </motion.div>
  );
};
