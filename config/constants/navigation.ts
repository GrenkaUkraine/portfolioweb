export const SECTIONS_CONFIG: Record<
  string,
  { index: string; title: string; note?: string }
> = {
  work: { index: "01", title: "Work", note: "3 Featured Projects" },
  playground: { index: "02", title: "Playground" },
  stack: { index: "03", title: "Stack", note: "" },
  contact: { index: "04", title: "Contact", note: "" },
};

export const SECTION_IDS = ["hero", "work", "playground", "stack", "contact"];

export const SOCIAL_LINKS = [
  {
    title: "Codebase",
    rightSlot: "[GitHub]",
    href: "https://github.com/GrenkaUkraine",
  },
  {
    title: "3D Models",
    rightSlot: "[ArtStation]",
    href: "https://artstation.com/grenkaukraine",
  },
  // {
  //   title: "Designs",
  //   rightSlot: "[Behance]",
  //   href: "https://behance.net",
  // },
] as const;

export const NAV_LINKS = [
  { id: "1", label: "Work", href: "#work" },
  { id: "2", label: "Playground", href: "#playground" },
  { id: "3", label: "Stack", href: "#stack" },
  { id: "4", label: "Contact", href: "#contact" },
] as const;
