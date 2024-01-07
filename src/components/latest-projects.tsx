"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/lib/constant";
import { ProjectCard } from "./project-card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const LatestProjects = () => {
  const MotionLink = motion(Link);
  return (
    <section className="grid grid-cols-9 items-center gap-8">
      <div className="flex flex-col gap-3 col-span-9 lg:col-span-3 items-center lg:items-start">
        <SectionHeading heading="Latest Projects" />
        <p className="text-sm text-muted-foreground">
          Explore my recent web creations and innovations.
        </p>
        <MotionLink whileTap={{ scale: 1.05 }} href="/projects">
          All Projects
        </MotionLink>
      </div>
      <div className="col-span-9 lg:col-span-6">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <div className="flex items-center gap-2" key={index}>
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
              <Button className="absolute z-50">Next</Button>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
