import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Hackers - AI-Powered Recruitment Platform",
  description: "Streamline your hiring process with AI-powered resume analysis and candidate matching",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
     <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${inter.className} bg-[#0a0d1c] text-white`}
        style={{ backgroundColor: "#0a0d1c", color: "white" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}

