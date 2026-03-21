import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Prashar | AI/ML & Full Stack Developer",
  description: "Portfolio of Akshit Prashar, a 3rd-year CSE student specializing in AI/ML and Full Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
