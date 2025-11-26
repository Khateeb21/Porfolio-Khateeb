"use client"

import type { Metadata } from "next";
import  GlobalErrorTracker from '@/components/GlobalErrorTracker'
import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Add this line
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Add this line
});

// export const metadata: Metadata = {
//   title: "Khateeb Fayaz",
//   description: "Khateeb Fayaz development portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="font-inter" suppressHydrationWarning>
         <GlobalErrorTracker/>
        {children}
      </body>
    </html>
  );
}
