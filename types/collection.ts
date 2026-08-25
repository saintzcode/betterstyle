import { ImageRef } from "./product";

export interface Collection {
  slug: string;
  title: string;
  season: string;
  statement: string;
  intro: string;
  cover: ImageRef;
  secondaryImage?: ImageRef;
}
