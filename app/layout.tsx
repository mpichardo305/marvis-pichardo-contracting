import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clever Builders Florida',
  description: 'General Contractor in Collier County, Florida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
