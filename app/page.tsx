import { getCategories } from '@/sanity/lib/getCategories';
import { urlFor } from '@/sanity/lib/image';
import CategoryCard from './components/CategoryCard';

export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      {categories.map((c: any, index: number) => (
        <CategoryCard key={c._id} category={c} priority={index < 3} />
      ))}
    </main>
  );
}
