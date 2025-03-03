import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar' 
import Footer from './components/Footer' 

export const metadata: Metadata = {
  title: 'Pratik Mishra',
  description: 'Website portfolio showcasing my skills and experience as a software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        
        <main>{children}</main>

       
      </body>
    </html>
  )
}
