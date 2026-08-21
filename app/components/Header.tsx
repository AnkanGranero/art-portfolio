import Link from 'next/link';
import { getSocialLinks } from '@/sanity/lib/getSocialLinks';
import SocialLinks from './SocialLinks';

export default async function Header() {
  const socialLinks = await getSocialLinks();

  return (
    <div className="sticky top-0 z-10 w-full flex items-center justify-between px-4 py-2 bg-[#f8f8f8]">
      <Link href="/">
        <h1 className="text-4xl">{process.env.SITE_TITLE || "My portfolio"}</h1>
      </Link>
      {socialLinks.length > 0 && <SocialLinks links={socialLinks} />}
    </div>
  );
}
