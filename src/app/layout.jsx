import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jombang Polosan',
  description: 'An e-commerce platform sells clothes and accessories based on Jombang, East Java',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="max-w-7xl mx-auto w-full">
        {children}
        </main>
      </body>
    </html>
  )
}
