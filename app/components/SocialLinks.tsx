import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import type { SocialLink, SocialPlatform } from '@/sanity/lib/types';

const platformIcons: Record<SocialPlatform, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  pinterest: FaPinterest,
};

type SocialLinksProps = {
  links: SocialLink[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex gap-4">
      {links.map((link) => {
        const Icon = platformIcons[link.platform];
        return (
          <li key={link._id}>
            <a
              href={link.url}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={link.platform}
              className="text-4xl lg:text-6xl hover:opacity-70"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
