import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-theme" />
    </div>
  );
};
