import React from "react";
import { cn } from "@/lib/utils";

const Badge = ({ className, children }) => {
  return (
    <span
      className={cn(
        "px-2 py-1 text-sm font-semibold rounded-md bg-gray-200 text-gray-800",
        className
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
