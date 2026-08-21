'use client';

import { urlFor } from '@/sanity/lib/image';
import { GalleryImage } from '@/sanity/lib/types';
import Image from 'next/image';
import { useState } from 'react';

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image._key} className="relative w-full">
          {image.asset && (
            <button
              type="button"
              onClick={() => setSelected(image)}
              className="block w-full cursor-pointer"
            >
              <Image
                src={urlFor(image).url()}
                alt={image.alt ?? ''}
                className="w-full h-auto"
                width={image.asset.metadata?.dimensions?.width}
                height={image.asset.metadata?.dimensions?.height}
                unoptimized={image.asset.url.endsWith('.gif')}
              />
            </button>
          )}
        </div>
      ))}

      {selected?.asset && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
        >
          <Image
            src={urlFor(selected).url()}
            alt={selected.alt ?? ''}
            className="w-auto h-auto max-w-[70vw] max-h-[70vh] cursor-pointer"
            width={selected.asset.metadata?.dimensions?.width}
            height={selected.asset.metadata?.dimensions?.height}
            unoptimized={selected.asset.url.endsWith('.gif')}
          />
        </div>
      )}
    </div>
  );
}
