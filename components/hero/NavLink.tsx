"use client";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 3 },
};

const labelVariants = {
  initial: { x: 0 },
  hover: { x: 8 },
};

interface NavLinkProps {
  id: string;
  href: string;
  label: string;
  className?: string;
}

export default function NavLink({ id, href, label, className }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={cn("w-full inline-flex gap-3 items-center group", className)}
    >
      <motion.div
        variants={arrowVariants}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Text variant="list-nums" color="subtle">
          {id} &gt;
        </Text>
      </motion.div>

      <motion.div
        variants={labelVariants}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        <Text
          variant="list-link"
          className="group-hover:text-fg transition-colors"
        >
          {label}
        </Text>
      </motion.div>
    </motion.a>
  );
}
