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
};

export type SiteConfig = typeof siteConfig;

export const siteNav = [
  {
    title: "Modular Kitchen & Wardrobes",
    href: "#kitchen",
  },
  {
    title: "Customize Furniture",
    href: "#furniture",
  },
  {
    title: "Furnishing",
    href: "#furnishing",
  },
  {
    title: "Paint Work",
    href: "#paint",
  },
];

export type SiteNav = typeof siteNav;
