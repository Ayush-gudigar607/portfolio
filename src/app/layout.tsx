import React from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] text-black min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
