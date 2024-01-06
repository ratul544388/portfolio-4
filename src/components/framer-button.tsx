"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FramerButtonProps {
  className?: string;
  type?: "button" | "link";
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "default" | "outline" | "ghost" | "secondary";
  tab?: boolean;
}

export const FramerButton = ({
  className,
  onClick,
  label,
  type = "button",
  variant = "primary",
  href = "/",
}: FramerButtonProps) => {
  const MotionButton = motion(Button);
  const MotionLink = motion(Link);
  return (
    <>
      {type === "button" ? (
        <MotionButton
          variant={variant}
          onClick={onClick}
          whileTap={{
            scale: 1.05,
          }}
          className={cn(className)}
        >
          {label}
        </MotionButton>
      ) : (
        <MotionLink
          whileTap={{
            scale: 1.05,
          }}
          href={href}
          className={cn(
            buttonVariants({
              variant,
            }),
            className
          )}
        >
          {label}
        </MotionLink>
      )}
    </>
  );
};
