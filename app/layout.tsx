import type { CSSProperties } from "react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import { getSiteSettings } from "@/sanity/lib/getSiteSettings";
import {
  BODY_FONTS,
  DEFAULT_BODY_FONT,
  DEFAULT_HEADING_FONT,
  HEADING_FONTS,
  fontVariables,
  type BodyFontKey,
  type HeadingFontKey,
} from "./fonts";

export const metadata: Metadata = {
  title: process.env.SITE_TITLE || "My portfolio",
  description: process.env.SITE_DESCRIPTION || "My art porfolio.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const settings = await getSiteSettings();

  const heading =
    HEADING_FONTS[settings.headingFont as HeadingFontKey] ??
    HEADING_FONTS[DEFAULT_HEADING_FONT];
  const body =
    BODY_FONTS[settings.bodyFont as BodyFontKey] ?? BODY_FONTS[DEFAULT_BODY_FONT];

  const fontStyle = {
    "--font-heading": `var(${heading.variable})`,
    "--font-heading-weight": heading.weight,
    "--font-body": `var(${body.variable})`,
    "--font-body-weight": body.weight,
  } as CSSProperties;

  return (
    <html lang="en" className={fontVariables} style={fontStyle}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
