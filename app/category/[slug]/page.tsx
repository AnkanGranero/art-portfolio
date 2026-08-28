import { getCategoryBySlug } from '@/sanity/lib/getCategoryBySlug';
import { getSiteSettings } from '@/sanity/lib/getSiteSettings';
import Gallery from '@/app/components/Gallery';
import {
  CATEGORY_BODY_SIZES,
  CATEGORY_HEADING_SIZES,
  DEFAULT_CATEGORY_BODY_SIZE,
  DEFAULT_CATEGORY_HEADING_SIZE,
  type CategoryBodySizeKey,
  type CategoryHeadingSizeKey,
} from '@/app/textSizes';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

export default async function Category({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [category, settings] = await Promise.all([
    getCategoryBySlug(slug),
    getSiteSettings(),
  ]);

  if (!category) {
    notFound();
  }

  const headingSize =
    CATEGORY_HEADING_SIZES[settings.categoryHeadingSize as CategoryHeadingSizeKey] ??
    CATEGORY_HEADING_SIZES[DEFAULT_CATEGORY_HEADING_SIZE];
  const bodySize =
    CATEGORY_BODY_SIZES[settings.categoryBodySize as CategoryBodySizeKey] ??
    CATEGORY_BODY_SIZES[DEFAULT_CATEGORY_BODY_SIZE];

  return (
    <main className="min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <section >
        <h1 className={`${headingSize} font-bold mb-4 text-center`}>{category.title}</h1>
        {category.body && (
          <div className={`portable-text max-w-6xl mx-auto ${bodySize} text-center`}>
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
