import React from "react";
import { cn } from "@/lib/utils";
import Text from "./Text";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "title"
> {
  title?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

export default function Button({
  title,
  rightSlot,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-between h-13 w-full px-4 md:h-17 md:px-5",
        className
      )}
      {...props}
    >
      <Text variant="buttons">{title}</Text>

      {rightSlot && <Text variant="system">{rightSlot}</Text>}
    </button>
  );
}
