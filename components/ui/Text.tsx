import React from "react";
import { cn } from "@/lib/utils";

const variantsMap = {
  h1: "text-style-h1",
  h2: "text-style-h2",
  h3: "text-style-h3",
  h4: "text-style-h4",
  buttons: "text-style-buttons",
  system: "text-style-system",
  "list-nums": "text-style-list-nums",
  "list-link": "text-style-list-link",
  "cards-description": "text-style-cards-description",
  tag: "text-style-tag",
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
  "list-link": "a",
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
