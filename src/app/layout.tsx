import type { Metadata } from "next";
import { Inter, Charis_SIL } from "next/font/google";
import "./globals.css";

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
  description: "My linked notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${charis.variable}`}>{children}</body>
    </html>
  );
}
