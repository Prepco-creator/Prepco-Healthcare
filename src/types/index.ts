import { StaticImageData } from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string | StaticImageData; // Allow both string and StaticImageData types
}

export type { Service };
