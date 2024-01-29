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
  slug: string;
  description: string;
  features: string[];
  images: string[];
  technologies: string[];
  githubLink: string;
  deployedLink: string;
}

export const ProjectCard = ({
  name,
  slug,
  description,
  features,
  images,
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
          <Image src={images[0]} alt={name} fill className="rounded-lg" />
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0 },
              hover: { opacity: 1, scale: 1 },
            }}
            initial="initial"
            animate={animation}
            className="hidden sm:flex gap-3 absolute "
          >
            <AnimatedButton href={githubLink} icon={FaGithub} />
            <AnimatedButton href={deployedLink} icon={TbWorld} />
          </motion.div>
        </div>
      </div>
      <div className="bg-background flex flex-col h-full gap-2 p-6 pb-8 pt-7 rounded-t-xl">
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <div className="relative text-sm text-muted-foreground line-clamp-3">
          {description}
          <Link
            href={`projects/${slug}`}
            className="absolute right-0 left-1/2 bg-background underline font-semibold text-theme transition-colors cursor-pointer h-5 bottom-0 pl-2"
          >
            More details...
          </Link>
        </div>
        <TechBadges technologies={technologies} />
        <div className="flex gap-4 justify-center mt-3 xs:hidden">
          <Link
            href={deployedLink}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "min-w-[40px]"
            )}
          >
            <TbWorld className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "min-w-[40px]"
            )}
          >
            <FaGithub className="h-4 w-4 mr-2" />
            Git Repo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedButton = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: IconType;
}) => {
  const MotionLink = motion(Link);
  const animation = useAnimation();

  return (
    <MotionLink
      href={href}
      target="_blank"
      className={cn(
        buttonVariants({ variant: "secondary", size: "icon" }),
        "min-w-[40px] relative overflow-hidden hover:text-slate-200"
      )}
      initial="initial"
      whileHover="animate"
    >
      <Icon className="h-6 w-6 z-10" />
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
