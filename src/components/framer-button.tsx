"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface FramerButtonProps {
  label: string;
  size?: "icon";
  variant?: "default" | "secondary" | "outline" | "primary";
  motionType?: "",
}

export const FramerButton = ({
  label,
  size,
  variant = "outline",
}: FramerButtonProps) => {
  const MotionButton = motion(Button);
  return (
    <MotionButton variant={variant} size={size}>
      {label}
    </MotionButton>
  );
};
