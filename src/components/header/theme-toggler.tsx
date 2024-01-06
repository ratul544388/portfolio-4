"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeTogglerProps {
  className?: string;
}

export function ThemeToggler({ className }: ThemeTogglerProps) {
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      onClick={onChange}
      variant="outline"
      className="h-7 w-7"
      size="icon"
    >
      <Sun className="h-4 w-4 hidden dark:block" />
      <MoonStar className="h-4 w-4 dark:hidden" />
    </Button>
  );
}
