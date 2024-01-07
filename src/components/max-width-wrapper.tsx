import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl w-full mx-auto px-4 xs:px-8 sm:px-10 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
