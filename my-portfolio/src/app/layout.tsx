// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './context/ThemeContext'; // No useEffect here

export const metadata: Metadata = {
  title: "Pratik Mishra | SWE",
  description: "Website portfolio showcasing my skills and experience as a software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
          <Navbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
