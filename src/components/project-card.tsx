"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  createdAt: string;
  technologies: string[];
}

export const ProjectCard = ({
  name,
  description,
  image,
  createdAt,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="flex border shadow-lg flex-col bg-red-500/10 dark:bg-neutral-900 rounded-xl">
      <div className="p-6 pb-0">
        <div className="relative w-full aspect-video">
          <Image src={image} alt={name} fill className="rounded-lg" />
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
      </div>
    </div>
  );
};
