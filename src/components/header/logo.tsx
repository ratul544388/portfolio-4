"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { FaRProject } from "react-icons/fa";

interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({
          variant: "primary",
          size: "icon",
        }),
        "rounded-[14px] font-semibold text-lg"
      )}
      style={{ borderBottomLeftRadius: "6px" }}
    >
      <FaRProject className="h-6 w-6" />
    </Link>
  );
};
