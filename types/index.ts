export type ProjectLink = {
  title: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  note?: string;
  stack: string[];
  links: ProjectLink[];
  tag?: string;
  image?: string;
};
