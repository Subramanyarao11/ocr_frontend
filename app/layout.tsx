import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
