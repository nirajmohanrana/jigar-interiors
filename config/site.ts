export const siteConfig = {
  name: "Jigar Interiors",
  url: "https://jigar-interiors.vercel.app",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    facebook: "https://facebook.com/shadcn",
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  photosLength: {
    bathroom: 10,
    bedroom: 21,
    desk: 8,
    "door-hallways": 18,
    kitchen: 46,
    sofa: 9,
    tv: 12,
    wardrobe: 32,
  },
};

export type SiteConfig = typeof siteConfig;

export const siteNav = [
  {
    title: "Modular Kitchen",
    href: "/kitchen",
  },
  {
    title: "Door & Hallways",
    href: "/door-hallways",
  },
  {
    title: "Television Set",
    href: "/tv",
  },
  {
    title: "Wardrobe",
    href: "/wardrobe",
  },
];

export type SiteNav = typeof siteNav;
