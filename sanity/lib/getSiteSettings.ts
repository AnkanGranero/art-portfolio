import { cache } from 'react';
import { client } from '@/sanity/lib/client';
import type { SiteSettings } from '@/sanity/lib/types';

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  return (
    (await client.fetch(
      `*[_type == 'siteSettings'][0]{ title, headingFont, bodyFont }`
    )) ?? {}
  );
});
