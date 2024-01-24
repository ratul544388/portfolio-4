"use client";

import { myEmail } from "@/lib/constant";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Separator } from "./ui/separator";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Fragment, useState } from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -10,
    y: 10,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const About = () => {
  const params = useSearchParams();
  const personalInfoList = [
    {
      emoji: "👨‍🎓",
      label: "Ratul Hossain",
    },
    {
      emoji: "📧",
      label: myEmail,
    },
    {
      emoji: "🎓",
      label: "B.sc in CSE",
    },
    {
      emoji: "📞",
      label: "+8801815555105",
    },
    {
      emoji: "📅",
      label: "Born on 16 Feb 2000",
    },
    {
      emoji: "🏠",
      label: "Keranigonj Dhaka, Bangladesh",
    },
  ];

  const skills = [
    { label: "HTML, CSS, Tailwind CSS", emoji: "🌐" },
    { label: "Javascript, TypeScript", emoji: "🚀" },
    { label: "React, Next.js", emoji: "⚛️" },
    { label: "Framer Motion, ShadcnUI, NextUI, ChakraUI", emoji: "🎨" },
    { label: "MongoDB, MySQL, PostgreSQL, Prisma", emoji: "📊" },
    { label: "Cloudinary, Uploadthing", emoji: "🖼️" },
    { label: "NextAuth, Clerk Auth", emoji: "🔐" },
    { label: "Tanstack Query, Stripe", emoji: "🔍" },
  ];
  const tabs = [
    {
      label: "Personal Info",
      title:
        "Exploring the Digital Frontier: A Glimpse into My Professional Journey",
      description:
        "Full-stack web developer passionate about crafting elegant solutions. Skilled in diverse technologies, fostering collaboration, and committed to continuous learning",
      content: (
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
          }}
          className="flex flex-col gap-4"
        >
          <section className="grid gap-3 xs:grid-cols-2">
            {personalInfoList.map((info) => (
              <motion.div key={info.label} className="flex gap-3 items-center">
                <p>{info.emoji}</p>
                <p className="text-muted-foreground">{info.label}</p>
              </motion.div>
            ))}
          </section>
        </motion.div>
      ),
    },
    {
      label: "Skills",
      title: "Core Skill Set",
      description:
        "Passionate full-stack developer excelling in React and Next.js. Committed to delivering seamless, responsive web experiences through innovative solutions and continuous learning.",
      content: (
        <div className="flex flex-col gap-4">
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2"
          >
            <h5 className="text-lg font-medium">Skills</h5>
            <Separator />
            {skills.map((skill) => (
              <motion.div
                variants={item}
                key={skill.label}
                className="font-medium flex items-center gap-3"
              >
                <p>{skill.emoji}</p>
                <p className="text-muted-foreground">{skill.label}</p>
              </motion.div>
            ))}
          </motion.section>
        </div>
      ),
    },
  ] as const;

  const [active, setActive] =
    useState<(typeof tabs)[number]["label"]>("Personal Info");

  return (
    <div className="flex flex-col items-center gap-6 max-w-[900px] mx-auto">
      <SectionHeading heading="About" />
      <div className="flex">
        {tabs.map(({ label }) => (
          <Button
            variant="ghost"
            onClick={() => setActive(label)}
            key={label}
            className={cn(
              "rounded-full relative text-black",
              active === label &&
                "text-white hover:bg-transparent hover:text-white"
            )}
          >
            {label}
            {active === label && (
              <motion.span
                layoutId="activeTab"
                className="inset-0 absolute bg-theme rounded-full -z-10"
              />
            )}
          </Button>
        ))}
      </div>
      {tabs.map(({ label, title, description, content }) => (
        <Fragment key={label}>
          {active === label && (
            <div className="flex overflow-hidden flex-col gap-4">
              <motion.h3
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "tween",
                }}
                className="text-2xl text-center font-bold"
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "tween",
                }}
                className="text-muted-foreground text-center mb-3"
              >
                {description}
              </motion.p>
              {content}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
