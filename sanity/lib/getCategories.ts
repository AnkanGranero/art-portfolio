import { client } from '@/sanity/lib/client';

export async function getCategories() {
  return client.fetch(`
    *[_type == 'category'] | order(order asc){
    _id,
    title,
    slug,
    categoryImage{
    asset->{
    _id,
    url,
    metadata { dimensions {width, height } }
    },
    hotspot
    },
    headerImage}`);
}
