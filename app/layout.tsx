import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: process.env.SITE_TITLE || "My portfolio",
  description: process.env.SITE_DESCRIPTION || "My art porfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
