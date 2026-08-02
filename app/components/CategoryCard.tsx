import { urlFor } from '@/sanity/lib/image';
import { Category } from '@/sanity/lib/types';
import Image from 'next/image';

type CategoryCardProps = {
  category: Category;
  priority?: boolean;
};

export default function CategoryCard({ category, priority }: CategoryCardProps) {
  const { _id, title, categoryImage } = category;
  return (
    <div key={_id} className="relative bg-black group w-full cursor-pointer">
      <h2 className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        {title}
      </h2>
      {categoryImage && (
        <Image
          src={urlFor(categoryImage).url()}
          alt={title ?? ''}
          className="group-hover:opacity-40 w-full h-auto"
          width={categoryImage.asset?.metadata?.dimensions?.width}
          height={categoryImage.asset?.metadata?.dimensions?.height}
          priority={priority}
        />
      )}
    </div>
  );
}
