import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-all",
        "bg-blue-600 text-white hover:bg-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
