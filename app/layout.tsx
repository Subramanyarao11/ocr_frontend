import type { Metadata } from "next";
import "./globals.css";

import { Afacad } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'

const afacad = Afacad({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-afacad',
  })
  const bricolage_grotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage_grotesque',
  })


export const metadata: Metadata = {
  title: "KYC Verification using OCR",
  description: "Upload Aadhaar photo to see KYC Verification using OCR : A Machine Learning Approach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.variable + bricolage_grotesque.variable}>{children}</body>
    </html>
  );
}
