"use client";

import { motion, stagger, Variants } from "framer-motion";
import Text from "@/components/ui/Text";
import React from "react";

const containerVariants: Variants = {
  animate: {
    transition: {
      delayChildren: stagger(0.005),
    },
  },
  exit: {
    transition: {
      delayChildren: stagger(0.003),
    },
  },
};

const letterVariants: Variants = {
  initial: { y: "100%" },
  animate: {
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 32,
      mass: 0.4,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

interface SlotTextProps {
  text: string;
  variant?: React.ComponentProps<typeof Text>["variant"];
  color?: React.ComponentProps<typeof Text>["color"];
  className?: string;
}

export default function SlotText({
  text,
  variant,
  color,
  className,
}: SlotTextProps) {
  const letters = text.split("");

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="inline-flex overflow-hidden"
    >
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          className="inline-block"
        >
          <Text variant={variant} color={color} className={className}>
            {char === " " ? "\u00A0" : char}
          </Text>
        </motion.span>
      ))}
    </motion.div>
  );
}
