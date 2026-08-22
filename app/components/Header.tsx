import Link from 'next/link';
import { getSocialLinks } from '@/sanity/lib/getSocialLinks';
import SocialLinks from './SocialLinks';

type HeaderProps = {
  title: string;
};

export default async function Header({ title }: HeaderProps) {
  const socialLinks = await getSocialLinks();

  return (
    <div className="sticky top-0 z-20 w-full flex items-center justify-between px-4 lg:p-8 py-2 bg-[#f8f8f8]">
      <Link href="/">
        <h1 className="text-4xl lg:text-6xl">{title}</h1>
      </Link>
      {socialLinks.length > 0 && <SocialLinks links={socialLinks} />}
    </div>
  );
}
