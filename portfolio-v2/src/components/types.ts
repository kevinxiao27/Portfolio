import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  date: string;
  src: StaticImageData | string;
  desc: string;
  link: string;
  prod?: string;
};
