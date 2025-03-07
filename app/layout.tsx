import type { Metadata } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TooltipProvider>
          <ErrorWrapper>
            <ClientThemeWrapper>{children}</ClientThemeWrapper>
          </ErrorWrapper>
        </TooltipProvider>
      </body>
    </html>
  );
}

function ClientThemeWrapper({ children }: { children: ReactNode }) {
  "use client";
  const { useState, useEffect } = require("react");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div>
      <div className="p-2 flex justify-end">
        <button
          onClick={toggleTheme}
          className="border border-border px-4 py-2 rounded text-sm"
        >
          Toggle Theme
        </button>
      </div>
      {children}
    </div>
  );
}
