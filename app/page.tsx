import { getCategories } from '@/sanity/lib/getCategories';
import CategoryCard from './components/CategoryCard';


export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen p-8 grid grid-cols-2 gap-8 place-items-center text-center">
      {categories.map((c: any, index: number) => (
        <CategoryCard key={c._id} category={c} priority={index < 3} />
      ))}
    </main>
  );
}
