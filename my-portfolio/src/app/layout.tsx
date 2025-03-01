import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar' // Ensure correct import path
import Footer from './components/Footer' // Ensure correct import path

export const metadata: Metadata = {
  title: 'Pratik Mishra',
  description: 'Portfolio showcasing my software engineering projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Use the Navbar component instead of the hardcoded navbar */}
        <Navbar />
        
        <main>{children}</main>

        {/* Use the Footer component */}
       
      </body>
    </html>
  )
}
