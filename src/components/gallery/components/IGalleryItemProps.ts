import { StaticImageData } from "next/image";

export interface IGalleryItemProps {
  id: number;
  src: StaticImageData;
  alt: string;
  changeSlide: () => void;
}
