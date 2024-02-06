"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { buttonVariants } from "../ui/button";
import { TechBadges } from "./tech-badges";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  deployedLink: string;
}

export const ProjectCard = ({
  name,
  description,
  image,
  technologies,
  githubLink,
  deployedLink,
}: ProjectCardProps) => {
  const animation = useAnimation();

  const handleMouseEnter = () => {
    animation.start("hover");
  };

  const handleMouseLeave = () => {
    animation.start("initial");
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "tween" }}
      className="flex border shadow-lg flex-col h-full bg-red-500/10 dark:bg-accent/50 rounded-xl overflow-hidden"
    >
      <div className="p-6 pb-0">
        <div className="relative w-full aspect-video flex items-center justify-center">
          <Image src={image} alt={name} fill className="rounded-lg" />
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0 },
              hover: { opacity: 1, scale: 1 },
            }}
            initial="initial"
            animate={animation}
            className="hidden sm:flex gap-3 absolute "
          >
            <AnimatedButton
              href={githubLink}
              icon={FaGithub}
              variant="secondary"
              size="icon"
            />
            <AnimatedButton
              href={deployedLink}
              icon={TbWorld}
              variant="secondary"
              size="icon"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-background flex flex-col h-full gap-2 p-6 pb-8 pt-7 rounded-t-xl">
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <p className="relative text-sm text-muted-foreground line-clamp-4">
          {description}
        </p>
        <TechBadges technologies={technologies} />
        <span className="mt-auto"/>
        <div className="flex gap-6 justify-center mt-3">
          <AnimatedButton
            label="Live Demo"
            href={deployedLink}
            icon={TbWorld}
            variant="secondary"
            className="w-full"
          />
          <AnimatedButton
            label="Git Repo"
            href={githubLink}
            icon={FaGithub}
            variant="secondary"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedButton = ({
  href,
  icon: Icon,
  size = "default",
  variant = "default",
  label,
  className,
}: {
  href: string;
  icon: IconType;
  variant?: "default" | "secondary";
  size?: "default" | "icon";
  label?: string;
  className?: string;
}) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={href}
      target="_blank"
      className={cn(
        buttonVariants({ variant, size }),
        "relative overflow-hidden gap-3 hover:text-slate-200",
        className
      )}
      initial="initial"
      whileHover="animate"
    >
      <Icon className="h-6 w-6 z-10" />
      {label && <span className="z-20">{label}</span>}
      <motion.span
        variants={{
          initial: { y: "100%", x: "50%" },
          animate: { y: 0, x: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute pointer-events-none inset-0 bg-theme rounded-full"
      />
    </MotionLink>
  );
};
