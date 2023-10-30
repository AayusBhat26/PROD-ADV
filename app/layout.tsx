import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NORD - NOTE AND PRODUCTIVITY',
  description: 'Note taking application with productivity tools.',
  icons:{
    // these need to be changed for dark and light versions of the icon.
    icon: [
      {
        media: "(prefers-color-scheme:light)", 
        url:"/favicon.ico"

      }, 
      {
        media: "(prefers-color-scheme:light)",
        url: "/favicon.ico"

      }
    ]
  }
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
// layout files are group files which reflects the entire project.
// layout files are used to output reuseable components, it is not a good practice to use layout file to render something 
