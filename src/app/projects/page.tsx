import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/constant";
import React from "react";

const ProjectsPage = () => {
  return (
    <MaxWidthWrapper className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-5">
      {projects.map((project) => (
        <ProjectCard {...project} key={project.name} />
      ))}
    </MaxWidthWrapper>
  );
};

export default ProjectsPage;
