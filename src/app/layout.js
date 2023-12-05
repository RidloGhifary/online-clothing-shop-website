import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jombang Polosan',
  description: 'Ridlo achmad ghifary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-neutral-800 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  )
}
