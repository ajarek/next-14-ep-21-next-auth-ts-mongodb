import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SessionProvider from "@/utils/SessionProvider"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-Auth Login | Register',
  description: 'Register in Next.js 14 with MongoDB - Login with Credentials and Github',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
        <Navbar/>
        {children}
        </SessionProvider>
        </body>
    </html>
  )
}
