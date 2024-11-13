import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  date: string;
  src: StaticImageData | string;
  desc: string;
  link: string;
  prod?: string;
};

export type Experience = {
  name: string;
  organization: string;
  src?: StaticImageData;
  link: string;
  date: string;
  endDate?: string;
  description: string;
};
