import React from "react";
import { cn } from "@/lib/utils";

const variantsMap = {
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  h4: "typography-h4",
  buttons: "typography-buttons",
  system: "typography-system",
  "list-nums": "typography-list-nums",
  "list-link": "typography-list-link",
  "cards-description": "typography-cards-description",
  tag: "typography-tag",
} as const;

const colorMap = {
  default: "text-fg",
  muted: "text-fg-70",
  subtle: "text-fg-50",
} as const;

const defaultTagsMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  buttons: "span",
  system: "p",
  "list-nums": "span",
  "list-link": "span",
  "cards-description": "p",
  tag: "span",
} as const;

export type TextVariant = keyof typeof variantsMap;
export type TextColor = keyof typeof colorMap;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  color?: TextColor;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  variant = "system",
  color = "default",
  as,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as || defaultTagsMap[variant] || "p";

  return (
    <Component
      className={cn(variantsMap[variant], colorMap[color], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
