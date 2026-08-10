import React from "react";
import { cn } from "@/lib/utils";
import Text from "./Text";

export interface BaseButtonProps {
  title?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonProps<T extends React.ElementType = "button"> =
  BaseButtonProps &
    Omit<React.ComponentPropsWithoutRef<T>, keyof BaseButtonProps> & {
      as?: T;
    };

export default function Button<T extends React.ElementType = "button">({
  as,
  title,
  rightSlot,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-between h-13 w-full px-4 md:h-17 md:px-5 cursor-pointer border border-fg-50 bg-bg hover:border-fg transition-colors disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      <Text variant="buttons">{title || children}</Text>
      {rightSlot && (
        <Text variant="system" color="muted">
          {rightSlot}
        </Text>
      )}
    </Component>
  );
}
