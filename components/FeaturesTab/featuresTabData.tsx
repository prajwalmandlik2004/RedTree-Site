import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Smart Camera with Instant Modal",
    desc1: `Capture photos and videos effortlessly with RedTree’s intuitive camera interface. Launches instantly into full-screen preview for seamless use.`,
    desc2: `Just after capture, automatically access the RT Modal to rename, delete, save, or add notes—right from the same screen.`,
    image: "/images/mockups/cm_modal.png",
    imageDark: "/images/mockups/cm_modal.png",
    width: 1080,
    height: 1920
  },
  {
    id: "tabTwo",
    title: "Personalize Your Preferences",
    desc1: `Customize your RedTree experience via the Parameters screen—set file names, delay timers, aspect ratios, and language formats.`,
    desc2: `Fine-tune how your captured media behaves and looks, making the app truly yours.`,
    image: "/images/mockups/parameters.png",
    imageDark: "/images/mockups/parameters.png",
    width: 1080,
    height: 1920
  },
  {
    id: "tabThree",
    title: "Powerful Tree-Style File Manager",
    desc1: `Organize all your media files within a dynamic tree-view structure. Expand folders, move files, and manage data efficiently.`,
    desc2: `Perform advanced actions like rename, duplicate, delete, or annotate—all in one streamlined interface.`,
    image: "/images/mockups/fm_one.png",
    imageDark: "/images/mockups/fm_one.png",
    width: 1080,
    height: 1920
  },
  {
    id: "tabFour",
    title: "Image Viewer with Smart Tools",
    desc1: `Preview, zoom, crop, or annotate your images with ease. View image details and navigate between files smoothly.`,
    desc2: `Enable multi-select mode for batch operations like delete, move, or share, enhancing productivity.`,
    image: "/images/mockups/image_list.png",
    imageDark: "/images/mockups/image_list.png",
    width: 1080,
    height: 1920
  },
];

export default featuresTabData;
