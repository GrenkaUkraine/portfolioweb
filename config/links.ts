export const SOCIAL_LINKS = [
  {
    title: "Codebase",
    rightSlot: "[GitHub]",
    href: "https://github.com/GrenkaUkraine",
  },
  {
    title: "3D Models",
    rightSlot: "[ArtStation]",
    href: "https://artstation.com",
  },
  {
    title: "Designs",
    rightSlot: "[Behance]",
    href: "https://behance.net",
  },
] as const;

export const NAV_LINKS = [
  { id: "1", label: "Work", href: "#work" },
  { id: "2", label: "Playground", href: "#playground" },
  { id: "3", label: "Stack", href: "#stack" },
  { id: "4", label: "Contact", href: "#contact" },
] as const;

export const FEATURED_PROJECTS = [
  {
    id: "prph",
    title: "PRPH",
    description: "Ukrainian underground media website.",
    note: "Work\nIn\nProgress",
    stack: ["Next.JS", "Typescript", "Tailwind"],
    links: [
      {
        title: "[Live Demo]",
        href: "https://github.com/GrenkaUkraine",
      },
      {
        title: "[GitHub repo]",
        href: "https://github.com/GrenkaUkraine",
      },
    ],
  },
  {
    id: "touchdown",
    title: "Touchdown",
    description: "Interactive spawn region selection plugin.",
    stack: ["JAVA", "PAPER"],
    links: [
      {
        title: "[Modrinth]",
        href: "https://modrinth.com",
      },
      {
        title: "[GitHub repo]",
        href: "https://github.com/GrenkaUkraine",
      },
    ],
  },
  {
    id: "portfolio",
    title: "grenkaukraine.com",
    description: "Minimalist interactive portfolio.",
    note: "You Are\nHere",
    stack: ["Next.JS", "Typescript", "Tailwind"],
    links: [
      {
        title: "[GitHub repo]",
        href: "https://github.com/GrenkaUkraine",
      },
    ],
  },
];
