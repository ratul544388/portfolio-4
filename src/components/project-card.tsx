"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  createdAt: string;
  technologies: string[];
  githubLink: string;
  deployedLink: string;
}

export const ProjectCard = ({
  name,
  description,
  image,
  createdAt,
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
      className="flex border shadow-lg flex-col bg-red-500/10 dark:bg-neutral-900 rounded-xl overflow-hidden"
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
            <Link
              href={githubLink}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
                "min-w-[40px]"
              )}
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href={deployedLink}
              target="blank"
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
                "min-w-[40px]"
              )}
            >
              <TbWorld className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="bg-background flex flex-col gap-2 p-6 pb-8 pt-7 rounded-t-xl">
        <div className="flex flex-col items-center sm:flex-row md:flex-col xl:flex-row gap-y-1 gap-x-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground text-xs text-theme">
            {createdAt}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          recusandae voluptatibus ab. Commodi quis fugiat ea dolore vitae quam
          officia ad ex laudantium iste? Fuga velit doloribus deleniti deserunt
          fugiat.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          {technologies.map((item) => (
            <Badge key={item} variant="secondary" className="">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-3 xs:hidden">
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
