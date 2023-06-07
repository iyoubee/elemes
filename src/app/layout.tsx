import { Navbar } from '@elements'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elemes.id',
  description: 'Product and Tech Agency Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    <>
      <Navbar />
      <body className={inter.className}>{children}</body>
    </>
    // </html>
  )
}
