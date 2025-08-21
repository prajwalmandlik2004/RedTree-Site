import image1 from "@/public/images/user/user.png";
import image2 from "@/public/images/user/girl.png";
import image3 from "@/public/images/user/human.png";
import image4 from "@/public/images/user/profile.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anjali Verma",
    designation: "Travel Blogger",
    image: image2,
    content:
      "RedTree has completely changed how I organize my travel photos. The tree-style folder structure and note feature help me manage my content like a pro!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    designation: "Freelance Photographer",
    image: image1,
    content:
      "The instant camera access and customizable file saving options are game-changers. I can finally name, sort, and store images exactly how I want.",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    designation: "Visual Content Creator",
    image: image3,
    content:
      "What I love most about RedTree is how intuitive it feels. From capturing to annotating and sharing, everything is just smooth and efficient.",
  },
  {
    id: 4,
    name: "Naveen Arora",
    designation: "Digital Archivist",
    image: image4,
    content:
      "As someone who handles large volumes of media, RedTree has been a lifesaver. The batch operations and voice notes help me stay organized and efficient.",
  },
];
