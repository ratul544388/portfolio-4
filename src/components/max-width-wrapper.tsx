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
        "max-w-screen-xl w-full mx-auto px-3 xs:px-5 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
