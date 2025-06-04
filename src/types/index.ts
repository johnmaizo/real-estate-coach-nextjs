import {StaticImageData} from "next/image";

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

export interface Coach {
  id: number;
  coachUsername: string;
  name: string;
  fullName: string;
  title: string;
  description: string;
  mainPageAward: string;
  mainPageImageURLs: string[];
  awards: {imageURL: string; name: string}[];
}
