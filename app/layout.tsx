import type { Metadata } from "next"
import { ReactNode } from "react"
import localFont from "next/font/local"
import "./globals.css"
import { ErrorWrapper } from "./parts/error/error-wrapper"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui"
import ClientThemeProvider from "./theme-provider"

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TooltipProvider>
          <ErrorWrapper>
            <ClientThemeProvider>{children}</ClientThemeProvider>
          </ErrorWrapper>
        </TooltipProvider>
      </body>
    </html>
  )
}
