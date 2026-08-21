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
    <main className="min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <section >
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center">{category.title}</h1>
        {category.body && (
          <div className="portable-text max-w-6xl mx-auto text-xl text-center">
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
