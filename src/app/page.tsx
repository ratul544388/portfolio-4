import { About } from "@/components/about";
import { FramerButton } from "@/components/framer-button";
import { Intro } from "@/components/intro";
import { LatestProjects } from "@/components/latest-projects";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MyServicees } from "@/components/my-services";
import { Reviews } from "@/components/reviews";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="pt-12 w-full space-y-20">
        <div className="space-y-6">
          <Intro />
          <ChevronDown className="h-5 w-5 mx-auto animate-bounce text-theme" />
        </div>
        <About />
        <MyServicees />
        <LatestProjects />
        <Reviews />
      </MaxWidthWrapper>
      <div className="flex flex-col items-center gap-3 mt-8 bg-rose-500/10 py-8">
        <h3 className="text-2xl font-bold text-center max-w-[430px]">
          Prepared to turn your ideas into reality? I&apos;m here to help
        </h3>
        <FramerButton label="Contact me" type="link" href="/contact" />
      </div>
    </div>
  );
}
