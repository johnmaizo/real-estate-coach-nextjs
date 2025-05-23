import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  developerLogo: string;
  area: string;
}

export interface CategoryAds {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  urlTitle: string;
  url: string;
}
