import { client } from '@/sanity/lib/client';
import type { SocialLink } from '@/sanity/lib/types';

export async function getSocialLinks(): Promise<SocialLink[]> {
  return client.fetch(
    `*[_type == 'socialLink'] | order(order asc){
      _id,
      platform,
      url
    }`
  );
}
