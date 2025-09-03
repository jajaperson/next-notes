import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import { Inter, Charis_SIL } from "next/font/google";

import "./globals.css";
import NextraTheme from "./_components/nextra-theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const charis = Charis_SIL({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-charis"
});

export const metadata: Metadata = {
  title: "Notes",
  description: "jaj•a•person's notes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr">
      <Head faviconGlyph="✦" />
      <body className={`${inter.variable} ${charis.variable}`}>
        <NextraTheme pageMap={pageMap}>
          {children}
        </NextraTheme>
      </body>
    </html>
  );
}
