import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "RandomHostName - High-Performance Game Servers",
  description: "Deploy high-performance game servers in minutes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-zinc-900 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.07),transparent_50%)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
