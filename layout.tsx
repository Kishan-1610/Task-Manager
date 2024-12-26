import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Manage your tasks efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground py-4">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold">Task Manager</h1>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 text-center text-sm text-gray-600">
              © 2023 Task Manager. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

