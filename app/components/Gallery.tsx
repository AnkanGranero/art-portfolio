'use client';

import { urlFor } from '@/sanity/lib/image';
import { GalleryImage } from '@/sanity/lib/types';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={image._key} className="relative w-full">
          {image.asset && (
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
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
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
        >
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Föregående bild"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-white text-3xl p-2 cursor-pointer hover:opacity-70"
            >
              <FaChevronLeft />
            </button>
          )}

          <Image
            src={urlFor(selected).url()}
            alt={selected.alt ?? ''}
            className="w-auto h-auto max-w-[70vw] max-h-[70vh] cursor-pointer"
            width={selected.asset.metadata?.dimensions?.width}
            height={selected.asset.metadata?.dimensions?.height}
            unoptimized={selected.asset.url.endsWith('.gif')}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Nästa bild"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-white text-3xl p-2 cursor-pointer hover:opacity-70"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
