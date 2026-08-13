import { Project } from "@/types";

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
    image: "https://cdnb.artstation.com/p/assets/images/images/092/652/949/medium/grenkaukraine-render1.webp?1760280583"
  },
  {
    id: "atb-supermarket",
    title: "ATB Supermarket",
    tag: "3D Render",
    description: "Exterior architectural render of a local ATB supermarket.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdnb.artstation.com/p/assets/images/images/078/761/063/medium/grenka-ukraine-bee-baran-y-atb.jpg?1723010338"
  },
  {
    id: "retro-crt-monitor",
    title: "Retro CRT Monitor",
    tag: "3D Render",
    description: "Nostalgic setup featuring an old-school CRT monitor.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdnb.artstation.com/p/assets/images/images/075/852/399/medium/grenka-ukraine-render2.jpg?1715609784"
  },
  {
    id: "coca-cola",
    title: "Coca-Cola",
    tag: "3D Render",
    description: "Commercial product render with glass condensation.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdna.artstation.com/p/assets/images/images/075/852/288/medium/grenka-ukraine-render3-photoshop.jpg?1715609636"
  },
  {
    id: "traffic-light",
    title: "Traffic Light",
    tag: "3D Render",
    description: "Atmospheric urban prop with lens bloom and shaders.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdna.artstation.com/p/assets/images/images/087/394/482/medium/grenka-ukraine-traffic-light.jpg?1745672502"
  },
  {
    id: "liminal-pool-room",
    title: "Liminal Pool Room",
    tag: "3D Render",
    description: "Eerie liminal space environment with water reflections.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdnb.artstation.com/p/assets/images/images/075/852/087/medium/grenka-ukraine-day-ps.jpg?1715609320"
  },
  {
    id: "iced-coffee-drink",
    title: "Iced Coffee Drink",
    tag: "3D Render",
    description: "Close-up food render with micro-details and condensation.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdnb.artstation.com/p/assets/images/images/075/852/547/medium/grenka-ukraine-2-r.jpg?1715610016"
  },
  {
    id: "diamond-reflection",
    title: "Diamond Reflection",
    tag: "3D Render",
    description:
      "High-dispersion glass study focusing on caustics and refraction.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdnb.artstation.com/p/assets/images/images/087/394/651/medium/grenka-ukraine-diamond.jpg?1745673014"
  },
  {
    id: "barbed-wire-heart",
    title: "Barbed Wire Heart",
    tag: "3D Render",
    description:
      "Abstract concept art of a stylized heart bound by barbed wire.",
    stack: ["Blender"],
    links: [{ title: "[ArtStation]", href: "https://artstation.com" }],
    image: "https://cdna.artstation.com/p/assets/images/images/087/394/676/medium/grenka-ukraine-renderv2.jpg?1745673113"
  },
];

export const STACK = [
  {
    category: "Web & Desktop Apps",
    objects: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Tauri",
      "REST API",
      "SQLite",
      "Vercel",
    ],
  },
  {
    category: "Gamedev & Systems",
    objects: ["Java", "Gradle", "Minecraft API", "Unity", "C#", ".NET", "Rust"],
  },
  {
    category: "3D Art & Graphics",
    objects: ["Blender", "Substance Painter"],
  },
  {
    category: "Design & Tools",
    objects: ["Figma", "Git", "GitHub"],
  },
];
