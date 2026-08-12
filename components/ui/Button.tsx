import React from "react";
import { cn } from "@/lib/utils";
import Text from "./Text";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "group inline-flex items-center justify-between h-13 w-full px-4 md:h-17 md:px-5 cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none border",
  {
    variants: {
      variant: {
        default: "border-fg-50 bg-bg hover:border-fg",
        primary: "border-fg bg-fg hover:bg-bg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const titleVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "text-fg",
      primary: "text-bg group-hover:text-fg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const rightSlotVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "text-fg-50 group-hover:text-fg",
      primary: "text-bg group-hover:text-fg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
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
  variant,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      <Text variant="buttons" className={titleVariants({ variant })}>
        {title || children}
      </Text>
      {rightSlot && (
        <Text variant="system" className={rightSlotVariants({ variant })}>
          {rightSlot}
        </Text>
      )}
    </Component>
  );
}
