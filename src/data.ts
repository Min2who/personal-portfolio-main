import uiUxOne from "./assets/uiUxOne.png";
import uiUxTwo from "./assets/uiUxTwo.png";
import uiUxThree from "./assets/webThree.png";
import webOne from "./assets/webOne.png";
import webTwo from "./assets/webTwo.png";
import webThree from "./assets/webThree.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects : Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: uiUxOne,
    title: "UI/UX portfolio template",
  },
  {
    id: 1,
    category: "uiUx",
    img: uiUxTwo,
    title: "UI/UX pizza website template",
  },
  {
    id: 2,
    category: "uiUx",
    img: uiUxThree,
    title: "my personal website template",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "3d portfolio website",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "foodzy a restaurant website",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "my personal website",
  },
];
