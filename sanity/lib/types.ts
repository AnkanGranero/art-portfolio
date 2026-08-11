import type { PortableTextBlock } from 'next-sanity';

export type SanityImageWithAsset = {
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export type GalleryImage = SanityImageWithAsset & {
  _key: string;
  alt?: string;
};

export type Category = {
  _id: string;
  title?: string;
  categoryImage?: SanityImageWithAsset;
  slug: {current: string}
};

export type CategoryDetail = Category & {
  body?: PortableTextBlock[];
  gallery?: GalleryImage[];
};
