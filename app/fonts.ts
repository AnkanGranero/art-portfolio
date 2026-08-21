import { Ojuju, Faculty_Glyphic, Shippori_Mincho_B1, Poppins, Inter } from 'next/font/google';

const ojuju = Ojuju({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-ojuju',
});

const facultyGlyphic = Faculty_Glyphic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-faculty-glyphic',
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shippori-mincho-b1',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-inter',
});

// Applied once on <html> so every loaded font's CSS variable is available.
export const fontVariables = [
  ojuju.variable,
  facultyGlyphic.variable,
  shipporiMinchoB1.variable,
  poppins.variable,
  inter.variable,
].join(' ');

export const HEADING_FONTS = {
  ojuju: { variable: '--font-ojuju', weight: '500' },
  facultyGlyphic: { variable: '--font-faculty-glyphic', weight: '400' },
} as const;

export const BODY_FONTS = {
  shipporiMinchoB1: { variable: '--font-shippori-mincho-b1', weight: '400' },
  poppins: { variable: '--font-poppins', weight: '300' },
  ojuju: { variable: '--font-ojuju', weight: '300' },
  inter: { variable: '--font-inter', weight: '300' },
} as const;

export type HeadingFontKey = keyof typeof HEADING_FONTS;
export type BodyFontKey = keyof typeof BODY_FONTS;

export const DEFAULT_HEADING_FONT: HeadingFontKey = 'ojuju';
export const DEFAULT_BODY_FONT: BodyFontKey = 'inter';
