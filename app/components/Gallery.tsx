import { urlFor } from '@/sanity/lib/image';
import { GalleryImage } from '@/sanity/lib/types';
import Image from 'next/image';

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image._key} className="relative w-full">
          {image.asset && (
            <Image
              src={urlFor(image).url()}
              alt={image.alt ?? ''}
              className="w-full h-auto"
              width={image.asset.metadata?.dimensions?.width}
              height={image.asset.metadata?.dimensions?.height}
              unoptimized={image.asset.url.endsWith('.gif')}
            />
          )}
        </div>
      ))}
    </div>
  );
}
