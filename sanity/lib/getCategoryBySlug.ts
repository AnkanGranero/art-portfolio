import { client } from '@/sanity/lib/client';
import type { CategoryDetail } from '@/sanity/lib/types';

export async function getCategoryBySlug(slug: string): Promise<CategoryDetail | null> {
  return client.fetch(
    `*[_type == 'category' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      gallery[]{
        _key,
        asset->{
          _id,
          url,
          metadata { dimensions { width, height } }
        },
        hotspot,
        alt
      }
    }`,
    { slug }
  );
}
