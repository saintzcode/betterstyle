import { ImageRef } from "./product";

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  excerpt: string;
  body: string[]; // paragraphs — MDX-ready shape, swap for rendered MDX later
  cover: ImageRef;
}
