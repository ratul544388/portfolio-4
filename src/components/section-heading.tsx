"use client";

import Image from "next/image";

interface SectionHeadingProps {
  heading: string;
}

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <div className="flex items-center gap-3">
      <Image src="/images/dots.svg" alt="dots" height={20} width={20} />
      <h2 className="text-3xl font-bold">{heading}</h2>
    </div>
  );
};
