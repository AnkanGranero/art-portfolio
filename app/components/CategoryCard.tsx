import { urlFor } from '@/sanity/lib/image';
import { Category } from '@/sanity/lib/types';
import Image from 'next/image';

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const { _id, title, categoryImage } = category;
  return (
    <div key={_id} className="cg-red-500">
      <h2>{title}</h2>
      {categoryImage && <Image src={urlFor(categoryImage).url()} alt={title ?? ''} width={300} height={300} />}
    </div>
  );
}
