import React from "react";
import { cn } from "@/lib/utils";

const Card = ({ className, children }) => {
  return (
    <div className={cn("p-4 border rounded-md shadow-md bg-white", className)}>
      {children}
    </div>
  );
};

export { Card };
