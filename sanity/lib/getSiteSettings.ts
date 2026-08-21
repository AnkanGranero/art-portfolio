import { client } from '@/sanity/lib/client';
import type { SiteSettings } from '@/sanity/lib/types';

export async function getSiteSettings(): Promise<SiteSettings> {
  return (
    (await client.fetch(
      `*[_type == 'siteSettings'][0]{ headingFont, bodyFont }`
    )) ?? {}
  );
}
