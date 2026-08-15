"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Text from "./Text";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const buttonVariants = cva(
  "group flex items-center justify-between h-13 w-full px-4 md:h-17 md:px-5 cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none border",
  {
    variants: {
      variant: {
        default: "border-fg-50 bg-bg hover:border-fg",
        primary: "border-fg bg-fg",
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
      primary: "text-bg",
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
      primary: "text-bg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const textPrimaryVariants = {
  initial: { y: "0%", opacity: 1 },
  hover: { y: "-100%", opacity: 0 },
};

const textHoverVariants = {
  initial: { y: "100%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
};

const slotMotionVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

export interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  title?: React.ReactNode;
  hoverTitle?: React.ReactNode;
  rightSlot?: React.ReactNode;
  shiftSlot?: boolean;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export type ButtonProps<T extends React.ElementType = "button"> =
  BaseButtonProps &
    Omit<React.ComponentPropsWithoutRef<T>, keyof BaseButtonProps> & {
      as?: T;
    };

export default function Button<T extends React.ElementType = "button">({
  as,
  title,
  hoverTitle,
  rightSlot,
  shiftSlot = false,
  variant,
  className,
  children,
  href,
  target,
  rel,
  ...props
}: ButtonProps<T>) {
  const mainText = title || children;

  let MotionComponent: React.ElementType = motion.button;

  if (href) {
    MotionComponent = MotionLink;
  } else if (typeof as === "string" && as in motion) {
    MotionComponent = motion[as as keyof typeof motion] as React.ElementType;
  } else if (as && typeof as === "string") {
    MotionComponent = as;
  }

  const computedRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

  return (
    <MotionComponent
      href={href}
      target={target}
      rel={computedRel}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      <div className="relative overflow-hidden">
        {hoverTitle ? (
          <>
            <motion.div
              variants={textPrimaryVariants}
              transition={{ duration: 0.25 }}
            >
              <Text variant="buttons" className={titleVariants({ variant })}>
                {mainText}
              </Text>
            </motion.div>

            <motion.div
              variants={textHoverVariants}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center"
            >
              <Text variant="buttons" className={titleVariants({ variant })}>
                {hoverTitle}
              </Text>
            </motion.div>
          </>
        ) : (
          <Text variant="buttons" className={titleVariants({ variant })}>
            {mainText}
          </Text>
        )}
      </div>

      {rightSlot && (
        <motion.div
          variants={shiftSlot ? slotMotionVariants : undefined}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Text variant="system" className={rightSlotVariants({ variant })}>
            {rightSlot}
          </Text>
        </motion.div>
      )}
    </MotionComponent>
  );
}
