import type { Metadata } from "next";
import { Major_Mono_Display as Font } from "next/font/google";

import "./globals.css";

const font = Font({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "nukuvv",
  description: "Portfolio for a 3D artist and motion designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans bg-black`}>{children}</body>
    </html>
  );
}
