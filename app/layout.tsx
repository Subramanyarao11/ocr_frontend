import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'KYC Verification using OCR',
  description:
    'Upload Aadhaar photo to see KYC Verification using OCR : A Machine Learning Approach',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={fontSans.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
