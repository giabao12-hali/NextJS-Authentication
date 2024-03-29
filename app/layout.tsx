import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { db } from '@/lib/db'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Authenticated Pratice',
  description: 'Pratice how to use NextJs with authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
