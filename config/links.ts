import { Project } from "@/types";

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

export const FEATURED_PROJECTS: Project[] = [
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

export const PLAYGROUND_PROJECTS: Project[] = [
  {
    id: "nothankspack",
    title: "NoThanksPack",
    tag: "Minecraft",
    description: "Client-side mod to disable forced server resource packs.",
    stack: ["Java", "Fabric"],
    links: [
      { title: "[Modrinth]", href: "https://modrinth.com" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },
  {
    id: "celestora",
    title: "Celestora",
    tag: "Minecraft",
    description: "RPG expansion with new ores, magic runes, and custom items.",
    stack: ["Java", "Forge"],
    links: [
      { title: "[Modrinth]", href: "https://modrinth.com" },
      { title: "[CurseForge]", href: "https://curseforge.com" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },
  {
    id: "dimension-teleporter",
    title: "Dimension Teleporter",
    tag: "Minecraft",
    description: "Cross-platform mod for instant inter-dimensional travel.",
    stack: ["Java", "Fabric", "Forge"],
    links: [
      { title: "[Modrinth]", href: "https://modrinth.com" },
      { title: "[CurseForge]", href: "https://curseforge.com" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },

  {
    id: "g-rpc",
    title: "G-RPC",
    tag: "Desktop",
    description: "Lightweight app for custom Discord Rich Presence statuses.",
    stack: ["C#", "WPF", ".NET"],
    links: [
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },

  {
    id: "flash-drive-util",
    title: "Flash Drive Util",
    tag: "Library",
    description: ".NET library for USB drive detection and formatting.",
    stack: ["C#", ".NET"],
    links: [
      { title: "[NuGet]", href: "https://nuget.org" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },
  {
    id: "premium-logger",
    title: "Premium Logger",
    tag: "Library",
    description:
      "Versatile .NET logging library with custom console formatting.",
    stack: ["C#", ".NET"],
    links: [
      { title: "[NuGet]", href: "https://nuget.org" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },
  {
    id: "meme-forge",
    title: "Meme Forge",
    tag: "Library",
    description: "Node.js image generation library for memes and demotivators.",
    stack: ["JavaScript", "Node.js"],
    links: [
      { title: "[NPM]", href: "https://npmjs.com" },
      { title: "[GitHub repo]", href: "https://github.com/GrenkaUkraine" },
    ],
  },

  {
    id: "c4-bomb",
    title: "C4 Bomb",
    tag: "3D Render",
    description: "Military C4 setup with detailed PCB, display, and wires.",
    stack: ["Blender", "Substance"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "atb-supermarket",
    title: "ATB Supermarket",
    tag: "3D Render",
    description: "Exterior architectural render of a local ATB supermarket.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "retro-crt-monitor",
    title: "Retro CRT Monitor",
    tag: "3D Render",
    description: "Nostalgic setup featuring an old-school CRT monitor.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "coca-cola",
    title: "Coca-Cola",
    tag: "3D Render",
    description: "Commercial product render with glass condensation.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "traffic-light",
    title: "Traffic Light",
    tag: "3D Render",
    description: "Atmospheric urban prop with lens bloom and shaders.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "liminal-pool-room",
    title: "Liminal Pool Room",
    tag: "3D Render",
    description: "Eerie liminal space environment with water reflections.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "iced-coffee-drink",
    title: "Iced Coffee Drink",
    tag: "3D Render",
    description: "Close-up food render with micro-details and condensation.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "diamond-reflection",
    title: "Diamond Reflection",
    tag: "3D Render",
    description:
      "High-dispersion glass study focusing on caustics and refraction.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
  {
    id: "barbed-wire-heart",
    title: "Barbed Wire Heart",
    tag: "3D Render",
    description:
      "Abstract concept art of a stylized heart bound by barbed wire.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
  },
];
