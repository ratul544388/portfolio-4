"use client";

import { Logo } from "./logo";
import MaxWidthWrapper from "../max-width-wrapper";
import { ThemeToggler } from "./theme-toggler";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";

export const Header = () => {
  const { scrollPercentage } = useScroll();

  return (
    <header
      className={cn(
        "sticky inset-x-0 z-50 top-0 backdrop-blur-xl border border-transparent"
      )}
    >
      <MaxWidthWrapper className="py-3 flex items-center justify-between">
        <span
          className="h-0.5 bg-theme absolute left-0 bottom-0"
          style={{ width: `${scrollPercentage}%` }}
        />
        <Logo />
        <div className="flex gap-4 items-center">
          <NavLinks />
          <ThemeToggler />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
