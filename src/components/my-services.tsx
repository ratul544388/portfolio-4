"use client";

import { BookText, LayoutDashboard, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FiServer } from "react-icons/fi";
import { SectionHeading } from "./section-heading";

export const MyServicees = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <SectionHeading heading="My Services" />
      <div className="grid max-w-[450px] sm:max-w-max sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-10">
        <ServiceCard
          label="Web Design"
          icon={BookText}
          description="Craft visually appealing and user-centric digital interfaces for optimal user experiences and engagement"
        />
        <ServiceCard
          label="Web Development"
          icon={LayoutDashboard}
          description="Code robust, functional websites with dynamic features, ensuring seamless user interaction and efficient performance"
        />
        <ServiceCard
          label="Backend API Development"
          icon={FiServer}
          description="Architect and implement server-side solutions, crafting efficient APIs to power dynamic and scalable web applications."
        />
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon: Icon,
  label,
  description,
}: {
  icon: LucideIcon | IconType;
  label: string;
  description: string;
}) => {
  return (
    <div className="relative flex flex-col gap-2 items-center px-4 py-12 bg-background shadow border rounded-lg">
      <div className="absolute top-0 -translate-y-1/2 bg-background px-3 left-1/2 -translate-x-1/2">
        <Icon className="h-10 w-10 text-theme" />
      </div>
      <h3 className="text-xl font-bold text-center">{label}</h3>
      <p className="text-muted-foreground text-sm text-center">{description}</p>
    </div>
  );
};
