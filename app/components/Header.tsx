import Link from 'next/link';
import { getSocialLinks } from '@/sanity/lib/getSocialLinks';
import SocialLinks from './SocialLinks';

export default async function Header() {
  const socialLinks = await getSocialLinks();

  return (
    <div className="w-full flex items-center justify-between px-4 my-2">
      <Link href="/">
        <h1 className="text-4xl">My portfolio</h1>
      </Link>
      {socialLinks.length > 0 && <SocialLinks links={socialLinks} />}
    </div>
  );
}
