import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/themes-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NORD - NOTE AND PRODUCTIVITY',
  description: 'Note taking application with productivity tools.',
  icons: {
    // these need to be changed for dark and light versions of the icon.
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/favicon.ico"

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
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}> <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange storageKey='nord-theme'>{children}</ThemeProvider></body>

    </html>
  )
}
// layout files are group files which reflects the entire project.
// layout files are used to output reuseable components, it is not a good practice to use layout file to render something 
