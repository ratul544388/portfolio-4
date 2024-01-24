"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Page = ({ params }: { params: { project_name: string } }) => {
  const project = projects.find((item) => item.slug === params.project_name);
  if (!project) {
    notFound();
  }
  return (
    <MaxWidthWrapper className="">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {project.images.map((image, index) => (
          <div className="flex items-center gap-2" key={index}>
            <SwiperSlide className="py-10 bg-background rounded-xl">
              <div className="w-full relative aspect-video border rounded-lg">
                <Image
                  src={image}
                  alt={project.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="mt-5 space-y-3">
        <h3 className="text-3xl font-bold text-center text-theme">
          {project.name}
        </h3>
        <p className="text-sm text-center font-semibold text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum itaque
          delectus pariatur debitis odit molestiae, minima repellendus
          temporibus tempora animi quod adipisci voluptatibus blanditiis, hic
          alias voluptas vero ipsa dicta.
        </p>
        <Separator />
        <section className="grid lg:grid-cols-2 gap-12 font-semibold space-y-1">
          <div className="space-y-1">
            {project.features.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <div className="flex justify-center gap-6 items-center">
            <AnimatedButton
              href={project.githubLink}
              icon={FaGithub}
              label="Git Repo"
            />
            <AnimatedButton
              href={project.deployedLink}
              icon={TbWorld}
              label="Live Demo"
            />
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

const AnimatedButton = ({
  label,
  icon: Icon,
  href,
}: {
  label: string;
  icon: IconType;
  href: string;
}) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={href}
      className="relative py-3 w-[120px] overflow-hidden hover:text-white transition-colors duration-300 flex flex-col items-center gap-3 rounded-xl border bg-secondary"
      role="button"
      initial="initial"
      whileHover="animate"
      target="_blank"
    >
      <Icon className="h-6 w-6 z-10" />
      <span className="z-10">{label}</span>
      <motion.span
        className="absolute inset-0 bg-theme"
        variants={{
          initial: { y: "100%", x: "50%", borderRadius: "50%" },
          animate: { y: 0, x: 0, borderRadius: 0 },
        }}
        transition={{ duration: 0.3 }}
      />
    </MotionLink>
  );
};

export default Page;
