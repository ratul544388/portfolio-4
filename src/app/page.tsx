import { About } from "@/components/about";
import { Intro } from "@/components/intro";
import { LatestProjects } from "@/components/latest-projects";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MyServices } from "@/components/my-services";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <MaxWidthWrapper className="pt-12 w-full space-y-20">
      <Intro />
      <About />
      <MyServices />
      <LatestProjects />
      <Reviews />
    </MaxWidthWrapper>
  );
}
