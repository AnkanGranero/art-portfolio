import { urlFor } from '@/sanity/lib/image';
import { Category } from '@/sanity/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  category: Category;
  priority?: boolean;
};

export default function CategoryCard({ category, priority }: CategoryCardProps) {
  const { _id, title, categoryImage } = category;

  return (
    <Link
      key={_id}
      href={'/category/' + category.slug.current}
      className="relative bg-black group w-full cursor-pointer"
    >
      <h2 className="opacity-100 md:opacity-0 md:group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl bg-black px-2 py-1 text-center max-w-[85%] wrap-break-word whitespace-normal md:bg-transparent md:px-0 md:py-0 md:whitespace-nowrap md:max-w-none">
        {title}
      </h2>
      {categoryImage && (
        <Image
          src={urlFor(categoryImage).url()}
          alt={title ?? ''}
          className="opacity-100 md:group-hover:opacity-40 w-full h-auto"
          width={categoryImage.asset?.metadata?.dimensions?.width}
          height={categoryImage.asset?.metadata?.dimensions?.height}
          priority={priority}
        />
      )}
    </Link>
  );
}
