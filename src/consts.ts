import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Swapnil Sachan",
  EMAIL: "swapnil.sachan2003@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Swapnil is a frontend developer intern and a final year university student pursuing a CS degree. He has experience in fullstack development using JS / TS and is currently learning to wirte APIs in Go.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
    HREF: "https://twitter.com/swapnilsachan03",
  },
  {
    NAME: "github",
    HREF: "https://github.com/swapnilsachan03",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/swapnilsachan03",
  },
];
