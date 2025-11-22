import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 5,
    title: "About",
    newTab: false,
    path: "/#about",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  // {
  //   id: 2.1,
  //   title: "Templates",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Camera",
        newTab: false,
        path: "/camera",
      },
      {
        id: 34,
        title: "Backup",
        newTab: false,
        path: "/backup",
      },
      {
        id: 35,
        title: "RT Manager",
        newTab: false,
        path: "/rt-manager",
      },
      {
        id: 34,
        title: "Voice Memo",
        newTab: false,
        path: "/voice-memo",
      },
      {
        id: 35,
        title: "Text Memo",
        newTab: false,
        path: "/text-memo",
      },
      {
        id: 35.1,
        title: "Annotation",
        newTab: false,
        path: "/annotation",
      },
      {
        id: 36,
        title: "Search",
        newTab: false,
        path: "/search",
      },
      {
        id: 36.1,
        title: "Settings",
        newTab: false,
        path: "/settings",
      },
    ],
  },

  {
    id: 7,
    title: "Pricing",
    newTab: false,
    path: "/#pricing",
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
