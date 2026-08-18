import { getCategoryBySlug } from '@/sanity/lib/getCategoryBySlug';
import Gallery from '@/app/components/Gallery';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

export default async function Category({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 flex flex-col gap-8 max-w-3xl mx-auto">
      <section>
        <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
        {category.body && (
          <div className="max-w-2xl">
            <PortableText value={category.body} />
          </div>
        )}
      </section>
      {category.gallery && category.gallery.length > 0 && (
        <section>
          <Gallery images={category.gallery} />
        </section>
      )}
    </main>
  );
}
