import { StaticImageData } from "next/image";

export interface IGalleryDataProps {
  id: number;
  src: StaticImageData;
  url: string;
  alt: string;
}
